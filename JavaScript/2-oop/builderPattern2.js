class Product {
  #price;
  #name;
  #description;

  constructor(builder) {
    // validations before object creation
    this.#name = builder.name;
    if (builder.price > 0) {
      this.#price = builder.price;
    } else {
      return {};
    }
    this.#description = builder.description;
  }

  // Need to create this because doing console.log outside will show product object
  // as empty i.e. {} even though the object actually does contain the name, price
  // description. This happens because all of these are private data members.
  displayProduct() {
    console.log(
      "Product Displayed: ",
      this.#name,
      this.#price,
      this.#description
    );
  }

  static get Builder() {
    class Builder {
      constructor() {
        // default values
        this.name = "";
        this.price = 0;
        this.description = "";
      }

      setName(incomingName) {
        this.name = incomingName;
        return this;
      }

      setPrice(incomingPrice) {
        this.price = incomingPrice;
        return this;
      }

      setDescription(incomingDescription) {
        this.description = incomingDescription;
        return this;
      }

      build() {
        return new Product(this);
      }
    }

    return Builder;
  }
}

// const builderObj = new Product.Builder();
// builderObj.setName("iPhone").setPrice(100000).setDescription("Apple iPhone");
// console.log(builderObj);
// const product = builderObj.build();

const product = new Product.Builder()
  .setName("iPhone")
  .setName("iPhone")
  .setPrice(100000)
  .setDescription("Apple iPhone")
  .build();
product.displayProduct();
