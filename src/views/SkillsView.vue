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
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
