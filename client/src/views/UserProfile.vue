<template>
  <v-container id="user-profile-view" fluid tag="section">
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
        appapp
        v-model="drawer"
        class="blue-grey lighten-5"
      >
        <p class="display-2 mx-4 subheading grey--text">CSCMS</p>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon class="mx-4">{{ link.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="dark--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <material-card color="primary" icon="mdi-account-outline">
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field disabled label="Company (disabled)" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="purple" label="User Name" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="purple" label="Email Address" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field color="purple" label="First Name" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field color="purple" label="Last Name" />
                </v-col>

                <v-col cols="12">
                  <v-text-field color="purple" label="Adress" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="purple" label="City" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="purple" label="Country" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    color="purple"
                    label="Postal Code"
                    type="number"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    color="purple"
                    label="PhoneNumber"
                    type="number"
                  ></v-text-field>
                </v-col>

                <v-col cols="8" class="text-right">
                  <v-btn color="primary" min-width="150">
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>

      <v-col cols="12" md="4">
        <app-card class="mt-4 text-center">
          <v-img
            class="rounded-circle elevation-6 mt-n12 d-inline-block"
            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            width="128"
          />

          <v-card-text class="text-center">
            <h6 class="text-h6 mb-2 text--secondary">
              Admin
            </h6>

            <h4 class="text-h4 mb-3 text--primary">
              Account owner name(User)
            </h4>
          </v-card-text>
        </app-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default { name: "UserProfileView" };
</script>
