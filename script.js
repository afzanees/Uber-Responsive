$(document).ready(function(){
    $("#sign-up-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
            },
            lname:{
                required:true,
                minlength:6,
            },
            ftime:{
                required:true,
            },
            fdate:{
                required:true,
            }
        },
        messages:{
            fname:{
                minlength:"enter exact location",
                
            }
        }
    })
})

$(document).ready(function () {
    $("#datepicker").datepicker({
      format: "yyyy-mm-dd",
      autoclose: true,
      todayHighlight: true,
    });
  });

  $(document).ready(function(){
    $("form").submit(function(){
        alert("submitted");
    });
  });

  $(document).ready(function(){
    $(".box-one").each(function () {
        let originalColor = $(this).css("background-color"); // Capture original color
    
    $(".box-one").mouseenter(function(){
        $(this).css({"background":"gray"});
    });
    $(".box-one").mouseleave(function(){
        $(this).css({"background":originalColor});
    });
});
  });