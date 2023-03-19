import { Link } from "react-router-dom";
import itemDokter from "../data/dokter.json";

const DokterPage = ({SetActiveMenuItem, setPelayananItem, pelayananItem}) => {

  const HandleSetDokter = (menuItem,dokter) => {
    SetActiveMenuItem(menuItem);
    const addPasienItem = {...pelayananItem};
    addPasienItem.dokter = dokter;
    setPelayananItem(addPasienItem);
  };

    return(
      <main class="container">
      <section class="hero">
        <div class="hero-body">
          <p class="title">Selamat Datang</p>
          <p class="subtitle">Silahkan pilih</p>
        </div>
      </section>
      <div class="subtitle">Pilih Dokter</div>
      <div class="buttons">
      {itemDokter.map(item => (
            <Link
            key={item.id}
            to={"/pasien"}
            class="button is-large"
            onClick={() => HandleSetDokter("Isi/Cek Data Pasien", item["nama-dokter"])}
            >
            {item["nama-dokter"]+", "+item["waktu-pelayanan"]}
            </Link>
           
        ))}
      </div>
      </main>
    );
  }

  export default DokterPage;