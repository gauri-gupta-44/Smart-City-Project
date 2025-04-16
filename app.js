let micon = document.querySelector(".micon");
    let nav = document.querySelector("nav");
    micon.addEventListener("click", () => {
        nav.classList.toggle("showmenu");
    });



    let allquestion = document.querySelectorAll(".faqitems h2");
    allquestion.forEach((question, index) => {
        question.addEventListener("click", () => {
            if (question.lastElementChild.innerHTML == "+") {
                question.lastElementChild.innerHTML = "-";
            } else {
                question.lastElementChild.innerHTML = "+";
            }
            question.nextElementSibling.classList.toggle("showans");
            allquestion.forEach((question, i) => {
                if (index != i) {
                    question.nextElementSibling.classList.remove("showans");
                    question.lastElementChild.innerHTML = "+";
                }
            });
        });
    });
    let overlayelement = document.querySelector(".overlay");
    let lightboxmodalelement = document.querySelector(".lightboxmodal");
    let lightboxmodalelementimg = document.querySelector(".lightboxmodal img");
    let gallerysectionelement = document.querySelector(".gallerysection");
    let closespanelement = document.querySelector(".lightboxmodal span");
    gallerysectionelement.addEventListener("click", (e) => {
        //console.log(e.target.src);
        let currentsrc = e.target.src;
        if (currentsrc != undefined) {
            overlayelement.classList.add("overlayshow");
            lightboxmodalelement.classList.add("lightboxmodalshow");
            lightboxmodalelementimg.src = currentsrc;
            //console.log(currentsrc);
        }
    });
    closespanelement.addEventListener("click", () => {
        overlayelement.classList.remove("overlayshow");
        lightboxmodalelement.classList.remove("lightboxmodalshow");
    });
    overlayelement.addEventListener("click", () => {
        overlayelement.classList.remove("overlayshow");
        lightboxmodalelement.classList.remove("lightboxmodalshow");
    });