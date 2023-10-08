// Minta pengguna memasukkan teks menggunakan prompt
var userInput = prompt("Masukkan nama:");

// Cek apakah pengguna memasukkan teks atau membatalkan prompt
if (userInput !== null) {
    var hasilInput = document.getElementById('hasilInput');
    hasilInput.textContent ="Hallo "+userInput;
} else {
    var hasilInput = document.getElementById('hasilInput');
    hasilInput.textContent = "Hallo There";
}
