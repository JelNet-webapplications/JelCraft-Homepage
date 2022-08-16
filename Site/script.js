// setInterval(laathetwerken, 2000)
// function laathetwerken(){
//   document.getElementById("worldstatstitle").style.left = window.innerWidth * 0.02;
//   console.log('worldstatstitle left: '+document.getElementById("worldstatstitle").style.left)
//   console.log('function laathetwerken has succesfully been executed. ')
// }
//setInterval(testforMobile, 1)
//konkerbonker konkerbonker

function testforMobile(){
  if(window.innerWidth < 861) {
    // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      document.getElementById("html").style.display = 'none';
      document.getElementById("notifyPhone").style.display = 'block';
      // console.log(document.getElementById("notifyPhone").style.display);
  } else {
      document.getElementById("html").style.display = 'block';
      document.getElementById("notifyPhone").style.display = 'none';
      // console.log(document.getElementById("notifyPhone").style.display);
  }

}
function dosomething(){
    window.open('https://www.youtube.com/watch?v=Lxqc5mSg4vw');
}

document.body.addEventListener('keydown', event => {
    if(event.code == 'KeyD'){
      

      event.preventDefault()
      alert(`GEEN DEAN`)
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
})

var ctrlActive = false,
    uActive = false;

document.body.addEventListener('keyup', event => {
  if(event.key == 'Control') ctrlActive = false;
  if(event.code == 'KeyU') uActive = false;
})

document.body.addEventListener('keydown', event => {
  if(event.key == 'Control') ctrlActive = true;
  if(ctrlActive == true && event.code == 'KeyU') {
    event.preventDefault()
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
})

const translations = {
    "JELNET": {
        "en": "JELNET",
        "de": "",
        "nl": "JELNET",
        "vk": ""
    },
    "HOME": {
        "en": "HOME",
        "de": "",
        "nl": "THUISPAGINA",
        "vk": ""
    },
    "INTERNAL": {
        "en": "INTERNAL",
        "de": "",
        "nl": "INTERN",
        "vk": ""
    },
    "EXTERNAL": {
        "en": "EXTERNAL",
        "de": "",
        "nl": "EXTERN",
        "vk": ""
    },
    "Projects": {
        "en": "Projects",
        "de": "",
        "nl": "Projecten",
        "vk": ""
    },
    "Pinball_Converter": {
        "en": "Pinball Converter",
        "de": "",
        "nl": "Pinball-wisselaar",
        "vk": ""
    },
    "Exchange_rate_EUR_-_Pinballs": {
        "en": "Exchange rate EUR - Pinballs",
        "de": "",
        "nl": "Wisselkeurs van EUR - Pinball-snoepjes",
        "vk": ""
    },
    "Sudoku_Solver": {
        "en": "Sudoku Solver",
        "de": "",
        "nl": "Sudoku-oplosser",
        "vk": ""
    },
    "Automatically_solves_Sudokus": {
        "en": "Automatically solves Sudokus",
        "de": "",
        "nl": "Lost automatisch Sudoku's op",
        "vk": ""
    },
    "WorldStats": {
        "en": "WorldStats",
        "de": "",
        "nl": "Wereldstatistieken",
        "vk": ""
    },
    "Shows_real_live-time_global_statistics": {
        "en": "Shows real live-time global statistics",
        "de": "",
        "nl": "Toont real-time wereldwijde statistieken",
        "vk": ""
    },
    "Flight_Calculator": {
        "en": "Flight Calculator",
        "de": "",
        "nl": "Vluchtcalculator",
        "vk": ""
    },
    "Calculates_efficient_Minecraft_flight_data": {
        "en": "Calculates efficient Minecraft flight data",
        "de": "",
        "nl": "Berekent efficiënte Minecraft-vluchtgegevens",
        "vk": ""
    },
    "Collatz_Calculator": {
        "en": "Collatz Calculator",
        "de": "",
        "nl": "Collatz-calculator",
        "vk": ""
    },
    "Calculates everything collatz conjecture": {
        "en": "Calculates everything collatz conjecture",
        "de": "",
        "nl": "Berekent alles over het Collatz-vermoeden",
        "vk": ""
    },
    "Sbubby_Generator": {
        "en": "Sbubby Generator",
        "de": "",
        "nl": "Sbubby-generator",
        "vk": ""
    },
    "Create_your_own_sbubby_of_existing_logos": {
        "en": "Create your own sbubby of existing logos",
        "de": "",
        "nl": "Maak je eigen sbubby van bestaande logo's",
        "vk": ""
    },
    "Hangman_Engine": {
        "en": "Hangman Engine",
        "de": "",
        "nl": "Calculator voor Galgje",
        "vk": ""
    },
    


    "": {
        "en": "",
        "de": "",
        "nl": "",
        "vk": ""
    },
}

document.addEventListener('contextmenu', event => {
    event.preventDefault()
    console.log(translations.HOME.nl)
    // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
