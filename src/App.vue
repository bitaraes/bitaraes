<template>
  <div class="app">
    <AppHeader />
    <div class="container">
      <transition name="pageSlide" mode="out-in">
        <router-view></router-view>
      </transition>
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
<style scoped>
.pageSlide-enter-from,
.pageSlide-leave-to {
  opacity: 0;
}

.pageSlide-enter-active {
  animation: pageSlide 0.7s;
  transition: all 0.5s;
}
.pageSlide-leave-active {
  animation: pageSlide 0.7s reverse;
  transition: 0.5s;
}
</style>
