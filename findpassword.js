var correctGuesses = 0; // Variável para saber se certificar se acertou nos números
var maxAttempt = 10; // Quantidade de vezes que poderá ter para o programa acertar nos números
var attempt = 0; // Quantidade de vezes que realmente fez as tentativas

// Valor variável que será de 1000 a 9000 [4 números] para guardar a password aleatória
// Vamos também torna-la numa string de forma a que seja fácil procurar os números
var password = Math.floor(1000 + Math.random() * 9000).toString();
var block = []; // Será uma array vazia onde iremos inserir os valores que já foram descobertos
var nArray = 0; // Esta variável servirá para saber em que posições deve ser mudado na array

console.log(password);
while (correctGuesses !== 4) {
    if (attempt === maxAttempt) { // Se o programa já passar as 10 vezes
        console.log('Starting over');
        
        // Reinicia-se os valores
        correctGuesses = 0;
        block = [];
    }

    // Se a array for 4, modificamos para 0 uma vez que só queremos adicionar 4 posições
    if (nArray == 4) 
      nArray = 0;
  
    var target = Math.floor(Math.random() * 10); // Aqui queremos um número aleatório de 0 - 100

    if (block[nArray] !== target) { // Se o valor não estiver dentro da array block
        if (password.charAt(nArray) == target) { // Se o número aleatório estiver incluído no ficheiro
            correctGuesses++;
          
            console.log('Found ' + correctGuesses + ' characters');
            block[nArray] = target; // Adicionamos o target ao block de forma a que ele não procure mais por ela
        }
        
        nArray++; // Incrementa-se
        attempt++; // Dá-se sempre +1 tentativa sempre que o programa estiver a entrar dentro do while
   }
}

console.log(block);
if (correctGuesses === 4)
  console.log('Terminal Hacked');