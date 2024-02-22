// JavaScript pentru calendar
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const dataInput = document.getElementById('data');
const calendar = document.getElementById('calendar');
const nav = document.querySelector('.nav');

function openNav() {
    document.getElementById("mySidebar").style.width = "175px";
    document.getElementById("main").style.marginLeft = "175px";
    }
    
    function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    }
const cinemaLabel = document.getElementById('cinema-label');
const cinemaSelect = document.getElementById('cinema');
const myButton = document.getElementById("rollage");
let isActive = false; // Acesta este un indicator pentru a ține evidența stării butonului

myButton.addEventListener("click", function() {
  isActive = !isActive; // Invertim starea la fiecare apasare
  if (isActive) {
    myButton.classList.add("active");
    myButton.style.backgroundColor = "orange";
  } else {
    myButton.classList.remove("active");
    myButton.style.backgroundColor = "green";
  }
});
cinemaSelect.addEventListener('change', function () {
    if (cinemaSelect.value !== "Alege cinema-ul") {
        cinemaLabel.textContent = `Cinema: ${cinemaSelect.value}`;
    } else {
        cinemaLabel.textContent = 'Cinema:';
    }
});
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

openButton.style.display = "block"; // Afiseaza butonul de deschidere la inceput

// Ascunde selectul initial
cinemaSelect.style.display = 'none';

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document.querySelector(".calendar-current-date");

const prenexIcons = document.querySelectorAll(".calendar-navigation span");

// Array cu numele lunilor
const months = [
    "Ianuarie", "Februarie", "Martie", "Aprilie",
    "Mai", "Iunie", "Iulie", "August",
    "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

// Funcție pentru generarea calendarului
const manipulate = () => {
    // Obține prima zi a lunii
    let dayone = new Date(year, month, 1).getDay();

    // Obține ultima dată a lunii
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Obține ziua ultimei date a lunii
    let dayend = new Date(year, month, lastdate).getDay();

    // Obține ultima dată a lunii anterioare
    let monthlastdate = new Date(year, month, 0).getDate();

    // Variabilă pentru a stoca HTML-ul generat pentru calendar
    let lit = "";

    // Buclă pentru adăugarea datelor ultimei luni
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // Buclă pentru adăugarea datelor lunii curente
    for (let i = 1; i <= lastdate; i++) {
        // Verifică dacă data curentă este astăzi
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    // Buclă pentru adăugarea primelor date ale lunii următoare
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`;
    }

    // Actualizează textul datei curente cu luna și anul curente
    currdate.innerText = `${months[month]} ${year}`;

    // Actualizează HTML-ul elementului cu datele calendarului
    day.innerHTML = lit;
}

manipulate();
const rollage = document.getElementById("rollage");

  rollage.addEventListener("click", function () {
    rollage.classList.toggle("active");
  });



function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

// Function to close the sidebar navigation
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

// Function to handle form submission
const cinema = document.getElementById("cinema").value;

// Validate cinema and date
const cinemaValid = validateCinema(cinema);
const dateValid = validateDate(date);

// Get the error span elements
const cinemaError = document.getElementById("cinemaError");
const dateError = document.getElementById("dataError");

// Reset any previous error messages
cinemaError.textContent = "";
dateError.textContent = "";

// Check if cinema and date are not selected
if (!cinemaValid) {
    cinemaError.textContent = "Selectati un cinema!";
    console.log("Cinema error, form not submitted");
}

if (!dateValid) {
    dateError.textContent = "Selectati o data!";
    console.log("Date error, form not submitted");
}
function validateCinema(cinema) {
  // Check if the cinema is selected
  return cinema !== "Alege cinema-ul";
}

function validateDate(date) {
  // Check if the date is not empty
  return date.trim() !== "";
}

module.exports = { validateCinema, validateDate };
// Atașează un eveniment de click la fiecare iconiță
prenexIcons.forEach(icon => {
    // Când se dă clic pe o iconiță
    icon.addEventListener("click", () => {
        if (icon.id === "calendar-prev") {
            month -= 1;
            if (month < 0) {
                month = 11;
                year -= 1;
            }
        } else {
            month += 1;
            if (month > 11) {
                month = 0;
                year += 1;
            }
        }
        manipulate(month);
    });
});
var swiper = new Swiper(".slide-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    }
    
  },
});

  var slideIndex = [1,1];
  var slideId = ["mySlides1", "mySlides2"]
  showDivs(1, 0);
  showDivs(1, 1);
  
  function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
  }
  
  function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }
  const container = document.querySelector('.slider-container');
  const cards = document.querySelectorAll('.slider-card');
  
  let scrollAmount = 0;
  
  function scrollRight() {
    scrollAmount += 350; // Ajustați valoarea la lățimea cardului
    container.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
  
  function scrollLeft() {
    scrollAmount -= 350; // Ajustați valoarea la lățimea cardului
    container.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}