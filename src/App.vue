<template>
  <div>
    <AppHeader />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: { AppHeader },
};
</script>

<style>
@import url("./layout/base.css");
@import url("./layout/animations.css");
</style>
