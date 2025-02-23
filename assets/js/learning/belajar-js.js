let greeting = "Selamat Pagi!"  // type data string
letucapanSelamat = 'Congaratulations!' //type data string mengunakan kutip satu ('')

alert(typeof ucapanSelamat)

let age = 19          // type data number
alert(typeof age)

alert(20+30) //akan menghasilkan 50 kalo di alert
alert("20"+"30")// akan menghasilkan 2030 kalo di alert, disebut concatenation

let lampIsOn = true             // type data boolean

//if lampIsOn then turn on TV
// lampIsOn true >>> TV nyala
//lampIsOn false >>> TV tidak nyala

let boxContain = undefined      // type data undefined
let bagContain = null           // type data null

let person ={
    firstName: "Karunia",       // type data object
    lastName :  "Leo",
    address :   "Bintaro"
}

let pesertaBootcamp=["Ahmad Ainul","Alex Josua","Husni Fatah"]  //array of strings

let bilanganPrima = [2,3,5,7,11,13]         // array of numbers

let pesertaBootcampObject = [
    {
        firstName: "Naufal",
        lastName: "Ilyasa"
    },                                       // array of objects
    {
        firstName: "Rizal",
        lastName: "Khudori"
    }
]

alert(greeting)
console.log()

for(let index = 2; index < 5 ; index ++) (
    console.log(greeting +index)
)