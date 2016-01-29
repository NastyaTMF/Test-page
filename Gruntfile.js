'use strict';
 
module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
         watch: {
          style: {
            files: ["less/**/*.less"],
            tasks: ["less", "postcss"],
            options: {
              spawn: false,
              livereload: true
            }
         }
        },
        // "less"-task configuration
        less: {
          style: {
            files: {
              "source/css/style.css": ["source/less/style.less"]
            }
          }
        },
  clean: {
        build: ["build"]
    },

    copy: {
        build: {
            files: [{
                expand: true,
                cwd: "source",
                src: [
                    "img/**",
                    "js/**",
                    "index.html",
                    "form.html"
                ],
                dest: "build"
            }]
        }
    },
    });
     // the default task (running "grunt" in console) is "watch"
grunt.registerTask("build", ["clean", "copy", "less"]);
};
