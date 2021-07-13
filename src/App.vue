<template>
  <div id="app">
    <input
      id="file"
      type="file"
      @change="addImg"
      accept="image/png,image/jpeg,image/gif,image/jpg"
    /><br>
    =============================
    <br />自由裁图：
    <div style="width: 200px; height: 300px">
      <qcut ref="qcut1" v-bind:file-obj="file" />
    </div>
    <span id="qcut1"></span>
    <button @click="cut1">裁图</button><br />
    ============================== <br />
    等比裁图
    <div style="width: 300px; height: 300px">
      <qcut
        ref="qcut2"
        v-bind:is-fixed="fixed"
        v-bind:fixed-ratio="ratio"
        v-bind:file-obj="file"
      />
    </div>

    <span id="qcut2"></span>
    <button @click="cut2">裁图</button><br />
    ============================== <br />
  </div>
</template>

<script>
import qcut from "./qcut.vue";

export default {
  name: "App",
  components: {
    qcut,
  },
  data() {
    return {
      fixed: true,
      file: null,
      ratio: [2, 3],
    };
  },
  methods: {
    addImg: function (e) {
      this.file = e.target.files[0];
    },
    cut1: function () {
      console.log(this.$refs.qcut1.getCropBlob());
      document.getElementById("qcut1").innerHTML =
        '<img src="' + this.$refs.qcut1.getCropData() + '" />';
    },
    cut2: function () {
      console.log(this.$refs.qcut1.getCropFile());

      document.getElementById("qcut2").innerHTML =
        '<img src="' + this.$refs.qcut2.getCropData() + '" />';
    },
  },
};
</script>

<style>
</style>
