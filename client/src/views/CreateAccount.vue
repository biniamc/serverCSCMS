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
        <v-btn text color="blue-grey darken-4">
            <span class="white--text" >My Account</span>
            <v-icon right color="white">admin_panel_settings</v-icon>
        </v-btn>
        <v-btn text color="blue-grey darken-4">
            <span class="white--text" >Notification</span>
            <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>
    
        <v-btn text color="blue-grey darken-4">
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
          <v-card text>
         <v-form ref="form" v-model="valid" lazy-validation>
   <v-text-field class="ma-6"
      v-model="first_name"
      :counter="10"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="last_name"
      :counter="10"
      label="Last Name"
      required
    ></v-text-field>
    
   <v-text-field class="ma-6"
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
            
    <v-text-field class="ma-6"
      v-model="phone_no"
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
      v-model="username"
      :counter="10"
      label="User Name"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="password"
      :counter="10"
      label="Password(BP number)"
      required
    ></v-text-field>

    <v-btn class="ma-6 success" @click="submit"
       :disabled="!valid"
        > 
        Register </v-btn>
    </v-form>
    </v-card>
        </v-tab-item>
<v-tab-item>
    <!-- second tab -->
    <v-card text>
        <v-form ref="form" v-model="valid" lazy-validation>
          
     <v-text-field class="ma-6"
      v-model="emp_id"
      :counter="10"
      label="Emp ID"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="fname"
      :counter="10"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="lname"
      :counter="10"
      label="Last Name"
      required
    ></v-text-field>

    <v-text-field class="ma-6"
      v-model="email2"
      label="E-mail"
      required
    ></v-text-field> 
     <v-text-field class="ma-6"
      v-model="phone_no2"
      label="Phone number"
      required
    ></v-text-field>
     <v-select :items="['Female', 'Male']" label="Gender" class="ma-6" v-model="gender2"></v-select>
     <v-select :items="['Meberat Haile', 'Kidane Mihret']" label="Branch" class="ma-6" v-model="branch" ></v-select>
    <v-select :items="['Assistant', 'Manager','Operation Maintenance', 'Care Worker']" label="Department" class="ma-6" v-model="department"></v-select>
  
    <v-text-field class="ma-6"
      v-model="username2"
      :counter="10"
      label="User Name"
      required
    ></v-text-field>
    <v-text-field class="ma-6"
      v-model="password2"
      :counter="10"
      label="Password"
      required
    ></v-text-field>
  <v-btn class="ma-6 success" @click="submit2"
       :disabled="!valid"> Register </v-btn>
    
    </v-form>
    </v-card>
   </v-tab-item> 

  </v-tabs>
</v-card>
  </v-container>

</template>

<script>
import axios from 'axios';

export default {
 
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'home', text: 'Home', route: '/'},
                { icon: 'person_add', text:'Create Account', route: '/create-account'},
                // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},

            ],
           valid: true,
      first_name: '',
      // firstnameRules: [
      //   v => !!v || 'Fisrt Name is required',
      //   v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      // ],
      last_name: '',
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


        //for second tab
      emp_id:'',
      fname:'',
      lname:'',
      email2:'',
      phone_no2:'',
      gender2:'',
      branch:'',
      department:'',
      username2:'',
      password2:'', 
     }
        },
          
 methods: {
   submit2(){
     let newUser= {
            emp_id: this.emp_id,
            fname: this.fname,
            lname: this.lname,
            email2: this.email,
            phone_no2: this.phone_no,
            gender2: this.gender2,
            branch: this.branch,
            department: this.department,
            username2: this.username2,
            password2: this.password2,
      }
      console.log("newuser", newUser);
      axios.post('http://localhost:3000/employees', newUser)
      .then(() => {
     this.$router.push({ path: 'admin' });
     this.$refs.form.reset();
 })
    .catch((err) => {
      console.log(err)
     });
   },
   
  submit()  {
    //if (this.$refs.form.validate()) {
      let newUser= {
            first_name: this.first_name,
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
//        'main-Type': 'application/json',
//       },
//     })
   .then(() => {
     this.$router.push({ path: 'admin' });
     this.$refs.form.reset();
 })
    .catch((err) => {
      console.log(err)
     });
     //} // VALIDATION END
   return true;
 },
      }
  }
 

</script>