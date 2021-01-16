input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    led.plotBarGraph(
    input.temperature(),
    25
    )
    if (input.temperature() <= 5) {
        music.playMelody("A F A F A F A F ", 120)
    }
})
