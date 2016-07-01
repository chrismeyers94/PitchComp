$(document).ready(function(){
    var name,email,phone,problem,cust,val,solution,channels,revenue,cost,metrics,advantage,
        _err = false;



    $("#submit-button").bind("click", function(e){

        member=$("#member").val();
        partner=$("#partner").val();
        email=$("#email").val();
        phone=$("#phone").val();
        problem=$("#problem").val();
        cust=$("#cust").val();
        val=$("#value").val();
        solution=$("#solution").val();
        channels=$("#channels").val();
        revenue=$("#revenue").val();
        cost=$("#cost").val();
        metrics=$("#metrics").val();
        advantage=$("#advantage").val();



        // Remove error class
        $("input, textarea").removeClass('err');




        // Name Check

        if(member == '') {
            $("#member").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }

        // Email Check
        if(email == '') {
            $("#email").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }

        // Phone Check
        if(phone == '') {
            $("#phone").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }

        // Problem Check
        if(problem == '') {
            $("#problem").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }

        // Customers Check
        if(cust == '') {
            $("#cust").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }
        // Value Check
        if(val == '') {
            $("#value").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }
        // Solutions Check
        if(solution == '') {
            $("#solution").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }
        // Channels Check
        if(channels == '') {
            $("#channels").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }
        // Revenue Check
        if(revenue == '') {
            $("#revenue").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }
        // Cost Check
        if(cost == '') {
            $("#cost").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }
        // Metrics Check
        if(metrics == '') {
            $("#metrics").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }
        // Advantage Check
        if(advantage == '') {
            $("#advantage").addClass('err');
            var _err = true;
            $("#submit-button").text("Please Fill in Red Fields");
        }


        // Stop here, we have empty fields!
        if(_err !== true) {
            e.preventDefault();


            $("#submit-button").text("Sending E-mail...Please wait");
            $.get('/send',{member:member,partner:partner,email:email,phone:phone,problem:problem,cust:cust,val:val,solution:solution,channels:channels,revenue:revenue,cost:cost,metrics:metrics,advantage:advantage},function(data){
                if(data==="sent"){
                  var delay=2500; //2.5 second
                  console.log(data);
                 setTimeout(function() {

      // append message and show ok alert
      $("#submit-button").text("Application Sent!");
      $("#submit-button").attr('disabled', true);



}, delay);

}
            });

        }




    });
});
