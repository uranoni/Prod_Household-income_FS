<template>
  <div>
    <h1>個人資產{{myMoney}}</h1>
    <v-flex xs12 sm6 md3>
      <v-text-field label="Regular" placeholder="Placeholder" v-model="saveMoney"></v-text-field>
    </v-flex>
    <v-btn small color="primary" @click="save">存錢</v-btn>

    <h3>花錢</h3>
    <v-flex xs12 sm6 md3>
      <h4>品項</h4>
      <input type="text" v-model="product.name" />
      <h4>價錢</h4>
      <input type="text" v-model="product.money" />
    </v-flex>
    {{product}}
    <v-btn small color="primary" @click="buy">購物</v-btn>

    <h1>這個月花了什麼</h1>
    {{productlist}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      myMoney: 100,
      saveMoney: 0,
      product: {
        name: "",
        money: 0
      },
      productlist: []
    };
  },
  methods: {
    save() {
      this.myMoney = this.saveMoney * 1 + this.myMoney * 1;
      this.$store.commit("addTotal", this.myMoney * 1);
    },
    buy() {
      this.myMoney = this.myMoney * 1 - this.product.money * 1;
      this.productlist = [...this.productlist, this.product];
      this.$store.commit("addHomeList", this.product);
      this.product = {};
    }
  }
};
</script>

<style>
</style>
