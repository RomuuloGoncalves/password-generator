const resultado = document.getElementById('result');
const btnCopiar = document.getElementById('copy');
const formulario = document.getElementById('passwordGeneratorForm');

const maiusculasCode = gerarArray(65, 90);
const minusculasCode = gerarArray(97, 122);
const numerosCode = gerarArray(48, 57);
const simbolosCode = gerarArray(33, 47)
    .concat(gerarArray(58, 64))
    .concat(gerarArray(91, 96))
    .concat(gerarArray(123, 126));

function gerarArray(inicio, fim) {
    return Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);
}

btnCopiar.addEventListener('click', async () => {
    const senha = resultado.innerText;
    if (!senha) return;

    try {
        await navigator.clipboard.writeText(senha);
        const iconOriginal = btnCopiar.innerHTML;
        btnCopiar.innerText = '✅';
        setTimeout(() => btnCopiar.innerHTML = iconOriginal, 1500);
    } catch (err) {
        console.error('Erro ao copiar', err);
    }
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const config = {
        tamanho: document.getElementById('length').value,
        maiusculas: document.getElementById('uppercase').checked,
        numeros: document.getElementById('numbers').checked,
        simbolos: document.getElementById('symbols').checked
    };

    resultado.innerText = gerarSenha(config);
});

const gerarSenha = ({ tamanho, maiusculas, numeros, simbolos }) => {
    let charCodes = [...minusculasCode];
    if (maiusculas) charCodes = charCodes.concat(maiusculasCode);
    if (simbolos) charCodes = charCodes.concat(simbolosCode);
    if (numeros) charCodes = charCodes.concat(numerosCode);

    const senhaFinal = Array.from({ length: tamanho }, () => {
        const codigo = charCodes[Math.floor(Math.random() * charCodes.length)];
        return String.fromCharCode(codigo);
    });

    return senhaFinal.join('');
};