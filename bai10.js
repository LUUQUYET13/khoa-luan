function demSoChan(arr) {
    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            dem++;
        }
    }
    return dem;
}

let arr = [1, 2, 3, 4, 6, 9];
console("Số phần tử chẵn = " + demSoChan(arr));
