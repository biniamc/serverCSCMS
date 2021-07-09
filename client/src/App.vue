<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-list-item>
      <v-list-item-content>
        <v-list-title>
          WCSCMS
        </v-list-title>
        <v-list-item-subtitle>
          MEVN full stack App
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      <v-divider></v-divider>
       <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
    <v-footer
    color="indigo" dark
    
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
     items: [
        { title: 'Home', icon: 'mdi-home', link: "/" },
        { title: 'Register Compliant', icon: 'mdi-note-plus', link : "/register-complaint" },
        { title: 'About', icon: 'mdi-help-box', link: "/about" },
      ],
       links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],

     }),
  }
</script>