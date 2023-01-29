<template>
  <v-container fill-height fluid class="col-sm-6 col-lg-4 col-12">
    <v-row align="center"
      justify="center">
      <v-col  style="border:solid 1px #eee">
        <h1 class="text-center">Login</h1>
        <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Pssword"
            required
          ></v-text-field>
          <v-btn
            class="rounded-lg"
            color="warning"
            @click="submit"
          >
            Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default{
  name: 'login',
  data(){
    return{
      users:{},
      email : null,
      password: null
    }
  },
  created(){
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) =>{
        this.users = data
      });
  },
  methods:{
    async submit(){
      let exist = false;
      for (let user of this.users) {
        if(user.email == this.email && user.password == this.password){
          exist = true;
        }
      }
      if(exist){
        console.log("logged in");
      }else{
        this.$swal('Invalid credentials.');
      }
    }
  }
}
</script>
