let time = 0
let heading = 0
radio.onReceivedNumber(function (receivedNumber) {
    time = receivedNumber / 30
    basic.showNumber(Math.round(time))
})
input.onButtonPressed(Button.A, function () {
    heading = input.compassHeading()
    radio.sendNumber(heading)
})
input.onButtonPressed(Button.B, function () {
    heading = input.compassHeading() + 360
    radio.sendNumber(heading)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("D D E D G F - - ", 120)
    music.playMelody("D D E D A G - - ", 120)
    music.playMelody("D D D B G F E - ", 120)
    music.playMelody("C C B G A G - - ", 120)
    basic.showString("Bearing in mind it's your birthday, don't be left behind in the morning and get it right in the afternoon!")
})
