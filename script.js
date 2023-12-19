const extendHex = (shortHex) => {
  let str = shortHex.slice(-3);
  let res = "";
  for(int i = 0 ; i < 3 ; i++){
	  for(int j = 0 ; j < 3 ; j++){
         res += str.charAt(i);	
	  }
  }	

	return res;
	
	  
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
