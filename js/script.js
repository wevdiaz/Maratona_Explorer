const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];

const answerElement = document.getElementById("resposta");

function checkInputValue(input) {
    
    if (input === "") {
        answerElement.textContent = "";
        return false;
    }

    return true;
}


function disappearMessage(message) {
    message.style.opacity = "0";
}

function askQuestion() {
    const inputValue = document.querySelector(".container input[name='question']").value;
    const checkInputField = checkInputValue(inputValue);
    
    if (!checkInputField) {
        return alert("Faça alguma pergunta abaixo!");
    }

    const totalAnswers = answers.length;
    const numberRandom = Math.floor(Math.random() * totalAnswers);

    const divQuestion = `<div>${inputValue}</div>`;
    
    answerElement.innerHTML = divQuestion + "<br />" + answers[numberRandom];   
    answerElement.style.opacity = "1";

    setTimeout(disappearMessage, 3000, answerElement);
    
}

function clearQuestion() {
    const inputValue = document.querySelector(".container input[name='question']");
    const checkInputField = checkInputValue(inputValue.value);
    
    if (!checkInputField) {
        return alert("Faça alguma pergunta abaixo!");
    }

    inputValue.value = "";
    inputValue.focus();
}
