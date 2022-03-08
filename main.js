// var userInput = ''

function golfScore() {
    var userInput = document.getElementById('par').value

    // let pares = par.value
    // console.log(par)
    // let names = ''
    // if (strokes == par) {
    //     names = 'Hole-in-one!'
    // } else if (strokes < par) {
    //     names = 'Eagle'
    // } else if (strokes > par) {
    //     names = 'Birdie'
    // }
    // else if (strokes == par) {
    //     names = 'Par'
    // } else if (strokes == par + 1) {
    //     names = 'Bogey'
    // } else if (strokes == par + 2) {
    //     names = 'Double Bogey'
    // } else if (strokes >= par + 3) {
    //     names = 'Go Home!'
    // }
    // alert(names)
    document.getElementById('printResult').innerHTML =
        'The result is: ' + userInput
}

golfScore()