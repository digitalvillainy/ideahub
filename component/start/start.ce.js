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
        valid: false,
    },
    mounted() {
        if (this.loggedIn) {
            api.get('register').then(res => {
                this.localUser = res.data;
                localStorage.User = JSON.stringify(res.data);
            }).catch(error => {
                this.loggedIn = false;
                this.logout();
            })
        }
    },
    methods: {
        logout() {
            if (this.loggedIn) {
                api.delete('login').then(res => {
                    this.updateSession(false);
                })
            } else {
                this.updateSession(false);
            }
        },
        login() {
            // TODO: Replaced with Hashed Password
            this.valid = true;
            api.post('Login', this.user)
                .then(function (response) {
                    this.updateSession(response.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    this.localUser = response.data.user;
                }).catch(function (error) {
                this.valid = false;
            });
            window.location.href = '{{base}}home';
        },
        updateSession(token) {
            if (token) {
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


