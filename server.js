const express = require('express');
const app = express();

// Data user awal
let user = {
  Name          : "Cantika Dyah Wahyuningrum",
  NIM           : "123210153",
  Class         : "IF-C",
  Major         : "Informatika",
  Faculcities   : "FTI",
  Status	: "Belum Menikah",
  Alamat	: "Sanggrahan, Jogja",
  Hobi		: "Berenang",
};

// Endpoint untuk mengembalikan user
app.get('/', (req, res) => {
  res.json(user);
});

// Endpoint untuk memperbarui user
app.post('/', (req, res) => {
  // Mendapatkan data user yang diperbarui dari body permintaan
  const updateduser = req.body;

  // Memperbarui user dengan data yang diterima
  user = { ...user, ...updateduser };

  res.json(user);
});

// Port yang digunakan oleh server
const PORT = process.env.PORT || 8080;

// Mulai server
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
