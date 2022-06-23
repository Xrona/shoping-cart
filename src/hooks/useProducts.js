import { ref, onMounted } from 'vue'
import Api from '@/api/index'

export default function useProducts() {
  const products = ref([])

  const fetching = async () => {
    try {
      products.value = await Api.getProducts()
    } catch {
      products.value = false
    }
  }

  onMounted(fetching)

  return {
    products,
  }
}
