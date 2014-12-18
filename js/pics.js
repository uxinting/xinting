$(document).ready(function(){
    function UpdatePics() {
        var border = 1;
        var margin = 5;
        var width = $('.list').width();
        
        var row = 2;
        var picw = width / 2 - (border+margin)*4;
        if ( picw < 300 ) {
            picw = width - (border+margin)*2;
            row = 1;
        }
        var pich = picw / 1.5;
        
        var lis = $('#pics-list li');
        for ( var i = 0; i < lis.length; i++ ) {
            $(lis[i]).width( picw + 'px' ).height( pich + 'px' );
            var crow = Math.floor( i / row );
            if ( crow % 2 != 0 ) {
                $(lis[i]).find( 'img' ).css( {'right': 0, 'left': 'auto' } );
                $(lis[i]).find( 'div' ).css( {'left': 0, 'right': 'auto' } );
            } else {
                $(lis[i]).find( 'img' ).css( {'left': 0, 'right': 'auto' } );
                $(lis[i]).find( 'div' ).css( {'right': 0, 'left': 'auto' } );
            }
        }
    }

    //Articles scroll horizonl
    $('#pics-list').on( 'mousewheel', function(e) {
        var offset = e.deltaY * e.deltaFactor;
        if ( $('#pics-list li.active').length == 0 ) {
            $(this).scrollLeft( offset + $(this).scrollLeft() );
        }
    } );
    
    $(window).resize( function(e) {
        UpdatePics();
    } );
    
    UpdatePics();
});