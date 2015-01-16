'use strict';

var fs = require('fs');

function include(mod) {
    /* 
     * include(module)
     *
     * equivalent of require, but get the modules from "includes"
     * instead of node_modules
     */
    var loader = module.parent.filename.split('/');
    var paths = [];
    for(var i = 1; i < loader.length; i++) {
        paths.unshift([].concat(loader).splice(0, i).join('/')+'/'+include.include_dir);
    }

    for(var i = 0; i < paths.length; i++) {
        console.log("Testing:", paths[i]+'/'+mod);
        if(fs.existsSync(paths[i]+'/'+mod)) {
            return require(paths[i]+'/'+mod);
        }
    }
    var err = new Error("Cannot find module '"+mod+"'");
    throw err;
}


include.include_dir = "includes";



module.exports = include;
