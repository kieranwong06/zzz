input.onButtonPressed(Button.A, function () {
    basic.showNumber(utlra)
})
input.onButtonPressed(Button.AB, function () {
    utlra = 0
})
input.onButtonPressed(Button.B, function () {
    if (utlra < 20) {
        basic.showNumber(randint(0, 10))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
})
let utlra = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 6, NeoPixelMode.RGB)
basic.forever(function () {
    utlra = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
})
