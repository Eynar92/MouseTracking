const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");

    let cursorPos = { x: 0, y: 0 };
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    function winSizeDef() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    };

    function mouseMove(e) {
        cursorPos = { x: e.clientX, y: e.clientY };
        track();
    };

    function touchMove(e){
        cursorPos = {x:e.targetTouches[0].offsetX,y:e.targetTouches[0].offsetY};
        track();
    };

    const trackMouse = (el, xrelacion, yrelacion) => {
        const elOffset = el.getBoundingClientRect();
        const centerX = elOffset.x + elOffset.width / 2;
        const centerY = elOffset.y + elOffset.height / 2;
        const distanceLeft = Math.round(((cursorPos.x - centerX) * 100) / window.innerWidth);
        const distanceTop = Math.round(((cursorPos.y - centerY) * 100) / window.innerHeight);
        el.style.transform = `translate(${distanceLeft / xrelacion}px,${distanceTop / yrelacion}px)`;
    };
    const track = () => {
        if(ears) trackMouse(ears,0,0);
        if(head) trackMouse(head,6,6);
        if(eyes) trackMouse(eyes,1.8,1.8);
        if(snout) trackMouse(snout,1.5,1.5);
        if(nose) trackMouse(nose,1,1);
    };

    window.addEventListener("resize", winSizeDef);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("touchmove", touchMove);