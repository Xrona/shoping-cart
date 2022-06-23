<template>
  <q-list padding class="menu-list">
    <q-item
      clickable
      v-ripple
      v-for="category in categories"
      :key="`categoryItem-${category}`"
    >
      <q-item-section
        ><h5 class="q-my-xs">{{ category }}</h5></q-item-section
      >
    </q-item>
  </q-list>
</template>

<script>
import useCategories from '@/hooks/useCategories'

export default {
  setup() {
    const { categories } = useCategories()

    return { categories }
  },
}
</script>
