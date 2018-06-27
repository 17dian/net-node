//events 模块只提供了一个对象： events.EventEmitter
//EventEmitter 的核心就是事件触发与事件监听器功能的封装。

var EventEmitter = require('events').EventEmitter; 

//一个socket对象

var socket = new EventEmitter();

//我们在socket对象上绑定data事件,如果是多个函数会被先后调用
socket.on('data', function(res) { 
    console.log(res); 
}); 

socket.on('data', function(res) { 
    console.log(res + '111'); 
}); 


//我们用emit的方法去触发事件，在1秒后我们出发，我们触发事件时，可以传递参数。
setTimeout(function() { 
    socket.emit('data' , "hello" ); 
}, 1000); 