//const date = document.getElementById("date");
//const time = document.getElementById("time");


function formatoFecha(fecha, formato) {
  const map = {
    dd: formatNumber(fecha.getDate()),
    mm: formatNumber(fecha.getMonth() + 1),
    yy: fecha.getFullYear().toString().slice(-2),
    yyyy: fecha.getFullYear()
  }

  return formato.replace(/dd|mm|yyyy|yy|yyy/gi, matched => map[matched])
}

// Fecha actual FORMATO: 2022-12-00
function getNowDate() {
  const currentDate = new Date();
  return formatoFecha(currentDate, 'yyyy-mm-dd');
}

// Sumar dias (resta si es negativo)  // 2020-05-15, -5
function addDaysToDate(dateIn, days) {
  var date = new Date(dateIn + "T00:00:00"); 					// Fecha con Zona horaria estandar // 2020-05-15T00:00:00
  date.setDate(date.getDate() + days);							// Sumar dias

  let year = date.getFullYear(); 										// obtener año // 2020 // 5 // 6
  let month = date.getMonth() + 1; 									// Obtener mes y sumar 1, Aumneto 1 mes, ya que los meses inician desde "0" es decir que enero seria 0 y diciembre seria 11
  let day = date.getDate() 													// obtener dia

  month = month < 10 ? '0' + month : '' + month;		// formateo a mes para que sea de 2 dígitos.
  day = day < 10 ? "0" + day : '' + day; 						// formateo a dia para que sea de 2 dígitos "01", "05", "10", etc.

  return year + "-" + month + "-" + day; // 2020-05-15
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  //date.innerHTML = currentDate.toLocaleDateString('es', options);
  $("#date").html(currentDate.toLocaleDateString('es', options));
}

function getCurrentTime() {
  const currentDate = new Date();
  const hours = formatNumber(currentDate.getHours());
  const minutes = formatNumber(currentDate.getMinutes());
  const seconds = formatNumber(currentDate.getSeconds());
  const format = (hours < 12) || (hours == 24) ? 'AM' : 'PM';
  let formatHours = formatNumber((hours) % 12);
  formatHours = formatHours < 1 ? 12 : formatHours;

  //time.innerHTML = `${formatHours}:${minutes}:${seconds} <small>${format}</small>`;
  $("#time").html(`${formatHours}:${minutes}:${seconds} <small>${format}</small>`)
}

function formatNumber(value) {
  return value < 10 ? `0${value}` : value;
}

getCurrentDate();
setInterval(getCurrentTime, 1000);