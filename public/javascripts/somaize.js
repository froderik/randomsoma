var somaAppears = function(){
    $.ajax({
        url: "random_name", 
        success: function(station_name){
            $('.midst').html("<iframe scrolling='no' frameborder='0' src=http://somafm.com/popup/?" + station_name + "/>" );
            $('.midst').fadeIn();
        }  
    });
};

$(document).ready( function(){
    $('.randomizer').click(function(){
        $('.midst').fadeOut(somaAppears);
    });
});