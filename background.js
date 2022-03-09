
chrome.contextMenus.create( {
	title: "Przecena z: \"%s\"",
	contexts: ["selection"],
	onclick: count
});

// poprawki #2
//chrome.browser_action.onClicked.addListener(function(tab){count});

var equal;
var tab = [];
var select;
var optima = [];
var firstValue = [];
var testx;
var percent;
var link;
var tekst;

chrome.commands.onCommand.addListener(function(count) {
  count(info);
});



function count(info) {
	
	
    select = info.selectionText;

	select = select.replace(",",'.');


    //if(160 === select.charCodeAt(1))
		//select = select.substr(0,1)+select.substr(2,4);
    
    select = parseFloat(select);
	

	var i = 0;	
    var percent = 0;
    
    for (var x = 10; x < 55; x+=5){
            var equal = (select * x)/100;
            percent = select - equal;
			percent = Number(Math.round(percent + 'e+2') + 'e-2');
			firstValue[i] = percent;	//wartosc przed zaokragleniami
            if (percent % 10 >= 5) {
                percent += (10 - (percent % 10));
                percent--;
                tab[i] = percent;  
            }
            else {
                percent -= (percent % 10);
                percent--;
                tab[i] = percent;
            }
			
			//wycinanie wartosci 209 i wiekszych 
			//if (tab[i] != (109))
				//if (tab[i] % 100 == 9) {
					//tab[i] -= 10;
					//}
			
			//obliczanie wartosci do odjecia w optimie
			//optima[i] = select - tab[i];
			
			i++;
         }

	newWindow();
	//resizeWin() 
	//habababa
}


function newWindow() {
var newWindow = window.open('', 'okno', 'toolbar=no,location=on,fullscreen=no,resizable=on,width=280,height=370,top=50,left=50');
    with (newWindow) {
        document.writeln('<html>');
        document.writeln('<head>');
        document.writeln('<title>Przecena</title>');
        document.writeln('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
		document.writeln('<link rel="Stylesheet" type="text/css" href="style.css" />');
        document.writeln('</head>');
        document.writeln('<body>');
		//document.writeln('log: '+select+' '+firstValue[0]+' '+testx+' '+equal+' '+percent+' '+link+' '+tekst+'');
		document.writeln('Przecena z '+select+'</br></br>');
		var proc = 5;
		for (var i=0; i<firstValue.length; i++) {
			proc = proc+5;
			document.writeln('<font size="3"> '+'-'+proc+'% = '+'<strong>'+firstValue[i]+'</strong></br>');
			//document.writeln('<font size="3">'+proc+'% = '+tab[i]+'</font>'+' Opti -'+optima[i]+' War '+firstValue[i]+'</br>');
			}
        document.writeln('</body>');
		document.writeln('<footer></br></br>');
		document.writeln('SelectExtension 3.0 powered by MJ');
		document.writeln('</footer>');
        document.writeln('</html>');
        document.close()
    }
}




//function resizeWin() {
  //  newWindow.resizeTo(190, 350);                             // Resizes the new window
    //newWindow.focus();                                        // Sets focus to the new window
//}

