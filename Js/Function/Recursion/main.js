let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};
/*
Başka bir deyişle, bir şirketin departmanları vardır.
Bir departmanın bir dizi personeli olabilir. Örneğin, salesdepartmanın 2 çalışanı vardır: John ve Alice.
Veya bir departman development, iki şubesi olduğu gibi alt bölümlere ayrılabilir : sitesve internals. Her birinin kendi personeli var.
Bir alt bölüm büyüdüğünde, alt bölümlere (veya ekiplere) bölünmesi de mümkündür.
Örneğin, sitesgelecekte departmanı için takımların bölünebilir siteAve siteB. Ve potansiyel olarak daha da fazla bölünebilirler. Bu resimde değil, sadece akılda tutulması gereken bir şey.
Şimdi, tüm maaşların toplamını almak için bir işlev istediğimizi varsayalım. Bunu nasıl yapabiliriz?
Yinelemeli bir yaklaşım kolay değildir çünkü yapı basit değildir. İlk fikir, 1. seviye departmanlar üzerinde iç içe geçmiş alt fordöngü companyile bir döngü oluşturmak olabilir . Ama sonra 2. seviye departmanlardaki personel üzerinde yinelemek için daha fazla iç içe geçmiş alt döngüye ihtiyacımız var sites… Ve sonra 3. seviye departmanlar için olanların içinde gelecekte görünebilecek başka bir alt döngü? Tek bir nesneyi geçmek için koda 3-4 iç içe alt döngü koyarsak, bu oldukça çirkin hale gelir.
Özyinelemeyi deneyelim.
Gördüğümüz gibi, fonksiyonumuz toplanacak bir departman aldığında, iki olası durum vardır:
Ya bir dizi insanın bulunduğu "basit" bir departman - o zaman maaşları basit bir döngüde toplayabiliriz.
Veya bu , alt bölümleri olan bir nesnedirN - o zaman her bir alt Nadımın toplamını almak ve sonuçları birleştirmek için yinelemeli çağrılar yapabiliriz .
Birinci durum, bir dizi elde ettiğimizde özyinelemenin tabanı, önemsiz durumdur.
Bir nesne aldığımızda 2. durum özyinelemeli adımdır. Karmaşık bir görev, daha küçük departmanlar için alt görevlere bölünmüştür. Sırasıyla tekrar bölünebilirler, ancak er ya da geç bölünme (1) 'de biter.
*/


const sumSalaries = (department) =>{
  //array olup olmadigini kontrol etmek!
  if (Array.isArray(department)) {
    return department.reduce((acc,current) => acc + current.salary , 0)
  }
  else{
    let sum = 0;
    for (subdep of Object.values(department)) {
      console.log(subdep);
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
console.log(sumSalaries(company));


