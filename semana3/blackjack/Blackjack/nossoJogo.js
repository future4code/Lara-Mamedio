console.log ("Bem vindo ao jogo de Blackjack!")

if (confirm ("Quer iniciar uma nova rodada?") === true) {
   //USUARIO

   const carta = comprarCarta();
   const carta2 = comprarCarta();

   const valorFinal = carta.valor + carta2.valor

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

}  else {
      console.log ("O jogo acabou")
}