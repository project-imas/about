
function referrerValue(){
   var domain = "";
   var referrer = document.referrer;

   if (referrer == "") {
     return domain;
   }
   if(referrer.indexOf("http://www.google.com/cse") > -1) {
          return domain;
   }

   rPieces = referrer.split("/");
   dPieces = rPieces[2].split(".");

   if(dPieces.length >= 2) {
         domain = dPieces[dPieces.length-2];
		 return "referrer=" + domain;
   }

	return "";
}
// _rval is set in the demandbase callback function dbase_parse(data) to include the referrer and demandbase key/value pairs.
var _rval = '';


