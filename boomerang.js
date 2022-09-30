function counter(arr) {
	let count = 0;
	for(let i = 2; i<arr.length; i++){
		if(arr[i] == arr[i-2] && arr[i]!==arr[i-1]){
			count++;
		}
	}
	return count;
}
let sample=[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];
console.log(counter(sample));