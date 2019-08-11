Vue.component('profile', {
    data: () => {
        return {
            user: {
                name: localStorage.User,
                email: localStorage.Email,
                token: localStorage.Token
            }
        }
    },
    mounted() {
        this.loadCurrentUser();
    },
    methods: {
        updateCurrentUser() {
            api.post('profile').then(res => {
                // TODO: update current user data assignment
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            }).then(() => {
                console.log('complete');
            });
            console.log(this.user.name);
        },
        loadCurrentUser() {
            api.get('profile').then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            }).then(() => {
                console.log(`complete`);
            });

        }
    },
    template: document.querySelector('#profile').innerHTML
});
