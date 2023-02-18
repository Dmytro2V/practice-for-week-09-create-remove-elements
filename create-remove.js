/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        let urlParts = url.split('/');
        let breed = urlParts[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        let newCard = document.createElement("li");
        let newFigure = document.createElement("figure");
        let newImage = document.createElement("img");
        let newFigcaption = document.createElement("figcaption");
        newCard.appendChild(newFigure);
        newFigure.appendChild(newImage)
        newFigure.appendChild(newFigcaption)

        newImage.setAttribute('src', url);
        newFigcaption.innerText = breed;

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        let gallery = document.getElementsByClassName("gallery")[0]
        let ulInGal = gallery.children[0]
        ulInGal.appendChild(newCard);
       // debugger
    } catch (e) {
        console.log(e);
        console.log("Couldn't fetch dog :(")
    }
    
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    let uls = document.getElementsByClassName("gallery")[0].children[0].children
    let firstDog = uls[0]
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstDog.remove()
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    let uls = document.getElementsByClassName("gallery")[0].children[0].children
    let lastDog = uls[uls.length -1];
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastDog.remove()
});