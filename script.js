function Register(){
    var name=document.register.Name.value;
    var email=document.register.Email.value;
    var phone=document.register.Phone.value;
    var password=document.register.Pass.value;
    var repass=document.register.Repass.value;

    if(name==null || email==null || phone== null || password==null || repass==null || name=="" || email=="" || phone=="" || password=="" || repass==""){
        alert("Please dont keep it blank! Fill up the form");
        return false;
    }
    else if(password.length<=5){
        alert("Password length cant be less than 5 characters");
        return false;
    }
    else if(password!=repass){
        alert("Pass is not same");
        return false;
    }
    else{
        alert("Successfull!");
    }
}
