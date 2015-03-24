module.exports = function (grunt) {

     // Project configuration.
    grunt.initConfig({
        bower: grunt.file.readJSON('bower.json'),
        meta: {
            banner: '/*! <%= bower.name %> - <%= bower.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        clean: ['dist/**/*.js'],
        jshint: {
            all: {
                src: [ 'src/**/*.js' ],
                options: {
                    jshintrc: '.jshintrc'
                }
            }
        },
        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            all: {
                src: ['src/phish.js', 'src/xhr.js'],
                dest: 'dist/<%= bower.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            build: {
                src: ['dist/<%= bower.name %>.js'],
                dest: 'dist/<%= bower.name %>.min.js'
            }
        },
        qunit: {
            all: ['tests/**/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'jshint', 'qunit', 'concat', 'uglify']);

};
