const app = new Vue({
  el: '#root',
  data: {
    emailNumber: 10,
    emails: [],
    arrayCompleted: false,
  },

  methods: {

    showEmails(){
      if(this.emails.length == this.emailNumber){
        this.arrayCompleted = true;
      }
    },

  },

  created(){
    for(let i = 0; i < this.emailNumber; i++){
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {

          this.emails.push(response.data.response);
          console.log(response.data.response);

          this.showEmails();
        });
    }
  },

});


  

