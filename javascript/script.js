const app = new Vue({
    el: '#app',
    data: {
        tiramisu: [
            {
                id: 1,
                nome: 'zucchero',
                q: 120,
                um: 'g.',
                check: false
            },
            {
                id: 2,
                nome: 'mascarpone',
                q: 500,
                um: 'g.',
                check: false
            },
            {
                id: 3,
                nome: 'caffe',
                q: 300,
                um: 'ml.',
                check: true
            },
            {
                id: 4,
                nome: 'uova',
                q: 10,
                um: 'pz.',
                check: false
            },
            {
                id: 5,
                nome: 'savoiardi',
                q: 500,
                um: 'g.',
                check: false
            },
            {
                id: 6,
                nome: 'cacao',
                q: 50,
                um: 'g.',
                check: true
            },
            {
                id: 7,
                nome: 'marsala',
                q: 40,
                um: 'ml.',
                check: false
            },
        ],
        newIngredient: '',
        newQ: null,
        newCheck: null,
        newUm: null,
        important: null
    },
    methods: {
        add() {
            const addIngredient = {
                nome: this.newIngredient,
                q: this.newQ,
                um: this.newUm + '.',
                check: this.newCheck ? false : true
            }
            this.important ? this.tiramisu.unshift(addIngredient) : this.tiramisu.push(addIngredient);
            this.newIngredient = '';
            this.newQ = null;
            this.newUm = '';
            this.$refs.input.focus();
        },
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
    }
})