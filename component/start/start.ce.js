new Vue({
    el: '#login',
    data: {
        user: {
            email: '',
            password: ''
        },
        loginAttempt : {}
    },
    created() {
        this.beginSession();
    },
    methods: {
        login() {
            this.encryptUser(this.user);
            api.post('Login', this.loginAttempt)
                .then(function (response) {
                    console.log(response.data.token);
                }).catch(function (error) {
                    console.log(error);
            })

        },
        registerUser(obj) {
            console.log(obj);
        },
        encryptUser(obj){
            this.loginAttempt.email = CryptoJS.AES.encrypt(JSON.stringify(obj.email), 'tunnel').toString();
            this.loginAttempt.password = CryptoJS.AES.encrypt(JSON.stringify(obj.password), 'tunnel').toString();
            console.log(this.loginAttempt);
        },
        beginSession: function () {
            console.log('Start');
        }
    },
});
