<template>
<v-container >
<v-toolbar flat>
      <v-toolbar-title>CSCMS</v-toolbar-title>

<v-spacer></v-spacer>

<v-toolbar-items>
   <router-link
        to="/"
        tag="v-btn"
      >
  <v-btn text name="home" >
       Home
        
      </v-btn>
      </router-link>
      <router-link
        to="/Noncustomer"
        tag="v-btn"
      >
      <v-btn text name="non-customer">
         Non-customer
        
      </v-btn>
      </router-link>
      <router-link
        to="/Login"
        tag="v-btn"
      >
      <v-btn text name="login">
          Log in
      </v-btn>
      </router-link>
 
</v-toolbar-items>
 </v-toolbar>
</v-container>
</template>
<script>
export default {
    name:'Header',
    data:() =>({

    }),

};
    
        

</script>
