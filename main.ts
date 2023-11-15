/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Nov 2023
 * This program lights up around the Microbit edge
*/

// variables
let loopCounter1: number = 0
let loopCounter2: number = 0
let sprite: game.LedSprite = null

// on start
basic.showIcon(IconNames.Happy)

// on button A, starting loop to make LED light up around the Microbits edge
input.onButtonPressed(Button.A, function () {
  // setting values
  basic.clearScreen()
  loopCounter1 = 0
  sprite = game.createSprite(0, 0)
  basic.pause(500)

  // making LED move around Microbit edge
  while (loopCounter1 < loopCounter2)
  loopCounter2 = 5
  sprite.turn(Direction.Right, 90)
    while (loopCounter1 <= 5) {
      sprite.move(1)
      basic.pause(500)
      loopCounter1++
  }
})
