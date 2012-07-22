// Web Page Code
var baconText = "Bacon is awesome! Sometimes, in the morning, I’ll have bacon on toast for breakfast."

var fillTextfeald = function() {

	$( "#english_text" ).text( baconText );
}

var pigConvert = function() {
	// note diffrence between .val and .text
	var englishText = $( "#english_text" ).val();
	var pigText = englishToPigLatin( englishText );
	$( "#pig_text" ).text( pigText );

}

$( "document" ).ready( fillTextfeald );
$( "document" ).ready( pigConvert );

//$( "#english_button" ).click(  pigConvert );
$( "#english_text" ).bind("keyup", pigConvert );
