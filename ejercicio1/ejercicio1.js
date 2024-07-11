const juegoDeTronos = document.createElement("h1")
const header = document.createElement("header")
const body = document.querySelector("body")
juegoDeTronos.innerText = "Game Of Thrones Characters"
body.insertAdjacentElement("beforebegin", header)
header.appendChild(juegoDeTronos)

const select = document.querySelector("#character-list")


fetch ("https://thronesapi.com/api/v2/Characters")
.then((res) => res.json ())
.then((res) => res.map((character) => {
        const option = document.createElement("option")
        option.innerHTML= character.fullName
        select.appendChild(option)

        select.addEventListener("change", () => {
            if(character.fullName === select.value){
                const div = document.querySelector("div")
                const img = document.querySelector(".character-image")
                img.setAttribute("src", character.imageUrl)
                const characterName = document.createElement("h2")
                const characterTitle = document.createElement("h3")
                characterName.innerHTML = character.fullName
                characterTitle.innerHTML = character.title
                
                div.innerHTML = ""
                div.appendChild(characterName)
                div.appendChild(characterTitle)
                div.appendChild(img)




            }
        })
           
    }))

   

    



   








