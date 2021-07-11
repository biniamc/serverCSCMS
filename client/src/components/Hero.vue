<template>
    
    <div class="heroblock">
         <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
    </div>
    
</template>
<script>
export default {
    name:'Hero',
    data () {
      return {
        items: [
          {
            src: require("../assets/images/1.jpg"),
          },
          {
            src: require("../assets/images/2.jpg"), 
          },
          {
            src: require("../assets/images/3.jpg"), 
               },
               
        
        ],
      }
    },

};
    
        

</script>
