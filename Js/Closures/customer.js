function returnObj() {
  custumerID = 0;
  return function () {
    custumerID++;
    return {
      custumerId: custumerID,
      "Customer Name": "ahmet" + custumerID,
      "Customer Surnma": "cokyaman" + custumerID,
    };
  };
}

const person = returnObj();
console.dir(typeof person());
console.log(typeof person());
console.dir(person());