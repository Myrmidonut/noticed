const app = new Vue({
  delimiters: ["[[", "]]"],
  el: "#app",
  data: {
    "message": "my Vue",
    "json": undefined,
    "lists": undefined
  },
  methods: {
    getData: function() {
      fetch("/get_all")
      .then(res => res.json())
      .then(data => {
        this.lists = data
      })
    }
  }
})

app.getData()