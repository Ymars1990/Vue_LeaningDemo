
<script>
export default {
  props: {
    msg: String,
  },
  data(){
    return{
      components_name:'BaseVue'
    }
  },
  beforeCreate() {
    console.log(this.components_name+" beforeCreate");
  },
  created() {
    console.log(this.components_name+" create");
  },
  beforeMount() {
    console.log(this.components_name+" beforeMount");
  },
  mounted() {
    console.log(this.components_name+" mounted");
  },
  beforeDestroy() {
    console.log(this.components_name+" beforeDestroy");
  },
  destroyed() {
    console.log(this.components_name+" destroyed");
  },
  beforeUpdate() {
    console.log(this.components_name+" beforeUpdate");
  },
  updated() {
    console.log(this.components_name+" updated");
  },
};
</script>