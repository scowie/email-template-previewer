<template>
  <div>
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
        border:1px solid blue;
        margin-top: 80px;
        margin-bottom: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
