import { ref, provide } from 'vue'

export default function useContext() {
  const cartProducts = ref([])

  function addProductInCart(product) {
    const cartProduct = {
      ...product,
      count: 1,
    }

    cartProducts.value = [...cartProducts.value, cartProduct]
  }

  function removeProductFromCart(id) {
    const newCartProducts = cartProducts.value.filter(
      (product) => product.id !== id
    )

    cartProducts.value = [...newCartProducts]
  }

  function changeCount(id, count) {
    const newCartProducts = cartProducts.value.map((product) => {
      if (product.id === id) {
        product.count = count
      }

      return product
    })

    cartProducts.value = newCartProducts
  }

  provide('cartProducts', cartProducts)
  provide('addProductInCart', addProductInCart)
  provide('removeProductFromCart', removeProductFromCart)
  provide('changeCount', changeCount)

  return {
    cartProducts,
  }
}
