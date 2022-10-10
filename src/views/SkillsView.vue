<template>
  <div class="skill-view">
    <SkillsCard />
  </div>
</template>
<script>
import SkillsCard from "@/components/SkillsCard.vue";
export default { components: { SkillsCard } };
</script>
<style scoped>
.skill-view {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
