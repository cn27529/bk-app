//https://blog.allenchou.cc/nodejs-tuts-3-buffer/

var buf = new Buffer('I love node.js !!!!!!!!!!!!!!!!!!!!')

//buf = new Buffer(256)

//想把Buffer物件變成String？只要呼叫
//Buffer.toString() 就可以了
var buf_val = buf.toString() // I love node.js

//物件的資料也會同時修改原來那個Buffer物件的資料
var buf2 = buf.slice(0, 10)

console.log('buf2.toString: ', buf2.toString('base64'))

console.log("Buffer大小：", buf2.length)

console.log("是否Buffer物件？", Buffer.isBuffer(buf)) //true


//http://javascript.ruanyifeng.com/nodejs/buffer.html

// 生成一个256字节的Buffer实例
var bytes = new Buffer(4);

// 遍历每个字节，写入内容
for (var i = 0; i < bytes.length; i++) {
    bytes[i] = i;
}

var more = new Buffer(4);
bytes.copy(more, 0, 4, 8);

console.log(bytes[0])

//console.log('bytes.toString: ', bytes.toString('utf-8'))
for (var i = 0; i < bytes.length; i++) {
    console.log(bytes[i])
}

//http://www.runoob.com/nodejs/nodejs-buffer.html