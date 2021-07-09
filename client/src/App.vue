<template>
  <v-app >
    <v-app-bar 
    app color="primary"
    dark>
    </v-app-bar>
    <v-content>
      <routrer-view></routrer-view>
    </v-content>
    <v-footer
    color="blue-grey darken-3" dark
    
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
        class="blue-grey darken-1 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Customer service and complaint system for EEU</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    name:'App',
    data () {
      return{

      }
    }
     ,
       links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],

  };
  
</script>