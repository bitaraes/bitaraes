<template>
  <div>
    <div class="card-skills">
      <h1>Hard Skills</h1>
      <ul>
        <li
          class="skill-item"
          :class="{ 'active-skill': hardItemSelected.id == item.id }"
          v-for="(item, index) in hardItems"
          :key="`item-${index}`"
          :style="`color: ${item.color}`"
          @click="selecItem(item.id, 'hard')"
        >
          <font-awesome-icon
            :size="iconSize"
            :icon="item.icon"
          ></font-awesome-icon>
        </li>
      </ul>
      <div class="skill-item__data">
        <div class="data-title">{{ hardItemSelected.name }}</div>
        <div class="data-description">{{ descriptionExample }}</div>
      </div>
    </div>
    <div class="card-skills">
      <h1>Soft Skills</h1>
      <ul>
        <li
          class="skill-item"
          :class="{ 'active-skill': softItemSelected.id == item.id }"
          v-for="(item, index) in softItems"
          :key="`item-${index}`"
          :style="`color: ${item.color}`"
          @click="selecItem(item.id, 'soft')"
        >
          <font-awesome-icon
            :size="iconSize"
            :icon="item.icon"
          ></font-awesome-icon>
        </li>
      </ul>
      <div class="skill-item__data">
        <div class="data-title">{{ softItemSelected.name }}</div>
        <div class="data-description">{{ descriptionExample }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hardItems: [
        {
          id: "0",
          name: "HTML5",
          description: "",
          icon: "fa-brands fa-html5",
          color: "#dd4b25",
        },
        {
          id: "1",
          name: "CSS3",
          description: "",
          icon: "fa-brands fa-css3-alt",
          color: "#1a6fb4",
        },
        {
          id: "2",
          name: "Javascript",
          description: "",
          icon: "fa-brands fa-square-js",
          color: "#efd81d",
        },
        {
          id: "3",
          name: "VueJs",
          description: "",
          icon: "fa-brands fa-vuejs",
          color: "#3fb27f",
        },
        {
          id: "4",
          name: "Angular",
          description: "",
          icon: "fa-brands fa-angular",
          color: "#d6002f",
        },
      ],
      softItems: [
        {
          id: "0",
          name: "Trabalho em equipe",
          description: "",
          icon: "fa-solid fa-people-group",
          color: "#183153",
        },
        {
          id: "1",
          name: "Solução de problemas",
          description: "",
          icon: "fa-solid fa-lightbulb",
          color: "#183153",
        },
        {
          id: "2",
          name: "Flexibilidade",
          description: "",
          icon: "fa-solid fa-arrows-split-up-and-left",
          color: "#183153",
        },
        {
          id: "3",
          name: "Gestão de tempo",
          description: "",
          icon: "fa-solid fa-clock",
          color: "#183153",
        },
      ],
      hardItemSelected: {
        id: "0",
        name: "HTML5",
        description: "",
        icon: "fa-brands fa-html5",
        color: "#dd4b25",
      },
      softItemSelected: {
        id: "0",
        name: "Trabalho em equipe",
        description: "",
        icon: "fa-solid fa-people-group",
        color: "#183153",
      },
      descriptionExample: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce malesuada vel arcu vitae efficitur.
        Donec ornare, velit non faucibus maximus, eros sapien dictum lacus,
        non varius urna nisi in purus.`,
      screenSize: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.setScreenSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setScreenSize);
  },
  computed: {
    iconSize() {
      return this.screenSize < 530 ? "xl" : "2x";
    },
  },
  methods: {
    selecItem(id, type) {
      if (type == "hard") {
        this.hardItemSelected = this.hardItems.find((el) => el.id == id);
        return;
      }
      this.softItemSelected = this.softItems.find((el) => el.id == id);
    },
    setScreenSize() {
      this.screenSize = window.innerWidth;
    },
  },
};
</script>
<style scoped>
.card-skills {
  width: 100%;
  background: #edf3ff;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.7s;
  display: flex;
  flex-direction: column;
  margin-block: 3rem;
}
.card-skills:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.card-skills > h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1.5rem;
}
.card-skills ul {
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin-top: 16px;
}
.skill-item {
  background: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.5s;
}
.skill-item:hover {
  transform: translateY(-10px) scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.active-skill {
  transform: scale(1.2);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.data-title,
.data-description {
  margin: 1.5rem;
  text-align: center;
}
.data-title {
  font-size: 1.6rem;
  font-weight: 600;
}

@media screen and (max-width: 530px) {
  .card-skills {
    margin-block: 1.5rem;
  }
  .skill-item {
    width: 45px;
    height: 45px;
  }
}
</style>
