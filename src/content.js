window.onload = function() {

  var access_url = location.href

  switch(true) {
    case /wiki\.kazuma\.tokyo\/wp-login\.php/.test(access_url):
      var message = 'kazuma.tokyoのログイン画面です'
      break
    case /inamuu\.com\/wp-login\.php/.test(access_url):
      var message = 'inamuu.comのログイン画面です'
    break
  }
  window.alert(message);
}