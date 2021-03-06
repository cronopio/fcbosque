document.write('<link rel="stylesheet" href="/stylesheets/cronopio/gistembed.css"/>')

document.write('<div id=\"gist-1325350\" class=\"gist\">\n\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'><span class=\"kd\">var<\/span> <span class=\"nx\">net<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">require<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;net&#39;<\/span><span class=\"p\">),<\/span><\/div><div class=\'line\' id=\'LC2\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">dns<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">require<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;dns&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC3\'><br/><\/div><div class=\'line\' id=\'LC4\'><span class=\"kd\">function<\/span> <span class=\"nx\">checkComando<\/span> <span class=\"p\">(<\/span><span class=\"nx\">data<\/span><span class=\"p\">,<\/span> <span class=\"nx\">socket<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC5\'>&nbsp;&nbsp;<span class=\"kd\">var<\/span> <span class=\"nx\">c_raw<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">data<\/span><span class=\"p\">.<\/span><span class=\"nx\">toString<\/span><span class=\"p\">();<\/span><\/div><div class=\'line\' id=\'LC6\'>&nbsp;&nbsp;<span class=\"nx\">comando<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">c_raw<\/span><span class=\"p\">.<\/span><span class=\"nx\">slice<\/span><span class=\"p\">(<\/span><span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"o\">-<\/span><span class=\"mi\">2<\/span><span class=\"p\">).<\/span><span class=\"nx\">split<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39; &#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC7\'><br/><\/div><div class=\'line\' id=\'LC8\'>&nbsp;&nbsp;<span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nx\">comando<\/span><span class=\"p\">[<\/span><span class=\"mi\">0<\/span><span class=\"p\">]<\/span> <span class=\"o\">===<\/span> <span class=\"s1\">&#39;ip&#39;<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC9\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">console<\/span><span class=\"p\">.<\/span><span class=\"nx\">log<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Solicitando: &#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">comando<\/span><span class=\"p\">[<\/span><span class=\"mi\">1<\/span><span class=\"p\">]);<\/span><\/div><div class=\'line\' id=\'LC10\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">dns<\/span><span class=\"p\">.<\/span><span class=\"nx\">resolve<\/span><span class=\"p\">(<\/span><span class=\"nx\">comando<\/span><span class=\"p\">[<\/span><span class=\"mi\">1<\/span><span class=\"p\">],<\/span> <span class=\"s1\">&#39;A&#39;<\/span><span class=\"p\">,<\/span> <span class=\"kd\">function<\/span><span class=\"p\">(<\/span><span class=\"nx\">err<\/span><span class=\"p\">,<\/span> <span class=\"nx\">info<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC11\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nx\">info<\/span> <span class=\"o\">!==<\/span> <span class=\"kc\">undefined<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC12\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">socket<\/span><span class=\"p\">.<\/span><span class=\"nx\">write<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;[&#39;<\/span> <span class=\"o\">+<\/span> <span class=\"nx\">info<\/span><span class=\"p\">.<\/span><span class=\"nx\">join<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;, &#39;<\/span><span class=\"p\">)<\/span> <span class=\"o\">+<\/span> <span class=\"s1\">&#39;]&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC13\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"p\">}<\/span><\/div><div class=\'line\' id=\'LC14\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"p\">});<\/span><\/div><div class=\'line\' id=\'LC15\'>&nbsp;&nbsp;<span class=\"p\">}<\/span><\/div><div class=\'line\' id=\'LC16\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/div><div class=\'line\' id=\'LC17\'>&nbsp;&nbsp;<span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nx\">comando<\/span><span class=\"p\">[<\/span><span class=\"mi\">0<\/span><span class=\"p\">]<\/span> <span class=\"o\">===<\/span> <span class=\"s1\">&#39;salir&#39;<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC18\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">console<\/span><span class=\"p\">.<\/span><span class=\"nx\">log<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;%s se desconecto.&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">socket<\/span><span class=\"p\">.<\/span><span class=\"nx\">remoteAddress<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC19\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">socket<\/span><span class=\"p\">.<\/span><span class=\"nx\">write<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Adios.\\n&#39;<\/span><span class=\"p\">,<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC20\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">socket<\/span><span class=\"p\">.<\/span><span class=\"nx\">end<\/span><span class=\"p\">();<\/span><\/div><div class=\'line\' id=\'LC21\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"p\">});<\/span><\/div><div class=\'line\' id=\'LC22\'>&nbsp;&nbsp;<span class=\"p\">}<\/span><\/div><div class=\'line\' id=\'LC23\'><span class=\"p\">}<\/span><\/div><div class=\'line\' id=\'LC24\'><br/><\/div><div class=\'line\' id=\'LC25\'><span class=\"kd\">function<\/span> <span class=\"nx\">saludar<\/span> <span class=\"p\">(<\/span><span class=\"nx\">socket<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC26\'>&nbsp;&nbsp;<span class=\"nx\">console<\/span><span class=\"p\">.<\/span><span class=\"nx\">log<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Nuevo cliente: &#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">socket<\/span><span class=\"p\">.<\/span><span class=\"nx\">remoteAddress<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC27\'>&nbsp;&nbsp;<span class=\"nx\">socket<\/span><span class=\"p\">.<\/span><span class=\"nx\">write<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Bienvenido al servidor de cronopio.\\n&#39;<\/span><span class=\"p\">,<\/span> <span class=\"s1\">&#39;UTF-8&#39;<\/span><span class=\"p\">,<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC28\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">socket<\/span><span class=\"p\">.<\/span><span class=\"nx\">on<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;data&#39;<\/span><span class=\"p\">,<\/span> <span class=\"kd\">function<\/span> <span class=\"p\">(<\/span><span class=\"nx\">data<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC29\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"nx\">checkComando<\/span><span class=\"p\">(<\/span><span class=\"nx\">data<\/span><span class=\"p\">,<\/span> <span class=\"nx\">socket<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC30\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"p\">});<\/span><\/div><div class=\'line\' id=\'LC31\'>&nbsp;&nbsp;<span class=\"p\">});<\/span><\/div><div class=\'line\' id=\'LC32\'><span class=\"p\">}<\/span><\/div><div class=\'line\' id=\'LC33\'><br/><\/div><div class=\'line\' id=\'LC34\'><span class=\"kd\">var<\/span> <span class=\"nx\">servidor<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">net<\/span><span class=\"p\">.<\/span><span class=\"nx\">createServer<\/span><span class=\"p\">(<\/span><span class=\"nx\">saludar<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC35\'><br/><\/div><div class=\'line\' id=\'LC36\'><span class=\"nx\">servidor<\/span><span class=\"p\">.<\/span><span class=\"nx\">listen<\/span><span class=\"p\">(<\/span><span class=\"mi\">8000<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC37\'><span class=\"nx\">console<\/span><span class=\"p\">.<\/span><span class=\"nx\">log<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Servidor corriendo.&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC38\'><br/><\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/1325350/6b54b28b7275f980ee395b403c16ce918f96d21e/dns.js\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/1325350#file_dns.js\" style=\"float:right;margin-right:10px;color:#666\">dns.js<\/a>\n            <a href=\"https://gist.github.com/1325350\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n')
