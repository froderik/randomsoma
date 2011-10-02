var somaAppears = function(){
    $.ajax({
        url: "random_name", 
        success: function(station_name){
            $('.midst').html("<iframe src=http://somafm.com/popup/?" + station_name + "/>" );
        }  
    });
};

$(document).ready( function(){
    $('.dabutton').click(function(){
        $('.dabutton').fadeOut(somaAppears);
    });
});