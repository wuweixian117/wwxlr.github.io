new TypeIt("#wwxlr", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("吴伟贤 and 罗蕊")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第三年！！！")
    .pause(3000)
    .go();

new TypeIt('#talkToLr', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();