`npm init`: Exibe um miniquetionario para auxiliar na criação e descrição do package.json do seu projeto;
`npm install nome_do_módulo` : instala um módulo no projeto;
`npm install -g nome_do_módulo` : instala o módulo globalmente na sua maquina;
`npm install nomde_do_módulo --save` : instala o módulo e adiciona-o no arquivo package.json, dentro do atribudo "dependencias"(vira dependencia do projeto);
`npm install nomde_do_módulo --save-dev` : instala o módulo e adiciona0o no arquivo package.json, dentro do atributo"devDependencies"(Módulo usado apenas para desenvolvimento);
`npm list ` : lista todos os módulos que foram instalados no projeto;
`npm list -g` : Lista todos os módulos globais que foram instalados;
`npm remove nomde_do_módulo` : Desinstala um módulo do projeto;
`npm remove -g nome_do_módulo` : Desinstala um módulo global;
`npm remove nomde_do_módulo --save` : Desinstala um módulo fo projeto, removendo também do atributo "dependencies" do package.json;
`npm remove nomde_do_módulo --save-dev` : Desinstala um módulo do projeto, removendo também do atributo "devDependencies" do package.json;
`npm update nomde_do_módulo` : Atualiza a versão de um módulo do projeto;
`npm update -g nomde_do_módulo` : Atualiza a ver~sao do módulo global;
`npm -v` : Exibe a versão atual do NPM;
`npm adduser nome_do_usuario` : Cria um usuário no site; https://npmjs.org
`npm whoami` : Exibe detalhes do seu perfil público NPM do usuário(é necessário criar um usuário com o comando anterior)
`npm publish` : publica um módulo no https://npmjs.org (é necessário ter uma conta primeiro);
`npm help` : exibe em detalhes todos os comandos.
`npm shrinkwrap` : Ele trava as verões de suas dependências detro do arquivo npm-shrinkWrap.json.

## Dicionario 
  Package.json - Descritor	de	módulos(Este	 arquivo	 é	 essencial	 para	 um	 projeto	 Node.js.	 Um
	package.json		 mal	 escrito	 pode	 causar	 bugs	 ou	 até	 impedir	 o
  funcionamento	 do	 seu	 projeto,	 pois	 ele	 possui	 alguns	 atributos
  chaves,	 que	 são	 compreendidos	 tanto	 pelo	 interpretador	 do
  Node.js	como	pelo	comando		npm	.)

  Para demonstar na prática, veja a seguir um exemplo de um simples package.json, que descreve os principais atributos de um módulo:
  - name : Nome pelo quak seu módulo será chamado via função `required('meu-primeiro-node-app`;
  - description : Descrevemos oque será este módulo. Ele deve ser escrito de  forma curta e claraa, fornecendo um resuno sobre oque será.
  - author - É um atributo que informa o nome do e-mail do autor. `author`;
  - version : Com o qual definimos a versão atual deste módulo, 1.2.3 
  - private : Inform se o Codigo será open-source ou não.
  ~~~Javascript
  {
    "name": "Meu-primeiro-node-app",
    "description": "Meu primeiro app Node.js",
    "author" : "User <user@gmail.com>",
    "version" : "1.2.3",
    "private" : true,
    "depencencies" : {
      "modulo-1" : "1.0.0",
      "modulo-2" : "-1.0.0",
      "modulo-3" : ">=1.0.00"
    }, 
    "devDependencies" : {
      "module-4" : "*"
      }
  }
  ~~~
 Os módulos no NOde.js trabalham em 3 niveis versionamento (1. Major 2. Minor 3. Patch)

- module-1 : Somente será instalado sua ver~sao fiza, a 1.0.0(Use esse tipo de versão para instalar dependencias)
- module-2 : módulo já possui uma certa flexibilidade de atualização. Ele usa o caractere ~, que permite atualizar um módulo a nível de patch(1.0.x) Geralmente essas atualizações são seguras
- modulo-3 : Atualiza versões que sejam maior ou igual a 1.0.0 em todos os níveis de versão. Em muitos casos, usar >= pode ser perigoso, pq a dependência pode ser atualizada a um nível major ou minor( as vezes pode quebrar a aplicação0
- modulo-4) : Utiliza o caractere *(asterisco). Este sempre pegará a última ver~sao do módulo em qualquer nível.(tem o mesmo comportamento do modulo-3)

  ~~~Javascript
  {
    "name": "Meu-primeiro-node-app",
    "description": "Meu primeiro app Node.js",
    "author" : "User <user@gmail.com>",
    "version" : "1.2.3",
    "private" : true,
    "script" : {  "start" : "node main.js",
      "clean" : "rm -rf node_modules",
      "test" : "node teste.js"
    },
    "depencencies" : {
      "modulo-1" : "1.0.0",
      "modulo-2" : "-1.0.0",
      "modulo-3" : ">=1.0.00"
    }, 
    "devDependencies" : {
      "module-4" : "*"
      }
  }
  ~~~

### Script configurado
- `npm run start`
- `npm run clean`
- `npm run test`

