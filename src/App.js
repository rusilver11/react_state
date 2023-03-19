import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MenuPage from "./components/menu.js";
import HomePage from "./components/home.js";
import LayananPage from './components/waktu_layanan.js';
import PembayaranPage from './components/pembayaran.js';
import PoliPage from './components/poli.js';
import DokterPage from './components/dokter.js';
import PasienPage from './components/pasien.js';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("Selamat Datang");
  const [pelayananItem, setPelayananItem] = useState({
    status: "",
    layanan: "",
    pembayaran: "",
    poli:"",
    dokter:"",
  });
  const [pasienItem, setPasienItem] = useState({
    nama: "",
    nohp: "",
    jeniskel: "",
    agama: "",
  });
  
  return (
    <div class="section">
    <div class="columns">
    <BrowserRouter>
      <MenuPage activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} pelayananItem={pelayananItem} setPelayananItem={setPelayananItem} />
        <div class="container">
            <Routes>
              <Route path="/" element={<HomePage SetActiveMenuItem={setActiveMenuItem} pelayananItem={pelayananItem} setPelayananItem={setPelayananItem}/>}/>
              <Route path="/layanan" element={<LayananPage SetActiveMenuItem={setActiveMenuItem} pelayananItem={pelayananItem} setPelayananItem={setPelayananItem}/>}/>
              <Route path="/pembayaran" element={<PembayaranPage SetActiveMenuItem={setActiveMenuItem} pelayananItem={pelayananItem} setPelayananItem={setPelayananItem}/>}/>
              <Route path="/poli" element={<PoliPage SetActiveMenuItem={setActiveMenuItem} pelayananItem={pelayananItem} setPelayananItem={setPelayananItem}/>}/>
              <Route path="/dokter" element={<DokterPage SetActiveMenuItem={setActiveMenuItem} pelayananItem={pelayananItem} setPelayananItem={setPelayananItem}/>}/>
              <Route path="/pasien" element={<PasienPage SetActiveMenuItem={setActiveMenuItem} pelayananItem={pelayananItem} setPelayananItem={setPelayananItem} pasienItem={pasienItem} setPasienItem={setPasienItem}/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
