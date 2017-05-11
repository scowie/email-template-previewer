<template>
  <div>
      <h2 style="text-align:center;">Email Template Editor</h2>
      <div class="main-content">
        <router-view></router-view>
      </div>
  </div>

</template>

<script>


export default {
  name: 'app',
  components: {},
  data () {
    return {
    }
  }
}
</script>

<style>
    .main-content {
        margin-top: 10px;
        margin-bottom: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
