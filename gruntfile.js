module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            js: {
                src: './www/js/src/main.js',
                dest: './www/js/dist/build.js'
            }
        },
        less: {
            development: {
                options: {
                    plugins: [
                        require('less-plugin-group-css-media-queries'),
                        new(require('less-plugin-autoprefix'))({ browsers: ['last 2 versions'] }),
                        new(require('less-plugin-clean-css'))({ advanced: true })
                    ],
                    compress: false,
                    cleancss: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: './www/css/style.map.css'
                },
                files: {
                    "www/css/style.min.css": "www/css/less/main.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['www/css/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: ['./www/js/src/**/*.js', './www/js/**/*.vue'],
                tasks: ['browserify']
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'www/js/dist/build.map'
                },
                files: {
                    'www/js/dist/build.min.js': ['www/js/dist/build.js']
                }
            }
        },
        removelogging: {
            dist: {
                src: "./www/js/dist/build.min.js"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify'); // Minifies Ks
    grunt.registerTask('default', ['less', 'browserify', 'watch']) // Watch both css and js files
    grunt.registerTask('build', ['less', 'browserify', 'uglify']) // Delployment version of the JS and less
};