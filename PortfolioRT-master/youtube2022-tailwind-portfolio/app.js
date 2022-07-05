const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})



// function validateForm()                                    
// { 
//     var name = document.forms["myForm"]["name"];               
//     var email = document.forms["myForm"]["email"];    
//     var message = document.forms["myForm"]["message"];   
   
//     if (name.value == "")                                  
//     { 
//         document.getElementById('errorname').innerHTML="Please enter a valid name";  
//         name.focus(); 
//         return false; 
//     }else{
//         document.getElementById('errorname').innerHTML="";  
//     }
       
//     if (email.value == "")                                   
//     { 
//         document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
//         email.focus(); 
//         return false; 
//     }else{
//         document.getElementById('erroremail').innerHTML="";  
//     }
   
//     if (email.value.indexOf("@", 0) < 0)                 
//     { 
//         document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
//         email.focus(); 
//         return false; 
//     } 
   
//     if (email.value.indexOf(".", 0) < 0)                 
//     { 
//         document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
//         email.focus(); 
//         return false; 
//     } 
   
//     if (message.value == "")                           
//     {
//         document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
//         message.focus(); 
//         return false; 
//     }else{
//         document.getElementById('errormsg').innerHTML="";  
//     }
   
//     return true; 
// }