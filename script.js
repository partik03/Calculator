let main = document.getElementById("main");
let form1 =document.getElementById("form1");
let btn = document.getElementsByClassName("btn1");
var bt = document.getElementById("btn");
let ac =document.getElementById("ac");
let bs = document.getElementById("bs");
let inv =document.getElementsByClassName("inv");
var bo = false ;
var invbool =true;
let cobtn =document.getElementsByClassName("l");
const cnt = document.querySelector(".cnt");
let mode = document.getElementById("check");
let kin = document.getElementById("check2");
let form  = document.getElementById("form");
let body =document.getElementById("body");
let la =document.getElementsByClassName("la");
let l =document.getElementsByClassName("lp");
let calc=document.getElementById("calc");
let degrad = false;
q =document.getElementsByClassName("l");
var his =document.getElementById("his");
let pic  =document.getElementById("image");
var hisb =true;
let hideBtn =document.getElementsByClassName("hideBtn");
// let hide =document.querySelectorAll(".hide");
let x= document.getElementsByClassName("hide") ;
Array.from(btn).forEach((b)=>{
    b.addEventListener('click',(e)=>{
      if(e.target.value === "="){
          try {
              let screen =main.value;
              console.log(screen.indexOf("^"));
              if(screen.indexOf("^") === -1){
                  let a = document.createElement("div");
                  a.classList.add("historyItem");
                  a.innerHTML = " => "+main.value+" = "+eval(main.value);
                    cnt.append(a);
                  main.value =eval(main.value);
                }
                else{
                   screen = screen.replace("^","**");
                   main.value=screen;
                    console.log(screen);
                    main.value = eval(screen);
                }              
          } catch (error) {
              main.value= "ERROR"
          }
      }
      else if(e.target.value ==="bs"){
          let ln =main.value.length;
          console.log(ln);
          let t= main.value.slice(0,ln-1);
          main.value =t;
      }
      else if(e.target.value === "AC"){
          main.value ="";
      }
      else if(e.target.value ==="<>"){
            if(bo){
                Array.from(x).forEach((lo)=>{
                    lo.style.display ="none";
                })
                   bo =false;
                   form1.style.width = "43%"
               }
               else {
                   Array.from(x).forEach((lo)=>{

                       lo.style.display ="inline-block";
                   })
                   form1.style.width ="75%"
                   bo =true;
               }
      }
      else if(e.target.innerHTML==="sin"){
          try {
              let t =eval(main.value)
              if (degrad) {
                  let ans = Math.sin(t);
                  if(ans<1e-10){
                      ans=0;
                    }
                    else if(ans>1e+10){
                        ans="INFINITY";
                    }
                main.value =ans;    
            }
            else{
                
                let angle =(Math.PI/180)*t;
                // let angle =(3.141592653589793/180)*t;
                let ans = Math.sin(angle);
                if(ans<1e-10){
                    ans=0;
                }
                else if(ans>1e+10){
                    ans="INFINITY";
                }
                main.value =ans;
            }
            
        } catch (error) {
            main.value ="ERROR"
        }
    }
    else if(e.target.innerHTML==="cos"){
        try {
            let t =eval(main.value)
            if (degrad) {
                let ans = Math.cos(t);
                if(ans<1e-10){
                    ans=0;
                }
                else if(ans>1e+10){
                    ans="INFINITY";
                }
                main.value =ans;    
            }
            else{
                
                let angle =(Math.PI/180)*t;
                let ans = Math.cos(angle);
                if(ans<1e-10){
                    ans=0;
                }
                else if(ans>1e+10){
                    ans="INFINITY";
                }
                main.value =ans;
            }
        } catch (error) {
            main.value ="ERROR"
        }
    }
    else if(e.target.innerHTML==="tan"){
        try {
            let t =eval(main.value)
            if (degrad) {
                let ans = Math.tan(t);
                if(ans<1e-10){
                    ans=0;
                }
                else if(ans>1e+10){
                    ans="INFINITY";
                }
                main.value =ans;    
            }
            else{
                
                let angle =(Math.PI/180)*t;
                let ans = Math.tan(angle);
                if(ans<1e-10){
                    ans=0;
                }
                else if(ans>1e+10){
                    ans="INFINITY";
                }
                main.value =ans;
            }
        } catch (error) {
            main.value ="ERROR"
        }
    }
    else if(e.target.value==="log"){
        try {
            let t =eval(main.value)
            let ans = Math.log10(t);
            if(ans<1e-10){
                ans=0;
            }
            main.value =ans;
        } catch (error) {
            main.value ="ERROR"
        }
    }
    else if(e.target.value==="sqrt"){
        try {
            let t =eval(main.value)
            let ans = Math.sqrt(t);
            main.value =ans;
        } catch (error) {
            main.value ="ERROR"
        }
    }
    else if(e.target.value==="n!"){
        try {
            let t =eval(main.value);
            let q =parseFloat(t);
            if (Number.isInteger(t)) {
                let w = parseInt(t);
                let ans=1;
                for (let index = 1; index <= w; index++) {
                    ans*=index;
                }
                main.value = ans;
            }
            else{
                main.value ="ERROR"
            }
        } catch (error) {
            main.value ="ERROR"
            console.log(error);
        }
    }
    else if(e.target.value==="e"){
        let x = eval(main.value);
        let y =Math.exp(x);
        main.value =y;
    }
    else if(e.target.value ==="π"){
        try {
            main.value =main.value +Math.PI;
        } catch (error) {
                main.value ="ERROR"
            }
        }
        else if(e.target.value ==="ln"){
            try {
                let t =eval(main.value);
                main.value = Math.log(t);
            } catch (error) {
                main.value ="ERROR"
            }
        }
        else if(e.target.value === "Deg"){
            if(!degrad){
                e.target.innerHTML ="Rad"
                degrad =!degrad;
            }
            else {
                e.target.innerHTML ="Deg"
                degrad =!degrad;
            }
        }
        else if(e.target.value === "INV"){
         if(invbool){
             Array.from(inv).forEach((p)=>{
              if(p.innerHTML==="sin"){
                  p.innerText ="asin"
              }
             else if(p.innerHTML==="cos"){
                  p.innerText ="acos"
              }
              else if(p.innerHTML==="tan"){
                  p.innerText ="atan"
              }
             })
             invbool =false;
         }
         else {
          Array.from(inv).forEach((p)=>{
              if(p.innerHTML==="asin"){
                  p.innerText ="sin"
              }
             else if(p.innerHTML==="acos"){
                  p.innerText ="cos"
              }
              else if(p.innerHTML==="atan"){
                  p.innerText ="tan"
              }
             })
             invbool =true;
         }
        }
        else if(e.target.innerHTML ==="asin"){
          try {
              let t =eval(main.value)
              let ans = Math.asin(t);
              if (!degrad) {
                  ans  =(ans/ Math.PI)*180;
              }
              main.value =ans;
            } catch (error) {
                main.value ="ERROR"
            }
        }
        else if(e.target.innerHTML ==="atan"){
            try {
                let t =eval(main.value)
                let ans = Math.atan(t);
                if (!degrad) {
                    ans  =(ans/ Math.PI)*180;
                }
                main.value =ans;
            } catch (error) {
                main.value ="ERROR"
            }
        }
        else if(e.target.innerHTML ==="acos"){
            try {
                let t =eval(main.value)
                let ans = Math.acos(t);
                if (!degrad) {
                    ans  =(ans/ Math.PI)*180;
                }
              main.value =ans;
          } catch (error) {
              main.value ="ERROR"
          }
        }
        else if(e.target.value ==="HIS"){
            his.style.display ="block";
            bt.style.display = "none";
        }
      else{
          try {
            let x = e.target.value;
            main.value =main.value+x;   
          } catch (error) {
              main.value="ERROR";
          }
      
      }
  })
})
window.onload =function () {
    body.style.display='block'
    // hideBtn[1].style.display='flex'
}
mode.addEventListener('click',()=>{
   if(mode){
       form1.style.backgroundImage ="linear-gradient(rgb(240, 223, 223),rgb(213, 241, 253))";
       body.style.backgroundColor ="#1A1A40";
       Array.from(btn).forEach((k)=>{
           // k.style.backgroundImage="radial-gradient(rgb(248, 130, 152),#fad1d1,white)"
           k.style.background="radial-gradient(rgb(2, 2, 121),rgb(12, 159, 208))"
           k.style.color = "whitesmoke";
           k.style.border="2px solid rgb(239, 138, 138)";
        })
        main.style.background = "radial-gradient(rgb(1, 14, 99),rgb(54, 191, 250))"
        main.style.color = "white";
        la[0].style.color ="white";
        la[1].style.color ="white";
        l[0].style.color ="white";
        l[1].style.color ="white";
        Array.from(cobtn).forEach((x)=>{
         //    x.backgroundColor="orangered"
         x.style.background="orangered"
         console.log(x);
        })
        // form1.style.boxShadow="0px 0px 1rem 1rem rgb(121, 121, 252)";
        form1.style.boxShadow="0px 0px 1rem 1rem rgb(217, 217, 254)";
        mode =false;
    }
    else {
        form1.style.backgroundImage ="linear-gradient(rgb(1, 17, 78),rgb(153, 245, 236))";
        body.style.backgroundColor ="#DEE4E7";
        Array.from(btn).forEach((k)=>{
            k.style.backgroundImage="radial-gradient(rgb(147, 209, 243),rgb(211, 230, 240),white)"
            // k.style.backgroundImage="radial-gradient(rgb(0, 75, 0),rgb(2, 2, 76))"
            k.style.border="2px solid blueviolet;";
            k.style.color="black";
        })
        
        la[0].style.color ="black";
        la[1].style.color ="black";
        l[0].style.color ="black";
        l[1].style.color ="black";
        main.style.color="black";
        main.style.background="rgb(235, 241, 200)";
        Array.from(cobtn).forEach((x)=>{
            //    x.backgroundColor="orangered"
            x.style.background="orangered"
            console.log(x);
        })
        form1.style.boxShadow="0px 0px 1rem 1rem rgb(121, 121, 252)";
        mode =true;
    }
})
kin.addEventListener('click',()=>{
    if(kin){
        form.style.display = "none";
        calc.style.display ="flex";
       
    kin=false;

    }
    else {
        form.style.display = "flex";
        calc.style.display ="none";
        
    kin=true;
    }
})

pic.addEventListener('click',()=>{
    his.style.display = "none"
    bt.style.display ="block"
})
document.onkeydown = function key(e){
    console.log(e);
    if(e.key === "="){
        try {
            let screen =main.value;
            console.log(screen.indexOf("^"));
            if(screen.indexOf("^") === -1){
                let a = document.createElement("div");
                a.classList.add("historyItem");
                a.innerHTML = " => "+main.value+" = "+eval(main.value);
                  cnt.append(a);
                main.value =eval(main.value);
              }
              else{
                 screen = screen.replace("^","**");
                 main.value=screen;
                  console.log(screen);
                  main.value = eval(screen);
              }              
        } catch (error) {
            main.value= "ERROR"
        }
    }
    else if(e.key ==="Backspace"){
        let ln =main.value.length;
        console.log(ln);
        let t= main.value.slice(0,ln-1);
        main.value =t;
    }
    else if(e.key==="e"){
        let bh = eval(main.value);
        let di =Math.exp(bh);
        main.value =di;
    }
    else if(e.key ==="Enter"){
        try {
            let screen =main.value;
            console.log(screen.indexOf("^"));
            if(screen.indexOf("^") === -1){
                let a = document.createElement("div");
                a.classList.add("historyItem");
                a.innerHTML = " => "+main.value+" = "+eval(main.value);
                  cnt.append(a);
                main.value =eval(main.value);
              }
              else{
                 screen = screen.replace("^","**");
                 main.value=screen;
                  console.log(screen);
                  main.value = eval(screen);
              }              
        } catch (error) {
            main.value= "ERROR"
        }
    }
    else if(e.keyCode ==67){
        main.value ="";
    }
    else{
        try {
            if((e.keyCode>=48 && e.keyCode<=57) || (e.keyCode ===187 ||(e.keyCode ===189) ||(e.keyCode ===191))){
          let x = e.key;
          main.value =main.value+x;   
            }
        } catch (error) {
            main.value="ERROR";
        }
    
    }
}
    var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt);
    calculator.setExpression();
    


