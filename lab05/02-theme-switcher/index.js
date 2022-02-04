/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
function modifyTheme(new_theme){
   let body = document.querySelector("body");
   body.className = new_theme;
}


document.querySelector("#default").addEventListener('click', () => { modifyTheme("")});
document.querySelector("#desert").addEventListener('click', () => { modifyTheme("desert")});
document.querySelector("#ocean").addEventListener('click', () => { modifyTheme("ocean")});
document.querySelector("#high-contrast").addEventListener('click', () => { modifyTheme("high-contrast")});