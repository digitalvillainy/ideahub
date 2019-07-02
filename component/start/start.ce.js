new Vue({
    el: '#login',
    data: {
        user: {
            name: '',
            password: ''
        }
    },
    methods: {
        login(obj) {
            let sessionKey = [];
            for (let index in obj){
                sessionKey.push(obj.index);
            }
            let loginAttempt = CryptoJS.AES.encrypt(JSON.stringify(sessionKey),'tunnel').toString();
            console.log(loginAttempt);
        },
        registerUser(obj) {
            console.log(obj);
        }
    }
});
