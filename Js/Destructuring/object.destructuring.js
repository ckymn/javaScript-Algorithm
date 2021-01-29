// // Object Destructuring

// //>>1
// let options={
// 	title: "Menu",
// 	width:100,
//   height:200,
//   hair: "black",
//   language: "kurdish"
// };

// let {title,width,height} = options;
// console.log(title,width,height); 

// let {t , w , ...a} = options;
// console.log(t, w , a);// Menu , 100 , [200, "black" ,"kurdish"];

// let {title:a , width:b, height:c , ...k:deger} = {...options}

// let a = {...options}; // destructuring klonlama islemi
// //==============================================================================

// //>>2
// // let title2, width2, height2; ...>> boyle calismazdi cunku kod blogu olarak davraniyor.
// // ama eger () icerisine alirsak kod blogu olmaktan cikiyor.
// ({title2, width2, height2} = {title2: "Login", width2: 270, height2: 400});
// console.log(title2, width2, height2);

// //==============================================================================


// //>>3
// let options2 = {
//   size: {
//     width3: 100,
//     height3: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// let {
//   size: { 
//     width3,
//     height3
//   },
//   items: [item1, item2],
//   title3 = "Menu" 
// } = options2;

// console.log(title3);  // Menu
// console.log(width3);  // 100
// console.log(height3); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut

// //==============================================================================

// //>>4

// function show({keyboard=200,mouse= "Logi",harmonica= "ATT"} = {}) {
// 	console.log(`${keyboard} - ${mouse} - ${harmonica}`);
// }

// show();

// //==============================================================================


// //---REST----

// let arr = {
// 	name:"civan",
// 	age: 21,
// 	surname:"cokyaman"
// };

// let {name, ...other} = arr;
// console.log(title);
// console.log(other.age);
// console.log(other.surname);


////////////////////////////////////////////////////////

const values = ['AYSE', "AHMET", "FATMA","ZELIHA","ZELAL","MUSA"];

values.map(item  => console.log(item));
values.map(item => (console.log(item)));
values.map(item => {console.log(item)});
values.map(item => {
  console.log(item);
});
//========================
const newValues = values.map(item =>  (
  {
    userName: item,
    shorName: item[0],
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
  }
));
console.log(newValues);
//==========================
const new_newValues = values.map(item =>  {
  return {
    userName: item,
    shorName: item[0],
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
  }
});
console.log("new_newValues :",new_newValues);
