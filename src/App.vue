<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img src="./assets/build-a-bot-logo.png" class="logo" />
            Build-a-Bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RobotBuilder />
    </main>
  </div>
</template>

<script>
import RobotBuilder from "./build/RobotBuilder.vue";

export default {
  name: "app",
  components: {
    RobotBuilder
  }
};
</script>

<style>
header {
  background-color: #999;
  margin: 0 200px;
  border-radius: 10px;
}

ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

nav {
  widows: 100%;
}
</style>

<style scoped>
main {
  padding: 30px;
  background-color: white;
  margin: 0 200px;
  border-radius: 10px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
