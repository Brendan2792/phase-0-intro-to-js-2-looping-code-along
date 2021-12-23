const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards() {
    let newArr = []
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);    
    }
    return newArr
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}