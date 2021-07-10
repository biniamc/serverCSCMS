<template>
<v-card>
   <v-card-title>
       <h2>Create a Customer account</h2>
   </v-card-title>

<v-card-text>
    <v-form>
    <v-text-field lable ="name" v-model="title">
    </v-text-field>
    </v-form>
</v-card-text>

</v-card>
 </template>
     
  


<script>
export default {
    data() {
        return {
            title: ''
        }
        
    }
    
}
</script>



