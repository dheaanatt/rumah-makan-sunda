
document.addEventListener("DOMContentLoaded", function(){
    var nasiBtn = document.getElementById("nasiBtn");

    nasiBtn.addEventListener("click", function(){
        window.location.href = "bagianNasi.html";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var ayamIkanBtn = document.getElementById("ayamIkanBtn");

    ayamIkanBtn.addEventListener("click", function(){
        window.location.href = "bagianAyamIkanSeafood.html";
    }); 
});

document.addEventListener("DOMContentLoaded", function(){
    var sambelBtn = document.getElementById("sambelBtn");

    sambelBtn.addEventListener("click", function(){
        window.location.href = "bagianSambel.html";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var sopBtn = document.getElementById("sopBtn");

    sopBtn.addEventListener("click", function(){
        window.location.href = "bagianSop.html";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var tumisanBtn = document.getElementById("tumisanBtn");

    tumisanBtn.addEventListener("click", function(){
        window.location.href = "bagianTumisan.html";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var lainLainBtn = document.getElementById("lainLainBtn");

    lainLainBtn.addEventListener("click", function(){
        window.location.href = "bagianLainLain.html";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var lihatLainnya = document.getElementById("liatLainnya");
    var prevMak = document.getElementById("PreviewMakanan");
    
    lihatLainnya.addEventListener("click", function(){
        prevMak.style.animation = "prevmakanan 1s";
        prevMak.style.animationFillMode = "forwards";
        
    });
});

document.addEventListener("animationend", function(event){
    if(event.animationName === "prevmakanan") {
        window.location.href = "menu.html";
    }
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("waMe").textContent = "ADMMIN SLOT JUDI ONLEN";
});

window.onload = function() {
    var prevMak = document.getElementById("PreviewMakanan");
    setTimeout(function() {
        prevMak.style.opacity = "1";
        window.scrollTo(0, 0);
    }, 100);
 
    document.documentElement.requestFullscreen();
};

document.addEventListener("DOMContentLoaded", function(){
    var switchBtn1 = document.getElementById("switchPageBtn1");
    var switchBtn2 = document.getElementById("switchPageBtn2");
    
    switchBtn1.addEventListener("click", function(){
        window.location.href = "about.html";
    });

    switchBtn2.addEventListener("click", function(){
        window.location.href = "contact.html";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var backBtn = document.getElementById("backBtn");

    backBtn.addEventListener("click", function(){
        window.location.href = "home.html";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var backBtn = document.getElementById("subMenuBackBtn");

    backBtn.addEventListener("click", function(){
        window.location.href = "menu.html";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var creditBtn = document.getElementById("credit");

    creditBtn.addEventListener("click", function(){
        window.location.href = "credit.html";
    });
});

window.addEventListener('resize', function(event) {
    if (window.innerWidth < 1500) {
      window.location.href = 'alert.html';
    } else {
        window.location.href = "home.html";
    }
  });

  window.addEventListener("reset", function(event){
    if (window.innerWidth < 1500) {
        window.location.href = 'alert.html';
      } else {
          window.location.href = "home.html";
      }
  });

  document.addEventListener("DOMContentLoaded", function(){
    var foodNameElement = document.getElementById("foodName");
    var foodPriceElement = document.getElementById("hargaMakanan");
    var backBtnCoy = document.getElementById("backToMenu");

    foodNameElement.textContent = localStorage.getItem("foodNameLS");
    foodPriceElement.textContent = localStorage.getItem("foodPriceLS");

    var imgPay = document.getElementById("imgPayJS");
    imgPay.style.backgroundImage = localStorage.getItem("imgUrl")

    backBtnCoy.addEventListener("click", function(){
        window.location.href = localStorage.getItem("currentPage");
    })

});

/* STORE CONTENT */

document.addEventListener("DOMContentLoaded", function(){
    var nasiGoreng = document.getElementById("NasiGoreng");

    nasiGoreng.addEventListener("click", function(){
        var theFoodName = "Nasi Goreng";
        var theFoodPrice = "30.000";
        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('nasi/nasi goreng.webp')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var nasiGoreng = document.getElementById("NasiTimbel");

    nasiGoreng.addEventListener("click", function(){
        var theFoodName = "Nasi Timbel komplit";
        var theFoodPrice = "39.000";
        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('nasi/Nasi Timbel Komplit.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var nasiGoreng = document.getElementById("TimbelPolos");

    nasiGoreng.addEventListener("click", function(){
        var theFoodName = "Nasi Timbel Polos";
        var theFoodPrice = "9.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";
        
        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('nasi/nasi timbel polos.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var nasiGoreng = document.getElementById("NasiTutung");

    nasiGoreng.addEventListener("click", function(){
        var theFoodName = "Nasi Tutug Oncom";
        var theFoodPrice = "37.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('nasi/nasi tutug oncom.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var pesanSekarangBtn = document.getElementById("pesanSekarang");
    

    pesanSekarangBtn.addEventListener("click", function(){
        window.location.href = "end.html";
    });
});

/* BAGIAN PERTUMISAN */

document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("kangkungSausTiram");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Kangkung Saus Tiram";
        var theFoodPrice = "18.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('tumisan/kkangkung saus tiram.webp')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("tumisGenjer");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Tumis Genjer";
        var theFoodPrice = "18.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('tumisan/tumis-genjer.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("tumisTogeTeri");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Tumis Toge Teri";
        var theFoodPrice = "20.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('tumisan/tumis-toge-teri.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});

/* BAGIAN PERSOP AN */

document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("sayurSop");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Sayur Sop";
        var theFoodPrice = "10.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('sop/sayur sop.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("sopBuntut");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Sop Buntut";
        var theFoodPrice = "58.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('sop/sop buntut.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("sopGurame");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Sop Gurame";
        var theFoodPrice = "75.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('sop/sop gurame.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("sotoBandung");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Soto Bandung";
        var theFoodPrice = "30.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('sop/soto  bandung.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});

/* BAGIAN PER SAMBELAN */

document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("sambelDadak");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Sambel Dadak";
        var theFoodPrice = "10.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('sambel/sambel dadak.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("sambelHijau");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Sambel Hijau";
        var theFoodPrice = "10.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('sambel/sambel hijau.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});

/* BAGIAN SEAFOOD AYAM DAN GORENGAN */

document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("udangGorengTepung");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Udang Goreng Tepung";
        var theFoodPrice = "59.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/udang goreng tepung.jpeg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("cumiGorengTepung");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Cumi Goreng Tepung";
        var theFoodPrice = "35.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/cumi goreng tepung.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("gurameGorengAsamManis");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Gurame Goreng Asam Manis";
        var theFoodPrice = "75.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/gurame goreng asam manis.webp')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("udangAsamManis");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Udang Asam Manis";
        var theFoodPrice = "60.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/udang asam manis.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("gurameGoreng");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Gurame Goreng";
        var theFoodPrice = "70.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/gurame goreng.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("ayamGoreng");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Ayam Goreng";
        var theFoodPrice = "20.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/ayam goreng.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("cuemiAsamManis");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Cumi Asam Manis";
        var theFoodPrice = "40.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/cumi asam manis.jpeg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("ayamGorengKremes");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Ayam Goreng Kremes";
        var theFoodPrice = "22.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/ayam goreng kremes.webp')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("ayamBakar");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Ayam Bakar";
        var theFoodPrice = "21.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('ayam ikan seafood/ayam bakar.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});

/* BAGIAN LAIN LAINNYA */

document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("babatGoreng");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Babat Goreng";
        var theFoodPrice = "21.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/babat goreng.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("karedok");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Karedok";
        var theFoodPrice = "15.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/karedok.avif')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("lalapan");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Lapapan";
        var theFoodPrice = "10.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/lalapan fix.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("pepesJamur");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Pepes Jamur";
        var theFoodPrice = "10.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/pepes jamur.jpe')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("pepesTahu");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Pepes Tahu";
        var theFoodPrice = "10.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/pepes tahu.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("peteGoreng");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Pete Goreng";
        var theFoodPrice = "11.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/pete goreng.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("peteBakar");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Pete Bakar";
        var theFoodPrice = "11.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/pete bakar.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("tahuGorengCrispy");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Tahu Goreng Crispy";
        var theFoodPrice = "11.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/tahu goreng crispy.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("tahuSeuhah");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Tahu Seuhah";
        var theFoodPrice = "12.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/tahu seuhah.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var namaMakanan = document.getElementById("tempeGoreng");

    namaMakanan.addEventListener("click", function(){

        var theFoodName = "Tempe Goreng";
        var theFoodPrice = "11.000";

        localStorage.setItem("foodNameLS", theFoodName);
        localStorage.setItem("foodPriceLS", theFoodPrice);
        window.location.href = "payment.html";

        localStorage.setItem("currentPage", window.location.pathname);
        var imgUrlST = "url('lain lain/tempe goreng.jpg')";
        localStorage.setItem("imgUrl", imgUrlST);
    });
});



window.onload = function(){
    var teksPesanan = document.getElementById("teksPesanan");
    teksPesanan.textContent = 'PESANAN ANDA AKAN SEGERA KAMI PROSES...';
    var h1pp = document.getElementById("h1pp");

    var noPesanan = localStorage.getItem("noPes");
    if (noPesanan === null) {
        noPesanan = 0;
    } else {
        noPesanan = parseInt(noPesanan);
    }
    noPesanan++;
    localStorage.setItem("noPes", noPesanan);
    h1pp.textContent = "NO PESANAN ANDA : #" + noPesanan;
}

document.addEventListener("DOMContentLoaded", function(){
    var btnPilihan1 = document.getElementById("btnPilihan1");
    var btnPilihan2 = document.getElementById("btnPilihan2");
    var h2pp = document.getElementById("h2pp");
    var sudahMemilih = false;
    var strukBelanja = document.getElementById("strukBelanja");
    var bekbtn = document.getElementById("bekBtn");

    var noPesanan = document.getElementById("noPesanan");
    var statusPesanan = document.getElementById("statusPesanan");
    var namaPesanan = document.getElementById("namaPesanan");
    var hargaPesanan = document.getElementById("hargaPesanan");
    var biayaLayanan = document.getElementById("biayaLayanan");
    var totalHarga = document.getElementById("totalHarga");
    var tanggalSekarang = document.getElementById("tanggalSekarang");



    btnPilihan1.addEventListener("click", function(){
        if(!sudahMemilih) {
            btnPilihan1.style.cursor = "not-allowed";
            btnPilihan2.style.cursor = "not-allowed";
            sudahMemilih = true;
            h2pp.textContent = "BERIKAN KAMI BEBERAPA MENIT UNTUK MENYIAPKAN PESANAN ANDA, SILAHKAN TUNGGU DIMEJA";
            bekbtn.style.animation = "bekBtnPopUp 1s";
            btnPilihan1.style.backgroundColor = "#493323";
            btnPilihan2.style.backgroundColor = "#493323";
            strukBelanja.style.animation = "strukBelanjaPopUp 1s";

            noPesanan.textContent = "NO PESANAN : " + localStorage.getItem("noPes");
            statusPesanan.textContent = "MAKAN DI TEMPAT";
            namaPesanan.textContent = localStorage.getItem("foodNameLS");
            hargaPesanan.textContent = parseInt(localStorage.getItem("foodPriceLS")) - 2.000 + ".000";
            biayaLayanan.textContent = "2.000";
            totalHarga.textContent = localStorage.getItem("foodPriceLS");
            
            var sekarang = new Date();
            var tanggal = sekarang.getDate();
            var bulan = sekarang.getMonth() + 1;
            var tahun = sekarang.getFullYear();

            tanggalSekarang.textContent = tanggal + "-" + bulan + "-" + tahun;
        }
    });

    btnPilihan2.addEventListener("click", function(){
        if(!sudahMemilih) {
            btnPilihan1.style.cursor = "not-allowed";
            btnPilihan2.style.cursor = "not-allowed";
            sudahMemilih = true;
            h2pp.textContent = "BERIKAN KAMI BEBERAPA MENIT UNTUK MENYIAPKAN PESANAN ANDA, SILAHKAN TUNGGU DIMEJA";
            bekbtn.style.animation = "bekBtnPopUp 1s";
            btnPilihan1.style.backgroundColor = "#493323";
            btnPilihan2.style.backgroundColor = "#493323";
            strukBelanja.style.animation = "strukBelanjaPopUp 1s";

            noPesanan.textContent = "NO PESANAN : " + localStorage.getItem("noPes");
            statusPesanan.textContent = "BAWA PULANG";
            namaPesanan.textContent = localStorage.getItem("foodNameLS");

            var totalSebelumTax = parseFloat(localStorage.getItem("foodPriceLS")); // Ambil harga makanan dari localStorage dan ubah ke tipe data float.
            var pajak = 0.1; // 10% pajak
            var totalPajak = totalSebelumTax * pajak; // Hitung pajak berdasarkan harga makanan
            var totalSetelahTax = totalSebelumTax + totalPajak; // Hitung total setelah pajak

            hargaPesanan.textContent = totalSebelumTax.toFixed(3); // Menampilkan harga makanan sebelum pajak dengan 3 angka di belakang koma
            biayaLayanan.textContent = totalPajak.toFixed(3); // Menampilkan pajak dengan 3 angka di belakang koma
            totalHarga.textContent = totalSetelahTax.toFixed(3);
            
            var sekarang = new Date();
            var tanggal = sekarang.getDate();
            var bulan = sekarang.getMonth() + 1;
            var tahun = sekarang.getFullYear();

            tanggalSekarang.textContent = tanggal + "-" + bulan + "-" + tahun;
        }
    });
})

document.addEventListener("animationend", function(event){
    if(event.animationName === "bekBtnPopUp") {
        var bekbtn = document.getElementById("bekBtn");
        bekbtn.style.opacity = "1";
    }

    var strukBelanja = document.getElementById("strukBelanja");
    if(event.animationName === "strukBelanjaPopUp") {
        strukBelanja.style.width = "50%";
        strukBelanja.style.opacity = "1";
    }
});