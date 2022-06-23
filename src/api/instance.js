export default class Api {
  constructor(client) {
    this.client = client
  }

  getProducts(...args) {
    return this.client.getProducts(args)
  }

  getCategories() {
    return this.client.getCategories()
  }

  getCartProducts(...args) {
    return this.client.getCartProducts(args)
  }

  addProductInCart(...args) {
    return this.client.addProductInCart(args)
  }

  removeProductFromCart(...args) {
    return this.client.removeProductFromCart(args)
  }

  changeCount(...args) {
    return this.client.changeCount(args)
  }
}
