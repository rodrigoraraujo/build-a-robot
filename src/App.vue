<template>
  <div id="app">
    <!-- Root foo: {{rootFoo}}
    <br />
    Robots foo: {{robotsFoo}}
    <br />
    Users foo: {{usersFoo}}
    <br />
    Root getter: {{rootGetterFoo}}
    <br />
    Robots getter: {{robotsGetterFoo}}
    <br />
    Users getter: {{usersGetterFoo}}
    <br /> -->
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
              <img src="./assets/build-a-bot-logo.png" class="logo" />
              Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" class="nav-link" exact>Build</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'BrowseParts'}" class="nav-link" exact>Browse</router-link>
          </li>
          <li class="nav-item cart">
            <router-link :to="{name: 'Cart'}" class="nav-link" exact>Cart</router-link>
            <div class="cart-items">{{cart.length}}</div>
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
import { mapState, mapGetters } from "vuex";

export default {
  name: "app",
  computed: {
    //root module
    ...mapState({
      rootFoo: "foo"
    }),

    //robots module
    ...mapState("robots", {
      robotsFoo: "foo",
      cart: 'cart'
    }),

    //users module
    ...mapState("users", {
      usersFoo: "foo"
    }),

    //root module
    ...mapGetters({
      rootGetterFoo: "foo"
    }),
    
    //robots module
    ...mapGetters("robots", {
      robotsGetterFoo: "foo"
    }),

    //users module
    ...mapGetters("users", {
      usersGetterFoo: "foo"
    }),      
  }
};
</script>

<style>
header {
  background-color: #999;
  margin: auto;
  width: 100%;
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
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
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
  width: 100%;
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

.cart-items {
  position: absolute;
  top: -7px;
  right: -5px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: mediumseagreen;
}
</style>
