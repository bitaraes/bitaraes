<template>
  <div class="app-header">
    <div class="app-header__container">
      <router-link to="/" class="app-header__name"> Igor Bitarães </router-link>
      <nav class="menu">
        <ul class="list">
          <li v-for="(item, index) in menu" :key="index" class="list-item">
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="m-menu">
      <button class="open-menu" @click.stop="navOpen = !navOpen">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <transition name="translateX">
        <nav v-show="navOpen" @click.stop>
          <div class="m-menu__wrapper">
            <ul class="m-menu__list">
              <li
                v-for="(item, index) in menu"
                :key="index"
                class="m-menu__item"
              >
                <router-link :to="item.link">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { name: "Sobre mim", link: "/sobre" },
        { name: "Skills", link: "/skills" },
        { name: "Projetos", link: "/projetos" },
        { name: "Contato", link: "/contato" },
      ],
      events: ["click", "scroll"],
      navOpen: false,
    };
  },
  created() {
    this.events.forEach((e) => window.addEventListener(e, this.toggle));
  },
  destroyed() {
    this.events.forEach((e) => window.removeEventListener(e, this.toggle));
  },
  methods: {
    toggle() {
      if (this.navOpen) {
        this.navOpen = false;
      }
    },
  },
};
</script>
<style>
.app-header {
  display: flex;
  background: #0d0c22;
  width: 100%;
  height: 50px;
}

.app-header__name {
  color: #fff;
}

.app-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 90%;
  margin: 0 auto;
}

.app-header .list {
  display: flex;
  justify-content: space-around;
}

.app-header .list-item {
  position: relative;
}

.app-header .list-item a {
  padding: 1em;
  color: #d1d1d1;
  opacity: 0.8;
  display: block;
}

.app-header .list-item a:hover {
  color: #fff;
  transition: 0.7s;
}

.app-header .list-item:hover::after {
  content: " ";
  height: 4px;
  background: #0ec0c1;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: slide 0.7s forwards;
}
.open-menu {
  display: none;
}
@media screen and (max-width: 768px) {
  .app-header__container .menu {
    display: none;
  }
  .app-header__name {
    padding-inline: 15px;
  }
  .open-menu {
    display: block;
    width: 50px;
    height: 50px;
    background: #0d0c22;
    border: none;
    position: relative;
    z-index: 100;
    appearance: none;
    cursor: pointer;
    outline: none;
  }
  .open-menu > span {
    display: block;
    width: 20px;
    height: 2px;
    margin: auto;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.4s ease;
  }
  .open-menu > span.top {
    transform: translateY(-8px);
  }
  .open-menu > span.bottom {
    transform: translateY(8px);
  }
  .m-menu nav {
    width: 200px;
    background: #0d0c22;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
  }
  .m-menu__wrapper {
    padding-top: 50px;
  }
  .m-menu__list {
    padding-top: 50px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .m-menu__item a {
    text-decoration: none;
    line-height: 1.6em;
    font-size: 1.6em;
    padding: 0.5em;
    display: block;
    color: white;
    transition: 0.4s ease;
  }
  .m-menu__item a:hover {
    background: lightgrey;
    color: #0d0c22;
  }
  .translateX-enter {
    transform: translateX(200px);
    opacity: 0;
  }

  .translateX-enter-active,
  .translateX-leave-active {
    transform-origin: top right 0;
    transition: 0.4s ease;
  }

  .translateX-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }
}
</style>
