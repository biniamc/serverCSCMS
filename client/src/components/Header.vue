<template>
<v-container >
<v-toolbar flat>
      <v-toolbar-title>CSCMS</v-toolbar-title>

<v-spacer></v-spacer>

<v-toolbar-items>
  <v-btn text>
         <router-link to="/"> Home</router-link>  
        
      </v-btn>
      <v-btn text>
         <router-link to="/Noncustomer"> Non-customer</router-link>  
        
      </v-btn>
      <v-btn text>
         <router-link to="/Login"> Log in</router-link>  
      </v-btn>
 
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
