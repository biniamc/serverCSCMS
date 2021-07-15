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
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
     <v-text-field
      v-model="phoneNumber"
      :rules="phoneNumberRules"
      
      label="Phone number"
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
      clearable
      clear-icon="mdi-close-circle"
     value="Please fill your report here"
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
    name:"Noncustomer",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
       phoneNumber: '',
      phoneNumberRules: [
        [v => !!v || 'This field is required',
        v => /^\d+$/.test(v)||'This field only accept numbers']
      ],
      select: null,
      items: [
        'Fire',
        'Fall down',
        'Accident',
        'Rain',
      ],
     
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>