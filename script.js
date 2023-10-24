let payByNumber=document.querySelector(".btn button")
let page1=document.querySelector(".page1")
let page2=document.querySelector(".page2")
payByNumber.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "flex";
})

let Page2Button=document.querySelector(".page2 .page2Btn")
let page3=document.querySelector(".page3")
let PhoneNumber=document.querySelector("input")
let Page3PhnNo=document.querySelector(".phoneNo")
Page2Button.addEventListener("click",()=>{
    if(PhoneNumber.value==""){
        let error=document.querySelector(".ErrorMsg").innerText="No Mobile Number entered!!"
        console.log(error);
    }
    else if(PhoneNumber.value.length!=10){
        let error=document.querySelector("ErrorMsg").innerText="Invalid Mobile Number!!"
        console.log(error);
    }
    else{
        Page3PhnNo.innerText=PhoneNumber.value;
        page2.style.display = "none";
        page3.style.display = "flex";
        console.log(Page3PhnNo);
    }
})


let AmountEntered=document.querySelector("#AmountEntered")
let ProceedToPay=document.querySelector(".thirdPage button")
let page4=document.querySelector(".page4")
ProceedToPay.addEventListener("click",()=>{
    if(AmountEntered.value==0){
        let error=document.querySelector(".thirdPage .ErrorMsg").innerText="No amount entered!!"
        console.log(error);
    }
    else{
        page3.style.display="none"
        page4.style.display="flex";
    }
})


function getRandomTime(){
    return Math.floor(Math.random()*5000)+2000
    // will generate random time between 2 to 7 sec
}

let page5=document.querySelector(".page5")
let pin=document.querySelector("#pass")
let ConfirmPay=document.querySelector(".fourthPage button")
let audio=new Audio("./successful.mp3")
ConfirmPay.addEventListener("click",()=>{
    let paymentPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(pass.value.length!=6){
                reject("Wrong Pin!!")
            }
            else{
                resolve()
            }
        },getRandomTime);
    });
    paymentPromise.then((data)=>{
        page4.style.display="none"
        page5.style.display="flex"
        audio.play();
    })
    .catch((data)=>{
        console.log(data);
    })
})

let back=document.querySelector(".lastPage button")
back.addEventListener("click",()=>{
  page5.style.display = "none";
  page1.style.display = "flex";
  PhoneNumber.value="";
  AmountEntered.value="";
  pin.value="";
})
