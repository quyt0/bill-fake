var objectArray  = {
    "mb": "TMCP QUAN DOI (MBBANK)",
    "vtp": "ViettelPay by MBBank",
    "vietin": "NH CONG THUONG VIET NAM (VietinBank)",
    "bidv": "DAU TU VA PHAT TRIEN VIET NAM (BIDV)",
    "agri": "NONG NGHIEP & PHAT TRIEN NONG THON",
    "vcb": "NH NGOAI THUONG VIET NAM (VCB)",
    "vpb": "TMCP VIET NAM THINH VUONG (VPBANK)",
    "vib": "TMCP QUOC TE (VIB)",
    "exim": "TMCP XUAT NHAP KHAU (EXIMBANK)",
    "shb": "TMCP SAI GON - HA NOI (SHB)",
    "tpb": "NH TIEN PHONG (TPBANK)",
    "tcb": "NH TMCP KY THUONG VIET NAM",
    "acb": "TMCP A CHAU (ACB)",
    "maritime": "TMCP HANG HAI VIET NAM (MARITIME BANK)",
    "cake": "CAKE BY VPBANK",
    "ubank": "NGAN HANG UBANK",
    "vnpt": "VI DIEN TU VNPT",
    "vtmoney": "NGAN HANG SO VIETTEL MONEY",
    "timo": "NGAN HANG SO TIMO BY BAN VIET",
    "lviet": "TMCP BUU DIEN LIEN VIET (LIENVIETPOST)",
    "donga": "TMCP DONG A (DONG A BANK)",
    "baca": "TMCP BAC A (BAC A BANK)",
    "banviet": "TMCP BAN VIET (VIET CAPITAL BANK)",
    "kienlong": "NGAN HANG TMCP KIEN LONG",
    "shinhan": "NGAN HANG SHINHAN (SHINHAN BANK)",
    "woori": "NGAN HANG WOORI (WOORI BANK)",
    "ncb": "TMCP QUOC DAN (NCB)",
    "sea": "NH TMCP ĐONG NAM A (SeABank)",
    "abb": "NGAN HANG TMCP AN BINH"
};

function make_base()
{
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  base_image = new Image();
  var logonh = document.getElementById('nh').value;
  base_image.src = "banks/" + logonh + ".png";
  context.fillStyle = '#FFFFFF';
  context.fillRect(100, 780, 60, 60);
  base_image.onload = function(){
    context.drawImage(base_image, 100, 780);
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function removeVietnameseTones (str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  return str
}

function Create() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function(){
        context.drawImage(imageObj, 10, 10);
        context.font = "35px samsung_sansregular";
        context.fillStyle="#fff"
        const d = new Date();
        let hour = addZero(d.getHours());
        let minute = addZero(d.getMinutes());
        let second = addZero(d.getSeconds());
        let day = addZero(d.getDate());
        let month = addZero(d.getMonth() + 1);
        let year = d.getFullYear();
        context.fillText(hour + ":" + minute, 90, 83);
        context.fillText(getRandomInt(50, 69) + "%", 920, 85);
        context.font = "80px averta_std_cybold";
        context.textAlign = "center";
        var money = document.getElementById("st").value + "000";
        context.fillText(money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " VND", 540, 400);
        context.textAlign = "left";
        context.font = "45px averta_std_cybold";
        context.fillStyle="#000"
        var ctk = document.getElementById("ctk").value;
        context.fillText(ctk.toUpperCase(), 200, 785);
        context.font = "39px averta_std_cyregular";
        var stk = document.getElementById("stk").value;
        context.fillText(stk, 200, 835);
        var nh = document.getElementById("nh").value;
        context.fillText(objectArray[nh], 200, 885);
        context.textAlign = "end";
	var rstk = getRandomInt(1000000000, 9999999999).toString();
	var stk_cus = document.getElementById("stkc").value;
	if (stk_cus != '') rstk = stk_cus;
        context.fillText(rstk, 1020, 1093);
        context.font = "39px averta_std_cybold";
	var nameid = getRandomInt(0, 8754);
	var namestr = removeVietnameseTones(namedat[nameid].full_name).toString().toUpperCase();
	var name_custom = document.getElementById("nc").value;
	if (name_custome != '') namestr = name_custom.toUpperCase();
        context.fillText(namestr, 1020, 1150);
        context.font = "39px averta_std_cyregular";
        context.fillText(namestr, 1020, 1230);
        context.fillText("chuyen khoan", 1020, 1270);
        context.fillText(hour + ":" + minute + ":" + second + ", " + day + "/" + month + "/" + year, 1020, 1337);
        context.textAlign = "left";
    };
    imageObj.src = "bill2.jpg";
    make_base();
}

function DownloadCanvasAsImage(){
	let downloadLink = document.createElement('a');
	downloadLink.setAttribute('download', 'CanvasAsImage.png');
	let canvas = document.getElementById('canvas');
    let dataURL = canvas.toDataURL('image/png');
    let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
	downloadLink.setAttribute('href',url);
	downloadLink.click();
}
