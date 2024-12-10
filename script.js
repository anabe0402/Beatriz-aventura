const story = {
    start: {
        text: "Você acorda em uma praia deserta, cercada por uma densa floresta. O que você faz?",
        choices: [
            { text: "Explorar a floresta", next: "forest" },
            { text: "Caminhar pela praia", next: "beach" },
        ],
    },
    forest: {
        text: "Você entra na floresta e encontra um rio. O que você faz?",
        choices: [
            { text: "Seguir o rio", next: "river" },
            { text: "Procurar por comida", next: "food" },
        ],
    },
    beach: {
        text: "Você caminha pela praia e encontra um barco velho. O que você faz?",
        choices: [
            { text: "Investigar o barco", next: "boat" },
            { text: "Continuar andando", next: "walk" },
        ],
    },
    river: {
        text: "Você segue o rio e encontra uma cachoeira com um esconderijo atrás dela. Fim da aventura!",
        choices: [],
    },
    food: {
        text: "Você encontra frutas, mas também um grupo de macacos. Eles te expulsam! Fim da aventura!",
        choices: [],
    },
    boat: {
        text: "Você entra no barco e encontra suprimentos. Você consegue sobreviver por mais um dia. Fim da aventura!",
        choices: [],
    },
    walk: {
        text: "Você continua andando e encontra outro sobrevivente. Juntos, vocês traçam um plano para escapar. Fim da aventura!",
        choices: [],
    },
};

let currentNode = "start";

function chooseOption(optionIndex) {
    const node = story[currentNode];
    if (node.choices && node.choices[optionIndex - 1]) {
        currentNode = node.choices[optionIndex - 1].next;
        updateStory();
    }
}

function updateStory() {
    const node = story[currentNode];
    document.getElementById("story-text").innerText = node.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    node.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => chooseOption(index + 1);
        choicesDiv.appendChild(button);
    });
}

// Inicializa a história
updateStory();
