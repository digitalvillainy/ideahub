Vue.component('register-form', {
    data: () => {
        return {
            username: '',
            firstName: '',
            lastName: '',
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
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('User', res.data.user_name);
                this.loggedIn = res.data.token;
                this.process = false;
            }).catch((error) => {
                this.duplicate = true;
                this.processing = false;
            })
        },
        clearFields() {
            this.email = '';
            this.username = '';
            this.password = '';
        }
    },
    template: document.querySelector('#register').innerHTML
});
