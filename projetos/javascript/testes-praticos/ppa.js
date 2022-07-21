/* ataque x pedra > ataque 
ataque x papel > ataque
ataque x ataque > aniquilacao mutua 

pedra x ataque > ataque
pedra x papel > pedra
pedra x pedra > sem vencedores

papel x ataque > ataque
papel x pedra > pedra
papel x papel > ambos ganham*/

let jogador1 = 'pedra';
let jogador2 = 'pedra';

if (jogador1 === jogador2) {
  switch (jogador1) {
    case 'ataque':
      console.log('Aniquilacao mutua');
      break;
    case 'pedra':
      console.log('Sem ganhador');
      break;
    case 'papel':
      console.log('Ambos venceram');
      break;
    default:
      console.log('default1');
      break;
  }
} else if (jogador1 !== jogador2) {
  if (jogador1 === 'ataque') { 
    console.log('Jogador 1 venceu');
} else if (jogador2 === 'ataque') { 
    console.log('Jogador 2 venceu');
} else if (jogador1 === 'pedra') { 
    console.log('Jogador 1 venceu');
} else if (jogador2 === 'pedra') { 
    console.log('Jogador 2 venceu');
}
  }  
