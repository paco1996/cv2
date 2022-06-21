$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "¿Has rellenado el formulario correctamente?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

(function(){
                 emailjs.init("2naZ5JjjZ4Ty9Vl18");
             })();

function submitForm(){
    //$( "#form-submit" ).prop( "disabled", true );
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    

           
                        var data = {
                           from_name: this.from_name=name,
                            from_email: this.from_email=email,
                            message_html: this.message_html=message,
                        };
                        
                        emailjs.send("gmail", "template_c6xqa73", data)
                        
                        .then(function(response) {
                            if(response.text === 'OK'){
                                formSuccess();
                            }
                           console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                        }, function(err) {
                           formError();
                           submitMSG(false,"FAILED. error="+err);
                        });
                    
}




function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Mensaje enviado!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}


