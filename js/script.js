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