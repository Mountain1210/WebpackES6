var fn = () => {
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
console.log(a.toString());

//////////////////获取经纬 度后，然后传给百度地图或者高德地图/////////////////////

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude);
}
console.log("===========================");
getLocation()

