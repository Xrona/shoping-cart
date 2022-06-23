<template>
  <div class="row no-wrap q-gutter-x-xs">
    <q-btn color="primary" icon="remove" @click="minusOne" />
    <q-field
      borderless
      :dense="true"
      stack-label
      class="field text-center"
      maxlength="2"
      :item-aligned="true"
    >
      <template v-slot:control>
        <div class="self-center text-center full-width no-outline" tabindex="0">
          {{ modelValue }}
        </div>
      </template>
    </q-field>
    <q-btn color="primary" icon="add" @click="plusOne" />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    modelModifiers: { default: () => ({}) },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const countProp = computed(() => props.modelValue)

    function plusOne() {
      let value = parseInt(countProp.value)

      emit('update:modelValue', ++value)
    }

    function minusOne() {
      let value = parseInt(countProp.value)

      emit('update:modelValue', --value)
    }

    return {
      plusOne,
      minusOne,
    }
  },
}
</script>

<style scoped lang="scss">
.field {
  text-align: center;
  flex-basis: 20%;
}
</style>
