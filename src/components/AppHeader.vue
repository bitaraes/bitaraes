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
  width: 90%;
  margin: 0 auto;
  color: white;
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

@keyframes slide {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
