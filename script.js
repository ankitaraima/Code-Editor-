$(document).ready(function(){
    $("body").keyup(function(){
var ht = $("#html").val();
 var css = $("#css").val();
 var cs = "<style> " + css + " </style>";
 var jsc = $("#js").val();
 var s = "<script>" + jsc + "</script>";
//  var con = cs + ht + s;
 var frame = $("#preview").contents().find('body');
frame.html(cs + ht + s );
// frame.append(s);
     
    });
    $("textarea").focus(function(){
        $(this).css("border" ,"2px solid red");
        
        $(this).css("box-shadow" ,"2px 2px 20px 0.5px black");
    });
    $("textarea").blur(function(){
        $(this).css("box-shadow" ,"");
        $(this).css("border" ,"")
    });
   
});