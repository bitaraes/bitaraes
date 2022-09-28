<template>
  <div class="home">
    <h2 class="home-subheading">Bem-vindo!</h2>
    <h1 class="home-heading">Me chamo Igor</h1>
    <div class="home-description">
      <p>{{ newDescription }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      description:
        "Sou estudante de Sistemas de informação, Desenvolvedor Front-End e apaixonado por programação e tecnologia. ",
      newDescription: "",
    };
  },
  created() {
    this.getdescription();
  },
  methods: {
    getdescription() {
      const arr = this.description.split("");
      let index = 0;
      const interval = setInterval(() => {
        this.newDescription += arr[index];
        index++;
        if (index >= arr.length) {
          clearInterval(interval);
        }
      }, 100);
    },
  },
};
</script>
<style>
.home {
  margin-block: 1rem;
  max-width: 45%;
}
.home-heading {
  font-size: 3.125rem;
  margin-bottom: 0.15rem;
}
.home-subheading {
  font-size: 2.25rem;
  color: #a3aeb7;
}
.home-description {
  font-size: 1.25rem;
  line-height: 36px;
  font-weight: 400;
}
.home-description p::after {
  content: "|";
  font-weight: 700;
  transform: scale(1.5);
  animation: piscar 0.7s infinite;
}
</style>
