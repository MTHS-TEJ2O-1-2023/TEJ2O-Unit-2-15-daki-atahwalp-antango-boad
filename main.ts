/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Nov 2023
 * This program lights up around the Microbit edge
*/

// variables
let ledSprite: number = 0
let sprite: game.LedSprite = null

// on start
basic.showIcon(IconNames.Happy)

// on button A, starting loop to make LED light up around the Microbits edge
input.onButtonPressed(Button.A, function () {
  // setting values
  basic.clearScreen()
  ledSprite = 0
  sprite = game.createSprite(0, 0)

  // Boolean expression
  while (ledSprite <= 17){
    sprite.set(LedSpriteProperty.X, 0)
    sprite.set(LedSpriteProperty.Y, 0)
    sprite.move(1)
    sprite.turn(Direction.Right, 90)
    ledSprite++
  }

})