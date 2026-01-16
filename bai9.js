function kiemTraSo(n) {
    if (n > 0) {
        return "Số dương";
    } else if (n < 0) {
        return "Số âm";
    } else {
        return "Số 0";
    }
}

let n = Number("Nhập n:");
console.log(kiemTraSo(n));
