const blockedIPs = ["211.24.168.146"];

// Ambil IP publik pengunjung
fetch("https://ipapi.co/json")
  .then((res) => res.json())
  .then((data) => {
    const userIP = data.ip;
    if (blockedIPs.includes(userIP)) {
      // Aksi blokir - bisa redirect, sembunyikan halaman, atau tampilkan pesan
      window.location.href = "https://www.itvmalaysia.net";
    }
  })
  .catch((err) => console.error("Gagal cek IP", err));
