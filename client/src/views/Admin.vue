<template>
<nav> 
    <v-toolbar color="blue-grey darken-4" >
      
       <v-icon color="white" @click="drawer = !drawer">view_sidebar</v-icon>
        </v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light white--text">Welcome  </span>
        <span class="white--text"> Admin</span>

        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn flat color="blue-grey darken-4">
           
            <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>
    
        <v-btn flat color="blue-grey darken-4">
            <span class="white--text" >Sign Out</span>
            <v-icon right color="white">exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>

<v-navigation-drawer v-model="drawer" app class="blue-grey lighten-5">
    <p class="display-2">WCSCMS</p>
</v-navigation-drawer>





</nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
}
</script>