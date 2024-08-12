import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click", (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target

        if (whatWasClickedOn.dataset.type === "walker") {
            const walkerCityId = parseInt(whatWasClickedOn.dataset.city)
            console.log(walkerCityId)
            const matchCity = cities.filter(city => city.id === walkerCityId)
            console.log(matchCity)
            const walkerCity = matchCity.map(city => city.name)
            window.alert(`This walker works in ${walkerCity}`)
        }

    }
)


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-city="${walker.cityId}"
        data-id="${walker.id}"
        data-type="walker"
        >${walker.name}
        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

