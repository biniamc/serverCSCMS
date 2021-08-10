
<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      app color="grey darken-4"
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app color="grey darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title  class="white--text">CSCMS</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <!--  -->
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>