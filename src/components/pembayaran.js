import { Link } from "react-router-dom";
import itemPembayaran from "../data/pembayaran.json";

const PembayaranPage = ({SetActiveMenuItem, setPelayananItem, pelayananItem}) => {

  const HandleSetPembayaran = (menuItem,pembayaran) => {
    SetActiveMenuItem(menuItem);
    const addPasienItem = {...pelayananItem};
    addPasienItem.pembayaran = pembayaran;
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
      <div class="subtitle">Pilih Pembayaran</div>
      <div class="buttons">
      {itemPembayaran.map(item => (
            <Link
            key={item.id}
            to={"/poli"}
            class="button is-large"
            onClick={() => HandleSetPembayaran("Pilih Poli", item["nama-pembayaran"])}
            >
            {item["nama-pembayaran"]}
            </Link>
        ))}
      </div>
      </main>
    );
  }

  export default PembayaranPage;