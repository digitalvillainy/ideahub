new Vue({
    el: '#login',
    data: {
        user: {
            email: '',
            password: ''
        }
    },
    created() {
        this.beginSession();
    },
    methods: {
        login(obj) {
            let loginAttempt = CryptoJS.AES.encrypt(JSON.stringify(obj), 'tunnel').toString();
            console.log(loginAttempt);
            axios.get('./Login', {
                params: {
                    email: obj.email,
                    password: obj.password
                }
            })
                .then(response => {
                    console.log(response.data);
                    return response.data;
                })
        },
        registerUser(obj) {
            console.log(obj);
        },
        beginSession: function () {
            /*axios.get('./Profile')
                .then(function (response) {
                    console.log(response);
            })*/
        }
    },
});
