import Api from '@/api/index'

export default function useCartProducts() {
  const cartProducts = Api.getCartProducts()

  function sumProductsPrice() {
    return cartProducts.value.reduce((acc, product) => {
      return acc + product.price * product.count
    }, 0)
  }

  return {
    cartProducts,
    sumProductsPrice,
  }
}
