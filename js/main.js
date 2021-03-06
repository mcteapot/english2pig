// Arjun Prakash
// English to Pig Latin Converter
// 07.18.12

// englishToPigLatin : converts sentence to pig latan
var englishToPigLatin =  function( str ) {

	var wordRegex = /\s*\s|\W\s*\s|\W$/;
	var wordMatches = str.split( wordRegex );

	var spaceRegex = /\s*\s|\W\s*\s|\W$/g;
	var spaceMatches = str.match( spaceRegex );
	
	for ( var i = 0; i < wordMatches.length; i++ ) {
		
		var vowelRegex = /^[AEIOU]|^[aeiou]/;
		var numberRegex = /^[0-9]|^_/;
		
		if ( wordMatches[i] ) {

			if ( vowelRegex.test( wordMatches[i] ) ) { // vowel 
				
				wordMatches[i] = wordToPig( wordMatches[i], true );
			
			} else if ( numberRegex.test( wordMatches[i] ) ){ // not vowel or consonant
			
				wordMatches[i] = wordMatches[i];
			
			} else { // consonant

				wordMatches[i] = wordToPig( wordMatches[i], false );
			
			}
		
		}
	
	}

	if( ! ( spaceMatches ) ) {

		return wordMatches[0];
	
	}

	return twoArraysToString( wordMatches, spaceMatches );


}

// wordToPig: converts single word to pig latin
var wordToPig = function( str, isVowel ) {

	var isUpper = false;
	var pigStr = "";

	var uppercaseRegex = /^[A-Z]/;

	if ( uppercaseRegex.test( str ) ) { // upercase check
		isUpper = true;
		str = str.toLowerCase();
	}

	if( isVowel ) { // vowel 

		pigStr = str.substring(1) + str.charAt(0) + "hay";

	} else { // consonant

		pigStr = str.substring(1) + str.charAt(0) + "ay";

	}

	if (isUpper) { // if upercase convert back

		pigStr = capitaliseFirstLetter( pigStr );
	}

	return pigStr;

}

// capitaliseFirstLetter : converts first character of a string to uppercase
var capitaliseFirstLetter = function( str ) {

 return str.toUpperCase().charAt(0) + str.substring(1);

}

// twoArraysToString : combines two array of strings into one string
var twoArraysToString = function( wordArray, spaceArray) {

	var pigStr = "";

	for (var i = 0; i <= spaceArray.length; i++) {

		if ( i != spaceArray.length ) {

			pigStr = pigStr + wordArray [i] + spaceArray[i];

		} else {

			pigStr = pigStr + wordArray [i];
		
		}
		
	}

	return pigStr;

}


// OUTPUT
var string01 = "Hello";
var string02 = "Another";
var string03 = "Bacon is awesome! Sometimes, in the morning, I’ll have bacon on toast for breakfast."

console.log( "" );
console.log( englishToPigLatin( string01 ) );
console.log( "" );
console.log( englishToPigLatin( string02 ) );
console.log( "" );
console.log( englishToPigLatin( string03 ) );




