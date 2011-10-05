var give_birth_to_fader = function(){
    $('.randomizer').click(function(){
        $('.midst').fadeOut(somaAppears);
    });    
}

var somaAppears = function(){
    $.ajax({
        url: "/random_name", 
        success: function(station_name){
            var player = "<iframe scrolling='no' frameborder='0' src=http://somafm.com/popup/?" + station_name + "/>" ;
            player += "<br/><img class='randomizer' src='/images/dice.jpeg' width=50px />";
            $('.midst').html(player);
            $('.midst').fadeIn();
            give_birth_to_fader();
        }  
    });
};

$(document).ready( give_birth_to_fader );