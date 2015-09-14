#!/usr/bin/env node

var fs = require('fs'),
    path = process.cwd(),
    program = require('commander'),
    pkg = require('../package');

var slice=Array.prototype.slice;

program
    .version(pkg.version)
    .usage('这是私人命令! <command> [option]')
    //.command('list [fold]')
    //.alias('zms')
    .description('这是我的简历详情')
    .option('-n --name <mode>','输出我的名字')
    .option('-r --resume', '简历')
    .option('-l --language <lang>','这是我擅长的语言','中文')
    .option('-d --no-date', 'don‘t display current date')
    .action(function(cmd,options){
        console.log(slice.call(arguments));
        console.log('resume "%s" 使用 %s 模式', cmd, nm);
    })
    .allowUnknownOption(true)
    .on('--help',function(){
        console.log('  examples:');
        console.log('');
        console.log('    输出命令  resume-ok -r');
        console.log('    输出命令  resume-ok -l 中文');
        console.log('');
    })
    .parse(process.argv)
;

if(program.resume){
    console.log('简历-'+'这是我的简历');
}
if (program.language) console.log('language: 我擅长的语言`' + program.language + '`');
if (program.database) console.log('db: 我擅长的语言`' + program.database + '`');
//if (program.name) console.log('名字' + program.name );
var dt = new Date();
if (program.date) {
    console.log(dt.getFullYear()
        + '-'
        + (dt.getMonth() + 1)
        + '-'
        + dt.getDate()
    );
}
/*var run = function (obj) {
    if (obj[0] === '-v') {
        console.log('verison is 1.0.0');
    }
    else if (obj[0] === '-h') {
        console.log('Usage:');
        console.log('-v --version [show version]');
    } else {
        fs.readdir(path, function (err, files) {
            if (err) {
                console.log(err);
            } else {
                for (var i = 0; i < files.length; i++) {
                    console.log(files[i]);
                }
            }
        })
    }

}
//console.log(process.argv);

run(process.argv.slice(2));*/


