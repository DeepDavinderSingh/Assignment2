$(document).ready(()=>
$('#contactUsForm').validate(
    {
        rules:
        {
            userName:{
                required:true,
                validUserName:true,
                minlength:3,
            },
            userEmail:
            {
                required:true,
                validUserEmail:true
            },
            userMessage:
            {
                required:true,
                minlength:40,
                validUserMessage:true
            }
        },

        messages:
        {
            userName:
            {
                required: "Please enter your name"
            },
            
            userEmail:
            {
            required:"Please enter your Email Id",
            },

            userMessage:
            {
            required:"Please enter your Message",
            }
        },

    

    submitHandler:function(form)
    {
        alert("You are being redirected");
        window.location.href="https://lng-consultancy.com";
    }
    }
    ));
    

    $.validator.addMethod("validUserName", function(value)
    {
    value=value.trim();
    var regName = /^([A-Za-z])([A-Z a-z\.]){0,30}$/i;
    var validname=regName.test(value);
    return validname;
    },"Please enter alphabets only");

    $.validator.addMethod("validUserEmail", function(value)
    {
        value=value.trim();
        var regEmail = /^([a-zA-Z])([\-\.0-9a-zA-Z])+@([\-\.0-9a-zA-Z])+\.([a-zA-Z]){2,7}$/i;
        var validEmailID=regEmail.test(value); 
        return validEmailID;
    },"Please Enter valid Email Address");

    $.validator.addMethod("validUserMessage", function(value)
    {
        value=value.trim();
        var regMsg = /[a-z A-z0-9\.!@#$%^&*()_+}{":';?,}]$/i;
        var validMessage=regMsg.test(value); 
        return validMessage;
    },"Please Enter at least 40 characters");
