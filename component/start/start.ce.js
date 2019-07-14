new Vue({
    el: '#login',
    data: {
        user: {
            email: '',
            password: ''
        },
        loginAttempt : [
            {
                email: ''
            },
            {
                password: ''
            }
        ],
    },
    created(){
        let random = Math.random().toString(36).substr(2);
        localStorage.key =  random + random;
    },
    methods: {
        login() {
            this.encryptUser(this.user);
            api.post('Login', this.user)
                .then(function (response) {
                    if(typeof response.data.token !== 'undefined'){
                        localStorage.token = CryptoJS.AES.encrypt(JSON.stringify(response.data.token), localStorage.key);
                    }
                }).catch(function (error) {
                    console.error(error);
            })

        },
        registerUser(obj) {
            console.log(obj);
        },
        encryptUser(obj){
            // TODO: Passing encryption to PHP not working.
            this.loginAttempt[0].email = CryptoJS.AES.encrypt(JSON.stringify(obj.email), this.session).toString();
            this.loginAttempt[1].password = CryptoJS.AES.encrypt(JSON.stringify(obj.password), this.session).toString();
        },
        testSession(){
            if(typeof localStorage.token !== 'undefined' || typeof localStorage.time !== 'undefined'){
                let fooToken = CryptoJS.AES.decrypt(localStorage.token.toString(), localStorage.key);
                return JSON.parse(fooToken.toString(CryptoJS.enc.Utf8));
            }
        }
    },
});
