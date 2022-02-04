/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

function dyslexiaToggle(){
    let body = document.querySelector("body");
    if (body.className.match("dyslexia-mode")){
      body.className = '';
    }
    else{
      body.className = "dyslexia-mode";
    }
}

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaToggle);