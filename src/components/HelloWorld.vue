<template>
  <div class="hello">
    <h1>欢迎！！！</h1>
    <button @click="onCtrlClick">跳转</button>
  </div>
</template>
<script>
import BaseVue from "./Base.vue";
export default {
  data() {
    return {
      components_name: "HelloWorld",
      age:0,
    };
  },
  extends: BaseVue,
  methods: {
    onCtrlClick() {
      console.log("onCtrlClick");
      this.$router.push({path: '/components/Questionnaire'});

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
