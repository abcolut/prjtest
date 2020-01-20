<template>
  <div class="app">
    <b-form-group  label="Your Country:" >
      <b-form-input
        required
        placeholder="Enter country"
        :value="countryServer"
        ref="country"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="save()">Save</b-btn>
    <br>countryServer: {{countryServer}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'PagePrifile',
    data(){
      return {
        //country: 'USA'
      }
    },
    computed:{
      ...mapGetters('profile', {countryServer:'country'}),
    },
    methods: {
      save(){
        var country = this.$refs["country"].vModelValue
        this.$store.commit('profile/set_country',country )
        this.$store.dispatch('profile/saveProfile',{country:country})
      },
    },
    beforeRouteLeave (to, from, next) {
      var country = this.$refs["country"].vModelValue

      if (country == this.countryServer) {
        next()
        return
      }
      const answer = window.confirm('Данные не сохранены, хотите покинуть страницу?')
      if (answer)
        next()
      else
        next(false)
    },
  }
</script>
