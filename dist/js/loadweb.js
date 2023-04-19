function getParam(param){
  var result = window.location.search.match(new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)"));
  return result ? result[3] : false
}

function getParamPro(param) {
  // Recupera el parámetro de consulta de la URL
  var result = window.location.search.match(new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)"));
  var value = result ? result[3] : false;
  
  // Oculta la URL utilizando la función history.replaceState()
  let pathname = (window.location.pathname).split("/");
  var newUrl = window.location.protocol + "//" + window.location.host + "/" + pathname[1] + "/#";
  history.replaceState(null, '', newUrl);

  if(value !== false){
    sessionStorage.setItem('lastVisitedURL', value);
  }
  
  return value;
}
