/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daniel Brushett
 * Created on: Mar 12
 * This program finds the distance using a sonar
*/

let distanceToObject:number=0

// Sartup/Main Screen
basic.showIcon(IconNames.Happy)

// Locate Distance from Sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping (
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})