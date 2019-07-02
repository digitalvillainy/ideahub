new Vue({
    el: '#admin',
    data:{
        message: `I'm working!`
    },
    created(){
        this.testConsole();
    },
    methods:{
        testConsole(){
            console.log(`Please fucking working`);
        }
    }
});
