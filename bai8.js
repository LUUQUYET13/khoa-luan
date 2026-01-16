function timMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [3, 9, 2, 15, 7];
console.log("Số lớn nhất = " + timMax(arr));
