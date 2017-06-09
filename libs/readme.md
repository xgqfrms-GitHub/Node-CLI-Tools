# libs



## shelljs

> shelljs 只解决了如何调用 shell 命令

https://www.npmjs.com/package/shelljs

```sh
    
$ npm i -S shelljs


```



```js
#!/usr/bin/env node
var name = process.argv[2];
var shell = require("shelljs");

shell.exec("echo hello " + name); 

```


```sh
    
require('shelljs/global');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

mkdir('-p', 'out/Release');
cp('-R', 'stuff/*', 'out/Release');

cd('lib');
ls('*.js').forEach(function(file) {
  sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file);
  sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
});
cd('..');

if (exec('git commit -am "Auto-commit"').code !== 0) {
  echo('Error: Git commit failed');
  exit(1);
}
```


525,989 downloads in the last day

2,780,019 downloads in the last week

11,420,127 downloads in the last month



## yargs

https://www.npmjs.com/package/yargs

> yargs 模块能够解决如何处理命令行参数

> yargs 模块提供 argv 对象，用来读取命令行参数


```sh
    
$ npm i -S yargs


```



```js

#!/usr/bin/env node
var argv = require('yargs').argv;

console.log('hello ', argv.name);
```


```sh

$ hello --name=tom
# hello tom

$ hello --name tom
# hello tom
```


1,303,854 downloads in the last day

6,953,224 downloads in the last week

28,452,092 downloads in the last month
















