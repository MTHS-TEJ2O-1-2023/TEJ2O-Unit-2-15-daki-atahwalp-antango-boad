/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Nov 2023
 * This program lights up around the Microbit edge
*/

// variables
let ledSprite: number = 0
let loopCounter: number = 0
let sprite: game.LedSprite = null

// on start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// on button A is pressed, move sprite around Microbits edge
input.onButtonPressed(Button.A, function () {
  // prep screen
  basic.clearScreen()
  sprite = game.createSprite(0, 0)

  loopCounter = 0
  while (loopCounter <= 3) {
    // resetting ledSprite
    ledSprite = 0

    while (ledSprite <= 5) {
      // moving ledSprite
      basic.pause(500)
      sprite.move(1)
      ledSprite++
    }
    // tuning 90 degrees
    sprite.turn(Direction.Right, 90)
    loopCounter++
  }
  // clean up
  basic.showIcon(IconNames.Happy)
  sprite.delete()
})
