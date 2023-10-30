namespace SpriteKind {
    export const NPC1 = SpriteKind.create()
    export const complete = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const npc3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc3, function (sprite, otherSprite) {
    if (info.score() == 20) {
        game.gameOver(true)
    } else {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What is Derivative of sin(x) ?", DialogLayout.Bottom)
    story.showPlayerChoices("cos(x)", "-cos(x)")
    if (story.checkLastAnswer("cos(x)")) {
        info.changeScoreBy(10)
        mysprite3.setKind(SpriteKind.complete)
    } else if (story.checkLastAnswer("1")) {
        info.changeScoreBy(-10)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    DialogMode = true
    game.showLongText("What is Integral of 1/x ?", DialogLayout.Bottom)
    story.showPlayerChoices("log(x)", "1")
    if (story.checkLastAnswer("log(x)")) {
        info.changeScoreBy(10)
        mySprite2.setKind(SpriteKind.complete)
    } else if (story.checkLastAnswer("1")) {
        info.changeScoreBy(-10)
    } else {
    	
    }
    DialogMode = false
    pause(1000)
})
let DialogMode = false
let mysprite3: Sprite = null
let mySprite2: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 14))
mySprite2 = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.NPC1)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 0))
mysprite3 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.NPC2)
tiles.placeOnTile(mysprite3, tiles.getTileLocation(10, 10))
let mysprit4 = sprites.create(img`
    ..................................bbbbbbbbbbbbbbbbbbb........................
    ...............................bbbbb5555555555555555bbb......................
    ....................cbb......bbb5555555555555555555555bb.....................
    ....................ccbbc..bbb5555555555555555555555555bb....................
    ....................cccbbccb5555555555555555555555555555bb...................
    .....................ccccc5555555555555555555555555555555b...................
    .....................cccc55555555555555555db555555555b555bb..................
    .....................ccc555555555555555555bb555555555b5555b..................
    .............ccc.....cc5555555cccb555555555555555555555555c..................
    .............cbbcccccc5555555c1ccc5555555555555cccccb55555c..................
    .............ccbbbccc55555555cbbcd5555555555bccccccccb5555c..................
    ..............cccbcc5555555555555555555551bcccccccccddb555c..................
    ..............ccccc55555555555555555555b11ccccccccccdcb555c..................
    ..............ccccd5555555555555555555cc11ccccccccccbcc55c...................
    ...............ccd5555555555bb5555551bccb1ccccccccccccc55c...................
    ...............ccd55555555555b5555511bccccccccccccccccc5c....................
    ...............cdd555555555555bccccb1ccccccccccccccccc55c....................
    .........cbbccccddd555555555555cccccccccccccccccccccc55c.....................
    .........ccbbccdd555555555555555ccccb333cc333bcccccc55c......................
    .........ccccccdd555555555555555bcc333333cb3333cccd55cc......................
    ..........cccccddd555555555555555cc3333333b33333c555cc.......................
    ..........ccccd55d5555555555555555c33333333b333335bcc........................
    ..........ccccd55555555555555555d55b3333333b333335bc.........................
    ..........cccddd5555555555555555dd55b331b33b333335dc.........................
    ...........ccdddddd55555555555555dd55311b3333333155c....cccc.................
    ...........ccddddd5555555555555555dd5511b3333333155c...ccb55c................
    .........cccdddddd55555555555555555dd555b3333333355c...cbb55c................
    ......ccccccddddddd5555cccc555555555dd555331331355bc..cddb55ccc..............
    ......ccccccddddddddcccc55c5555555555dd55531331555c..cdddb5bb55c.............
    .......cccccdddddcccc5555bc5555555555ddbd5555555dc..ccdddbbbd55c.............
    ........cccbddddcbd5bb55bbcccc5555555dddbbbbbbbbbc..c5bbbddb555c.............
    .........ccddddcb5555bbbbcc55c5555555dddddbbbbbddcccc555bddbbbb..............
    ..........cdddc5555555bd5555bb5555555dddddddddddd5bbdb555b555ddc.............
    .........ccddcc555bbccbdd55bb555555555ddddddddddd5bbd5bbbb555bbbcc...........
    ........ccdddc555bbdddddd5cb5555555555dddddddddd555bb5555555bb555c...........
    ........cdddbc555bbbbddd55c555555555555ddddddddd5555b5555555b5555c...........
    .......cddbbb5555555bbdd5cc5555555555555dddddd555555bbd555555bbbc............
    ......ccdbbbd55555555bd55c555555555555555555555555555bdd55555bbc.............
    ......cddddd555555bbb555cc555555555555555555555555555bddddddccc..............
    ......cdddd555555dd55555c55555555555555555555555555555bddddcc................
    ......cddd5555555dd5555ccd5555555555555555555555555555bddddc.................
    ......cddd55555555dd555cd5d555555555555555555555555555dbddcc.............cc..
    ......cddd555555555555ccdd5555555555555555555555555555dbdcc............bb5c..
    ......ccdd555555555555cdddd555555555555555555555555555dbcc.............b55c..
    ......ccddd5555555555ccddd5d5555555555555555555555555ddbc.............bb5bc..
    .......ccddd5555555cccdddd55d555555555555555555555555ddc..............b55bc..
    ........ccdddd555cccddddddd55d555d555555555555555555dddc..............b55bc..
    ........ccccccccccddddddddddddd555555555555555dd55555ddc..............b555c..
    .......cccddddddddddddddddddddddd5555555555555dd5555ddbc.............bb555bc.
    ......ccccddddddddddddddddddddd55555555dd55555555d5dddbcc............bb555bc.
    .......cccbddddddddddddddddddddd55ddd555555555dddddddbbccc...........b55555c.
    ........ccbdddddddddddddddddddddddddddd5555ddd55ddddbbbbccc..........b55555bc
    .........cbbbdddd55ddddddddddddddddd55d5555dd555dd5555dbbbccb........b55555bc
    .........cbbdddddd55dddddddddddddddd55ddddddddddd5555555bbddbbb....bb5555555c
    .........cbdd5555dd5dddddddddddddddddddddddddddd555555555cddddbbbbbb55555555c
    .........cd55555555ddddddddddddddddddddddddddddd5555555555cdddddd5555555555dc
    ........cc555555555d55dddddddddddddddddddddddddd5555555555ccddddd5555555555dc
    ........c5555555555555dddddddddddddddddddddddddd55555555555cdddddd55555555ddc
    .......cc55555555555ddddddddddddddddddddddddddddd5555555555ccdddddd555555dddc
    .......c555555555555ddddddddddddddddddddddddddddd55555555555cddddddddddddddcc
    .......c555555555555dddddddddddddddddddddddddddd555555555555cddddddddddddddc.
    ......cc555555555555dddddddddbdddddddddddddddddd555555555555ccddddddddddddcc.
    ......c555555555555d5ddddddddbddddddddddddddddddd55dd5555555ccdddddddddddcc..
    ......c5555555555555dddddddddbddddddddddbbddddddddddddd5555dccddddddddddcc...
    ......c55555555555ddddddddddbbbddddddddddbbddddddddddddddddddcddddddddccc....
    ......cd555555555dddddddddddbbbbccccccccccccdddddddddddddddddccdddddccc......
    .....ccd5555555ddddddddddddbbbcccc........cccdddddddddddddddddccccccc........
    ....cccdd55555dddddddddddddbccc.............cccddddddddd555555ccc............
    ....cccdddddddddddddddddddcc..................cccdddddd55555555c.............
    ....cd5555555ddddddddddddcc....................cccccddd555dccdddcc...........
    ...ccd55555555dddddddddccc........................ccddcdddddccdddcc..........
    .ccddccdddd555ddddcccccc...........................cddccccdddcdddcc..........
    ccddccddddccddddddcc...............................ccdcccccddcccccc..........
    ccddcddddccdddccccc................................ccc.....cdc...............
    cccccdccccdddcccc...........................................cc...............
    ....ccc..ccccc...............................................................
    `, SpriteKind.npc3)
tiles.placeOnTile(mysprit4, tiles.getTileLocation(2, 10))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
DialogMode = false
forever(function () {
    if (DialogMode == false) {
        controller.moveSprite(mySprite)
    } else if (DialogMode == true) {
        controller.moveSprite(mySprite, 0, 0)
    } else {
    	
    }
})
