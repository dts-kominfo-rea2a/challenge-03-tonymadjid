// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [{
        id: "D-10001",
        nama: "Minyak Goreng Delima",
        harga: 25000,
        kuantitas: 2,
    },
    {
        id: "D-10020",
        nama: "Beras Mamos",
        harga: 48000,
        kuantitas: 1,
    },
    {
        id: "F-00010",
        nama: "Larutan Cap Kaki Empat",
        harga: 7500,
        kuantitas: 8,
    },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = function(dataBelanjaan) {
    let listBelanjaan = [];
    for (belanjaan = 0; belanjaan <= dataBelanjaan.length - 1; belanjaan++) {
        listBelanjaan.push(
			`- ${dataBelanjaan[belanjaan].nama} x ${dataBelanjaan[belanjaan].kuantitas}`
        );
    }
    return listBelanjaan;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = function(dataBelanjaan) {
    let totalBelanja = 0;
    for (belanjaan = 0; belanjaan <= dataBelanjaan.length - 1; belanjaan++) {
        totalBelanja += dataBelanjaan[belanjaan].harga * dataBelanjaan[belanjaan].kuantitas;
    }
    return totalBelanja;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
    console.log("Selamat datang customer");

    console.log("Belanjaan Anda adalah:");
    console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
    console.log(
        "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
    )
};

main();

module.exports = {
    dataBelanjaan,
    listBelanjaan,
    totalBelanjaan,
};