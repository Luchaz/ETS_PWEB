// Tambahkan script JavaScript yang diperlukan
document.addEventListener('DOMContentLoaded', function () {
    // Code untuk mengatur peta lokasi
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -7.797068, lng: 110.370529 }, // Ganti dengan koordinat lokasi perpustakaan
        zoom: 15
    });

    // Code untuk logika formulir pendaftaran online
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Ambil data dari formulir dan lakukan validasi jika diperlukan
        const name = registrationForm.elements['name'].value;
        const email = registrationForm.elements['email'].value;
        const message = registrationForm.elements['message'].value;

        // Proses data formulir sesuai kebutuhan
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    });
});
