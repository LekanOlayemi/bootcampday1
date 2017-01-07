module.exports = function (arr) {
	var minimum = arr[0];
	var maximum = arr[0]

	for (var i=1;i<arr.length;i++)	{
		if (arr[i] < minimum) {
			minimum = arr[i]
		}
		if (arr[i] > maximum) {
			maximum = arr[i]
		}
	}

	if (minimum === maximum) {
		return [minimum]
	} else {
		return [minimum, maximum]
	}
}