var app = new Vue({
  el: '#app', 
  data : {
    number:0
  },
  methods : {
    increment:function(){
      this.number++;
    },
    decrement:function(){
      this.number--;
    }
  }
});