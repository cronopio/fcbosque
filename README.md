# Plataforma Presentaciones Fundación Casa del Bosque
La plataforma para las presentaciones es un proyecto del laboratorio tecnológico de la [Fundacion Casa del Bosque](http://www.fcbosque.org/).

### Dominio Temporal
http://fcbosque.jit.su

Este proyecto busca ofrecer una plataforma que permita la creación de presentaciones, sin preocuparse por los colores, el estilo o la visualización,
únicamente enfocandose en el cotenido de cada **slide** o diapositiva, además de esto el laboratorio tecnológico busca estar a la altura en las nuevas
tendencias de construcción de aplicaciones web _escalables_ y esta plataforma es una prueba de ello.

La plataforma está construida sobre:

 * [Node.js](http://www.nodejs.org/)
 * [Express](http://expressjs.com/)
 * [Socket.io](http://socket.io/)
 * [deck.js](http://imakewebthings.github.com/deck.js/)

Especial agradecimiento para [Nodejitsu](http://nodejitsu.com/) por permitirnos alojar la aplicación en su infraestructura.

![Nodejitsu Rulezzz](http://github.com/cronopio/nodeSlides/raw/master/public/images/nodejitsu-logo.png)

## Charlas creadas hasta el momento

* JavaScript del lado del servidor usando Node.JS
* La web como plataforma de desarrollo
* Arte Digital para la No Violencia contra la Mujer
* Express uno de los frameworks para desarrollo Web en NodeJS

## Como Agregar una charla?
Primero que todo necesita tener un ambiente con [Node.js](http://www.nodejs.org/) instalado y funcionando correctamente con [NPM](http://npmjs.org/)

```
  git clone https://github.com/cronopio/nodeSlides.git # Clonamos el repositorio
  cd nodeSlides/
  npm install # Para instalar las dependencias
  node app.js # Asi corremos la aplicacion.
```

Despues de que corra la aplicacion y veamos un mensaje como:

`Presentacion corriendo en el puerto 3000`

Quiere decir que podemos ingresar desde un navegador web a la direccion `http://localhost:3000` alli podremos ver la pagina de inicio
que contiene el listado de las diferentes conferencias subidas.

Lo primero es crear la plantilla inicial, debemos crear un directorio dentro de `views/` con nuestro nombre. Luego crearemos un directorio para nuestra presentacion, 
quedando algo como `views/cronopio/miPresentacion` en ese directorio es donde crearemos nuestra presentacion.

Cada presentacion esta compuesta por 2 archivos principales

 * `layout.jade`  Plantilla Base
 * `index.jade`   Slides

En este caso estamos usando [Jade](https://github.com/visionmedia/jade) como motor de templates para generar HTML, es muy recomendable aprenderlo a usar y es rapido de aprender. 
Si usted no se siente comodo usando Jade, entonces puede hacer la presentacion en HTML crudo, siguiendo las recomendaciones de [deck.js](http://imakewebthings.github.com/deck.js/)

Es recomendable familiarizarse con el funcionamiento de [deck.js](http://imakewebthings.github.com/deck.js/) para entender mejor lo que hay en `layout.jade`

Basicamente tendremos los siguientes elementos:

 * `title` Para definir el titulo de la pagina
 * `link` Para incluir los CSS del tema elegido de deck.js
 * Set de controles para el maestro
 * Uso de algunos plugins de deck.js (navigation, status, remote, etc)
 * Y terminamos incluyendo el JS necesario

Es muy recomendable que revise el archivo [layout.jade](https://github.com/cronopio/nodeSlides/blob/master/views/cronopio/nodejs/layout.jade) como una guia para hacer el suyo.

En el archivo `index.jade` tendremos entonces cada uno de los *<section>* con clase `slide` para que funcione deck.js

Por ultimo y para terminar simplemente edite el archivo `app.js` busque la parte donde se definen las rutas usando `app.get()` alli agregue su propia ruta:

```javascript
app.get('/miPresentacion', function(req, res) {
  res.render('cronopio/miPresentacion/index', { layout: 'cronopio/miPresentacion/layout' });
});
```

Recuerde cambiar los datos de nombre de usuario y nombre de la presentacion a los suyos.

Para verificar entre el navegador y valla a la direccion `http://localhost:3000/miPresentacion` para visualizar sus slides.

#### Como agregar mi presentacion al listado inicial?
TDD

#### Como modificar app.js cuando hice mi presentacion en HTML crudo.
TDD


## Agradecimientos.
Thanks to [Caleb Troughton] (https://github.com/imakewebthings) for bulding [deck.js](http://imakewebthings.github.com/deck.js/), a modern presentation tool.
 
Deck.js is a big inspiration for JavaScript developers dealing with talks and presentations.

Thanks a lot for [Chris Jaure](https://github.com/chrisjaure) and his [deckjs-remote](https://github.com/cronopio/deckjs-remote) extension. 
Thanks for their initial work sync the slides using [Node.JS](http://nodejs.org). 
I use their work, changing the server side for [express](http://expressjs.com/). The client-side work is the same. Thanks Chris Jaure!


