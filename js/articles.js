$(document).ready(function(){
    
    //Articles scroll horizonl
    $('#articles-list').on( 'mousewheel', function(e) {
        var offset = e.deltaY * e.deltaFactor;
        if ( $('#articles-list li.active').length == 0 ) {
            $(this).scrollLeft( offset + $(this).scrollLeft() );
        }
    } );
    
    //Article scroll verticle
    $('#articles-list li').on( 'mousewheel', function(e) {
        var offset = e.deltaY * e.deltaFactor;
        if ( $('#articles-list li.active').length != 0 ) {
            var cur = parseInt( $('#articles-list li.active .article').css( 'margin-top' ) );
            if ( cur + offset > 0 ) return;
            $('#articles-list li.active .article').css( 'margin-top', cur + offset + 'px' );
        }
    } );
    
    //Highlight article on Click
    $('#articles-list li').click( function(e) {
        $('#articles-list li.active .article').css( 'margin-top', '0px' );
        if ( !$(this).hasClass( 'active' ) ) {
            $('#articles-list li.active').removeClass( 'active' );
        }
        $(this).toggleClass( 'active' );
        UpdateScrollBar( this );
    } );
});