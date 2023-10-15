<template>
  <div>
    <CdjHeader></CdjHeader>

    <NavigationBar></NavigationBar>
    
  </div>
</template>

<script>
import CdjHeader from "./components/CdjHeader.vue";
import NavigationBar from "./components/NavigationBar.vue";
export default {
  name: "App",
  components: { 
    CdjHeader,
    NavigationBar
   },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
</style>
