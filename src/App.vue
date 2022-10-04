<template>
  <div class="app">
    <AppHeader />
    <div class="container">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
};
</script>

<style>
@import url("./layout/base.css");
@import url("./layout/animations.css");
</style>
