function tinhTong1DenN(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong += i;
    }
    return tong;
}

let n = Number("Nhập n:");
console.log("Tổng = " + tinhTong1DenN(n));
