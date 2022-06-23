<template>
  <q-layout view="hHh Lpr fFf" class="shadow-2 rounded-borders">
    <main-header />
    <router-view />
  </q-layout>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import useContext from '@/hooks/useContext'
export default {
  components: {
    MainHeader,
  },

  setup() {
    useContext()
  },
}
</script>
