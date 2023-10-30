// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020304040305030202020202020202020203040403050302020202020202020202030404030503020202020202020201020304040305030303030303030303010203040403050505050505050505050101030404030303030303030505050502010304040808080808090305050101020103040404040404040603030505010201030303030303030406030305050102020b0202020a03030406030305020102020202020202040404060a0505050102020101010a0304040703000502050102020101010203040603030505020101020202010102030406030505020501050202020202020304060305050201010502020202020b030406030b0202020202`, img`
. . 2 . . 2 . 2 . . . . . . . . 
. . 2 . . 2 . 2 . . . . . . . . 
. . 2 . . 2 . 2 . . . . . . . . 
. . 2 . . 2 . 2 2 2 2 2 2 2 2 2 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 2 2 2 2 2 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 2 2 2 2 2 2 . . 2 . . . . 
. . . . . . . 2 2 . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . 2 . . . 2 2 . . . . 
. . . . . . 2 . . 2 2 . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.rock1,sprites.builtin.crowd6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
