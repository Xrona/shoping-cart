import { ref, onMounted } from 'vue'
import Api from '@/api/index'

export default function useCategories() {
  const categories = ref([])

  const fetching = async () => {
    try {
      categories.value = await Api.getCategories()
    } catch {
      categories.value = false
    }
  }

  onMounted(fetching)

  return {
    categories,
  }
}
