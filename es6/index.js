﻿/*var fn = () => {
	console.log(456);
}

fn();

class Student {
	hello(){
		console.log("hello")
	}
}

var s = new Student;

s.hello();

class leo extends Student{

}

var l = new leo;

l.hello();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var a=new Point(10,20);
console.log(a.toString());*/

//////////////////获取经纬 度后，然后传给百度地图或者高德地图/////////////////////

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude);
// }
// console.log("===========================");
// getLocation()

import Bird from './common/Bird'
import Base from './common/base'

// console.log(Base)
let base1=new Base("王伟");
base1.insert();
base1.toString();


// let bird=new Bird({'name':"你奶奶","type":"没有什么"});
// bird.eat();

