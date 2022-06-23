<template>
  <div class="row column items-center q-gutter-sm">
    <div
      class="col-12 col-md-6 col-lg-4"
      v-for="cartProduct in cartProducts"
      :key="`cartProduct${cartProduct.id}`"
    >
      <cart-product :cartProduct="cartProduct" />
    </div>
  </div>
</template>

<script>
import userCartProducts from '@/hooks/useCartProducts'
import CartProduct from '@/components/CartProduct.vue'

export default {
  components: {
    CartProduct,
  },

  setup() {
    const { cartProducts } = userCartProducts()

    return { cartProducts }
  },
}
</script>
