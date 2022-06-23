<template>
  <q-card class="cart-product">
    <div class="flex no-wrap q-gutter-sm">
      <q-img
        :src="image"
        height="250px"
        width="300px"
        fit="cover"
        spinner-color="white"
      />
      <div class="flex column q-px-sm q-py-lg">
        <div class="col-grow flex no-wrap justify-between q-gutter-xs">
          <div>
            <p class="text-subtitle2 q-my-none">{{ title }}</p>
            <span class="text-body">{{ price }}$</span>
          </div>
          <q-btn
            class="self-start"
            color="red"
            icon="delete"
            @click="removeProductFromCart(id)"
          />
        </div>
        <product-count v-model="count" />
      </div>
    </div>
  </q-card>
</template>

<script>
import { computed } from 'vue'
import ProductCount from '@/components/ProductCount.vue'
import useCount from '@/hooks/useCount'
import useProduct from '@/hooks/useProduct'
export default {
  components: {
    ProductCount,
  },

  props: {
    cartProduct: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const { image, title, price, id } = useProduct(props.cartProduct)
    const { changeCount, removeProductFromCart } = useCount()

    const count = computed({
      get: () => props.cartProduct?.count ?? 0,
      set: (count) => {
        if (count) {
          changeCount(id.value, count)
        } else {
          removeProductFromCart(id.value)
        }
      },
    })

    return { image, title, price, count, id, removeProductFromCart }
  },
}
</script>

<style scoped lang="scss">
.cart-product {
  min-width: 320px;
  max-width: 500px;
}
</style>
