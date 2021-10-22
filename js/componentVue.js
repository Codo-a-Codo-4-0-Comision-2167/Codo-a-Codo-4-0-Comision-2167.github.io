Vue.component('controls', {
    template: "<h1>Spotify - Tema musical </h1>"
})

let myJSONString = '{"message":"Hello World","otraData":"Bla bla","control_enabled":true,"counter":0,"current_time":0,"total_time":0}'

let myJSONObject = JSON.parse(myJSONString)

const app = new Vue({
    el: '#vueJS',
    data: myJSONObject,
    methods: {
        incrementCounter() {
            this.counter += 1;
        },
        decreaseCounter() {
            if (this.counter > 0) {
                this.counter -= 1;
            }
        }
    },
    computed: {
        remainingTime() {
            return this.total_time - this.current_time;
        }
    }
});

app.total_time = 100; // El tiempo de la musica es 100 segundos


fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => { 
        console.log(data)

        app.message = data.results[0].picture.medium;

    });