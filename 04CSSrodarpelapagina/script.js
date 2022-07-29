function ChangeOpacity()
{
    header = document.getElementById("header");
    if(scrollY <= 150) 
    {
        header.style.backgroundColor = "rgba(124, 120, 120, " + (scrollY*255/150).toString() + ")";
    }
    else 
    {
        header.style.backgroundColor = "rgb(124, 120, 120)";
    }
}

setInterval(() => {ChangeOpacity()}, 50);