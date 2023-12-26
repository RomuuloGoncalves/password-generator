const resultado = document.getElementById('result');
const btnCopiar = document.getElementById('copy');
const tamanho = document.getElementById('length');
const letraMaiuscula = document.getElementById('uppercase');
const numeros = document.getElementById('numbers');
const simbolos = document.getElementById('symbols');
const btnGerar = document.getElementById('generate');
const formulario = document.getElementById('passwordGeneratorForm');

const maiusculasCode = arrayMinusculaMaiuscula(65, 90);
const minusculasCode = arrayMinusculaMaiuscula(97, 122);
const numerosCode = arrayMinusculaMaiuscula(48, 57);
const simbolosCode = arrayMinusculaMaiuscula(33, 47)
	.concat(arrayMinusculaMaiuscula(58, 64))
	.concat(arrayMinusculaMaiuscula(91, 96))
	.concat(arrayMinusculaMaiuscula(123, 126));

btnCopiar.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const passwordToCopy = resultado.innerText;

	if (!passwordToCopy) return;

	textarea.value = passwordToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const carcteres = tamanho.value;
	const incluirMaiuscla = letraMaiuscula.checked;
	const incluirNumeros = numeros.checked;
	const incluirSimbolos = simbolos.checked;
	const senha = gerarSenha(
		carcteres,
		incluirMaiuscla,
		incluirNumeros,
		incluirSimbolos
	);
	resultado.innerText = senha;
});

let gerarSenha = (
	characterAmount,
	includeUppercase,
	includeNumbers,
	includeSymbols
) => {
	let charCodes = minusculasCode;
	if (includeUppercase) charCodes = charCodes.concat(maiusculasCode);
	if (includeSymbols) charCodes = charCodes.concat(simbolosCode);
	if (includeNumbers) charCodes = charCodes.concat(numerosCode);
	const passwordCharacters = [];
	for (let i = 0; i < characterAmount; i++) {
		const characterCode =
			charCodes[Math.floor(Math.random() * charCodes.length)];
		passwordCharacters.push(String.fromCharCode(characterCode));
	}
	return passwordCharacters.join('');
};

function arrayMinusculaMaiuscula(low, high) {
	const array = [];
	for (let i = low; i <= high; i++) {
		array.push(i);
	}
	return array;
}