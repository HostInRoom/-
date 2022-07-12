var btn = document.querySelector('button'); 
 
btn.addEventListener('click', function() { 
 var viewport = document.querySelector("meta[name=viewport]"); 
 viewport.setAttribute('content', 'width=1200'); 
});

<? if (isset($_COOKIE['mobile'])) { ?><meta name=viewport content="width=device-width, initial-scale=1"><? } else { ?><meta name=viewport content="width=1024, initial-scale=0.1"><? } ?> 