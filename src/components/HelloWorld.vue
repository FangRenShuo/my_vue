<template>
  <h1>{{ msg }}</h1>
  <el-button type="button" @click="count++">count is: {{ count }}</el-button>
  
</template>

<script>
import{ref} from "vue";
import {ElButton} from "element-plus";
export default  ({
  components:{
    ElButton,
  },
  setup() {
    const count = ref(0);
    return { 
        count,
    };
  },
})
</script>
<style scoped>
  a{
    color: #43b983;
  }
</style>
