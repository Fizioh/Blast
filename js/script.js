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