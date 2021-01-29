// 1.status
// try {
//     user = {/*...*/};
// } catch (error) {
//     if(error instanceof ReferenceError){
//         console.error("ReferenceError");
//     }
// }

// 2.status
// let json = '{"age": 30}';
// try {
//     const user =  JSON.parse(json);
//     console.log(user.name); //no name!
// } catch (error) {
//     console.error('JSON Error:', error);
// }

//3.status
// let json = '{"age": 30}';
// try {
//     const user =  JSON.parse(json);
//     if(!user.name){
//         throw new SyntaxError("Incomplement data: no name");
//     }
//     console.log(user.name); //no name!
// } catch (error) {
//     console.error('JSON Error:', error);
// }

//4.status
// let json = '{ "age": 30 }'; // incomplete data
// try {

//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }

//   alert( user.name );

// } catch(e) {

//   if (e instanceof SyntaxError) {
//     alert( "JSON Error: " + e.message );
//   } else {
//     throw e; // rethrow (*)
//   }

// }

//5.staus
// function func() {
//   try {
//     return 1;
//   } catch (e) {
//     /* ... */
//   } finally {
//     alert("finally");
//   }
// }

// console.log(func()); // --> finally -> 1 read

