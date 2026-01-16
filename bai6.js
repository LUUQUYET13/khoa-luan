function demSoLonHon10(arr) {
    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            dem++;
        }
    }
    return dem;
}

let arr = [5, 12, 8, 20, 3, 15];
console.log("Số phần tử > 10 = " + demSoLonHon10(arr));

