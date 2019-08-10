Vue.component('profile',{
    data: () => {
        return {
            wu: 'tang',
        }
    },
    mounted() {
        this.profileOutput()
    },
    methods: {
        profileOutput() {
            console.log(this.wu);
        }
    },
    template: document.querySelector('#profile').innerHTML
});
