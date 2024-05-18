const express = require('express');
const app = express();

// Data konser awal
let concerts = [
    {
        nama: "Coldplay",
        tanggal: "15 Agustus 2023",
        lokasi: "Stadium Wembley, London",
        genre: "Pop",
        rating: 9.0,
	kapasitas: 3.000,
    },
    {
        nama: "Ed Sheeran",
        tanggal: "10 Juni 2022",
        lokasi: "Madison Square Garden, New York",
        genre: "Pop",
        rating: 8.7,
	kapasitas : 7.200,
    },
];

// Middleware untuk mengizinkan Express membaca body dari request
app.use(express.json());

// Endpoint untuk mengembalikan data konser
app.get('/', (req, res) => {
    res.json(concerts);
});

// Endpoint untuk memperbarui data konser
app.post('/', (req, res) => {
    // Mendapatkan data konser yang diperbarui dari body permintaan
    const updatedConcerts = req.body;

    // Memperbarui data konser dengan data yang diterima
    concerts = [...concerts, ...updatedConcerts];

    res.json(concerts);
});

// Port yang digunakan oleh server
const PORT = process.env.PORT || 8080;

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan pada port:${PORT}`);
});

