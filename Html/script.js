//http://www.thecolorapi.com/id?hex=24B1E0


function xchange() {
	if (x.readyState == 4) {
		if (x.status == 200) {
			var jsonobj = x.responseText;            
			parseJSON(jsonobj);
		} else {
			alert("Couldn't complete request, please report the bug to the developer:\n" + x.statusText);
		}
	}
}

function parseJSON(jsonobj) {
	var document = JSON.parse(jsonobj);  

	var IColor   = document.schemes[0].colors[0];
	var IIColor  = document.schemes[0].colors[1];
	var IIIColor = document.schemes[0].colors[2];
	var IVColor  = document.schemes[0].colors[3];
	 
	ge('IColor_label').innerHTML   = '#' + IColor;
	ge('IIColor_label').innerHTML  = '#' + IIColor;
	ge('IIIColor_label').innerHTML = '#' + IIIColor;
	ge('IVColor_label').innerHTML  = '#' + IVColor;

	ge('IColor_Div').style.backgroundColor   = '#' + IColor;
	ge('IIColor_Div').style.backgroundColor  = '#' + IIColor;
	ge('IIIColor_Div').style.backgroundColor = '#' + IIIColor;
	ge('IVColor_Div').style.backgroundColor  = '#' + IVColor;

	done_refresh();
}

function ge(id) {
	return document.getElementById(id);
}

function loadit() {	
	x.open("GET", checkurl, true);
	x.onreadystatechange = xchange;
	x.send(null); 
}
 
var check_url = 'http://www.colr.org/json/schemes/random/7?scheme_size_limit=%3C5';
var checkurl = 'http://www.colr.org/json/schemes/random/7?scheme_size_limit=%3E5';
var x = new XMLHttpRequest();

function refresh() { 
	ge('loading').style.display = 'block';
	ge('palet').style.display = 'none';	 

	random7();
	loadit();   
}

function done_refresh() {
	ge('loading').style.display = 'none';
	ge('palet').style.display = '';	
}

setTimeout(function() {
	random7();
	loadit();  
}, 1);


var api_url = 'http://www.colr.org/json/colors/random/7'; 
var y = new XMLHttpRequest();

function random7(){ 
	y.open("GET", api_url, true);  
	y.onreadystatechange = random7_xchange; 
	y.send(null); 
}

function random7_xchange() {  
	if (y.readyState == 4) {
		if (y.status == 200) {    
			var documents = JSON.parse(y.responseText);  
			ge('buncls').innerHTML   = documents.colors[0].hex+', '+documents.colors[1].hex+', '+documents.colors[2].hex+', '+documents.colors[3].hex+', '+documents.colors[4].hex+', '+documents.colors[5].hex+', '+documents.colors[6].hex;   
		
			ge('RIColor_label').innerHTML   = '#' + documents.colors[0].hex;
			ge('RIIColor_label').innerHTML  = '#' + documents.colors[1].hex;
			ge('RIIIColor_label').innerHTML = '#' + documents.colors[2].hex;
			ge('RIVColor_label').innerHTML  = '#' + documents.colors[3].hex;

			ge('RIColor_Div').style.backgroundColor   = '#' + documents.colors[0].hex;
			ge('RIIColor_Div').style.backgroundColor  = '#' + documents.colors[1].hex;
			ge('RIIIColor_Div').style.backgroundColor = '#' + documents.colors[2].hex;
			ge('RIVColor_Div').style.backgroundColor  = '#' + documents.colors[3].hex;
		} else {
			alert("Couldn't complete request, please report the bug to the developer:\n" + y.statusText);
		}
	}
} 