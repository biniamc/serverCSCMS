<template>
  <v-app>
    <Header/>

  <v-spacer></v-spacer>
  
<router-view></router-view>
<v-spacer></v-spacer>
    <v-footer>
      <Footer/>
    </v-footer>
    </v-app>
</template> 

<script>

import Footer from'./components/Footer';


  export default {
    name:'App',
    components:{
    Footer
    
    },
    data: () => ({
     }),
    };
     

  
  
</script>