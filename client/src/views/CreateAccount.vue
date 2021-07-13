<template>
<v-container>
<nav> 
    <v-toolbar color="blue-grey darken-4" >
      
       <v-icon color="white" @click="drawer = !drawer">menu_open</v-icon>
        </v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light white--text"> </span>
        <span class="white--text mx-4" > Admin</span>

        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="blue-grey darken-4">
            <span class="white--text" >My Account</span>
            <v-icon right color="white">admin_panel_settings</v-icon>
        </v-btn>
        <v-btn flat color="blue-grey darken-4">
            <span class="white--text" >Notification</span>
            <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>
    
        <v-btn flat color="blue-grey darken-4">
            <span class="white--text" >Sign Out</span>
            <v-icon right color="white">exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>

<v-navigation-drawer app v-model="drawer" class="blue-grey lighten-5">
    <p class="display-2 mx-4 subheading grey--text">WCSCMS</p>

    <v-list>
    <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 

    <v-list-item-action>
        <v-icon class="mx-4">{{link.icon}}</v-icon>
    </v-list-item-action>

        <v-list-item-content>
           <v-list-item-title class="dark--text">{{link.text}}</v-list-item-title>
        </v-list-item-content>
           </v-list-item-title>
    </v-list-item>
    </v-list>
    
</v-navigation-drawer>
</nav>
 <v-card color="basil">
    <v-card-title class="text-center justify-center py-4">
      <h1 class="font-weight-bold text-h4 basil--text">
        Create Account
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-container>






</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'home', text: 'Home', route: '/'},
                { icon: 'person_add', text:'Create Account', route: '/create-account'},
                // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},

            ],
            agreement: false,
            
   tab: null,
        items: [
          'Customer Account', 'Employee Account', 
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
        }
    }

</script>