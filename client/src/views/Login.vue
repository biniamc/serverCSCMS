<template>
<v-container >
 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
 <div>
    <v-toolbar
    color="grey darken-4"
    >
    

      <v-toolbar-title class="white--text">Login </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>
  </div>
  
 
        
    
    <v-text-field
      v-model="user_name"
      
      :rules="user_nameRules"
      label="user_name"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="password"
      required
    ></v-text-field>
     
    <v-btn
      class="mr-4"
      @click="login"
      :disabled="!valid"
      color="success"
    >Login
    </v-btn>  
  </v-form>
</v-container>
</template>

<script>

export default {
    name:"app",
    data: () => ({
      valid: true,
      user_name: '',
      // firstRules: [
      //   v => !!v || 'Name is required',
      //   v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      // ],
      password: '',
      // lastRules: [
      //   v => !!v || 'Name is required',
      //   v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      // ],
      
      
      
     
    }),

    methods: {
      login () {
        if (this.$refs.form.validate()){
        return axios({
        method: 'post',
          data: {
            user_name: this.user.name,
            password: this.password,
            
      },
   url: 'http://localhost:3000/emergencys',
    headers: {
       'Content-Type': 'application/json',
      },
    })
   .then(() => {
     this.$router.push({ path:'/',component:Home});
     this.$refs.form.reset();
 })
    .catch(() => {
     });
      }
   return true;
 },
      }
      
    }
  
</script>