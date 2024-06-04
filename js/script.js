const infos = {
    nome: 'Isa Alves', 
    cargo: 'UI Design',
    imagem: 'https://github.com/isalvesb.png',
    github: 'https://github.com/isalvesb',
    linkedin: 'https://www.linkedin.com/in/isamara-alves-0b75902aa/',
    minibio: 'Formada em processos fotográficos pela Instituição Senac São Paulo.
    Trabalhei como tratadora de imagem para Larissa Zimbres Fotografia e para uma fotógrafa iniciante, Patrícia Oliveira, que fazia trabalhos para a Vitrine Sampa. 
    Possuo experiência com diagramação de álbuns, também prestei assistência em ensaios e eventos, além de realizar ensaios por conta própria. Estou estudando e me especializando para poder mudar de carreira, pois possuo interesse em atuar como UI Design.',
};

document.getElementById('imagem').src = infos.imagem;
document.getElementById('nome').innerHTML = infos.nome;
document.getElementById('cargo').innerHTML = infos.cargo;
document.getElementById('minibio').innerHTML = infos.minibio;
document.getElementById('github').href = infos.github;
document.getElementById('linkedin').href = infos.linkedin;
