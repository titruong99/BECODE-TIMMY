let container=document.getElementsByClassName("container");
setTimeout(() => {
    for(let i=0;i<100;i++){
        let button=document.createElement("a");
        button.style.display="block";
        button.innerText="I am button "+(i+1);
        button.style.textDecoration="underline";
        button.style.marginBottom="20px";
        container[0].appendChild(button);
    }
    document.getElementsByTagName("h1")[0].innerText="There are a lot of buttons here !"
}, "2000");

