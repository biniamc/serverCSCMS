<template>
    <div class="text-center">
    <v-menu >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          flat text
           v-bind="attrs"
          v-on="on"
        >
          Login
        
        
        </v-btn>
   
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'As Customer' ,route:'/Ascustomer' },
        { title: 'As Employee',route:'/Asempolyee' },
       
      ],
    }),
  }
</script>