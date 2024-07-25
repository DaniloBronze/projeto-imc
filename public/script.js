import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

function getFormValues() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const termoAceito = document.getElementById('invalidCheck').checked;
    const genero = document.getElementById('genero').value;
    const listaAfazeres = document.getElementById('lista-afazeres').value;

    return { peso, altura, termoAceito, genero, listaAfazeres };
}

function isValidForm({ peso, altura, termoAceito, genero, listaAfazeres }) {
    return !isNaN(peso) && !isNaN(altura) && termoAceito && genero && listaAfazeres;
}

function calculateImc(peso, altura) {
    return peso / (altura * altura);
}

function exibeImc(imc, resultadoElement, genero, listaAfazeres) {
    if (resultadoElement) {
        const { mensagem, consulta, mensagensAdicionais } = getImcMessage(imc, genero, listaAfazeres);

        resultadoElement.textContent = `Seu IMC é: ${imc.toFixed(2)} (${mensagem})`;

        if (consulta) {
            runConsulta(consulta, mensagensAdicionais);
        }
    }
}

function getImcMessage(imc, genero, listaAfazeres) {
    let mensagem, consulta = null, mensagensAdicionais = null
    
        if (imc < 18.5) {
            mensagem = "Abaixo do peso";
            consulta = `como ganhar massa muscular para ${genero}`;
            mensagensAdicionais = [
                "Você é tão magro que se sentar, virar a cabeça e mostrar a língua, fica parecendo um zíper!",
                "Valeu capa do Batman, daqui a pouco você some",
                "Você é tão magro(a) que pode usar um varal pra se proteger do sol!",
                "Você é tão magro(a) que, se virar de lado, some!",
                "Você é tão magro(a) que é a única mulher do mundo com duas costas!",
                "Você é tão magro(a) que precisa ficar no mesmo lugar duas vezes para conseguir ter sombra!",
                "Você é tão magro(a) que se colocar um casaco de peles fica parecendo um cachimbo!",
                "Você é tão magro(a) que não pode tomar banho pelo risco de cair no ralo!",
                "Você é tão magro(a) que compra roupas da Barbie! Literalmente!",
                "Você é tão magro(a) que se peidar anda pra frente"
            ];
        } else if (imc >= 18.5 && imc < 24.9) {
            mensagem = "Peso normal";
            return { mensagem: `(${mensagem})` };
        } else if (imc >= 25 && imc < 29.9) {
            mensagem = "Sobrepeso";
            consulta = `como emagrecer para ${genero}`;
            mensagensAdicionais = [
                "Caraca, você está imenso(a)! Hora de cuidar da saúde.",
                "Coitada da sua mulher/marido! Vamos dar uma olhada na dieta.",
                "Cuidado: um pouco menos de peso pode ser mais saudável.",
                "Oi Padre Infarto de Melo",
                "Que isso Insulina Julie, dá uma segurada",
                "Oi Bem frito de Paula",
                "Olá MACHADO ACÉM",
                "Parece que você está pronto para um concurso de comer! Hora de dar uma pausa!",
                "Você está mais 'cheinho' que uma almôndega no molho!",
                "Olha só, o seu IMC está pedindo férias para a balança!",
                "Você está com um 'extra' que nem o GPS consegue calcular!"
            ];
        } else {
            mensagem = "Obesidade";
            consulta = `como emagrecer para ${genero}`;
            mensagensAdicionais = [
                "É hora de mudar! Consulte um especialista sobre emagrecimento.",
                "Procure ajuda para uma dieta equilibrada.",
                "Sua saúde é importante! Considere planos para emagrecer.",
                "Catherine Teta-Jones",
                "Que isso Edson Celulite",
                "Rodízio Muniz tá maluco",
                "Cora Margarina, fecha a boca",
                "Baicon jackson, para!",
                "Kombi lotada, você tá sem limites",
                "Parece que a balança está pedindo um aumento de peso!",
                "Você é tão grandão(a) que precisa de uma cadeira maior para sentar!",
                "Seu IMC está pedindo uma reunião com o nutricionista!",
                "Seu peso é tão notável que até a gravidade está te admirando!"
            ];
        }

        if (listaAfazeres === 'Sim') {
            consulta += ` e mande uma lista de afazeres para gênero ${genero}`;
        }
        
        return { mensagem, consulta, mensagensAdicionais };
    
}

async function runConsulta(consulta, mensagensAdicionais) {
    try {
        const response = await fetch(`/api/generate?prompt=${encodeURIComponent(consulta)}`);
        const result = await response.json();
        const htmlResponse = marked.parse(result.response);

        const mensagemAleatoria = mensagensAdicionais[Math.floor(Math.random() * mensagensAdicionais.length)];
        document.querySelector('.piada').innerText = mensagemAleatoria;

        const resultado = document.querySelector('code');
        resultado.innerHTML += `<br><strong>Dica:</strong> ${htmlResponse}`;
    } catch (error) {
        console.error('Erro ao obter resposta do Gemini:', error);
        document.querySelector('code').innerHTML += `<br>Desculpe, houve um problema ao obter a recomendação.`;
    }
}


function initCalculaImc() {
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach((form) => {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const { peso, altura, termoAceito, genero, listaAfazeres } = getFormValues();
            if (isValidForm({ peso, altura, termoAceito, genero, listaAfazeres })) {
                const imc = calculateImc(peso, altura);
                exibeImc(imc, document.querySelector('code'), genero, listaAfazeres);
            } else {
                alert('Por favor, insira valores válidos para peso e altura, aceite os termos de uso e preencha todos os campos.');
            }
        });
    });
}



function initThemeDark() {
    const originalMoonIcon = `
    <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
    </svg>`;
    const newMoonIcon = `
    <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
    </svg>`;

    function toggleTheme() {
        const theme = document.body;
        const isDarkMode = theme.classList.toggle('dark');
        const moonIcon = document.getElementById('moon-icon');

        moonIcon.outerHTML = isDarkMode ? newMoonIcon : originalMoonIcon;

        document.getElementById('moon-icon').addEventListener('click', toggleTheme);

        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.toggle('dark', savedTheme === 'dark');
            document.getElementById('moon-icon').outerHTML = savedTheme === 'dark' ? newMoonIcon : originalMoonIcon;
        }
    }

    loadTheme();
    const moonIcon = document.getElementById('moon-icon');
    if (moonIcon) {
        moonIcon.addEventListener('click', toggleTheme);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initThemeDark();
    initCalculaImc();
});