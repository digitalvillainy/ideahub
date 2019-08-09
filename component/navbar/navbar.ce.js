Vue.component('navbar',{
    data: ()=>{
        return{
            user: {
                name: localStorage.User,
                profilePic: '',
            }
        }
    },
    template: document.querySelector('#navbar').innerHTML
});
