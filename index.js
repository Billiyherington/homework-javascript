let inputLang = prompt("выбирай язык (eng/rus)")
let inputWord = prompt("что ты здесь забыл")
let eng = ["car", "apple"]
let rus = ["машина", "яблоко"]
if(inputLang === "rus"){
    for(let i = 0; i <= rus.length; i++){
        if(inputWord === rus[i]){
            for(let x = 0; x <= eng.length; x++){
                if(x === i)
                console.log(rus[x]);
            }
        }
    }
}