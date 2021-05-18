
// form tag store 
let form = document.querySelector("form") ;

// submited form started 
form.addEventListener("submit", (ev) => {
  ev.preventDefault() ;
 
// all input started 
 let inp1 = document.querySelector(".inp1") ;
 let inp2 = document.querySelector(".inp2") ;
 let inp3 = document.querySelector(".inp3") ;
 let inp4 = document.querySelector(".inp4") ;
 let inp5 = document.querySelector(".inp5") ;
 let inp6 = document.querySelector(".inp6") ;
 let inp7 = document.querySelector(".inp7") ;
 let x1 =  document.querySelector(".inp6").value ;
 // all input ended 
 
//  all span started 
 let btn =  document.querySelector("button") ;
 let text1 = document.querySelector("#text1") ;
 let text2 = document.querySelector("#text2") ;
 let text3 = document.querySelector("#text3") ;
 let text4 = document.querySelector("#text4") ;
 let text5 = document.querySelector("#text5") ;
 let text6 = document.querySelector("#text6") ;
 let text7 = document.querySelector("#text7") ; 
//  all span ended

// mail chacker 
 let mailChacker = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


// function started now

 const myFunc = () => {
  
    // name validation 

    // first name validation
if(inp1.value != "" ){
    inp1.setAttribute("style","border-color:green;") 
    text3.innerHTML = "" ;
}else{
    inp1.setAttribute("style","border-color:red;")
    text3.setAttribute("style","color:red") ;
    text3.innerHTML = "please ! enter your first number" ;
} 

    // last name validation
if(inp2.value != ""){
    inp2.setAttribute("style","border-color:green;") 
    text1.innerHTML = "" ;
}else{
    inp2.setAttribute("style","border-color:red;")
    text1.setAttribute("style","color:red") ;
    text1.innerHTML = "please ! enter your last number" ;
} 

// email validation 

if(inp3.value.match(mailChacker)){
    inp3.setAttribute("style","border-color:green;") 
    text2.innerHTML = "" ;
}else{
    inp3.setAttribute("style","border-color:red;")
    text2.setAttribute("style","color:red") ;
    text2.innerHTML = "sorry ! we don't recognais this email address & must be @ or . " ;
}

// phone validation 
if(inp4.value != "" ){
    inp4.setAttribute("style","border-color:green;") 
    text4.innerHTML = "" ;
}else{
    inp4.setAttribute("style","border-color:red;")
    text4.setAttribute("style","color:red") ;
    text4.innerHTML = "please ! enter correct phone number" ;
} 


// birthday validation 
if(inp5.value != "" ){
    inp5.setAttribute("style","border-color:green;") 
    text5.innerHTML = "" ;
}else{
    inp5.setAttribute("style","border-color:red;")
    text5.setAttribute("style","color:red") ;
    text5.innerHTML = "please ! enter your solid birthaday" ;
} 

// password validation

// confirm password validation 
if(inp7.value != ""){
    inp7.setAttribute("style","border-color:green;") 
    text7.innerHTML = "" ;
}else{
    inp7.setAttribute("style","border-color:red;")
    text7.setAttribute("style","color:red") ;
    text7.innerHTML = "please ! enter your confirm password" ;
}

// new password validation 
if(inp6.value != "" ){
    inp6.setAttribute("style","border-color:green;") 
    text6.innerHTML = "" ;

}
else{
    inp6.setAttribute("style","border-color:red;")
    text6.setAttribute("style","color:red") ;
    text6.innerHTML = "please ! enter valid email address" ;
    return true
}

if(x1.length < 8 && x1.length >= 1  ){
    inp6.setAttribute("style","border-color:red;")
    text6.setAttribute("style","color:red") ;
    text6.innerHTML = "password must be greater then 8 charector" ;

}   
if(x1.length >= 15 ){
    inp6.setAttribute("style","border-color:red;")
    text6.setAttribute("style","color:red") ;
    text6.innerHTML = "password must be less then 15 charector" 
}  ;

// confirm & new pass beetween 
if(inp6.value != inp7.value){
    inp7.setAttribute("style","border-color:red;")
    text7.setAttribute("style","color:red") ;
    text7.innerHTML = "don't match new password & confirm password" ;
}

 
 var y = ["Hi","sir","hello"]

 var b = ["you are bless","well-come sir","Thanks for try it","i blessed you"]

alert( y[Math.floor(Math.random()*2)] + ", You are successfully resistation , " + b[Math.floor(Math.random()*3)] )

}
 myFunc() ;
// function ended now



 }) 

 // submited form ended 
