import Api from '@/api/index'

export default function useCount() {
  const changeCount = Api.changeCount()
  const removeProductFromCart = Api.removeProductFromCart()

  return {
    changeCount,
    removeProductFromCart,
  }
}
