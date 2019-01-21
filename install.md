[官方说明](https://yarnpkg.com/zh-Hans/docs/install#centos-stable)  

有什么不懂的去看issue 或者Stack Overflow    
sudo yum install yarn  


memcached

## Linux Memcached 安装  
[菜鸟教程参考](http://www.runoob.com/memcached/memcached-install.html)  

采用源码安装的方式

1: 检查或安装依赖环境
yum install libevent libevent-devel 

2: 源码安装方法 以下只是例子  需要更具实际环境安装
wget http://memcached.org/latest                    下载最新版本

tar -zxvf memcached-1.x.x.tar.gz                    解压源码

cd memcached-1.x.x                                  进入目录

./configure --prefix=/usr/local/memcached           配置

make && make test                                   编译

sudo make install                                   安装


3：实际安装时的操作
wget http://memcached.org/latest 

tar -zxvf latest

cd memcached-1.5.12
./configure --prefix=/usr/local/memcached

make

make install

3。启动
/usr/local/memcached/bin/memcached -d -m 512 -l 127.0.0.1 -p 10000 -u root
表示已守护进程的方式启动，监听于 127.0.0.1 的10000端口，使用root用户，最大使用512M内存
可以同时开多个memcached，但要监听在不同的端口.


4: 配置环境变量
#set for memcached
export MEMCACHED_HOME=/usr/local/memcached
export PATH=$MEMCACHED_HOME/bin:$PATH





[thedawn@izuf68jvb8bcz4k1436r6oz hjfcoding_blog]$ puma -p 3003
Puma starting in single mode...
* Version 3.11.2 (ruby 2.4.3-p205), codename: Love Song
* Min threads: 5, max threads: 5
* Environment: development
Rails Error: Unable to access log file. Please ensure that /home/thedawn_app/hjfcoding_blog/log/development.log exists and is writable (ie, make it writable for user and group: chmod 0664 /home/thedawn_app/hjfcoding_blog/log/development.log). The log level has been raised to WARN and the output directed to STDERR until the problem is fixed.
* Listening on tcp://0.0.0.0:3003
Use Ctrl-C to stop
Started GET "/" for 58.16.181.25 at 2019-01-21 15:23:22 +0800
Cannot render console from 58.16.181.25! Allowed networks: 127.0.0.1, ::1, 127.0.0.0/127.255.255.255
Processing by HomeController#index as HTML
Completed 401 Unauthorized in 96ms


Started GET "/users/sign_in" for 58.16.181.25 at 2019-01-21 15:23:22 +0800
Cannot render console from 58.16.181.25! Allowed networks: 127.0.0.1, ::1, 127.0.0.0/127.255.255.255
Processing by Users::SessionsController#new as HTML
  Rendering users/sessions/new.html.erb within layouts/application
  Rendered /usr/local/rvm/gems/ruby-2.4.3@hjfcoding_blog/gems/devise-4.4.1/app/views/devise/shared/_links.html.erb (1.0ms)
  Rendered users/sessions/new.html.erb within layouts/application (10.3ms)
[Webpacker] Compiling…
[Webpacker] Compiled all packs in /home/thedawn_app/hjfcoding_blog/public/packs
Completed 200 OK in 5327ms (Views: 5324.9ms)
