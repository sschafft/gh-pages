$(document).ready(function(){
    var scrollSettings = {
        duration:1000, 
        interrupt:true
    }

    var initUrlHash = window.location.hash.slice(1);

    if(initUrlHash.length){        
        $(window).stop(true).scrollTo('#' + initUrlHash, scrollSettings);            
    }

    $(window).bind('hashchange', function() {
        var updatedUrlHash = window.location.hash.slice(1);            

        if(updatedUrlHash.length){                
            $(window).stop(true).scrollTo('#' + updatedUrlHash, scrollSettings);
        }

    });

    $('.js-scroll').click(function(e) {
            e.preventDefault();
            $(window).stop(true).scrollTo(this.hash, scrollSettings);
    });
});