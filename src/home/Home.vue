<template>
  <div class="hello">
    <div class="logo">
      <img src="../assets/robot-home.png" alt />
    </div>
    <h1>
      <router-link :to="{name: 'Build'}">Get started</router-link>&nbsp;build your first robot!
    </h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h3 {
  text-align: center;
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #999;
}

.logo {
  width: 256px;
  height: auto;
  margin: 0 auto;
}

.logo > img {
  width: 256px;
}
</style>
