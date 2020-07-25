## About this app
This project has been sent to me as a home challenge for a position that I was applying for. I added several layers of complexity, such as mixed state management with Apollo and Redux, handled errors in the UI, added some new features from both React and JS (such as Code Splitting and Optional Chaining (ES2020)) and much more.

Core technologies used: React, react-testing-library, GraphQL, Apollo, Redux (as a bonus), framer-motion.

## Live demo at https://dexmon-graphql-test.netlify.app

Pokemon Showcase           |  Single Pokemon
:-------------------------:|:-------------------------:
![](https://i.ibb.co/QFFXdPY/Soft-Plan-Project.png)  |  ![](https://i.ibb.co/bR3PsdY/download-3.png) 

PokeDex       |  Search Mechanism
:-------------------------:|:-------------------------:
![](https://i.ibb.co/s39Qm49/Soft-Plan-Project-3.png)  |  ![](https://i.ibb.co/MC1JS5P/Soft-Plan-Project-2.png) 


## How to run it

Simply type consecutively:

### `npm i`
### `npm start`

## Technical comments

Aproveitando o cunho do projeto, resolvi inserir alguns elementos extras, como ferramentas modernas. O recentemente introduzido Code Splitting, Optional Chaining (ES2020) e muitas outras são utilizadas livremente ao longo do projeto. O projeto contém algumas camadas extras, visando simular um projeto mais elaborado, contendo, por examplo, uma camada de proteção a erros de requests (front end). Por exemplo, se o servidor GraphQL requisitado não responder, o erro será, de maneira user friendly, disponibilizado na tela, a fim de assegurar uma experiência mais agradável.

## Issues

A única potencial dificuldade advinda do projeto foi a implementação de testings. Em particular, a dificuldade advém do fato de ter sido requisitado uma biblioteca específica, como minha experiência prévia era com Enzyme, isso acaba se tornando um grande empecilho, haja vista o tempo de entrega e que não é trivial adaptar testes a novas tecnologias. Por exemplo, a introdução de Redux (como um bônus) por cima do Apollo Client transforma o CRUD automaticamente em um projeto nada trivial, cujo teste de funcionalidade requer bastante minúcia. Comentários foram deixados dentro do arquivo de testes expandindo mais essa nuance.

## Proposal
![](https://i.ibb.co/bmNLF3s/softplan.png)

