const tombolpersegi = document.getElementById('persegiButton');
const tombolppanjang = document.getElementById('persegipanjangButton');

const containerpersegi = document.getElementById('persegi');
const containerpersegipanjang = document.getElementById('persegipanjang');

tombolpersegi.addEventListener('click', function () {
    containerpersegi.classList.add('flex');
    containerpersegipanjang.classList.remove('flex')
    containerpersegipanjang.classList.add('none');
    
})
tombolppanjang.addEventListener('click', function () {
    containerpersegipanjang.classList.add('flex');
    containerpersegi.classList.remove('flex');
    containerpersegi.classList.add('none');
    
})

function rumusLpersegi(s){
    const sisi = parseInt(s);
    return sisi*sisi;
}
function rumusKpersegi(s){
    const sisi = parseInt(s)
    return 4*sisi;
}

function hitungpersegi() {
    const num = document.getElementById('nilai-sisi').value;
    const hasilLuas = rumusLpersegi(num);
    const hasilKeliling  = rumusKpersegi(num);

    const tampilanL = document.getElementById('hasilLuasPersegi');
    tampilanL.innerText = hasilLuas;
    const tampilanK = document.getElementById('hasilKelilingPersegi');
    tampilanK.innerText = hasilKeliling;
    

} 


function rumusLppersegi(p,l) {
    const panjang = parseInt(p);
    const lebar = parseInt(l);
    return panjang * lebar;
}
function rumusKppersegi(p,l) {
    const panjang = parseInt(p);
    const lebar = parseInt(l);
    return 2 * (panjang + lebar); 
}

function hitungppanjang() {
    const nump = document.getElementById('nilai-panjang').value;
    const numl = document.getElementById('nilai-lebar').value;

    const hasilLuas = rumusLppersegi(nump, numl);
    const hasilKeliling  = rumusKppersegi(nump, numl);

    const tampilanL = document.getElementById('hasilLuasPersegiPanjang');
    tampilanL.innerText = hasilLuas;
    const tampilanK = document.getElementById('hasilKelilingPersegiPanjang');
    tampilanK.innerText = hasilKeliling;
    // alert(`luas ${hasilLuas} keliling ${hasilKeliling}`)
} 

document.getElementById('penghitunganpersegi').addEventListener('submit', function (e) {
    e.preventDefault();

    hitungpersegi()
});
document.getElementById('penghitunganppanjang').addEventListener('submit', function (e) {
    e.preventDefault();

    hitungppanjang();
});

const tombolhijau = document.querySelectorAll('.hijau');
const tomboloren = document.querySelectorAll('.oren');
const tombolmerah = document.querySelectorAll('.merah');
const tombolHunt = document.querySelectorAll('.bgColor');
const kotak = document.querySelector('.kotak');
const kotakpanjang = document.querySelector('.kotakpanjang');
console.log(tombolhijau)
function ubahWarna(tombolSaklar, colory) {
    tombolSaklar.forEach(function(tombol) {
        console.log(tombol);
        tombol.addEventListener('click', function() {
            kotak.style.backgroundColor = colory;
            kotakpanjang.style.backgroundColor = colory;
            tombolHunt.forEach((tHunt) => {
                tHunt.style.backgroundColor = colory;
            })
            document.querySelectorAll('.color').forEach((c) =>{
                console.log(c)
                c.style.color = colory
            })
        })
    })
}
ubahWarna(tombolhijau, '#005B41')
ubahWarna(tomboloren, '#FAEF5D')
ubahWarna(tombolmerah, '#FF0000')


