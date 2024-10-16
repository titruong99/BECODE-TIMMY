Array.from(document.querySelector("ul").children).forEach(element=>
    element.classList.value!==""?element.style.backgroundColor="white":element.style.backgroundColor="cyan"
);