input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    input.temperature(),
    25
    )
})
