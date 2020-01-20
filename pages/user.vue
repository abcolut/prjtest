<template>
  <div class="app">
    <b-form-group  label="Your Name:" >
      <b-form-input
        required
        placeholder="Enter name"
        :value="nameServer"
        ref="name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        required
        placeholder="Enter Familia"
        :value="surnameServer"
        ref="surname"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="save()" >Save</b-btn>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'PageUser',
    data(){
      return{
        //name: '',
        //surname:''
      }
    },
    computed:{
      ...mapGetters('user', {nameServer:'name'}),
      ...mapGetters('user', {surnameServer:'surname'}),
    },
    watch: {
    },
    methods: {
      save(){
        var name = this.$refs["name"].vModelValue
        var surname = this.$refs["surname"].vModelValue
        this.$store.commit('user/set_name',name )
        this.$store.commit('user/set_surname',surname )
        //this.$store.dispatch('user/saveUser',{name:name, surname:surname })
      },
    },
    beforeRouteLeave (to, from, next) {
      var name = this.$refs["name"].vModelValue
      var surname = this.$refs["surname"].vModelValue

      if (name == this.nameServer  && surname == this.surnameServer) {
        next()
        return
      }
      const answer = window.confirm('Данные не сохранены, хотите покинуть страницу?')
      if (answer) { next() }
      else { next(false) }
    },

  }
</script>
