# bash-shell-chmod

```sh
    
# chmod 755
```


> bash-shell-chmod 755




# Linux 学习笔记分享

http://www.imooc.com/article/4777

Linux 用户组的权限:

` drwx------ 700权限(d 目录 ,r=4,w=2,x=1:rwx=7;---=0;---=0)`

## 用户组的权限

> 在linux下使用命令 ll 或ls -l 或`ls -al` 的时候会看到这些字眼，这些字符表示为不同用户组的权限:

* r: read 就是读权限 -- 数字4表示
* w: write 就是写权限 -- 数字2表示
* x: excute 就是执行权限 -- 数字1表示

读、写、运行三项权限可以用数字表示，就是 `r=4,w=2,x=1`。
所以，`-rw-r--r--` 用数字表示成 644。

这里总共会有10个“-”，共分4个组.

第一个表示`文件类型`，如该文件是`文件`(- 表示)，`文件夹`(d 表示),`连接文件`(l 表示);

后面 9个按照`3个分一组`，如:

`-rwxr-xr-x`  755 权限

`-rwxrwx---` 770 权限,
表示此`文件`(文件夹)的`拥有着`和`同组用户`有`读`,`写`及`执行`权限，
`其他用户组`没任何权限

就是前面三个表示`所有者权限`，
中间三个表示`同组用户权限`，
最后一组表示`其他用户权限`;
以上的其他用户，不包括 `root`这个 super user。

## Linux下的文件类型如下：

* `-` 普通文件
* `d` 目录
* `l` 链接文件
* `b `块设备
* `c` 字符设备


```md
作者： xgqfrms2015 
链接：http://www.imooc.com/article/4777
来源：慕课网
```

![linux-chmod-755](https://user-images.githubusercontent.com/18028768/26973351-aad01b90-4d48-11e7-9911-59dcd44a8f61.png)

![linux-chomd-folder](https://user-images.githubusercontent.com/18028768/26973352-aad08aa8-4d48-11e7-8b6f-2e461130c3e9.png)




## tesing ...



![hello-sh-error](https://user-images.githubusercontent.com/18028768/26973349-aacdae78-4d48-11e7-8cc8-45ca293e665e.png)


![cmd-chmod](https://user-images.githubusercontent.com/18028768/26973406-fb12ca1c-4d48-11e7-9fc0-7fe8e4f9d734.png)

# CMD `clip`

![cmd clip](https://user-images.githubusercontent.com/18028768/26973350-aace0d50-4d48-11e7-9db3-ad3d07559a77.png)



https://gist.github.com/xgqfrms-GitHub/e120a8ae3bd4c90ac13a68931d56658b


![](https://camo.githubusercontent.com/95f1c42872d0fb9be1bd3b414021b22173687fb5/68747470733a2f2f696d672e6c61626e6f6c2e6f72672f64692f636f70792d746f2d636c6970626f6172642e676966)


![](https://user-images.githubusercontent.com/18028768/27523171-16690b92-5a5e-11e7-847c-a5776c36df64.png)

![](https://user-images.githubusercontent.com/18028768/26973350-aace0d50-4d48-11e7-9db3-ad3d07559a77.png)

# tree

![image](https://user-images.githubusercontent.com/29531779/35543382-c757e4fe-059f-11e8-9135-b258e96fc921.png)
