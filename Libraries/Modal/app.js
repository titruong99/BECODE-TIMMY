let body=document.querySelector("body");
let container=document.querySelector(".container");
let button=document.querySelector("button");

container.addEventListener("click",e=>{
    if(e.target===container && container.children.length>1){
        container.removeChild(container.lastChild);
        button.style.display="block";
        container.style.backgroundColor="white";
        document.body.style.overflow = "auto";
    }
});

const createCrossModal=()=>{
    let closeButton=document.createElement("button");
    closeButton.style.width="20px";
    closeButton.style.height="20px";
    closeButton.innerText="x";
    return closeButton;
};

const createText=()=>{
    let text=document.createElement("p");
    text.innerText="Here is your modal";
    return text;
};

const createModal=()=>{
    let modal=document.createElement("div");
    let closeButton=createCrossModal();
    modal.style.position="relative";
    closeButton.style.position="absolute";
    closeButton.style.top="0%";
    closeButton.style.left="92%";
    closeButton.addEventListener("click",e=>{
        container.removeChild(modal);
        button.style.display="block";
        container.style.backgroundColor="white";
        document.body.style.overflow = "auto";
    });
    modal.style.display="flex";
    modal.style.justifyContent="center";
    modal.style.alignItems="center";
    modal.style.textAlign="right";
    modal.style.width="250px";
    modal.style.height="250px";
    modal.style.backgroundColor="white";
    modal.appendChild(closeButton);
    modal.appendChild(createText());
    return modal;
};

button.addEventListener("click",e=>{
    container.style.backgroundColor="rgba(0, 0, 0, 0.5)";
    button.style.display="none";
    let modal=createModal();
    container.appendChild(modal);
    document.body.style.overflow = "hidden";
})

