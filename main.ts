let Chicken = sprites.create(img`
. . 5 5 b b b b b . . . . . . . 
. 5 b 4 4 4 4 4 4 b . . . . . . 
5 5 4 4 4 4 d d 4 4 b . . . . . 
5 b 4 4 4 4 4 4 d 4 b . . . . . 
5 b 4 4 4 4 4 4 4 d 4 b . . . . 
5 b 4 4 4 4 4 4 4 4 4 b . . . . 
5 b 4 4 4 4 4 4 4 4 4 e . . . . 
5 5 b 4 4 4 4 4 4 4 b e . . . . 
. 5 b b b 4 4 4 b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b 4 4 b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, SpriteKind.Player)
let Dog = sprites.create(img`
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
`, SpriteKind.Player)
let Cake = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . 
. . . . . . . . . . . . . . . . . . . . b b 3 3 3 b . . . . . . 
. . . . . . . . . . . . . . . . . b b b 3 3 3 d 3 3 b . . . . . 
. . . . . . . . . . . . . . . . b b 3 3 3 3 3 3 d 3 a . . . . . 
. . . . . . . . . . . . . . b b 3 3 3 3 2 e e e e d b a . . . . 
. . . . . . . . . . . . b b b 3 3 3 3 2 3 e e e 2 e 3 a . . . . 
. . . . . . . . . . b b d 3 3 3 3 3 3 e 2 2 2 2 2 e d 3 a . . . 
. . . . . . . b b b d d 3 3 3 3 3 3 3 e 2 2 2 2 2 e d d a . . . 
. . . . . . b b 3 d 3 3 3 3 3 3 3 3 3 b e 2 2 2 e b 3 d 3 a . . 
. . . b b b 3 d d 3 3 3 3 3 3 3 3 3 3 3 b e e e b 3 3 d 3 a . . 
. . b 3 d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . . 
b b d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a . 
b 3 3 d d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d 3 a . 
b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . 
b b b b b b b 3 3 3 d d 3 3 d d d d d d d d d d 3 3 3 3 d d b a 
b 5 5 5 5 3 b b b b b b 3 3 3 3 d d 3 3 3 3 3 d d d 3 3 d d 3 a 
b 5 5 5 5 5 5 5 5 5 5 5 3 b b b b b b b b 3 3 3 3 3 d d d d 3 a 
b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d b a a a a a b 3 d 3 b a 
b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d d b b 3 3 b a 
b 3 b b 3 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d 5 5 d d d d d b b b a 
b 3 3 3 3 3 b b b 3 5 5 d d 5 5 5 5 5 d 5 5 5 d d d d d d b b a 
b 5 5 5 5 d 3 3 3 3 3 3 b b b 3 5 d d d d d d 5 5 d d d d b b a 
b 5 d 5 5 5 d d 5 5 5 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a 
b 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d 3 3 3 3 b b b b b b 3 d b 3 a 
b d 5 d 5 5 5 5 5 5 d 5 5 5 5 5 d d 5 5 5 d d b b b b b b b 3 a 
b b b 5 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d b b 3 a 
. . . b b b b d d 5 5 5 d d d 5 5 5 5 d d d d d d d d d d b 3 a 
. . . . . . . b b b b 5 5 5 5 5 5 d 5 d d d 5 d d d d d d b 3 a 
. . . . . . . . . . . b b b b 5 5 5 5 5 5 5 5 5 5 5 d d 5 3 3 a 
. . . . . . . . . . . . . . . b b b b d d d 5 d 5 5 d 5 b 3 b a 
. . . . . . . . . . . . . . . . . . . b b b b d d d d b 3 b a . 
. . . . . . . . . . . . . . . . . . . . . . . b b b a a a a . . 
`, SpriteKind.Player)
let Ice_Cream = sprites.create(img`
. . . . . . . . . . . . 3 3 3 3 b b . . b b 3 3 3 3 3 . . . . . 
. . . . . . . . 3 b b 3 1 1 1 1 d 3 b 3 1 1 d 1 1 1 d 3 3 . . . 
. . . . . . . 3 b d d 1 1 1 1 1 d b d 1 1 d 1 1 1 1 1 1 1 3 . . 
. . . . . . . b d d d d 1 1 1 1 b d 1 1 d 1 1 1 d d 1 1 1 1 3 . 
. . . . . . 3 d 1 1 1 d d 1 1 1 b 1 1 d 1 1 1 d d 3 3 d 1 1 d 3 
. . . . . . 3 d 1 1 1 1 1 d d 1 d 1 1 d 1 1 1 d 1 1 d 3 3 1 1 3 
. . . . b b 3 d 1 1 1 1 1 1 d d 1 3 d d 1 1 1 d 1 d d 3 b 3 1 b 
. . . b 3 d 3 d d 1 1 1 1 1 1 d d 1 3 d d 1 1 d 1 d d d b b d b 
. . . 3 d d d 3 1 d 1 1 1 1 1 1 d d 1 3 3 d d d d d d d b . b . 
. . 3 1 1 1 1 1 d 1 d d d 1 1 1 1 d d 1 1 d d d d d d 3 3 . . . 
. . 3 1 1 1 1 1 1 d 1 1 1 d d 1 1 1 d d 1 1 1 1 d d 3 3 1 3 . . 
. . b d d d 1 1 1 1 d d d 1 1 d d 1 1 1 d 1 1 1 1 1 1 1 1 3 . . 
. . 3 1 1 d d d 1 1 1 d d d d 1 1 d d 1 1 d d d 1 1 1 1 d d b . 
. . 3 1 1 1 1 d d 1 1 1 d d d d 1 1 d d 1 1 1 d d d d d d d b . 
. . . b d 1 1 1 1 d 1 1 1 3 d d d 1 1 d d 1 1 1 1 1 1 1 d 3 b . 
. . . 4 d d 1 1 1 1 d 1 1 1 3 d d d 1 1 d d d 1 1 1 d 3 3 3 b . 
. . 4 d b d d d d 1 1 d 1 1 1 3 3 d d d d d d d d d d d d b . . 
. 4 d d b d d d d d 1 1 d 1 1 1 d 3 3 d d d d d d d d d 3 b . . 
. 4 d d d b 1 1 d d d 1 1 d d 1 1 1 d 3 3 3 d d d d 3 b b . . . 
. 4 d d 5 5 b 1 1 1 d 1 1 d d 1 1 1 1 1 d 3 3 3 3 b b b . . . . 
. 4 4 5 5 5 5 b 1 1 1 d 1 1 d d d d 1 1 1 1 1 1 d d b . . . . . 
. 4 4 5 5 5 5 5 b d 1 d 3 1 1 d d d d d d d d d d d 3 . . . . . 
. 4 5 4 5 5 5 5 5 b b 1 d 3 1 1 1 d d d d d d d 1 1 3 . . . . . 
. 4 5 5 4 5 5 5 5 5 5 b 3 3 3 d 1 1 1 1 1 1 1 1 1 3 . . . . . . 
4 5 5 5 5 4 5 5 5 5 5 5 b b b 3 3 d 1 1 1 1 1 d 3 3 . . . . . . 
4 d 5 5 5 5 4 5 5 5 5 5 5 5 d b b b 3 d 1 1 d 3 3 . . . . . . . 
4 d d 5 5 5 5 4 5 5 5 5 5 d d d d d 4 3 3 3 3 . . . . . . . . . 
4 5 d d 5 5 5 5 4 4 d d d d d d d 4 . . . . . . . . . . . . . . 
. 4 5 d d 5 5 5 5 d 4 4 d d d d 4 . . . . . . . . . . . . . . . 
. . 4 5 d d 5 5 d d d d 4 4 4 4 . . . . . . . . . . . . . . . . 
. . . 4 5 d d 5 5 4 4 4 . . . . . . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let Donut = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let Pizza = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Player)
Donut.setPosition(40, 36)
Cake.setPosition(32, 69)
Ice_Cream.setPosition(96, 79)
Chicken.setPosition(15, 9)
Dog.setPosition(66, 20)
Pizza.setPosition(133, 9)
Dog.say("Meow")
