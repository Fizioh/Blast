//creating a simple object

const Circ = new mojs.Shape({
    isShowStart: true,
    radius: 100,
    //Animation
    fill: {'#FC2079':'#fff'},
    scale: {1:0},
    opacity: {1:0},
    left: '50%',
    duration: 1500,
    delay: 300,
    easing: 'cubic.out',
    isShowEnd: false,
});

document.addEventListener('click', function(e) {
    Circ.
    replay();
});

//création de l'explosion en traits

const burst1 = new mojs.Burst({
    left: 0, top: 0,
    count: 7,
    radius: { 50: 250 },
    children: {
        fill: 'white',
        shape: 'polygon',
        stroke: {'white':'#A50710'},
        strokeWidth: 4,
        radius: 'rand(30,60)',
        radiusY: 0,
        scale: {1:0},
        pathScale: 'rand(.5, 1)',
        degree: 360,
        isForce3d: true }
});

document.addEventListener('click', function(e) {
    burst1.
    tune ({x: e.pageX, y: e.pageY }).
    generate().
    replay();
    Circ.
    replay();
});