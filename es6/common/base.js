 import $ from 'jquery'
 export default class base{
    constructor(name){
        this.name=name;
        this.html="<div>我是一个div</div>"
    }
    insert(){
        $('body').html(this.html);
        $('body').after(this.name)
    }
    toString(){
        console.log($)
        console.log( "我的名字是："+this.name);
    }
 }