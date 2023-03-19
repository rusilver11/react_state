import { Link } from "react-router-dom";
import itemLayanan from "../data/waktu-pelayanan.json";

const LayananPage = ({SetActiveMenuItem, setPelayananItem, pelayananItem}) => {

  const HandleSetLayanan = (menuItem,layanan) => {
    SetActiveMenuItem(menuItem);
    const addPasienItem = {...pelayananItem};
    addPasienItem.layanan = layanan;
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
      <div class="subtitle">Pilih Waktu Pelayanan</div>
      <div class="buttons">
      {itemLayanan.map(item => (
            <Link
            key={item.id}
            to={"/pembayaran"}
            class="button is-large"
            onClick={() => HandleSetLayanan("Pilih Pembayaran", item["nama-waktu"])}
            >
            {item["nama-waktu"]+" "+item["waktu"]}
            </Link>
        ))}
      </div>
      </main>
    );
  }

  export default LayananPage;