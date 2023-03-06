let names = ["Home", "Portfolio", "Current Project", "Playground"];

function configNav() {
    for (let i = 1; i <= 4; i++) 
    {
        document.getElementsByClassName('n'+i)[0].textContent = names[i-1];
    }
}