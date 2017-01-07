module.exports = function(arr) {
		if (arr.length == 0) {
       		return 0;
   		}
   
		var aritDiff = arr[1] - arr[0];
		var geoRatio = arr[1] / arr[0];

		var arit = true;
		var geo = true;

		for(var i = 0; i < arr.length - 1; i++){
			if (arr[i + 1] - arr[i] !== aritDiff) {
		  		arit = false;
			}
			if (arr[i + 1] / geoRatio !== arr[i]) {       9
			   geo = false;
			}
		}

		if (arit === true) {
		   return "Arithmetic";
		}
		else if (geo === true) {
		   return "Geometric";
		} else {
		   return -1;
		}
	}