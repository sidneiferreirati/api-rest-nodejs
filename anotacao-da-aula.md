1- Adicionando Typescript no node -> npm i typescript@5.5.4 @types/node@20.14.12 -D

2- Conversao de arquivo de ts para js
npx tsc src/server.ts

2.a => convertendo o arquivo vai aparecer o arquivo em js
2.a => convertido o arquivo podemos executar com o comando node src/server.js

3 -> instalação do tsx -> npm i tsx@4.16.2 -D
3.a serve para executar o arquivo ts sem precisar a conversao

4 -> Configurando o typescript -> https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
4.a -> npx tsc -init -> Arquivo tsconfig.json vai ser criado

5 => instalação do express -> npm i express@4.19.2
5.a => precisa instalar a types@express => npm i --save-dev @types/express
