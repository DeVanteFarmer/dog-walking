import { Walkers } from "./Walkers.js"
import { Cities } from "./CityList.js"
import { Assignments } from "./Assignments.js"
import { RegisteredPet } from "./RegisteredPets.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>DeShawns Dog Walking</h1>
    <article class="details">
        <section class="detail--column list details__cities">
            <h2>Cities with Service</h2>
            ${Cities()}
        </section>
        <section class="detail--column list details__cities">
            <h2>Walkers</h2>
            ${Walkers()}
        </section>
        <section class="detail--column list details__cities">
            <h2>Pets</h2>
            ${RegisteredPet()}
        </section>
    </article>

    <article class="assignments">
        <h2>Current Assignments</h2>
        ${Assignments()}
    </article>
`

mainContainer.innerHTML = applicationHTML

