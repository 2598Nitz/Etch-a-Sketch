
let randomColor = false;
function draw(e)
{  

    if(!randomColor)
    {
        e.target.style.setProperty('background-color','black');
    }
    else
    {
        let colorPicked = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.setProperty('background-color','#'+colorPicked);
    }
}

function chooseColor(e)
{   
    let btn = e.target;
    if(btn.innerHTML === "COLOUR IT!")
    {
        btn.innerHTML = "BACK TO BLACK!";
        btn.style.setProperty('background-color','black');
        btn.style.setProperty('color','white');
        randomColor = true;
    }
    else 
    {
        btn.innerHTML = "COLOUR IT!";
        btn.style.removeProperty('background-color');
        btn.style.removeProperty('color');
        randomColor = false;
    }
}

function resetColor()
{
    const divs = document.querySelectorAll('.sketch-area div');
    
    for(let i = 0; i < divs.length; i++)
    {
        divs[i].style.setProperty('background-color','white');
    }
}
function main()
{
    let size = prompt("Enter number of squares per side required.");
    const container = document.querySelector('.sketch-area');
    container.innerHTML = "";
    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size; j++)
        {
            container.appendChild(document.createElement('div'));
        }
    }

    container.style.setProperty('grid-template-columns', 'repeat(' +size+ ', 1fr)');

    const divs = document.querySelectorAll('.sketch-area div');

    divs.forEach((div) => {
        div.addEventListener('mouseover',draw);
    }

    );

    const btn_resize = document.querySelector('.resize');

    btn_resize.addEventListener('click',main);

    const btn_clear = document.querySelector('.clear');

    btn_clear.addEventListener('click', resetColor);

    const btn_color = document.querySelector('.colour');

    btn_color.addEventListener('click',chooseColor);

}
main();

