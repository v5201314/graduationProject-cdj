<template>
    <div>
      <CdjHeader></CdjHeader>
      <NavigationBar></NavigationBar>
    </div>
  </template>
  
  <script>
  import CdjHeader from "./CdjHeader.vue";
  import NavigationBar from "./NavigationBar.vue";
  export default {
    name: "AdminApp",
    components: { 
      CdjHeader,
      NavigationBar
     },
     data(){
      return{

      }
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
  