function character_substitute(string) {
	var first_char = string.replace( /<.*?>/g, "" ).toLowerCase().charAt(0);
	var chars = /[šđžčć]/g;
	
	if (first_char.match(chars)) {
		if (first_char == "š") { first_char = first_char.replace("š", "sx"); return first_char; }
		if (first_char == "ž") { first_char = first_char.replace("ž", "zx"); return first_char; }
		if (first_char == "č") { first_char = first_char.replace("č", "cxx"); return first_char; }
		if (first_char == "ć") { first_char = first_char.replace("ć", "cx"); return first_char; }
		if (first_char == "đ") { first_char = first_char.replace("đ", "dx"); return first_char; }
	}
	
	return first_char;
}

jQuery.fn.dataTableExt.oSort['balkan-string-asc']  = function(a,b) {
	x = character_substitute(a);
	y = character_substitute(b);
	
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
};

jQuery.fn.dataTableExt.oSort['balkan-string-desc'] = function(a,b) {
	x = character_substitute(a);
	y = character_substitute(b);
	
    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
};
