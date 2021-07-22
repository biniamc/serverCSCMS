<template>
<v-container>
    <nav>
      <v-toolbar flat color="blue-grey darken-4" app>
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Admin</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="blue-grey darken-4">
          <span class="white--text">My Account</span>
          <v-icon right color="white">admin_panel_settings</v-icon>
        </v-btn>
        <v-btn flat color="blue-grey darken-4">
          <span class="white--text">Notification</span>
          <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>

        <v-btn flat color="blue-grey darken-4">
          <span class="white--text">Sign Out</span>
          <v-icon right color="white">exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>

      <v-navigation-drawer
        absolute
        temporary
        app
        v-model="drawer"
        class="blue-grey lighten-5"
      >

          <p class="display-2 mx-4 subheading grey--text">WCSCMS</p> -->

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

  <v-container fluid>
    <v-row justify="center">
      <v-subheader>List of Accounts</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row align="center" class=" spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  />
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="message.name"></strong>
                <span v-if="message.total" class="grey--text">
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col class="text-no-wrap" cols="5" sm="3">
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>

            <v-card flat class="pa-3" v-for="info in infos" :key="info.title">
              <v-layout row warp>
                <v-flex xs12 md6>
                  <div class="caption grey--text ">Name</div>
                  <div class="my-2">{{ info.title }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text ">Date</div>
                  <div class="my-2">{{ info.date }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                  <div>
                    <v-chip
                      small
                      :class="`${info.status} white--text caption ma-6`"
                      >{{ info.status }}</v-chip
                    >
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>

</v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        {
          icon: "person_add",
          text: "Create Account",
          route: "/create-account",
        },
        // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},
      ],
      messages: [
        // {
        //   icon: 'admin_panel_settings',
        //   name: 'Created accounts',
        //   title: 'Status',

        // },
        {
          color: "red",
          icon: "emoji_people",
          name: "Customer Accounts",
          new: 1,
          total: 3,
          title: "Active",
        },
        {
          color: "indigo",
          icon: "support_agent",
          name: "Employee Accounts",
          new: 2,
          total: 4,
          title: "Active",
        },
      ],
      lorem:
        "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
      infos: [
        { title: "Users 1", date: "1st jan 2020", status: "active" },
        { title: "Users 2", date: "2st feb 2020", status: "active" },
        { title: "Users 3", date: "23st june 2019", status: "deleted" },
      ],
    };
  },
};
</script>
