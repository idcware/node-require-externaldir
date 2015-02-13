'use strict';

var fs = require('fs');

function reqexd(mod) {
    /* 
     * reqexd(module)
     *
     * equivalent of require, but get the modules from "includes"
     * instead of node_modules
     */
    if(mod[0] === '.' || mod[0] === '/') {
        return require(mod);
    }
    var loader = module.parent.filename.split('/');
    var paths = [];
    for(var i = 1; i < loader.length; i++) {
        paths.unshift([].concat(loader).splice(0, i).join('/')+'/'+reqexd.include_dir);
    }

    for(var i = 0; i < paths.length; i++) {
        if(fs.existsSync(paths[i]+'/'+mod)) {
            return require(paths[i]+'/'+mod);
        }
    }
    var err = new Error("Cannot find module '"+mod+"'");
    throw err;
}


reqexd.include_dir = "includes";



module.exports = reqexd;
