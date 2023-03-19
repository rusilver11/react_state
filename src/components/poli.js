import { Link } from "react-router-dom";
import itemPoli from "../data/poli.json";

const PoliPage = ({SetActiveMenuItem, setPelayananItem, pelayananItem}) => {

  const HandleSetPoli = (menuItem,poli) => {
    SetActiveMenuItem(menuItem);
    const addPasienItem = {...pelayananItem};
    addPasienItem.poli = poli;
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
      <div class="subtitle">Pilih Poli</div>
      <div class="buttons">
      {itemPoli.map(item => (
            <Link
            key={item.id}
            to={"/dokter"}
            class="button is-large"
            onClick={() => HandleSetPoli("Pilih Dokter", item["nama-poli"])}
            >
            {item["nama-poli"]}
            </Link>
        ))}
      </div>
      </main>
    );
  }

  export default PoliPage;