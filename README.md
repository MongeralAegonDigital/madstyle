# MAD Style
Style Guide utilizando o Harp.js com Livereload integrado.

## Como utilizar?

### Dependências
- [Node.js](http://nodejs.org)
- [Harp.js](http://harpjs.com)

O Harp permite a utilização tanto do SASS, LESS e Stylus.
Utilizaremos o SASS, logo precisamos ter o Ruby instalado
ou então utilizar o [libSass](http://sass-lang.com/libsass):

- [Ruby](http://rubyinstaller.org/)
- [SASS](http://sass-lang.com/)


#### Dependencias de desenvolvedor
- [Livereload.js](https://github.com/livereload/livereload-js)

#### Instalando as dependências

[Node.js](http://nodejs.org): Mais informações para instalação no site do node.

Harp.js
```
sudo npm install -g harp
```

[Ruby](http://www.ruby-lang.org/en): Mais informações para instalação no site do Ruby.

SASS
```
gem install sass
```

Livereload

```
npm install
```

#### Rodando o projeto

```
node watch.js
```

### Atualizando o core do Mad Style no seu projeto
```
npm update

```

#### Atualixando o Browserify
```
npm install -g browserify
```


#### Dúvidas
Caso tenha alguma dúvida sobre o livereload, o Caio Vaccaro tira nesse link: [HarpLiveReload](https://libraries.io/github/caiovaccaro/HarpLivereload)