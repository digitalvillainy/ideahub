Vue.component('search', {
    data: () => {
        return {
            terms: ''
        }
    },
    mounted(){

        // TODO: Update to do an api call to search endpoint after story is created
      window.addEventListener('keypress', (e) => {
          if(e.key === 'Enter'){
              console.log(this.terms);
              this.terms = '';
          }
      })
    },
    methods: {
        search(terms){
            console.log(terms);
        }
    },
    template: document.querySelector('#search').innerHTML
});
