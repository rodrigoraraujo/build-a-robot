<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
              <img src="./assets/build-a-bot-logo.png" class="logo" />
              Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item" exact>
            <router-link :to="{name: 'Build'}" class="nav-link">Build</router-link>
          </li>
          <li class="nav-item" exact>
            <router-link :to="{name: 'BrowseParts'}" class="nav-link">Browse</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
header {
  background-color: #999;
  margin: auto 120px auto 120px;
  border-radius: 10px;
}

ul {
  padding: 3px;
  display: flex;
  width: 100%;
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
  width: 100%;
}
</style>

<style scoped>
main {
  padding: 30px;
  background-color: white;
  border-radius: 0 10px 10px 0;
  width: 964px;
  min-height: 300px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-link-active {
  color: white;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
  border-radius: 10px 0 0 10px;
}
</style>
