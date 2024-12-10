function loading() {
    var tl = gsap.timeline();

    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    });
    tl.to("#yellow2", {
        top: "100%",
        duration: 0.7,
        ease: "expo.out"
    }, "anim");
    tl.to("#loader h1", {
        color: "black",
        duration: 0.7
    }, "anim");
    tl.to("#loader", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            document.querySelector("#loader").style.display = "none";
        }
    });
}

loading();

setTimeout(() => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}, 2000);
