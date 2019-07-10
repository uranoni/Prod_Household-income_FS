<template>
  <div>
    <h1>家庭財務</h1>
    <h3>總資產是{{homeMoney}}</h3>
    <h1>家庭購物列表</h1>
    <h3>家庭購物清單是</h3>
    <ul>
      <pre>{{homelist}}</pre>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    homeMoney() {
      return this.$store.state.total;
    },
    ...mapState({
      homelist: "list"
    })
    // homelist() {
    //   console.log(this.$store.state.list);
    //   return this.$store.state.list;
    // }
  }
};
</script>
