document.addEventListener("DOMContentLoaded", function(){

    const inputAlas = document.getElementById('alas');
    const inputTinggi = document.getElementById('tinggi');
    const submitLuas = document.getElementById('submit-luas');
    const submitKeliling = document.getElementById('submit-keliling');
    const inputSisiA = document.getElementById('sisiA');
    const inputSisiB = document.getElementById('sisiB');
    const inputSisiC = document.getElementById('sisiC');
    const hasilLuas = document.getElementById('hasilLuas');
    const HasilKeliling = document.getElementById('hasilKeliling');

    submitLuas.addEventListener("click", function(){
        //untuk perhitungan luas segitiga
        const alas = parseFloat(inputAlas.value);
        const tinggi = parseFloat(inputTinggi.value);
        const luas = 0.5 * alas * tinggi;
        hasilLuas.innerHTML = `<p>L = 1/2 x alas x tinggi </p></p><p>L = 1/2 x ${alas} x ${tinggi}</p><p>L = ${luas}</p>`;


    });

    submitKeliling.addEventListener("click", function(){
        //untuk perhitungan keliling segitiga
        const sisiA = parseFloat(inputSisiA.value);
        const sisiB = parseFloat(inputSisiB.value);
        const sisiC = parseFloat(inputSisiC.value);
        const hasil = sisiA*sisiB*sisiC;
        HasilKeliling.innerHTML = `<p>K =  SisiA x SisiB x SisiC</p><p>K = ${sisiA} x ${sisiB} x ${sisiC}</p><p>K = ${hasil}</p>`
    });
});

const luas = document.getElementById('LuasSegitiga');
const Keliling = document.getElementById('KelilingSegitiga');


document.getElementById("reset-luas").addEventListener("click", function(){
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
});
document.getElementById("reset-keliling").addEventListener("click", function(){
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
});


const luasSegitiga = document.getElementById("Luas-segitiga");
const kelilingSegitiga = document.getElementById("Keliling-segitigas");

const luasButton = document.getElementById("luas-button");
const kelilingButton = document.getElementById("keliling-button");

kelilingSegitiga.style.display = "none";
kelilingButton.addEventListener("click", function() {
    // console.log("baten di klik 2");
    luasSegitiga.style.display = "none";
    kelilingSegitiga.style.display = "block";
    kelilingButton.classList.add("active");
    luasButton.classList.remove("active");
});

luasButton.addEventListener("click", function() {
    // console.log("baten di klik 1");
    luasSegitiga.style.display = "block";
    kelilingSegitiga.style.display = "none";
    luasButton.classList.add("active");
    kelilingButton.classList.remove("active");
});

