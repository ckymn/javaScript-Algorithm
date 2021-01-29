let message = "Ahmet";

try {
    ornek();

    if (message !== "") throw "Bu message kullanicidan girilmeli !";
    if (isNaN(message))
         throw "Kullanicidan girilen deger bir sayi degildir";
    console.log("Kullanicidan girilen deger bir number degerdir.");

    mesaj = Number(message);
    if(mesaj < 18){
        throw " 18 yasindan kucuksunuz !"
    }

} catch (error) {
  console.error("Hata Degeriniz :", error);
}finally{
    console.log("BEN HERZAMAN CALISIRIM !!!");
}
