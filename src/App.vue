<template>
  <div>
    <Header></Header>
    <router-view>
      <div id="app" class="container mt-5">
        <StartPage></StartPage>
      </div>
    </router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import StartPage from "./components/StartPage.vue";

export default {
  name: "App",
  components: {
    Header,
    StartPage,
  },
};
</script>
