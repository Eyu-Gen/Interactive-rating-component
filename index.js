let button = document.getElementsByClassName("buttons");

for(let i = 0; i < button.length; i++)
{
    button[i].addEventListener("click", function() {
        button[i].style.backgroundColor = "white";
        button[i].style.color = "var(--bodyColor)";

        for(let j = 0; j != i; j++)
        {
            button[j].style.backgroundColor = "var(--minorColor)";
            button[j].style.color = "white";
        };
    });
};
