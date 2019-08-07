const registerForm = {
    name: 'register-form',
    data: () => {
        return {
            username: '',
            password: '',
            email: '',
            showModal: false,
            loggedIn: localStorage.token,
            processing: false,
            duplicate: false,
        }
    },
    mounted() {
        if (this.loggedIn) {
            api.get('register').then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error);
                this.logout();
            })
        }
    },
    methods: {
        logout() {
            delete localStorage.token;
            this.loggedIn = false;
        },
        register() {
            this.processing = true;
            api.post('register', this._data).then((res) => {
                localStorage.setItem('token', res.data.token);
                this.loggedIn = res.data.token;
                this.process = false;
            }).catch((error) => {
                this.duplicate = true;
                this.processing = false;
            })
        },
        registerUser(){
            console.log('wu-tang');
        }
    },
    template: document.querySelector('#register').innerHTML
};
