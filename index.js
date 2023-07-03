/**
 * Bài 1: QUản lí tuyển sinh
 * tạo 6 biến: diemChuan, khuVuc, doiTuong, diemMonMot, diemMonHai, diemMonBa để chứa data user nhập vào => lấy biến bằng DOM
 * Biến diemUuTien = điểm khu vực + điểm đối tượng
 * Biến điểm ketQua = tổng tiểm 3 môn + điểm ưu tiên
 * So sánh kết quả với điểm chuẩn => rớt đậu và tổng điểm
 * Lưu ý: ko có điểm 0
 */
function tinhDiemUuTien(khuVuc,doiTuong){
    var diemUuTien = 0;
    switch (khuVuc) {
        case 'A':
            diemUuTien = 2;
            break;
        case 'B' : 
            diemUuTien = 1;
            break;
        case 'C' :
            diemUuTien = 0.5;
            break;
        default:
            break;
    }
    console.log(`Điểm ưu tiên sau khi tính lần 1: ${diemUuTien}`);
    switch (doiTuong) {
        case '1':
            diemUuTien = diemUuTien + 2.5;
            break;
        case '2':
            diemUuTien = diemUuTien + 1.5;
            break;
        case '3':
            diemUuTien = diemUuTien + 1;
            break;
        default:
            break;
    }
    console.log(`Điểm ưu tiên sau khi tính lần 1: ${diemUuTien}`);
    var result = 0;
    return result;
}

document.getElementById('btn_baitap1').onclick = function () {
    // lấy dữ liệu từ người dùng
    var diemChuan = document.getElementById('txt_diemChuan').value * 1;
    var khuVuc = document.getElementById('txt_khuVuc').value;
    var doiTuong = document.getElementById('txt_doiTuong').value;
    var diemMonMot = document.getElementById('txt_diemMon1').value * 1;
    var diemMonHai = document.getElementById('txt_diemMon2').value * 1;
    var diemMonBa = document.getElementById('txt_diemMon3').value * 1;
    console.log(diemChuan,khuVuc,doiTuong,diemMonMot,diemMonHai,diemMonBa);
    var diemUuTien = 0;
    // tính điểm ưu tiên  
    diemUuTien = tinhDiemUuTien(khuVuc,doiTuong);
    var ketQua = 0;
    ketQua = diemMonMot + diemMonHai + diemMonBa + diemUuTien;
    var result = '';
    if (ketQua >= diemChuan){
        result ='Đậu';
    }
    else {
        result = 'Rớt';
    }
    document.getElementById('ketQuaBai1').innerHTML = `Bạn đã ${result} và tổng điểm của bạn là: ${ketQua}`;
}
/**
 * Bài 2
 * Tạo 2 biến chứa tên và số Kw
 * sử dụng switch case để tính giá tiền điện
 */
document.getElementById('btn_baiTap2').onclick = function () {
    var ten = document.getElementById('txt_Ten').value;
    var soKw = document.getElementById('txt_soKw').value * 1;
    var tienDien = 0;
    if(soKw <= 50){
        tienDien = soKw*500;
    }
    else if (50 < soKw && soKw <= 100){
        tienDien = 50*500 + (soKw-50)*650;
    } else if (100< soKw && soKw <= 200) {
        tienDien = 50*500 + 50*650 + (soKw-100)*850;
    } else if(200 < soKw && soKw <= 350){
        tienDien = 50*500 + 50*650 + 100*850 + (soKw-200)*1100;
    } else {
        tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (soKw-350)*1300;
    }
    document.getElementById('ketQuaBai2').innerHTML = `Khách hàng tên: ${ten} phải đóng số tiền điện là: ${tienDien} VNĐ`;
}
/**
 * Bài 3
 * Tính ra được thu nhập chịu thuế = tổng thu nhập - 4tr - số người phụ thuộc * 1tr6
 * thu nhập chịu thuế => %thuế phải chịu theo đề bài 
 * lấy thu nhập chịu thuế * %thuế phải chịu => thuế cá nhân
 */
document.getElementById('btn_bai3').onclick = function () {
    //lấy data từ người dùng
    var hoTen = document.getElementById('txt_hoTen').value;
    var tongThuNhap = document.getElementById('txt_tongThuNhap').value * 1;
    var soNguoiPhuThuoc = document.getElementById('txt_soNguoiPhuThuoc').value * 1;
    //B1: tính thu nhập chịu thuế
    var thueThuNhapCaNhan = 0;
    var thuNhapChiuThue = tongThuNhap - 4e6 - soNguoiPhuThuoc*1.6e6;
    console.log('Thu nhập chịu thuế là: ' + thuNhapChiuThue);
    if(thuNhapChiuThue <= 384e6){
        if(thuNhapChiuThue <= 120e6){
            thueThuNhapCaNhan = 60e6*0.5 + (thuNhapChiuThue-60e6)*0.1;
        }else if (thuNhapChiuThue <= 210e6 ){
            thueThuNhapCaNhan = 60e6*0.5 + 60e6*0.1 + (thuNhapChiuThue-120e6)*0.15;
        }else{
            thueThuNhapCaNhan = 60e6*0.5 + 60e6*0.1 + 90*0.15 + (thuNhapChiuThue-210e6)*0.2;
        }
    }else{
        if(thuNhapChiuThue <=624e6){
            thueThuNhapCaNhan = 60e6*0.5 + 60e6*0.1 + 90e6*0.15 + 174e6*0.2 + (thuNhapChiuThue-384e6)*0.25;
        }else if (thuNhapChiuThue <= 960e6){
            thueThuNhapCaNhan = 60e6*0.5 + 60e6*0.1 + 90e6*0.15 + 174e6*0.2 + 240e6*0.25 + (thuNhapChiuThue-624e6)*0.3;
        } else {
            thueThuNhapCaNhan = 60e6*0.5 + 60e6*0.1 + 90e6*0.15 + 174e6*0.2 + 240e6*0.25 + 336e6*0.3 + (thuNhapChiuThue-624e6)*0.35;
        }
    }
    console.log(thueThuNhapCaNhan);
    document.getElementById('ketQuaBai3').innerHTML = `Khách hàng tên: ${hoTen} phải đóng thuế thu nhập cá nhân là: ${thueThuNhapCaNhan.toLocaleString("en-US", {style:"currency", currency:"VND"})} VNĐ`;
}
/**
 * Bài 4
 */
document.getElementById('txt_loaiKhachHang').onchange = function () {
    var flag = document.getElementById('txt_loaiKhachHang').value;
    if (flag == '2') {
        document.getElementById('soKetNoi').classList.remove('d-none');
    } else {
        document.getElementById('soKetNoi').classList.add('d-none');
    }

}
document.getElementById('btn_bai4').onclick = function () {
    const phiXuLiCN = 4.5;
    const phiDichVuCN = 20.5;
    const phiThueKenhCN = 7.5;
    const phiXuLiDN = 15;
    const phiDichVuDN = 75;
    const phiDichVuPhatSinh = 5;
    const phiThueKenhDN = 50;
    var loaiKhachHang = document.getElementById('txt_loaiKhachHang').value;
    var maKhachHang = document.getElementById('txt_maKhachHang').value;
    var soKenh = document.getElementById('txt_soKenh').value * 1;
    var soKetNoi = document.getElementById('txt_soKetNoi').value * 1;
    //
    var tienHoaDon = 0;
    if(loaiKhachHang == '1'){
        tienHoaDon = phiXuLiCN + phiDichVuCN + phiThueKenhCN*soKenh;
    } else {
        if(soKetNoi <=10){
            tienHoaDon = phiXuLiDN + phiDichVuDN*soKetNoi + phiThueKenhDN*soKenh;
        } else {
            tienHoaDon = phiXuLiDN + phiDichVuDN*10 + phiDichVuPhatSinh*(soKetNoi-10) + phiThueKenhDN*soKenh;
        }   
    }
    document.getElementById('ketQuaBai4').innerHTML = `Khách hàng có mã số: ${maKhachHang} phải đóng số tiền cáp là: ${tienHoaDon.toLocaleString("en-US", {style:"currency", currency:"USD"})} VNĐ`;

}   