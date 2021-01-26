class Products {
  constructor(_name, _salary, _model) {
    this.name = _name;
    this.salary = _salary;
    this.model = _model;
  }
  static getProducts(a) {
    return a.model; // Tender
  }
}

const product = new Products("harmonica", 589, "Tender");

console.log(product);

console.log(Products.getProducts(product));

class Urunler extends Products {
  constructor(_id, _name, _salary, _model) {
    super(_name, _salary, _model);
    this.id = _id;
  }
  static geturunler(a) {
    return a.id;
  }
}

const urunler = new Urunler(1, "samsung", 2400, "cx");

console.log(urunler);

console.log(Urunler.geturunler(urunler));
