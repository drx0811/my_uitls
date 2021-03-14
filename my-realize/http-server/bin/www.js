#! /usr/bin/env node

const program = require('commander');
const { version } = require('../package.json');
const config = Request('./config.js')
program.name('drx-server-http');
program.usage('[args]');
program.version(version)

Object.values(config).forEach(item => {
    if (item.option) {
        program.option(item.option, item.description)
    }
});
program.on('--help', () => {
    console.log("examples:");
    Object.values(config).forEach(item => {
        if (item.usage) {
            console.log(" " + item.usage)
        }
    });
})



// 解析用户参数
program.parse(process.argv);

// 默认用户设置
const defaultValue = {
    port: 3000,
    directory: process.cwd(),
    host: 'localhost'
}
const options = program.opts();
const resultValue = {
    port: options.port || defaultValue.port,
    directory: options.directory || defaultValue.directory,
    host: options.host || defaultValue.host,
}

console.log('resultValue :>> ', resultValue);



