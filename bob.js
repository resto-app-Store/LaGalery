

// 













// 


const Quiz = document.querySelectorAll('.quiz');

const Desc1 = document.querySelectorAll('.desc');

const iconUP = document.querySelectorAll('.bxs-up-arrow');

const iconDown = document.querySelectorAll('.bxs-down-arrow');


for(let i = 0; i < Quiz.length; i++) {

    Quiz[i].addEventListener('click', () =>{
        Desc1[i].style.display = "block";
        iconUP[i].style.display = "none";
        iconDown[i].style.display = "block";
    });
    
    
    Quiz[i].addEventListener('dblclick', () =>{
        Desc1[i].style.display = "none";
        iconUP[i].style.display = "block";
        iconDown[i].style.display = "none";
    })

}







