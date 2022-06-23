<template>
  <q-drawer
    side="left"
    v-model="drawerLeft"
    bordered
    :width="350"
    :breakpoint="500"
    behavior="desktop"
    class="bg-white"
  >
    <q-scroll-area class="fit">
      <category-list />
    </q-scroll-area>
  </q-drawer>

  <q-page-container>
    <q-page padding>
      <div class="row q-">
        <div class="col-12">
          <h3>Каталог товаров</h3>
        </div>
      </div>
      <product-list />
    </q-page>
  </q-page-container>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import ProductList from '@/components/ProductList.vue'
import CategoryList from '@/components/CategoryList.vue'

export default {
  components: {
    ProductList,
    CategoryList,
  },

  setup() {
    const $q = useQuasar()

    return {
      drawerLeft: ref($q.screen.width > 700),
    }
  },
}
</script>
