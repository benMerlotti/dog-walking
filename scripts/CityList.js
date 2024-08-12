import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

let walkerList = walkers.map(walker => walker.cityId)

console.log(walkerList)

document.addEventListener(
    "click",
    (clickEvent) => {
        const cityTarget = clickEvent.target

        if (cityTarget.dataset.type === "city") {
            const cityId = parseInt(cityTarget.dataset.cityid)
            const walkersInCityId = walkers.filter(walker => walker.cityId === cityId)
            const walkerNames = walkersInCityId.map(walker => walker.name)
            window.alert(`This city is serviced by ${walkerNames}`)
        }
    }
)

// window.alert(`This city is serviced by ${cityTarget.dataset.cityid}`)
export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-cityid="${city.id}"->${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

