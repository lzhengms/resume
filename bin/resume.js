#!/usr/bin/env node

var fs=require('fs'),
    path=process.cwd();

var run=function(obj){
if(obj[0]==='-v'){
    console.log('verison is 1.0.0');
}
  else  if(obj[0]==='-h'){
    console.log('Usage:');
    console.log('-v --version [show version]');
}else{
    fs.readdir(path,function(err,files){
        if(err){
            console.log(err);
        }else{
            for(var i=0;i<files.length;i++){
                console.log(files[i]);
            }
        }
    })
}

}
//console.log(process.argv);

run(process.argv.slice(2));


