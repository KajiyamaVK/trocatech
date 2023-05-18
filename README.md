<h1  align="center">Hi 👋, I'm Victor Kajiyama</h1>

<h3  align="center">
Projeto <i>TrocateTech</i> é um projeto que foi feito para a empresa de freelance Vibbra. Feito com minha paixão acima de tudo uma vez que foi com ele que aprendi a ver como o mundo de freelance é maravilhoso por te dar a chance de usar tudo o que temos de melhor. 
</h3>

- [Vídeos de Considerações {#v}](#vídeos-de-considerações-v)
- [1. Descrição da aplicação {#1}](#1-descrição-da-aplicação-1)
  - [Público Alvo](#público-alvo)
  - [O que a aplicação contempla](#o-que-a-aplicação-contempla)
- [2.\<Técnico\>Divisão das pastas do projeto {#2}](#2técnicodivisão-das-pastas-do-projeto-2)
- [3. Imagem Docker {#3}](#3-imagem-docker-3)
- [4. Link para a aplicação {#4}](#4-link-para-a-aplicação-4)
- [5. Considerações finais {#5}](#5-considerações-finais-5)

<h3  align="left">Se conecte comigo no Linkedin</h3>

<p  align="left">

<a  href="https://linkedin.com/in/https://www.linkedin.com/in/victor-kajiyama/"  target="blank"><img  align="center"  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"  alt="https://www.linkedin.com/in/victor-kajiyama/"  height="30"  width="40"  /></a>

</p>

<h3  align="left">Usados nesse projeto</h3>
 <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"  alt="docker"  width="40"  height="40"/>  </a>  <a  href="https://dotnet.microsoft.com/"  target="_blank"  rel="noreferrer">     <img  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"  alt="git"  width="40"  height="40"/>  </a>  <a  href="https://www.w3.org/html/"  target="_blank"  rel="noreferrer">  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"  alt="html5"  width="40"  height="40"/>  </a>  <a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"  target="_blank"  rel="noreferrer">  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"  alt="javascript"  width="40"  height="40"/>  </a>  <a  href="https://jestjs.io"  target="_blank"  rel="noreferrer">  <img  src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"  alt="jest"  width="40"  height="40"/>  </a>  <a  href="https://nextjs.org/"  target="_blank"  rel="noreferrer">  <img  src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"  alt="nextjs"  width="40"  height="40"/>  </a>  <a  href="https://nodejs.org"  target="_blank"  rel="noreferrer">  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"  alt="react"  width="40"  height="40"/>  </a>  <a  href="https://sass-lang.com"  target="_blank"  rel="noreferrer">  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"  alt="sass"  width="40"  height="40"/>  </a>  <a  href="https://tailwindcss.com/"  target="_blank"  rel="noreferrer">  <img  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"  alt="tailwind"  width="40"  height="40"/>  </a>  <a  href="https://www.typescriptlang.org/"  target="_blank"  rel="noreferrer">  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"  alt="typescript"  width="40"  height="40"/>  </a>  <a  href="https://www.adobe.com/products/xd.html"  target="_blank"  rel="noreferrer">  </p>

# Vídeos de Considerações {#v}

Vídeo sobre considerações técnicas:
[Vídeo Técnico](https://youtu.be/IA2SoKOi9IM)

Vídeo de uso/testes
[Vídeo de uso](https://youtu.be/Imd5CMbL3Gg)

# 1. Descrição da aplicação {#1}

O cenário proposto na aplicação seria efetuar a criação de uma interface onde é possível cadastrar,excluir,editar e pesquisar pontos turísticos.

## Público Alvo

Profissionais que atuam em uma rede de indicação de trabalhos freelance que precisam comprar, vender ou trocar produtos de tecnologia (notebooks, mouses, teclados, etc) que possibilitem a realização de seus trabalhos de forma rápida, otimizando seus custos com estruturas de trabalho.

## O que a aplicação contempla

**Comunicações com a api**
As APIs não estão disponíveis, portanto, erros serão disparados no console, mas, isso é apenas para de demonstrar que a comunicação foi, de fato, configurada. A parte inicial da URL foi guardada como variável de ambiente.

**Login**
A tela de login contempla a parte do front-end na comunicação com o backend e no storage do JWT token nos Cookies. É importante salientar que como a API não está funcional, foi gerado o token com a biblioteca UUI e guardado.

_Tratamentos de erros_
Os campos de e-mail e senha estão avisando quando seus valores são inválidos

**Tela inicial**
A tela inicial é onde listamos todas as negociações disponíveis na plataforma. Graças a tecnologia de SSG do NextJS, é possível coletarmos todas as negociações ao mesmo tempo, e guardá-las na memória, assim, não será necessário que a plataforma esteja sempre consultando o banco de dados e, consequentemente, aliviando o Banco de dados.

A regeneração dos dados pode ocorrer de tempos em tempos (o que é inviável para o negócio proposto pela plataforma), ou a cada mudança nas informações. Como é uma plataforma para usuário de uma empresa, e não para milhões de pessoas, foi considerado que o SSG era a melhor abordagem.

Graças ao SSG, o filtro que consta em tela pode filtrar as informações em tempo real - tirando a necessidade de efetuar o filtro e ter que ser acionado a partir de um botão.

**Tela de cadastro das negociações**

A tela de cadastro, visualmente, é uma coisa bem simples. Porém, a tecnologia de componentização traz todo o poder de trabalharmos com componentes separados, evitando assim, muito re-uso de códigos. Todo controle de estados também são controlados pelo _Context API. _

**Testes**
Alguns poucos módulos contemplam o uso de testes automatizados. Dentro do projeto é possível efetuar o teste com JEST/React-Testing-Library.

**Typescript**
O uso de typescript aumenta a complexidade e o tempo de desenvolvimento da aplicação, porém, diminui consideravelmente o tempo gasto com bugs que surgem.

# 2.<Técnico>Divisão das pastas do projeto {#2}

O processo de componentização e tipagem (Typescript) de um projeto é algo sensacional, mas, exigem uma grande habilidade de organização.

As pastas estão divididas em:

**Components**
Pastas onde foram separados os componentes usados nas páginas.

**Contexts**
Os contextos criados com intuito de compartilhar os estados de outros components.

**Funções**
Algumas funções foram separadas nessa pasta, porém, apenas funções que possam ser reaproveitadas por outros componentes, senão, elas são criadas dentro dos próprios componentes.

**Interfaces**
Interface de objetos que foram criados a fim de dirimir casos de erros.

**Pages**
Rotas da aplicação

# 3. Imagem Docker {#3}

Apesar de termos um link com o projeto já em deploy, caso for necessário, favor usar a imagem Docker.
kajiyamavk/trocatech

# 4. Link para a aplicação {#4}

Caso não queira trabalhar com Docker, não tem problema. Entre em https://trocatech-ngp9yyge3-kajiyamavk.vercel.app/

# 5. Considerações finais {#5}

O mundo freelance é esplêndido para o desenvolvedor. Sou uma pessoa que não gosta de ficar parado. Sou uma pessoa que faz questão de não ficar parado. Acho tudo interessante, e acredito que o aprendizado deve ser contínuo. Não estudo as questões da tecnologia por obrigação, mas por sede. Agradeço à Vibbra pela oportunidade gigante de ter participado um pouco desse projeto. Infelizmente, muitos pontos não puderam ser aplicados uma vez que o escopo não estava abordando os assuntos pendentes, mas isso não muda a experiência incrível que foi.
