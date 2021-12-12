window.addEventListener('load', (e) => {
    const dino = document.getElementById('dino')
    const cactus = document.getElementById('cactus')
    const start = document.getElementById('start')

    start.addEventListener('click', (event) => {
        if (start.innerHTML == "Stop") {
            start.innerHTML = "Start";
            cactus.classList.remove('cacON')


        } else {
            start.innerHTML = "Stop";
            cactus.classList.add('cacON')

            document.addEventListener('keydown', (event) => {
                jump()
            })


            function jump() {
                if (dino.classList != "jump") {
                    dino.classList.add('jump')
                }
                setTimeout(() => {
                    dino.classList.remove("jump")
                }, 300);
            }

            let isAlive = setInterval(function () {
                let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
                let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

                if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
                    alert("Game over.")
                }
            }, 10)
        }
    })











})