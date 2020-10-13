console.log ("Bem vindo ao jogo de Blackjack!")

if (confirm ("Quer iniciar uma nova rodada?") === true) {
   //USUARIO
   let carta
   let carta2

   while ((carta === "A") && (carta2 === "A")) {
      carta = comprarCarta();
      carta2 = comprarCarta();

      let valorFinal = carta.valor + carta2.valor
   }

   let array = []

   array.push (carta)
   array.push (carta2)

   console.log ("Usuário - cartas:", carta.texto, carta2.texto, "- pontuação", valorFinal)

   //COMPUTADOR

   const carta3 = comprarCarta();
   const carta4 = comprarCarta();

   const valorFinal2 = carta3.valor + carta4.valor

   console.log ("Computador - cartas:", carta3.texto, carta4.texto, "- pontuação", valorFinal2)

   //RESULTADO

   if (valorFinal > valorFinal2) {
      console.log ("O usuário ganhou!")
   }  else if (valorFinal < valorFinal2) {
      console.log ("O computador ganhou!")
   }  else {
      console.log ("Empate!")
   }

   /*if ((carta3 === "A") && (carta4 === "A")){
      const carta3 = comprarCarta();
      const carta4 = comprarCarta();
   }*/

}  else {
      console.log ("O jogo acabou")
}