'use strict'

function salomlashish(text){
    console.log(`salom ${text}`);
}

salomlashish()



function callback1(name, callback){
    console.log(`Salom ${name}`);
    callback()
}
function callback(){
    console.log("Callback funksiya ishladi");
}

callback1("Tommy",callback)


function greet(){
    console.log("Salom Dunyo");
}
function sayName(name){
    setTimeout(()=>{
        greet()
    } ,2000)
}
sayName("Jacob",greet)