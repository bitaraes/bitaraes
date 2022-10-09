<template>
  <div class="contato-container">
    <div class="contato-card">
      <div class="contato-item">Vamos conversar?</div>
      <div class="contato-item">Me envie uma mensagem ou um email!</div>
      <div class="contato-mail">
        <span class="contato-mail-img">
          <img :src="mailImg" />
        </span>
      </div>
      <div class="contato-icons">
        <a
          href="mailto:igor_oliveira02@hotmail.com"
          class="contato-icon-mail contato-icon"
        >
          <font-awesome-icon size="3x" icon="fa-solid fa-envelope" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5531992159084"
          target="_blank"
          class="contato-icon-whatsapp contato-icon"
        >
          <font-awesome-icon size="3x" icon="fa-brands fa-whatsapp" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailImg: require("@/assets/images/mail.png"),
    };
  },
};
</script>

<style scoped>
.contato-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 250px);
}
.contato-card {
  width: 100%;
  height: 70%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  background: #edf3ff;
}
.contato-item {
  font-size: 2.25rem;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  text-align: center;
}
.contato-mail {
  width: 180px;
  height: 100px;
  padding-block: 15px;
  position: relative;
}
.contato-mail-img {
  position: absolute;
  margin-left: 0px;
  left: 0;
  animation: mailSlide 1.5s infinite linear alternate;
}
.contato-icons {
  display: flex;
}
.contato-icon {
  margin: 1rem;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px #00000070;
  cursor: pointer;
  transition: all 1s;
}

.contato-icon:hover {
  transform: scale(1.2);
  box-shadow: 0 5px 20px #000000b4;
}

.contato-icon-whatsapp {
  background: linear-gradient(to bottom, #5ad065, #22af39);
  color: #fff;
  border: 3px solid #fff;
}
.contato-icon-mail {
  border: 3px solid #fff;
  background: #f7b36a;
  background: linear-gradient(to bottom, #f7b36a, #b4824c);
  color: #fff;
}

@media screen and (max-width: 768px) {
  .contato-card {
    height: 90%;
  }
}
</style>
