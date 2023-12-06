<template>
  <div>
    <div class="home">
      <div class="home-description__container">
        <div class="description">
          <h2 class="description__subheading">Bem-vindo!</h2>
          <h1 class="description__heading">Me chamo Igor</h1>
          <div class="description__text">
            <p>{{ newDescription }}</p>
          </div>
        </div>
      </div>
      <div class="home-img">
        <img :src="developerImg" />
      </div>
    </div>
    <div class="external-menu">
      <div class="external-menu__list">
        <a
          v-for="({ link, name, icon }, index) in iconsMenu"
          :key="index"
          :href="link"
          :class="`${name}-item`"
          target="_blank"
        >
          <font-awesome-icon :icon="icon" class="color-red" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      description:
        "Sou desenvolvedor Front-End e apaixonado por programação. ",
      newDescription: "",
      developerImg: require("@/assets/images/Developer.svg"),
      iconsMenu: [
        {
          name: "github",
          link: "https://github.com/bitaraes",
          icon: "fa-brands fa-github",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/ibitaraes/",
          icon: "fa-brands fa-linkedin",
        },
      ],
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
      }, 70);
    },
  },
};
</script>
<style>
.home {
  margin: 1rem 0 5rem 0;
  max-width: 100%;
  display: flex;
}
.home-description__container {
  width: 50%;
  padding: 5% 5% 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.description__heading {
  font-size: 3.125rem;
  margin-bottom: 0.15rem;
}
.description__subheading {
  font-size: 2.25rem;
  color: #a3aeb7;
}
.description__text {
  font-size: 1.25rem;
  line-height: 36px;
  font-weight: 400;
}
.description__text p::after {
  content: "|";
  font-weight: 700;
  animation: piscar 0.7s infinite;
}
.external-menu {
  margin: 0 auto;
  width: 50%;
  height: 7em;
  display: flex;
  align-items: end;
  overflow: hidden;
  border-radius: 10px;
}
.external-menu__list {
  width: 100%;
  height: 30px;
  display: flex;
  background: #ddd;
  border-radius: 10px;
}
.external-menu__list a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  position: relative;
}
.external-menu__list a::before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: 0;
}
.external-menu__list .linkedin-item:hover::before {
  background: #0e76a8;
  height: 30px;
  opacity: 0.5;
  transition: all 0.5s ease-in;
}
.external-menu__list .github-item:hover::before {
  background: #000;
  height: 30px;
  opacity: 0.5;
  transition: all 0.5s ease-in;
}
.external-menu__list .github-item::before {
  background: #000;
  transition: all 0.5s ease-out;
}
.external-menu__list .linkedin-item::before {
  background: #0e76a8;
  transition: all 0.5s ease-out;
}
.home-img {
  width: 50%;
}
@media screen and (max-width: 768px) {
  .home {
    flex-direction: column;
  }
  .home-description__container {
    width: 100%;
    min-height: 180px;
    text-align: center;
    padding: 0;
  }
  .home-img {
    width: 100%;
  }
}
@media screen and (max-width: 568px) {
  .home-description__container {
    min-height: 200px;
  }
}
@media screen and (max-width: 378px) {
  .home-description__container {
    min-height: 300px;
  }
}
</style>
