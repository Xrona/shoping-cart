import load from '../utils/load'
import { inject } from 'vue'

export default class FakeStoreApi {
  async getProducts() {
    return await load(
      async () => {
        const res = await fetch(process.env.VUE_APP_BASE_API_URL + '/products')

        return res.json()
      },
      (err) => {
        return err
      }
    )
  }

  async getCategories() {
    return await load(
      async () => {
        const res = await fetch(
          process.env.VUE_APP_BASE_API_URL + '/products/categories'
        )

        return res.json()
      },
      (err) => {
        return err
      }
    )
  }

  getCartProducts() {
    return inject('cartProducts')
  }

  addProductInCart() {
    return inject('addProductInCart')
  }

  removeProductFromCart() {
    return inject('removeProductFromCart')
  }

  changeCount() {
    return inject('changeCount')
  }
}
