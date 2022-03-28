const replaceLogo = () => {

    window.addEventListener("resize", e => {

        let widthScreen = document.body.clientWidth
        if(widthScreen <= 981) {
            document.querySelector(".logo img").src = "./assets/images/logo-purple.png"
        } else {
            document.querySelector(".logo img").src = "./assets/images/logo.png"
        }
        
    })
    
    let widthScreen = document.body.clientWidth
    if(widthScreen <= 981) {
        document.querySelector(".logo img").src = "./assets/images/logo-purple.png"
    } else {
        document.querySelector(".logo img").src = "./assets/images/logo.png"
    }
    
}

const updateHeightHeader = () => {

    window.addEventListener("scroll", e => {
        
        let scrollY = window.scrollY
        let widthScreen = document.body.clientWidth

        if(widthScreen > 981) {
            if(scrollY > 10) {
                document.getElementById("header").style.backgroundColor = "#5c3fc1"
                document.getElementById("header").style.height = "60px"
                document.getElementById("header").style.boxShadow = "0 0 7px rgb(0 0 0 / 10%)"
                document.querySelector(".logo img").style.height = "42px"
            } else {
                document.getElementById("header").style.backgroundColor = "rgba(255,255,255,0.02)"
                document.getElementById("header").style.height = "80px"
                document.getElementById("header").style.boxShadow = "none"
                document.querySelector(".logo img").style.height = "56px"
            }
        }

    })

}

const toggleMenu = () => {

    let menuBtn = document.querySelector(".mobile-menu i")
    menuBtn.addEventListener("click", () => {
        // Adicionando/removendo a classe active ao menu
        document.querySelector(".mobile-links").classList.toggle("active")
    })

}

const scrollPage = () => {
    
    // Pegando os links dos menus desktop e mobile
    let menuDesktop = document.querySelectorAll(".menu ul li a")
    let menuMobile = document.querySelectorAll(".mobile-links ul li a")

    const loopingMenu = (array) => {
        // Looping em cada item, adicionando o evento de click
        array.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
    
                let textUrl = e.target.href;
                let textArray = textUrl.split("#");
                let lastItem = textArray[textArray.length - 1];

                // Para cada item, executamos a função scrollItem que vai rolar a página até o elemento que possui o id
                // Caso lastItem não possua o caractere "#", a página vai apenas recarregar
                switch(lastItem) {
                    case "services":
                    case "about":
                    case "why":
                    case "talktospecialist":
                        scrollItem(lastItem)
                    break;
                    default:
                        window.location.href = window.location.href;
                    break;
                }
    
            })
        })
    }

    // Chamando a função com o array de links
    loopingMenu(menuDesktop)
    loopingMenu(menuMobile)

    const scrollItem = (item) => {
        // Pegando a div que possui o elemento ex: #services, #about, #why
        let target = document.getElementById(item);

        // Verificamos se essa div não é nula, caso seja damos um scroll até o elemento
        if(target !== null) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

    }
}

// Elemento que vamos clicar e vai dar o scroll para o top da tela
let mybutton = document.querySelector(".button-top")

window.addEventListener("scroll", () => {
    scrollFunction()
})

const scrollFunction = () => {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "flex"
    } else {
        mybutton.style.display = "none"
    }
}

mybutton.addEventListener("click", () => {
    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    scrollTop()
})

// Chamando funções
scrollPage()
toggleMenu()
updateHeightHeader()
replaceLogo()