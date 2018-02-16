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