/* Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
PS.
Ricordatevi di importare axios! https://axios-http.com/docs/intro */

const { createApp } = Vue;
createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        fetchEmail() {
            for (let i = 0; i < 10; i++) {
                axios 
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((res) => {
                    const email = res.data.response;
                    this.emails.push(email);
                })
            }
        }
    },
    created() {
        this.fetchEmail()
    },
}).mount('#app')

/* 
axios 
.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then((res) => {
const email = res.data.response;
this.emails.push(email);
}
)
*/