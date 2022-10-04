<template>
  <div class="app-header">
    <div class="app-header__container">
      <div class="name">Igor Bitarães</div>
      <nav class="menu">
        <ul class="list">
          <li v-for="(item, index) in menu" :key="index" class="list-item">
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="m-menu">
      <button class="open-menu">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { name: "Sobre mim", link: "#" },
        { name: "Skills", link: "#" },
        { name: "Projetos", link: "#" },
        { name: "Contato", link: "#" },
      ],
    };
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
  .open-menu {
    display: block;
    width: 50px;
    height: 50px;
    background: grey;
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
}
</style>
