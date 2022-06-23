<template>
  <q-card class="card" :class="{ 'in-cart': count && count > 0 }">
    <q-img :src="image" height="300px" fit="contain" spinner-color="white">
      <q-badge color="primary" floating transparent>{{ rating }}</q-badge>
    </q-img>
    <q-card-section class="card__body">
      <div class="q-mb-xl card__options">
        <h4 class="q-mb-xs q-mt-sm">{{ title }}</h4>
        <span>{{ price }}$</span>
      </div>
      <div class="card__actions">
        <q-btn
          color="primary"
          icon="shopping_cart"
          @click="addProduct"
          :disable="count > 0"
        />
        <product-count v-model="count" v-if="count && count > 0" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed } from 'vue'
import ProductCount from '@/components/ProductCount.vue'
import useProduct from '@/hooks/useProduct'
import useCount from '@/hooks/useCount'
import useCartProducts from '@/hooks/useCartProducts'

export default {
  components: {
    ProductCount,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const { addProductInCart, image, title, rating, price, id } = useProduct(
      props.product
    )
    const { changeCount, removeProductFromCart } = useCount()
    const { cartProducts } = useCartProducts()

    const count = computed({
      get: () => {
        const currentProduct = cartProducts.value.find(
          (product) => product.id === id.value
        )

        if (currentProduct) {
          return currentProduct.count
        }

        return false
      },
      set: (count) => {
        if (count) {
          changeCount(id.value, count)
        } else {
          removeProductFromCart(id.value)
        }
      },
    })

    function addProduct() {
      addProductInCart(props.product)
    }

    return { image, title, rating, price, addProduct, count }
  },
}
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  display: flex;
  flex-direction: column;

  &.in-cart {
    box-shadow: 0px 4px 4px $positive;
  }

  &__body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  &__actions {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
}
</style>
