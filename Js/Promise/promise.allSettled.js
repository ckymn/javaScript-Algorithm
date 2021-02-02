let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.allSettled(urls.map((url) => fetch(url)))
     .then((response) => {
    // (*)
    response.forEach((result, num) => {
        if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
        }
    });
});

/**
 * 
 * 1-Promise.all(promises)- tüm vaatlerin çözülmesini bekler ve sonuçlarının bir dizisini döndürür. Verilen sözlerden herhangi biri reddedilirse, hata olur Promise.allve diğer tüm sonuçlar göz ardı edilir.
    2-Promise.allSettled(promises) (yakın zamanda eklenen yöntem) - tüm vaatlerin yerine getirilmesini bekler ve sonuçlarını aşağıdakilerle birlikte bir dizi nesne olarak döndürür:
        status: "fulfilled"veya"rejected"
        value(yerine getirilirse) veya reason(reddedilirse).
    3-Promise.race(promises) - ilk sözün yerine getirilmesini bekler ve sonucu / hatası sonuç olur.
    4-Promise.any(promises)(yeni eklenen yöntem) - ilk sözün yerine getirilmesini bekler ve sonucu sonuç olur. Verilen tüm sözler reddedilirse, AggregateErrorhatası olur Promise.any.
    5-Promise.resolve(value) - verilen değerle kararlı bir söz verir.
    6-Promise.reject(error) - verilen hatayla reddedilmiş bir söz verir.
        Tüm bunlardan Promise.allmuhtemelen pratikte en yaygın olanıdır.
 */