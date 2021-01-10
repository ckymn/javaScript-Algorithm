/*
	01.01.1970'den önceki tarihler negatif zaman damgalarına sahiptir, örneğin:
*/

let now = new Date();
console.log(now);//2021-01-10T08:39:28.156Z


let Jan01_1970 = new Date(0);
console.log(Jan01_1970);//1970-01-01T00:00:00.000Z


let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);//1969-12-31T00:00:00.000Z

let date = new Date("1998-01-01");
console.log(date);//1998-01-01T00:00:00.000Z

// new Date(year, month, date, hours, minutes, seconds, ms)
// *ilk iki parametre (year,month) zorunludur.
// *year rakam olmali
// *ocak==0'dan baslar aralik==11

let allDate = new Date(2012,0,1,0,0,0,1);
console.log(allDate);//2011-12-31T22:00.00.001Z
console.log(allDate.getTime());//1325368800001
console.log(allDate.getFullYear());//2012
console.log(allDate.getMonth());//0
console.log(allDate.getDate());//1
console.log(allDate.getHours());//0
console.log(allDate.getMinutes());//0
console.log(allDate.getSeconds());//0
console.log(allDate.getMilliseconds());//1

//-------------------------------------------------------

let today = new Date();//2021-01-09T21:27:58.871Z

today.setHours(0);
console.log(today);
//--sati duzenleme--
today.setHours(0,0,0,0);
console.log(today);//2021-01-09T21:00:00.000Z

let today2 = new Date(2016, 1, 28);

today2.setDate(today2.getDate()+ 2);
console.log(today2);// 1 Mar 2016

//---------------------------------------------------------

let start = Date.now(); // new Date().getTime();
console.log(start);//1610271307111

// not getTime() cok daha hizli Date.now() 'a gore

//===================================================

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log(ms);//1327611110417

let datee = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
console.log(datee);//2012-01-26T20:51:50.417Z














