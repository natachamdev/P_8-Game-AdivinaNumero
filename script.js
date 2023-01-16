const app = new Vue ({
    el: "#app",
    data: {
        message : '',
        nUser : '',
        lifes : 3,
        winner : false,

    },
    
    created(){
     this.nAzar = Math.floor(Math.random() * 10) + 1;
    },
    
    

    methods: {
    adivinar(){



        if (this.lifes >0 ){ // condicion de vidas
            

            if (this.nUser >= 1 && this.nUser <= 10){ // rango correcto
                
                if (this.nUser == this.nAzar){ // lo adivina
                    this.message = "Felicidades adivinaste el numero 😎👌"
                    this.winner = true
                    return
                
                }else{ // no adivina procede pista
                    this.nUser > this.nAzar ? this.message = "El numero es mas bajo ⬇️" : this.message = "El numero es mas alto ⬆️"
                    this.nUser = '';
                }
                
            }else{
                this.message = 'Debe ingresar un numero entre el 1 y el 10';
            }
            
        }else{ // no tiene vidas
            this.message = "Agotaste el numero de intentos 😓"}  

            this.lifes--
    },
            
    reset () {
        this.lifes = 3;
        this.nUser = '';
        this.nAzar = Math.floor(Math.random() * 10) + 1;
        this.message = '';
        this.winner = false;
    }
}
})
