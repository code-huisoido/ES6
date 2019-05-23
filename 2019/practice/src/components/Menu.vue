<template>
  <div id="sidebar">
    <el-row class="tac">
    <h2>华山之巅</h2>
    <h3>目录</h3>
      <ol>
          <li class="menu" v-bind:class="menu" v-for="(item, index) in router" :key="index">
               <router-link :to="item.path">{{item.name}}</router-link>
          </li>
      </ol>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: this.$router.options.routes,
      menu: "menu"
    };
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      console.log(this.$router);
    });
  }
};
</script>

<style lang="stylus">
#sidebar {
  width: 280px;
  position: fixed;
  height: 100%;
  margin-right: 20px;
  padding-bottom: 0px;
  padding-top: 0px;
  overflow-y: scroll;
  margin-top: 0;
  padding-left: 25px;
  padding-bottom: 25px;
  padding-top: 25px;
  box-shadow: 0 0 40px #CCC;
  -webkit-box-shadow: 0 0 40px #CCC;
  -moz-box-shadow: 0 0 40px #CCC;
  border-right: 1px solid #BBB;

  .menu {
      height: 1.2rem
      line-height: 1.2rem;
    margin-top: 0;
    margin-bottom: 0.2rem;
    margin-left: 10px;
    padding: 0;
    font-size:14px;
    text-indent: -5px;
    

    a:visited, a {
      color: #4682BE;
      text-decoration: none;
    }
  }
}
</style>