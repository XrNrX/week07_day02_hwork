import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
new Vue({
  el: '#app',
  data: {
    totalWords: 0,
    words: ""

  },
  methods: {
    countAllWords: function () {
    this.totalWords = this.words.split(" ").length
    }
  }

  });
});
