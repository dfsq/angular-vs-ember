'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-shell');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			pre: ['dist'],
			post: ['dist/assets/scripts/vendors.js', 'dist/assets/scripts/scripts.js']
		},

		copy: {
			build: {
				files: [
					{src: 'README.md', dest: './dist/README.md'},
					{
						expand: true,
						cwd: './app',
						src: ['./**/*.html', 'assets/images/**'],
						dest: 'dist'
					}
				]
			}
		},

		concat: {
			styles: {
				files: {
					'dist/assets/styles/vendors.css': [
						'bower_components/bootstrap/dist/css/bootstrap.min.css'
					],
					'dist/assets/styles/styles.css': ['app/assets/styles/*.css']
				}
			},
			scripts: {
				src: ['app/**/*.js'],
				dest: 'dist/assets/scripts/scripts.js'
			},
			vendors: {
				src: [
					'bower_components/angular/angular.min.js',
					'bower_components/angular-route/angular-route.min.js',
					'bower_components/d3/d3.min.js',
					'bower_components/angular-charts/dist/angular-charts.min.js'
				],
				dest: 'dist/assets/scripts/vendors.min.js'
			}
		},

		uglify: {
			build: {
				options: {
					mangle: false,
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:MM") %> */\n'
				},
				files: {
					'dist/assets/scripts/scripts.min.js': 'dist/assets/scripts/scripts.js'
				}
			}
		},

		usemin: {
			html: ['dist/index.html']
		},

		shell: {
			deploy: {
				options: {
					stdin: false
				},
				command: function(message) {
					return [
						'cd dist',
						'git init',
						'git remote add origin https://github.com/dfsq/angular-vs-ember.git',
						'git checkout --orphan gh-pages',
						'git rm -rf .',
						'git add .',
						'git commit -m ' + message,
						'git push -f origin gh-pages'
					].join(' & ');
				}
			}
		}
	});

	grunt.registerTask('build', [
		'clean:pre',
		'copy',
		'concat',
		'uglify',
		'clean:post',
		'usemin'
	]);

	grunt.registerTask('deploy', function(message) {
		if (!message) {
			grunt.fail.warn('Provide commit message');
		}
		grunt.task.run('shell:deploy:"' + (message || '') + '"');
	});

	grunt.registerTask('default', ['build']);

};
