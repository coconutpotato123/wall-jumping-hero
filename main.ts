controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(leftFacingImg)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(rightFacingImg)
})
let hero: Sprite = null
let leftFacingImg: Image = null
let rightFacingImg: Image = null
let rightSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . f f f f 2 f f . . . . . 
    . . f f e e e e f 2 f f . . . . 
    . f f e e e e e f 2 2 f f . . . 
    . f e e e e f f e e e e f . . . 
    . f f f f f e e 2 2 2 2 e f . . 
    f f f e 2 2 2 f f f f e 2 f . . 
    f f f f f f f f e e e f f f . . 
    f e f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 b f d d e f . . . 
    . . f e e e 4 d d d e e . c . . 
    . . . f 2 2 2 2 e e d d e c c c 
    . . . f 4 4 4 e 4 4 d d e c d d 
    . . . f f f f f e e e e . c c c 
    . . f f f f f f f f . . . c . . 
    . . f f f . . f f . . . . . . . 
    `
let leftSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 f f f f . . . . 
    . . . . f f 2 f e e e e f f . . 
    . . . f f 2 2 f e e e e e f f . 
    . . . f e e e e f f e e e e f . 
    . . f e 2 2 2 2 e e f f f f f . 
    . . f 2 e f f f f 2 2 2 e f f f 
    . . f f f e e e f f f f f f f f 
    . . f e e 4 4 f b e 4 4 e f e f 
    . . . f e d d f b 4 d 4 e e f . 
    . . c . e e d d d 4 e e e f . . 
    c c c e d d e e 2 2 2 2 f . . . 
    d d c e d d 4 4 e 4 4 4 f . . . 
    c c c . e e e e f f f f f . . . 
    . . c . . . f f f f f f f f . . 
    . . . . . . . f f . . f f f . . 
    `
rightFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `
leftFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `
hero = sprites.create(leftFacingImg, SpriteKind.Player)
controller.moveSprite(hero)
tiles.setTilemap(tiles.createTilemap(hex`100020000000010303030303030303030303010000000103030303030303030303030100000001020303030303030303030301000000010101010101010303030303010000000103030303030303030101030100000001030303030303030303030301000000010303030303030101030303010000000103010101030303030303030100000001030303030303030303030301000000010303030303030101010101010000000103030303030301030303030100000001030303030101010303030301000000010303030303030303030303010000000103030303030303030101030100000001010101030303030303030301000000010303030303030101030303010000000103030303030303030303030100000001030303030303030303030301000000010101010103030303030303010000000103030303030303030303030100000001030303030303010101030301000000010303030303030303030303010000000103030303030303030303030100000001010101030303030303030301000000010303010103030303030303010000000103030303030303030303030100000001030303030303030101010101000000010303030303030301030303010000000103030303010101010303030100000001030303030303030303030301000000010303030303030303030303010000000101010103030303030303030100`, img`
    ..2...........2.
    ..2...........2.
    ..2...........2.
    ..2222222.....2.
    ..2........22.2.
    ..2...........2.
    ..2......22...2.
    ..2.222.......2.
    ..2...........2.
    ..2......222222.
    ..2......2....2.
    ..2....222....2.
    ..2...........2.
    ..2........22.2.
    ..2222........2.
    ..2......22...2.
    ..2...........2.
    ..2...........2.
    ..22222.......2.
    ..2...........2.
    ..2......222..2.
    ..2...........2.
    ..2...........2.
    ..2222........2.
    ..2..22.......2.
    ..2...........2.
    ..2.......22222.
    ..2.......2...2.
    ..2....2222...2.
    ..2...........2.
    ..2...........2.
    ..2222........2.
    `, [myTiles.transparency16,sprites.dungeon.floorLight4,sprites.dungeon.chestClosed,sprites.dungeon.floorDark2], TileScale.Sixteen))
tiles.placeOnTile(hero, tiles.getTileLocation(4, 30))
scene.cameraFollowSprite(hero)
