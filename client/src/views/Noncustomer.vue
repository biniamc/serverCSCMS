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
    

      <v-toolbar-title class="white--text">CSCMS</v-toolbar-title>

      <v-spacer></v-spacer>
<router-link
        to="/"
        tag="v-btn"
      >
      <v-btn icon color="white">
        <v-icon>mdi-home</v-icon>
      </v-btn>
</router-link>
    </v-toolbar>
  </div>
  
 
        
    
    <v-text-field
      v-model="Fname"
      :counter="10"
      :rules="FnameRules"
      label="Fisrt Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="Lname"
      :counter="10"
      :rules="LnameRules"
      label="Last Name"
      required
    ></v-text-field>
     <v-text-field
      v-model="phone_no"
      :rules="phone_noRules"
      
      label="Phone number"
      required
    ></v-text-field>
   <v-text-field
      v-model="location"
      :counter="10"
      :rules="nameRules"
      label="location"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || ' Case is required']"
      label="Case"
      required
    ></v-select>
    
 
    <v-textarea
      v-model="description"
      clearable
      clear-icon="mdi-close-circle"
     lable="Please fill your report here"
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Send
      
    </v-btn>

   
  </v-form>
</v-container>
</template>

<script>

export default {
    name:"app",
    data: () => ({
      valid: true,
      Fname: '',
      FnameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],
      Lname: '',
      FnameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],
      
       phone_no: '',
      phone_noRules: [
        [v => !!v || 'This field is required',
        v => /^\d+$/.test(v)||'This field only accept numbers']
      ],
      location: '',
      locationRules: [
        v => !!v || 'Location is required',
      ],
      select: null,
      items: [
        'Fire',
        'Fall down',
        'Accident',
        'Rain',
      ],
      description:'',
     
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()){
        return axios({
        method: 'post',
          data: {
            Fname: this.Fname,
            Lname: this.Lname,
            phone_no: this.phone_no,
            location: this.location,
            select: this.select,
            description: this.description,
      },
   url: 'http://localhost:3000/controllers/emergencys',
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