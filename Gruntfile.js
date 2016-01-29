'use strict';
 
module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
          style: {
            files: ["source/less/**/*.less"],
            tasks: ["less"],
         }
        },
        
        less: {
          style: {
            files: {
              "build/css/style.css": ["source/less/style.less"]
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
    
    cssmin: {
        options: {
            keepSpecialComments: 0,
            report: "gzip"
        },
        style: {
            files: {
                "build/css/style.min.css": ["source/css/style.css"]
            }
        }
    },
    });
     // the default task (running "grunt" in console) is "watch"
grunt.registerTask("build", [
      "clean",
      "copy",
      "less",
      "cssmin"]);
};
