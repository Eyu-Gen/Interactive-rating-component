let buttons = document.getElementsByClassName("buttons");
let clickedButton = null;

for (let i = 0; i < buttons.length; i++) {    
    buttons[i].addEventListener("mouseover", function() {
        if (this !== clickedButton) {
            this.style.backgroundColor = "var(--primaryColor)";
            this.style.color = "var(--bodyColor)";
        }
    });

    buttons[i].addEventListener("mouseout", function() {
        if (this !== clickedButton) {
            this.style.backgroundColor = "var(--minorColor)";
            this.style.color = "white";
        }
    });
    
    buttons[i].addEventListener("click", function() {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.backgroundColor = "var(--minorColor)";
            buttons[j].style.color = "white";
        }
        this.style.backgroundColor = "white";
        this.style.color = "var(--bodyColor)";
        
        clickedButton = this;
    });
}

let submit = document.getElementById("submitBtn");
let mainBlock = document.getElementById("mainBlock");
let secondaryBlock = document.getElementById("thankYouBlock");
let ratePara = document.getElementById("rate");
let rate = document.getElementById("rateNum");

if (submit) {
    submit.addEventListener("click", function() {
        if (clickedButton != null) {
            mainBlock.style.display = "none";
            secondaryBlock.style.display = "flex";
            ratePara.style.display = "flex";
            rate.innerHTML = ` ${clickedButton.innerHTML}`;
            rate.style.margin = "0px 4px";
        }
    });
}
