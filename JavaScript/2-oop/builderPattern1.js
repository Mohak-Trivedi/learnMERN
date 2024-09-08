class Product {
  constructor(builder) {
    this.name = builder.name;
    if (builder.price > 0) {
      this.price = builder.price;
    } else {
      return {};
    }
    this.category = builder.category;
    this.description = builder.description;
    this.rating = builder.rating;
  }

  get price() {
    return this.price;
  }

  set price(p) {
    if (p > 0) {
      this.price = p;
    } else {
      console.log("Invalid Price");
    }
  }
}

const p = new Product({
  name: "iPhone",
  price: -1000,
  category: "Electronics",
  description: "Apple iPhone",
  rating: 4.5,
});

console.log(p);
