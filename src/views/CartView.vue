<template>
  <q-page-container>
    <q-page padding>
      <cart-header />
      <cart-product-list />
    </q-page>
  </q-page-container>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import CartProductList from '@/components/CartProductList.vue'
import CartHeader from '@/components/CartHeader.vue'

export default {
  components: {
    CartProductList,
    CartHeader,
  },

  setup() {
    const $q = useQuasar()

    return {
      drawerRight: ref($q.screen.width > 700),
    }
  },
}
</script>
