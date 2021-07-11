<template>
    
   <v-container>
      <v-footer
  flat
    
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="flat py-4 text-center "
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>CSCMS</strong>
      </v-col>
    </v-row>
  </v-footer>
   </v-container>
</template>
<script>
export default {
    name:'Footer',
   
  data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),

};
    
        

</script>
