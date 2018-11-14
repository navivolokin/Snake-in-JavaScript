//getting array from localStorage
var nesto=localStorage.getItem("niz");
var players2=JSON.parse(nesto);
//sorting
players2.sort(function(a,b){
	return b.bodovi-a.bodovi;
})

//printing into div
for( var i=0; i<5; i++){
	var br=i+1;
	document.write( br+ ". "+  players2[i].ime+ "----" + players2[i].bodovi + "<br>");

           }
