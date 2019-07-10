<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">家庭計算帳務管理</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat small color="primary" to="/home">家庭總收入</v-btn>
      <v-btn flat small color="primary" to="/Owner">個人支出管理</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
