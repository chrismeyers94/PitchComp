$(document).ready(function(){
    var name,to,subject,text,
      _err = false;



    $("#contact_submit").bind("click", function(e){

        name=$("#contact_name").val();
        to=$("#contact_email").val();
        subject=$("#contact_subject").val();
        text=$("#contact_comment").val();


          // Remove error class
          $("input, textarea").removeClass('err');

          // Spam bots will see captcha field - that's how we decet spams.
          // It's very simple and not very efficient antispam method but works for bots.
          if(captcha != '') {
            //return false;
          }


          // Name Check
          if(name == '') {
            $("#contact_name").addClass('err');
            var _err = true;
          }

          // Email Check
          if(to == '') {
            $("#contact_email").addClass('err');
            var _err = true;
          }

          // Subject Check
          if(subject == '') {
            $("#contact_subject").addClass('err');
            var _err = true;
          }

          // Comment Check
          if(text == '') {
            $("#contact_comment").addClass('err');
            var _err = true;
          }



          // Stop here, we have empty fields!
          if(_err !== true) {
            e.preventDefault();

            $("#message").text("Sending E-mail...Please wait");

            $.get("/send",{name:name,to:to,subject:subject,text:text},function(data){
              if(data=="sent")
              {
                  // append message and show ok alert
                  $("#_msg_txt_").empty().append('Message Sent, Thank you!');
                  $("#_sent_ok_").removeClass('hide');

                  // reset form
                  $("#contact_name, #contact_email, #contact_subject, #contact_comment").val('');

                  $("#message").text("");
              }
            });

          }




    });
});
