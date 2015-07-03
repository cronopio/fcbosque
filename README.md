# Plataforma Presentaciones Fundación Casa del Bosque
La plataforma para las presentaciones es un proyecto del laboratorio tecnológico de la [Fundacion Casa del Bosque](http://www.fcbosque.org/).

### Dominio
http://fcbosque.js.org

Este proyecto fue un trabajo colaborativo desde la [Fundación Casa del Bosque](http://www.fcbosque.org) que se realizo hace algunos años atras. Varios colaboradores crearon diferentes diapositivas o slides con diferentes temas, usando diferentes herramientas, dicidí que este trabajo debe preservarse asi que reorganice el codigo, elimine algunas herramientas y ahora es posible ver el contenido sin necesidad de ningun servidor corriendo usando Github Pages.

Algunas diapositivas usan las siguientes herramientas:

 * [deck.js](http://imakewebthings.github.com/deck.js/)
 * [Jade](http://jade-lang.com/)

 ## Charlas creadas hasta el momento

* JavaScript del lado del servidor usando Node.JS
* La web como plataforma de desarrollo
* Arte Digital para la No Violencia contra la Mujer
* Express uno de los frameworks para desarrollo Web en NodeJS
* Criptografía para seres humanos. Usando GPG y GNU/Linux
* Seguridad con Firefox
* Paquetes deb y rpm, gestión e interfaces apt, aptitude y synaptic
* Introduccion a Git

## Correr localmente

Debes tener instalado `git` y clonar este repositorio, luego entra al directorio del projecto para ejecutar el siguiente:

```bash
$ npm install
```

Ese comando instalara las dependencias y con este correra localmente:

```bash
$ npm start
```

## Agradecimientos.
Thanks to [Caleb Troughton](https://github.com/imakewebthings) for bulding [deck.js](http://imakewebthings.github.com/deck.js/), a modern presentation tool.
 
Deck.js is a big inspiration for JavaScript developers dealing with talks and presentations.

Thanks a lot for [Chris Jaure](https://github.com/chrisjaure) and his [deckjs-remote](https://github.com/cronopio/deckjs-remote) extension. 
Thanks for their initial work sync the slides using [Node.JS](http://nodejs.org). 
I use their work, changing the server side for [express](http://expressjs.com/). The client-side work is the same. Thanks Chris Jaure!