/**
 * {foreach}: Dizide'ki her eleman icin bir fonksiyon calistirir
 */
const arr = ['a','b','c',1,2,3,4]
arr.forEach(element => {
   console.log(element) 
});

//----------------------------------------forEach

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
 console.log(`${item} - ${index} - ${array}`);
  if(array.includes(item)){
  	console.log('hadi bakim...')
  }
});

// Bilbo - 0 - Bilbo,Gandalf,Nazgul
// hadi bakim...
// Gandalf - 1 - Bilbo,Gandalf,Nazgul
// hadi bakim...
// Nazgul - 2 - Bilbo,Gandalf,Nazgul
// hadi bakim...
