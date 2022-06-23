<template>
  <div class="row justify-between items-center">
    <h3>Корзина</h3>
    <q-btn
      color="primary"
      :outline="btnDisabled"
      :disable="btnDisabled"
      label="Оформить заказ"
      @click="alert = true"
    />
  </div>

  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h3">Ваш заказ</div>
        <div class="text-h4">На сумму {{ sum }}$ успешно оформлен</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, computed } from 'vue'
import useCartProducts from '@/hooks/useCartProducts'

export default {
  setup() {
    const alert = ref(false)
    const { sumProductsPrice, cartProducts } = useCartProducts()

    const btnDisabled = computed(() => {
      return !cartProducts.value.length
    })

    const sum = computed(() => {
      return Math.round(sumProductsPrice())
    })

    return { alert, sum, btnDisabled }
  },
}
</script>
