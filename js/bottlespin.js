function rotate1(){
    let rotate1 = Math.floor(Math.random()*100+3600);
    // let rotate2 = rotate1+deg
     document.getElementsByTagName("img")[0].style.transform =`rotate(${rotate1}deg)`;
     document.getElementsByTagName("img")[0].style.transition= "10s ease-out"; 
    console.log(rotate1);
}


function reset(){
document.getElementsByTagName("img")[0].style.transform= "rotate(0deg)"
}