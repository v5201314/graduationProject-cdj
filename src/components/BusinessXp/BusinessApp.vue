<template>
    <div>
      <CdjHeader :leixing="2"></CdjHeader>
      <BusinessNavigationBar></BusinessNavigationBar>
    </div>
  </template>
  
  <script>
  import CdjHeader from "../../components/CdjHeader.vue";
  import BusinessNavigationBar from "./BusinessNavigationBar.vue";
  export default {
    name: "BusinessApp",
    components: { 
      CdjHeader,
      BusinessNavigationBar
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
  