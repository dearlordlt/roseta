$("#about").click(function() {

    $("#m_home").show(500);
    $("#m_order").show(500);
    $("#m_tx").hide(500);

    $("#btn_send").removeAttr("disabled");

    $('html, body').animate({
        scrollTop: $("#m_home").offset().top
    }, 500);
});

$("#order").click(function() {

    $("#m_home").show(500);
    $("#m_order").show(500);
    $("#m_tx").hide(500);

    $("#btn_send").removeAttr("disabled");

    $('html, body').animate({
        scrollTop: $("#m_order").offset().top
    }, 500);
});

$("#demo_btn").click(function() {

    $("#m_home").show(0);
    $("#m_tx").hide(0);

    console.log("Yay");

    $("#m_order").show("slow", function() {
        $("#btn_send").removeAttr("disabled");

        $('html, body').animate({
            scrollTop: $("#m_order").offset().top
        }, 500);
    });
});

$("#demo_btn2").click(function() {

    $("#m_home").show(0);
    $("#m_tx").hide(0);

    console.log("Yay");

    $("#m_order").show("slow", function() {
        $("#btn_send").removeAttr("disabled");

        $('html, body').animate({
            scrollTop: $("#m_order").offset().top
        }, 500);
    });
});

$("#btn_send").click(function () {
    var fName = $("#f_name").val();
    var fLastName =  $("#f_last_name").val();
    var fEmail =  $("#f_email").val();
    var fPhone =  $("#f_phone").val();
    var fInfo =  $("#c1").attr('checked') + "," + $("#c2").attr('checked') + "," + $("#c3").attr('checked')  + "," + $("#c4").attr('checked');

    console.log("http://vds000004.hosto.lt/roseta/index.php?name="+fName+"&lastname="+fLastName+"=&email="+fEmail+"&phone="+fPhone+"&info="+fInfo);

    $.ajax({
        type: "GET",
        url: "http://vds000004.hosto.lt/roseta/index.php?name="+fName+"&lastname="+fLastName+"=&email="+fEmail+"&phone="+fPhone+"&info="+fInfo,
        data: { xname: "John", xlocation: "Boston" }
    }).done(function( msg ) {
        console.log( "Data Saved: " + msg );

        $("#m_home").hide(500);
        $("#m_order").hide(500);
        $("#m_tx").show(500);
    });

    $("#btn_send").attr("disabled", "disabled");
    $("#btn_send").html("Connecting to server <span class='glyphicon glyphicon-refresh'></span>");

});
