
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer(),
    io = require('socket.io').listen(app),
    util = {
      url: require('url'),
      crypto: require('crypto')
    }
    decks = {};

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

io.configure('development', function() {
  io.set('log level', 4);
})

io.configure('production', function(){
  io.enable('browser client minification');  // send minified client
  io.enable('browser client etag');          // apply etag caching logic based on version number
  io.set('log level', 1);                    // reduce logging
});

io.sockets.on('connection', function(client){
  client.on('join', function(data){
    var id = getIdFromUrl(data.url),
      deck = decks[id];
    
    if (!deck) {
      decks[id] = deck = defaultDeckState(id);
    }

    deck.timestamp = Date.now();

    if (data.is_master) {
      setupMaster(client, deck);
    }
    else {
      setupViewer(client, deck);
    }
  });
});

// Routes

app.get('/', function(req, res){
  res.render('index');
});

app.get('/nodejs', function(req, res) {
  res.render('cronopio/nodejs/index', { layout:'cronopio/nodejs/layout' });
});

app.get('/web-dev', function(req, res) {
  res.sendfile(__dirname + '/views/arpunk/index.html');
});

app.get('/artedigital', function(req, res) {
  res.render('lili/index', { layout: 'lili/layout' });
});

app.get('/express-framework', function(req, res) {
  res.render('flav/express/index', { layout: 'flav/express/layout' });
});

app.get('/gpg', function (req, res) {
  res.render('cronopio/gpg/index', { layout: 'cronopio/gpg/layout' });
});

app.get('/git', function (req, res) {
  res.render('cronopio/git/index', { layout: 'cronopio/git/layout' });
});

app.get('/seguridad-con-firefox', function(req, res) {
  res.render('jaruiz33/index', { layout: 'jaruiz33/layout' });
});

app.get('/deb-rpm', function (req, res) {
  res.render('flav/deb-rpm/index', { layout: 'flav/deb-rpm/layout'});
});

app.listen(process.env.PORT || 3000);

app.on('listening', function () {
  console.log("Presentacion corriendo en el puerto %d", app.address().port);
});


/**
 * Funciones para ayudar al socket.io
 */

function setupMaster(client, deck) {
  client.on('master', function(data){
    if (verifyKey(data.key, data.input)) {
      client.emit('master', true);
      deck.has_master = true;

      //io.sockets.in(deck.id).emit('notify', { master: true });
      client.broadcast.emit('notify', { master: true });

      client.on('change', function(data){
        deck.current = data.current;
        deck.timestamp = Date.now();
        //io.sockets.in(deck.id).emit('slide', deck.current);
        client.broadcast.emit('slide', deck.current);
      });

      client.on('disconnect', function(){
        deck.has_master = false;
        //io.sockets.in(deck.id).emit('notify', { master: false });
        client.broadcast.emit('notify', { master: false });
      });
    }
    else {
      client.emit('master', false);
    }
      
  });
}

function setupViewer(client, deck) {
  if (deck.has_master) {
    client.emit('notify', {master: true, current: deck.current});
  }

  client.join(deck.id);
}

function getIdFromUrl(url) {
  var parsed = util.url.parse(url);
  
  return parsed.hostname + parsed.pathname;
}

function defaultDeckState(id) {
  return {
    id: id,
    current: 0,
    has_master: false
  };
}

function verifyKey(key, input) {
  return (key == util.crypto.createHash('md5').update(input).digest('hex'));
}

function clearInactiveSessions() {
  var now = Date.now();
  for (var key in decks) {
    if (now - decks[key].timestamp > max_inactive_time) {
      delete decks[key];
    }
  }
}
