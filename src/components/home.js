import { Link } from "react-router-dom";

const HomePage = ({SetActiveMenuItem, setPelayananItem, pelayananItem}) => {

  const HandleSetHome = (menuItem,status) => {
    SetActiveMenuItem(menuItem);
    const addPasienItem = {...pelayananItem};
    addPasienItem.status = status;
    setPelayananItem(addPasienItem);
  };

  
  return (
    <main>
      <section class="hero">
        <div class="hero-body">
          <p class="title">Selamat Datang</p>
          <p class="subtitle">Silahkan pilih</p>
        </div>
      </section>
      <div class="column is-centered">
        <div class="subtitle">Apakah anda</div>
        <div class="buttons">
          <Link to={"/layanan"} class="button is-large" onClick={() => HandleSetHome("Pilih Layanan","Pasien Baru")} >
            Pasien Baru
          </Link>
          <Link to={"/layanan"} class="button is-large" onClick={() => HandleSetHome("Pilih Layanan","Pasien Lama")}>
            Pasien Lama
          </Link>
        </div>
      </div>
    </main>
  );
};



export default HomePage;
