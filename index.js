const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

btn.addEventListener("click", () => sort(sorteesArr))

function sort(arr) {

    const naughtyFiltered = arr.filter(function(person) {
       return person.hasBeenGood === false
    })

    const niceFiltered = arr.filter(function(person) {
       return person.hasBeenGood === true
    })
    console.log('filtered', naughtyFiltered, niceFiltered)
    const naughtyMap = naughtyFiltered.map((person) => naughtyList.innerHTML += `<span>${person.name} </span>`)
    const niceMap = niceFiltered.map((person) => niceList.innerHTML += `<span>${person.name} </span>`)
}

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/