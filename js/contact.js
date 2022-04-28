
const fname=document.getElementById("fname");
const lname = document.getElementById("lname");
const phone=document.getElementById("phone");


//console.log(fname, lname, phone);

fname.addEventListener("blur", ()=>{
    let regex=/^[a-zA-Z]([a-zA-Z]){1,10}$/;
    let strfname = fname.value;
    //console.log(regex, strfname);
    if (regex.test(strfname)){
        //console.log("It matched");
        fname.style.borderColor= "green";
        firstname.innerHTML="";
    }
        else{
            //console.log("It doesnt matched");
            fname.style.borderColor= "red";
            firstname.style.color="red";
            document.getElementById("firstname").innerHTML="Firstname must be 2-10 characters long and should not start with a number";
            return false;
        }
 })
lname.addEventListener("blur", ()=>{
    let regex1=/^[a-zA-Z]([a-zA-Z]){1,10}$/;
    let strlname = lname.value;
    //console.log(regex, strfname);
    if (regex1.test(strlname)){
        //console.log("It matched");
        lname.style.borderColor= "green";
        lastname.innerHTML="";
    }
        else{
            //console.log("It doesnt matched");
            lname.style.borderColor= "red";
            lastname.style.color="red";
            document.getElementById("lastname").innerHTML="Lastname must be 2-10 characters long and should not start with a number";
            return false;
        }
})
phone.addEventListener("blur", ()=>{
    let regex2=/^([0-9]){10}$/;
    let strphone=phone.value;
    //console.log(strphone, regex2);
    if(regex2.test(strphone)){
       // console.log("It matched");
       phone.style.borderColor= "green";
       phoneno.innerHTML="";
    }
    else{
        //console.log("It doesnt matched");
        phone.style.borderColor= "red";
        phoneno.style.color="red";
            document.getElementById("phoneno").innerHTML="Phone number must contain 10 numbers and should not contain alphabets";
            return false;

    }
})


function btnSubmit(){
    if(fname.length && lname.length && phone.length >= 2){
    document.getElementById("success").innerHTML="Form submitted";
    alert("form submitted");
    }

}








