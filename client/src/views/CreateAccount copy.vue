<template>
<v-container>
<nav> 
    <v-toolbar color="blue-grey darken-4" >
      
       <v-icon color="white" @click="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
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
    <p class="display-2 mx-4 subheading grey--text">CSCMS</p>

    <v-list>
    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">

    <v-list-item-action>
        <v-icon class="mx-4">{{link.icon}}</v-icon>
    </v-list-item-action>

        <v-list-item-content>
           <v-list-item-title class="dark--text">{{link.text}}</v-list-item-title>
        </v-list-item-content>
           
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

    
  </v-card>
<!--  tabs -->
<v-card>
  <v-tabs background-color="blue-grey lighten-5"
      color="indigo"
      grow>
    <v-tab>
      <v-icon left>mdi-account</v-icon>
      Create Customer account
    </v-tab>
    
    <v-tab>
      <v-icon left>mdi-account</v-icon>
      Create Employee account
    </v-tab>
<!--  first tabs -->
        <v-tab-item>
          <v-card flat >
         <v-from ref="form" v-model="valid" lazy-validation>
   <v-text-field class="ma-6"
      v-model="fisrt_name"
      :counter="10"
      :rules="nameRules"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="last_name"
      :counter="10"
      :rules="nameRules"
      label="Last Name"
      required
    ></v-text-field>
    
   <v-text-field class="ma-6"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
            
    <v-text-field class="ma-6"
      v-model="phone_no"
      :rules="phoneNumberRules"
      label="Phone number"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="address"
      :counter="10"
      label="Address"
      required
    ></v-text-field>
     <v-select v-model="gender" :items="['Female', 'Male']" label="Gender" class="ma-6"></v-select>
    <v-text-field class="ma-6"
      v-model="useranme"
      :counter="10"
      :rules="nameRules"
      label="User Name"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      label="Password(BP number)"
      required
    ></v-text-field>

    <v-btn class="ma-6 success" @click="submit"
       :disabled="!valid"
        > 
        Register </v-btn>
    </v-from>
    </v-card>
        </v-tab-item>
<v-tab-item>
    <!-- second tab -->
    <v-card flat>
        <v-from ref="form" v-model="valid" lazy-validation>
          
     <v-text-field class="ma-6"
      v-model="number"
      :counter="10"
      :rules="idRules"
      label="Emp ID"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="Fname"
      :counter="10"
      :rules="nameRules"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Last Name"
      required
    ></v-text-field>

    <v-text-field class="ma-6"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field> 
     <v-text-field class="ma-6"
      v-model="phoneNumber"
      :rules="phoneNumberRules"
      
      label="Phone number"
      required
    ></v-text-field>
     <v-select :items="['Female', 'Male']" label="Gender" class="ma-6"></v-select>
     <v-select :items="['Meberat Haile', 'Kidane Mihret']" label="Branch" class="ma-6"></v-select>
    <v-select :items="['Assistant', 'Manager','Operation Maintenance', 'Care Worker']" label="Department" class="ma-6"></v-select>
  
    <v-text-field class="ma-6"
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="User Name"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>
  <v-btn class="ma-6 success"> Register </v-btn>
    
    </v-from>
    </v-card>
   </v-tab-item>

  </v-tabs>
</v-card>
  </v-container>

</template>

<script>
import axios from 'axios';

export default {
  data (){
      
  },
 
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'home', text: 'Home', route: '/'},
                { icon: 'person_add', text:'Create Account', route: '/create-account'},
                // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},

            ],
           valid: true,
      firstname: '',
      // firstnameRules: [
      //   v => !!v || 'Fisrt Name is required',
      //   v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      // ],
      lastname: '',
      // lastnameRules: [
      //   v => !!v || 'Last Name is required',
      //   v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      // ],
      email: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      // ],
       phone_no: '',
      // phone_noRules: [
      //   [v => !!v || 'This field is required',
      //   v => /^\d+$/.test(v)||'This field only accept numbers']
      // ],
      address: '',
      gender: '',
       username: '',
      // idRules: [
      //   v => !!v || 'ID is required',
      //   v => (v && v.length <= 20) || 'ID must be less than 10 characters',
      // ],   
        
        password: '',
       
     }
        },
          
 methods: {
   
  submit()  {
    //if (this.$refs.form.validate()) {
      let newUser= {
        fisrt_name: this.fisrt_name,
            last_name: this.last_name,
            email: this.email,
            phone_no: this.phone_no,
            address: this.address,
            gender: this.gender,
            username: this.username,
            password: this.password,
      }
      console.log("newuser", newUser);
      axios.post('http://localhost:3000/customers', newUser)
//       return axios({
//         method: 'post',
//           data: {
            
//       },
//    url: 'http://localhost:3000/customers',
//     headers: {
//        'Content-Type': 'application/json',
//       },
//     })
//    .then(() => {
//      this.$router.push({ name: 'Admin' });
//      this.$refs.form.reset();
//  })
//     .catch((err) => {
//       console.log(err)
//      });
     // }
   return true;
 },
      }
  }
 

</script>