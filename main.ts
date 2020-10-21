let number = 0
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        number = randint(0, 100)
    }
    basic.showNumber(number)
    if (number % 2 == 0) {
        basic.showString("even")
    } else {
        basic.showString("odd")
    }
})
basic.forever(function () {
	
})
