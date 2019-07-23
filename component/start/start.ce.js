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
            api.post('Login', this.user)
                .then(function (response) {
                    if(typeof response.data.token !== 'undefined'){
                        console.log(response.data.token);
                    }
                }).catch(function (error) {
                    console.error(error);
            })

        },
        registerUser(obj) {
            console.log(obj);
        },
        testSession(){
            if(typeof localStorage.token !== 'undefined' || typeof localStorage.time !== 'undefined'){
                let fooToken = CryptoJS.AES.decrypt(localStorage.token.toString(), localStorage.key);
                return JSON.parse(fooToken.toString(CryptoJS.enc.Utf8));
            }
        }
    },
});
