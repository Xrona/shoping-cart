import Api from '@/api/index'
import { computed } from 'vue'

export default function useProduct(product) {
  const addProductInCart = Api.addProductInCart()

  const image = computed(() => product?.image ?? '')
  const title = computed(() => product?.title ?? '')
  const rating = computed(() => product?.rating?.rate ?? '')
  const price = computed(() => product?.price ?? '')
  const id = computed(() => product?.id)

  return {
    addProductInCart,
    image,
    title,
    rating,
    price,
    id,
  }
}
