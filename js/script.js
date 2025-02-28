const infos = {
    nome: 'Isa Alves',
    cargo: 'Estudante de Web Design',
    imagem: 'https://github.com/isalvesb.png',
    github: 'https://github.com/isalvesb',
    linkedin: 'https://www.linkedin.com/in/isamara-alves-0b75902aa/',
    minibio: 'Isa Alves é fotógrafa e tratadora de imagem, com vasta experiência na captura e edição de fotografias, sempre buscando realçar a beleza e a essência de cada momento através do olhar sensível e da técnica apurada. Formada como técnica em Processos Fotográficos, aprimorou suas habilidades tanto no estúdio quanto no tratamento digital, desenvolvendo um olhar criativo e detalhista para a composição visual.
    Atualmente, cursa Web Design na FIAP, onde expande seu repertório criativo ao explorar o universo digital, integrando suas habilidades visuais à criação de interfaces e experiências digitais envolventes.Apaixonada pela estética e pela comunicação visual, busca unir suas duas paixões para entregar projetos completos e impactantes.',
};

document.getElementById('imagem').src = infos.imagem;
document.getElementById('nome').innerHTML = infos.nome;
document.getElementById('cargo').innerHTML = infos.cargo;
document.getElementById('minibio').innerHTML = infos.minibio;
document.getElementById('github').href = infos.github;
document.getElementById('linkedin').href = infos.linkedin;
