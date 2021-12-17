<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted: function () {
    this.getData();
  },
  methods: {
    getData: async function () {
      const response = await fetch("http://localhost:3000/login");
      const data = await response.json();
      console.log(data);
    },
  },
};
</script>
