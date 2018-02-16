/**********  *********/
    /*Hamburger Menu*/
/*********   *********/

// menu Icon is the hamburger icon (in some cases replaced by an X)
const menuIcon = document.querySelector('.js-menu');


/*** Function to expand the main navigation on mobile (hamburger menu) ***/
function expandMenu() {
    
    /* Variables */
    // get the ul with the navigation links
    const mainNav = document.querySelector('.js-main-nav');
    
    // get the content that is supposed to be covered by expanded menu on mobile
    const coveredContent = document.querySelector('.js-covered');
    // select the header element
    const header = document.querySelector('header');
    
    
    // if the menu has the default menu-icon class it is not expanded, expand it
    if (menuIcon.classList.contains('menu-icon')) {
        
        // remove the hamburger icon and replace with a X
        menuIcon.classList.remove('menu-icon');
        menuIcon.classList.add('expanded-menu-icon');
        
        // from main navigation, remove class that sets it to display: none
        mainNav.classList.remove('d-none');
        
        // don't display the content that is meant to be covered
        coveredContent.classList.add('d-none');
        // add box-shadow below header
        header.classList.add('box-shadow');
    } 
    
    // if the menu has the expanded-menu-icon class, return it to normal
    else if (menuIcon.classList.contains('expanded-menu-icon')) {
        
        // remove the X and replace with the hamburger icon
        menuIcon.classList.remove('expanded-menu-icon');
        menuIcon.classList.add('menu-icon');
        
        // add d-none class to main navigation links to not display them
        mainNav.classList.add('d-none');
        
        // display the previously covered content
        coveredContent.classList.remove('d-none');
        // remove box-shadow from below header
        header.classList.remove('box-shadow');
    }
}


// add click event on the menuIcon
menuIcon.addEventListener('click', expandMenu, false);





/**********  *********/
    /*Stroke Order - Kanji Page*/
/*********   *********/

// Key from mashape https://market.mashape.com/JessicaKarpovich/applications/Kanji-Search
const key = "3SIUgT55Vxmsht3cVhbNhsPpXEPtp1NZQ84jsn24FyCRXTvJEB";

// this is for detailed info by kanji - has to be entered as kanji
const api_endpoint = "https://kanjialive-api.p.mashape.com/api/public/kanji/";

// create a custom Headers object as shown in the documentation
// Make sure to include the key and accept
const myHeaders = new Headers();
myHeaders.append("X-Mashape-Key", "3SIUgT55Vxmsht3cVhbNhsPpXEPtp1NZQ84jsn24FyCRXTvJEB");
myHeaders.append("Accept", "application/json");

// use myInit to have custom headers
const myInit = { headers: myHeaders };


const numberArray = ["一",　"二",　"三",　"四",　"五",　"六",　"七",　"八",　"九",　"十"];
const divArray = ["js-1", "js-2", "js-3", "js-4", "js-5", "js-6", "js-7", "js-8", "js-9", "js-10"];


function showStrokeOrder(array) {
    for (let i=0; i < array.length; i++) {
        const url = api_endpoint + array[i];
        
        //Pass the request object the url (as for fetch) and the custom setup (myInit)
        const request = new Request(url, myInit);
        
        // Pass request to fetch, not the url
        fetch(request) 
            .then(response => response.json())
            .then(results => {
            // test results
                getStrokes(results, i);
            })
            .catch(function(error) {
                console.log(error);
        });
    }
}

showStrokeOrder(numberArray);


function getStrokes(results, i) {
    let imageDiv = document.querySelector(`[data-name=${CSS.escape(divArray[i])}]`);
    
    if (imageDiv) {
        let content = "";

        for (let j=0; j < results.kanji.strokes.images.length; j++) {
            content += "<img class='stroke' src='" + results.kanji.strokes.images[j] + "' ";
            content += "alt='Stroke " + (j+1) + " of " + results.kanji.character + "'></img>";
            imageDiv.innerHTML = content;
        }
    }
}