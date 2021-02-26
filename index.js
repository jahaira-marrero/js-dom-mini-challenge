/***** Deliverable 1 *****/
// const header = document.querySelector("#header")
const heading = document.getElementById('header')
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
console.log (document.getElementById('header').style.color = "green");


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const person = document.querySelector(`h2`)
person.textContent= traveler.name
const nickname = document.querySelector('em')
nickname.textContent = traveler.nickname
const pic = document.querySelector(`img`)
pic.alt = traveler.name
pic.src = traveler.photo


/***** Deliverable 4 *****/
traveler.animalSightings.forEach(function(sighting) {
  const li = document.createElement(`li`) // <li></li>
    li.dataset.id= sighting.id
    li.innerHTML = `<p>${sighting.description}</p>
    <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>`;

    const animalList = document.querySelector("#animals")
    animalList.append(li)
  })


/***** Deliverable 5 ***/
const removeAnimal = document.querySelector('[data-id="3"]')
removeAnimal.remove()