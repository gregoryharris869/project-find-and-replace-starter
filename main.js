// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const rowElements = document.querySelectorAll(".row")

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")

const replaceOneButton = document.querySelector(".replace-one-button")
const replaceAllButton = document.querySelector(".replace-all-button")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 

replaceAllButton.addEventListener("click", function () {
    console.log('replace all button clicked')
    let userInput = findInput.value
    let replacingData = replaceInput.value

    let sum = 0;
    for (let count = 0; count < rowElements.length; count++) {
        let currenElement = rowElements[count]
        let Rowcell = getCellElements(currenElement)

        for (let count1 = 0; count1 < Rowcell.length; count1++) {
            let currntcell = Rowcell[count1]
            let cellcontents = currntcell.innerHTML
            if (cellcontents.includes(userInput)) {
                currntcell.innerHTML = cellcontents.replace(userInput, replacingData)

                sum = sum + 1;
                console.log(sum)
            }
        }
    }

})

function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}