import { Link } from "react-router-dom";

const MenuPage = ({activeMenuItem, setActiveMenuItem, pelayananItem}) => {
  return (
    <aside class="menu">
    <p class="menu-label">Pintar</p>
    <ul class="menu-list">
      <li>
        <Link to={"/"}
          class={activeMenuItem === "Selamat Datang" ? "is-active" : ""}
          onClick={() => setActiveMenuItem("Selamat Datang")}>
          Selamat Datang
        </Link>
      </li>
      <p class="menu-label">{pelayananItem.status}</p>
      <li>
        <Link to={"/layanan"}
          class={activeMenuItem === "Pilih Layanan" ? "is-active" : ""}
          onClick={() => setActiveMenuItem("Pilih Layanan")}>
          Pilih Layanan
        </Link>
      </li>
      <p class="menu-label">{pelayananItem.layanan}</p>
      <li>
        <Link to={"/pembayaran"}
          class={activeMenuItem === "Pilih Pembayaran" ? "is-active" : ""}
          onClick={() => setActiveMenuItem("Pilih Pembayaran")}>
          Pilih pembayaran
        </Link>
      </li>
      <p class="menu-label">{pelayananItem.pembayaran}</p>
      <li>
        <Link to={"/poli"}
          class={activeMenuItem === "Pilih Poli" ? "is-active" : ""}
          onClick={() => setActiveMenuItem("Pilih Poli")}>
          Pilih Poli
        </Link>
      </li>
      <p class="menu-label">{pelayananItem.poli}</p>
      <li>
        <Link to={"/dokter"}
          class={activeMenuItem === "Pilih Dokter" ? "is-active" : ""}
          onClick={() => setActiveMenuItem("Pilih Dokter")}>
          Pilih Dokter
        </Link>
      </li>
      <p class="menu-label">{pelayananItem.dokter}</p>
      <li>
        <Link to={"/pasien"}
          class={activeMenuItem === "Isi/Cek Data Pasien" ? "is-active" : ""}
          onClick={() => setActiveMenuItem("Isi/Cek Data Pasien")}>
          Isi/Cek Data Pasien
        </Link>
      </li>
    </ul>
  </aside>
  );
};

export default MenuPage;