İsimlendirmelerine Göre Fonksiyon Türleri: (
        Regular/Named Functions,
        Anonymous Functions
)
İşlevlerine Göre Fonksiyon Türleri: (
        Pure Functions, 
        Constructor Functions, 
        IIFE, 
        High Order Functions
)
İşleyiş Türlerine Göre: (
        Asynchronous Functions, 
        Synchronous Functions, 
        Generator Functions
)
Gösterimlerine Göre Fonksiyon Türleri: (
        Normal Functions, 
        Arrow Functions
)

### Generator :>
        function * ile generator fonksiyonu oluşur ve bunun[ next(), return ve throw ] metodları bulunur.
        next() : sonrasında bir obje döner. Bu obje yield dönecek (value) ve fonksiyonun tamamlanıp, tamamlanmadığı bilgisi olan (done) değerini döner
        return(): generator fonksiyonun (sonlanmasını) sağlar. Ve return içerisinde geçirilen değeri ile birlikte fonksiyonun bittiği bilgisi döner.
        throw(): generator fonksiyonun (sonlanmasını) sağlar. Ve hata mesajı (try/catch) içerisinde yakalanır.