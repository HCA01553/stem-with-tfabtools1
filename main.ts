basic.showString("Start")
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showString("ON")
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showString("OFF")
    }
})
