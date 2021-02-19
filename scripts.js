let share = document.getElementById('share') 
let active = document.querySelector('#active');



function showIcon(){
    if(getComputedStyle(active).display != 'block'){
        active.style.display ='block'
    }else {
        active.style.display = 'none'
    }
};
share.onclick= showIcon;

// let share = document.getElementById("share");
// let active = document.getElementById("active");



//   function togg(){
//     if(getComputedStyle(active).display != "block"){
//       active.style.display = "block";
//     } else {
//       active.style.display = "none";
//     }
//   };
//   share.onclick = togg;

// function certificat1(){
//     var img = document.getElementById('Certificate1');
//     var butt = document.getElementById('button1')
//   if (img.style.display == "none")
//   {
//     img.style.display = "block";
//     butt.innerHTML = "Hide";
//   }else{
//     img.style.display ="none";
//     butt.innerHTML = "Show";
//   }

// }