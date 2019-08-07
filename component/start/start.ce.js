new Vue({
    el: '#login',
    data: {
        user: {
            email: '',
            password: ''
        },
        loggedIn: localStorage.token,
        localUser: {},
        showModal: false,
    },
    mounted(){
        if (this.loggedIn) {
            api.get('register').then(res =>{
                this.localUser = res.data;
                localStorage.User = JSON.stringify(res.data);
            }).catch(error => {
                this.loggedIn = false;
                this.logout();
            })
        }
    },
    methods: {
        logout(){
            if(this.loggedIn){
                api.delete('login').then(res => {
                    this.updateSession(false);
                })
            } else {
                this.updateSession(false);
            }
        },
        login() {
            // TODO: Replaced with Hashed Password
            api.post('Login', this.user)
                .then(function (response) {
                    if(typeof response.data.token !== 'undefined'){
                        localStorage.token = response.data.token;
                        localStorage.user = response.data.user;
                    }
                }).catch(function (error) {
                    console.error(error);
            }).then(function () {
                window.location.href = '{{base}}home'
            });
                this.updateSession(this.loggedIn);
        },
        registerUser(obj) {
            // TODO: Create Register User
            console.log('this is a test');
            window.location.href = '{{base}}register'
        },
        updateSession(token){
            if(token){
                localStorage.token = token;
                this.loggedIn = token;
            } else {
                api.delete('login');
                delete localStorage.user;
                delete localStorage.token;
                this.localUser = {};
                this.loggedIn = false;
            }
        },
    },
});


