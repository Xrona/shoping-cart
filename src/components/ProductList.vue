<template>
  <div class="row justify-center q-gutter-md">
    <div
      class="col-12 col-md-8 col-lg-4"
      v-for="product in products"
      :key="`productItem${product.itm}`"
    >
      <product-card :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import useProducts from '@/hooks/useProducts'

export default {
  components: {
    ProductCard,
  },

  setup() {
    const { products } = useProducts()

    return { products }
  },
}
</script>
