# Weather App

<a href="https://luzin7.github.io/react-weather-app/" >Execute a aplicação clicando aqui!<a>

## Contexto
Este projeto foi desenvolvido como prática da biblioteca React.JS. Sendo o meu segundo projeto feito com a ferramenta, foi desenvolvido uma aplicação sobre clima(s), no qual é possível pesquisar cidades, visualizar sua temperatura e descrição sobre o tempo, além de ser possível favoritá-las. Tudo isso de forma dinâmica, usando formulários e o estado da aplicação.

## Técnologias usadas

Front-end:
> Desenvolvido usando: ES6, React, HTML5, CSS3, e AOS
<div style="display: inline_block"><br>
  <img align="left" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="left" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="left" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="left" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
</div>
</br>
</br>
</br>

## No decorrer desse projeto, foram aprendidos e exercitados os seguintes conceitos:
- Ler o estado de um componente e usá-lo para alterar o que exibimos no browser;
- Inicializar um componente, dando a ele um estado pré-definido;
- Atualizar o estado de um componente;
- Capturar eventos utilizando a sintaxe do React;
- Criar formulários utilizando sintaxe JSX com as tags : input;
- Transmitir informações de componentes pais para componentes filhos via callbacks.

## Para este projeto foi preciso implementar os seguintes requisitos:
## [REQUISITOS OBRIGATÓRIOS]

### Req - 01
- Na aplicação, o componente <App/> deverá ser responsável por conter
duas tags <section/>;
- A primeira <section/> conterá um <input/> do tipo "text" e um <button/>
com a Label "Search" ou "Pesquisar", dependendo do idioma escolhido para o projeto;

### Req - 02
- Transforme o <input/> responsável por receber o valor da pesquisa em um
componente controlado, no qual o valor digitado no campo é salvo no estado;

### Req - 03
- Crie uma função que será responsável por executar a requisição da API ao clicar
no botão "Search";
- Essa função pode ser feita numa pasta 'api', e exportada, para que sua execução seja
feita na função do App;
- Ao ser executada a função, o valor deverá ser salvo no estado, num formato de {Objeto};

### Req - 04
- Crie um componente <SearchedWeather/>;
- O componente <SearchedWeather/> deverá renderizar os valores contidos
no estado da aplicação que é responsável por guardar o clima pesquisado;
- O componente <SearchedWeather/> será chamado na segunda <section/> do
componente <App/>

### Req - 05
- Crie um <button/> na segunda section;
- Esse <button/> só deverá ser renderizado caso algum clima tenha sido pesquisado;
- O <button/> contém uma Label "Favorite"

### Req - 06
- Ao clicar no <button/> "Favorite", todas as informações do <SearchedWeather/>
deverão ser salvo em um outro estado que será um [Array de {Objetos}];

### Req - 07
- Crie um componente chamado <FavoriteWeathers/>;
- Esse componente deverá ser renderizado na segunda <section/> do componete <App/>;

### Req - 08
- O componente <FavoriteWeathers/> deverá renderizar cada objeto
do array de objetos que o estado controla;

### Req - 09
- Ao clicar em um clima salvo, ele deverá ser removido do estado;
</br>

## Instalando Dependências

> Frontend
```bash
cd react-weather-app/
npm install
``` 
> Executando a aplicação
  ```
    cd src/ && npm start
  ```
