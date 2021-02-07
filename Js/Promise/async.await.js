"use strict"
// Promise zinciri
const zincirES6 = () => {
    return asenkronIslem1()
      .then(asenkronIslem2)
      .then(asenkronIslem3)
  }

  zincirES6()
    .then(cevap => console.log(cevap))
    .catch(hata => console.log(hata))
  
  // Async/await 
  const zincirES7 = async () => {
    const sonuc1 = await asenkronIslem1();
    const sonuc2 = await asenkronIslem2(sonuc1);
    return asenkronIslem3(sonuc2);
  }
  
  try {
    const cevap = await zincirES7();
    console.log(cevap);
  }catch(hata){
    console.log(hata);
  }