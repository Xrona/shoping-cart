<template>
  <q-header bordered class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Shop
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab to="/" label="Каталог" />
      <q-route-tab to="/cart" label="Корзина" />
    </q-tabs>
  </q-header>
</template>
