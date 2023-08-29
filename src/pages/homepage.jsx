// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "../../src/App.css"
import { Link } from "react-router-dom";


function Homepage() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Main />
        <Conten />
        <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="card-header">
        <nav
          className="navbar pt-1 coba"
          style={{ background: "#916DB3", height: 120 }}
        >
          <div style={{ width: "100%" }}>
            <div className="navbar-brand" href="#">
              <a
                href="#"
                className="btn btn1 btn-light bi bi-house-gear-fill me-3 home "
                style={{ color: "#A78295", height: "31px" }}
              ></a>
              <Link
                to={'/belajar'}
                className="btn btn1 btn-outline-secondary text-light me-3"
                style={{ fontSize: "12px" }}
              >
                Belajar
              </Link>
              <a
                href="#"
                className="btn btn1 btn-outline-secondary text-light me-3"
                style={{ fontSize: "12px" }}
              >
                Primagama
              </a>
              <a
                href="#"
                className="btn btn1 btn-outline-secondary text-light me-3"
                style={{ fontSize: "12px" }}
              >
                StudyLand
              </a>
              <a
                href="#"
                className="btn btn1 btn-outline-secondary text-light"
                style={{ fontSize: "12px" }}
              >
                Profesional
              </a>
              {/* <a href="#" className="btn"  style={{color: '#A78295'}}>Primagama</a>
              <a href="#" className="btn"  style={{color: '#A78295'}}>StudyLand</a>
              <a href="#" className="btn"  style={{color: '#A78295'}}>Profesional</a> */}
              <br />
            </div>
            <div
              className="mt-2 d-flex align-items-center justify-content-between"
              style={{ width: "100%" }}
            >
              <div>
                <img
                  src="src/assets/zeniuslogo.png"
                  width="110"
                  height="35"
                  alt=""
                />
                <a
                  href="#"
                  className="dropdown-toggle text-light mx-3 me-3 text-decoration-none"
                >
                  Fitur
                </a>
                <a href="#" className="text-light me-3 text-decoration-none">
                  Paket Belajar
                </a>
                <a href="#" className="text-light me-3 text-decoration-none">
                  Promo
                </a>
                <Link to={'/blog'} className="text-light me-3 text-decoration-none">
                  Blog
                </Link>
                <a href="#" className="text-light me-3 text-decoration-none">
                  Testimonial
                </a>
                <a
                  href="#"
                  className="dropdown-toggle text-light text-decoration-none"
                >
                  Panduan
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="btn btn1 bi bi-search"
                  style={{ color: "white" }}
                ></a>
                <a
                  href="#"
                  className="btn btn1 bi bi-download me-3"
                  style={{ color: "white" }}
                ></a>
                <Link
                  to="/regist"
                  className="btn btn2 btn-light login ls fst-italic fw-bold msk pt-1"
                  style={{ color: "#A78295", height: "27px", fontSize: "11px" }}
                >
                  Masuk/Daftar
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div
          style={{
            height: "4px",
            width: "100%",
            border: "1px solid #F1C93B",
            background: "#F1C93B",
          }}
        ></div>
      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <div style={{ marginBottom: "420px" }}>
        <img
          src="src/assets/unnamed.jpg"
          className="z-1 position-absolute"
          width="100%"
          height="410px"
        />
        <div
          className="z-2 position-absolute d-flex justify-content-between align-items-center"
          style={{ marginRight: "170px" }}
        >
          <div
            className="text-light"
            style={{ marginLeft: "110px", width: "35%" }}
          >
            <p className="fw-bold" style={{ fontSize: "33px" }}>
              #BikinCerdasBeneran untuk Jadi Apapun yang Kamu Mau!
            </p>
            <p>
              Zenius gak hanya ngasih materi pelajaran, tapi juga fokus di bikin
              otak makin pinter dalam berpikir
            </p>
            <Link
            to={'/solusi_belajar'}
              className="btn btn2 btn-warning p-2"
              style={{
                width: "135px",
                height: "40px",
                fontSize: "12px",
                color: "#916DB3",
              }}
            >
              Yuk, ikutan!
            </Link>
          </div>
          <img src="src/assets/jadi.png" width="38.4%" height="100%" />
        </div>
        {/* <img src='src/assets/jadi.png' width="300px" height="310px"/> */}
      </div>

      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <div className="mt-4 d-flex align-items-center justify-content-center">
          <a
            href="#"
            className="btn btn2 btn-warning me-3 text-decoration-none"
          >
            <img
              className="bg bg-danger percent"
              src="src/assets/percent.png"
              width="40"
            />
            <i className="fw-bold fw-normal">
              {" "}
              Paket Belajar sukses masuk PTN 2024{" "}
            </i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            {/* 3 gambar lingkaran */}
            <div className="col">
              <h1 className="jdl fw-bold" style={{ color: "#916DB3" }}>
                Makin Jago Bernalar dan Lolos SNBT (UTBK) Bareng Zenius!
              </h1>
              <div className="d-flex">
                <img
                  src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2Fprestasi.png&w=128&q=75"
                  width="90px"
                  height="90px"
                />
                <p className="fw-bold px-4">
                  93.7% siswa tidak lulus standar kompetensi
                  <br />{" "}
                  <p className="fw-normal">
                    walaupun yang diuji hanya kemampuan skolastik, banyak yang
                    masih kesulitan dengan tipe soal terbaru, nih! *dari total
                    peserta 17,043
                  </p>
                </p>
              </div>
              <div className="d-flex">
                <img
                  src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2Flogika.png&w=128&q=75"
                  width="90px"
                  height="90px"
                />
                <p className="fw-bold px-4">
                  Berlatih bernalar bareng Zenius
                  <br />{" "}
                  <p className="fw-normal">
                    Bayangin kamu jadi atlet, untuk sehat mungkin bisa usaha
                    sendiri. Tapi untuk menang kompetisi, atlet pasti pakai
                    pelatih siapin segudang program latihan supaya kamu jadi
                    juara. Sama halnya dengan kompetisi di PTN, biar lolos pakai
                    Zenius yang paling jago ngelatih kamu bernalar!
                  </p>
                </p>
              </div>
              <div className="d-flex">
                <img
                  src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2FbelajarKeras.png&w=128&q=75"
                  width="90px"
                  height="90px"
                />
                <p className="fw-bold px-4">
                  7 dari 10 pengguna Zenius, lolos SNBT (UTBK)
                  <br />{" "}
                  <p className="fw-normal">
                    Zenius sudah terbukti bikin peluang lolos SNBT (UTBK) jadi
                    lebih tinggi! Beragam penjelasan materi dari konsep, latihan
                    soal dan try out yang bakalan ningkatin peluangmu tembus PTN
                    2023!
                  </p>
                </p>
              </div>
            </div>
            {/* 1 gambar */}
            <div className="col">
              <img
                className="imgbljr"
                src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzs-inline.s3.ap-southeast-1.amazonaws.com%2Fproduction%2F5%2F2b%2F89dc%2F52b89dcb1fc44d95af76f70c24199d11.png%3Fefs%3Dhttps%253A%252F%252Fwww.zenius.net%252Fassets%252Fv-img%252F5%252F2b%252F89dc%252F52b89dcb1fc44d95af76f70c24199d11.png&w=1920&q=75"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-column align-items-center justify-content-center mt-5"
        style={{ background: "#916DB3" }}
      >
        <div className="kps d-flex align-items-center justify-content-center text-light">
          <h5 className="fw-bold">
            Kupas Tuntas Aturan Baru Masuk PTN 2023 — Apa saja yang berubah?!
          </h5>
        </div>
        <div className="pt-2">
          <img
            className="vid1"
            src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzs-inline.s3.ap-southeast-1.amazonaws.com%2Fproduction%2Fe%2F57%2Ff73e%2Fe57f73ebe6564ca593c48cc354fcab24.jpg%3Fefs%3Dhttps%253A%252F%252Fwww.zenius.net%252Fassets%252Fv-img%252Fe%252F57%252Ff73e%252Fe57f73ebe6564ca593c48cc354fcab24.jpg&w=1920&q=75"
            width="600"
            height="350"
          />
        </div>
        <div className="kmd text-center mb-5 text-light">
          <p>
            Kemendikbud resmi merubah sistem seleksi PTN tahun depan! Tes
            Potensi Skolastik atau TPS ramai dibicarain. Jadi, kamu gak perlu
            susah-susah ngehafal banyak rumus, karena ini 4 hal utama yang akan
            di uji dalam TPS: kemampuan potensi kognitif, penalaran logika
            matematika, kemampuan dalam bahasa Indonesia dan kemampuan dalam
            bahasa Inggris. Gimana ya cara untuk belajar menghadapi PTN tahun
            depan? Mulai dari ZenCore, playlist video belajar yang bisa kamu
            akses tiap saat, dan juga Live Class, Zenius punya solusi asik untuk
            #GantiCaraBelajar kamu biar bisa bersaing untuk masuk PTN 2023.
            Simak pembahasannya bersama Sabda & Isel di video ini!
          </p>
        </div>
        <div className="crd1 bg bg-secondary text-start d-flex align-items-center justify-content-center">
          <img
            className="jrm"
            src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2FprofileJerome.jpg&w=1920&q=75"
            width="130"
          />
          <div className="text text-light">
            <p className="fw-bold">
              “Zenius asik banget woy! Ga ngajarin rumus cepet, tapi jelasin
              dari konsepnya. Zenius ngebantu aku lolos kuliah ke Jepang &
              menginspirasi buat bikin video Youtube yang nunjukin Matematika
              itu bisa seru.”{" "}
            </p>
            <p className="fw-bolder">
              Jerome Polin - Zenius Alumnus 2016
              <br />
              <p className="fw-normal">
                Matematika Terapan, Universitas Waseda - Jepang
                <br />
                Youtube Content Creator
              </p>
            </p>
          </div>
        </div>
      </div>

      <div className="zns fw-bold text-light" style={{ background: "#916DB3" }}>
        <p>Dapet Apa Aja di Zenius?</p>
      </div>
    </>
  );
}

function Conten() {
  return (
    <>
      <div className="pb-5" style={{ background: "#916DB3" }}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-9">
              <div className="row d-flex">
                {/* Card 1 */}
                <div className="col-5">
                  <div
                    className="card bg-info px-3 py-1"
                    style={{height: "260px", borderRadius: "40px" }}>
                    <div className="guru">
                      <img src="src/assets/guru.png" width="100px" />
                    </div>
                   <div className="px-3 pb-3 pe-3 ">
                      <h4 className="fw-bold text-warning"> 
                        Video & Soal
                      </h4>
                      <p style={{fontFamily: "serif"}}>
                      Ratusan ribu video dan soal siap nemenin belajar konsep kapan aja, di mana aja.
                      <br/>
                      <a className="text-decoration-none " href="" style={{fontFamily: "serif", fontSize: "12px", color: "gray"}} >
                        Lihat Detail
                      </a>
                      </p>
                   </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="col-7 ">
                  <div
                    className="card bg-danger py-1 px-4"
                    style={{ borderRadius: "40px" }}>
                    <div className="d-flex justify-content-center align-items-center pe-2 ">
                      <div style={{marginTop: "100px"}}>
                        <h4 className="fw-bold text-warning mt-"> 
                        Try Out
                        </h4>
                        <p style={{fontFamily: "serif"}}>
                        Ratusan ribu video dan soal siap nemenin belajar konsep kapan aja, di mana aja.
                        <br/>
                        <a className="text-decoration-none " href="" style={{fontFamily: "serif", fontSize: "12px", color: "gray"}} >
                          Lihat Detail
                        </a>
                        </p>
                      </div>
                      <img src="src/assets/todo.png" width="200px"/>
                    </div>                 
                  </div>
                </div>
              </div>
              <div className="row d-flex">
                {/* Card 3 */}
                <div className="col-7">
                  <div
                      className="card bg-success px-4  mt-3"
                      style={{ borderRadius: "40px" }}>
                      <div className="d-flex justify-content-center align-items-center pe-2 ">
                        <div style={{marginTop: "100px"}}>
                          <h4 className="fw-bold text-warning"> 
                          Live Class
                          </h4>
                          <p style={{fontFamily: "serif", fontSize: "16px"}}>
                          Mantepin pemahaman dengan tambahan insight keren dari tutor Zenius, langsung di kelas yang beneran interaktif dan berasa hidup.
                          <br/>
                          <a className="text-decoration-none " href="" style={{fontFamily: "serif", fontSize: "12px", color: "gray"}} >
                            Lihat Detail
                          </a>
                          </p>
                        </div>
                        <img src="src/assets/org.png" width="170px"/>
                      </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="col-5">
                  <div
                      className="card bg-primary px-3 py-1 mt-3"
                      style={{height: "273px", borderRadius: "40px" }}>
                      <div className=" d-flex justify-content-end">
                        <img src="src/assets/rbt.png" width="100px" />
                      </div>
                    <div className="px-3 pe-3 ">
                        <h4 className="fw-bold text-warning"> 
                        ZenBot
                        </h4>
                        <p style={{fontFamily: "serif"}}>
                        Tanya soal matematika, fisikia, dan kimia sepuasnya! ZenBot akan bantu jawab dan jelasin. Let's go boy!
                        <br/>
                        <a className="text-decoration-none " href="" style={{fontFamily: "serif", fontSize: "12px", color: "gray"}} >
                          Lihat Detail
                        </a>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-3 d-flex justify-content-center align-items-center">
              <div
                className="card bg-secondary py-2 pe-3 px-3"
                style={{ height: "545px", borderRadius: "40px" }}>
                <img src="src/assets/circ.png"  />
                <div className="py-5 pe-3 px-3">
                        <h4 className="fw-bold text-warning"> 
                        ZenCore
                        </h4>
                        <p style={{fontFamily: "serif"}}>
                        Saatnya tajemin kemampuan berpikir fundamental sebelum nyemplung ke “medan perang” bareng Zenius.
                        <br/>
                        <a className="text-decoration-none " href="" style={{fontFamily: "serif", fontSize: "12px", color: "gray"}} >
                          Lihat Detail
                        </a>
                        </p>
                    </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center pt-5 pb-5 fw-bold"
        style={{ fontSize: "28px", color: "#916DB3" }}
      >
        <div>
          <p>Cobain Belajar Bareng Zenius Sekarang!</p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <img
          src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2Fmockup.png&w=1920&q=75"
          width="1040px"
        />
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <a
          className="btn btn-dark bi bi-google-play me-5 d-flex align-items-center pe-3"
          style={{ width: "90px", height: "30px", fontSize: "7px" }}
        >
          GET IN ON Google Play
        </a>
        <a
          className="btn btn-dark bi bi-apple mx-3 d-flex align-items-center "
          style={{ width: "110px", height: "32px", fontSize: "8px" }}
        >
          Download on the App Store
        </a>
      </div>

      <div
        className="mb-5"
        style={{
          height: "2px",
          width: "100%",
          border: "1px solid #916DB3",
          background: "#916DB3",
        }}
      ></div>

      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="https://zs-inline.s3.ap-southeast-1.amazonaws.com/staging/5/76/7e37/5767e377eb3d4064b01d3c6943712ab4.svg?efs=https%3A%2F%2Fwww.zeniusnet.com%2Fassets%2Fv-img%2F5%2F76%2F7e37%2F5767e377eb3d4064b01d3c6943712ab4.svg"
                style={{ width: 240 }}/>
            </div>
            <div className="col mx-5" style={{ fontFamily: "serif" }}>
              <h3
                className=" fw-bold"
                style={{ color: "gray", fontSize: "12px" }}>
                PERANGKAT BELAJAR
              </h3>
              <a className="ftr" href="" style={{ textDecoration: "none", color: "black" }}>
                ZenCore
              </a>
              <br />
              <a className="ftr" href="" style={{ textDecoration: "none", color: "black" }}>
                ZenPractice
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                ZenBot
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Zenius TryOut
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Live
              </a>
            </div>
            <div className="col" style={{ fontFamily: "serif" }}>
              <h3
                className=" fw-bold"
                style={{ color: "gray", fontSize: "12px" }}
              >
                BLOG
              </h3>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Materi Pelajaran
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Zenius Insight
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Ujian
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Zenius Kampus
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Zenius Tips
              </a>
            </div>
            <div className="col" style={{ fontFamily: "serif" }}>
              <h3
                className=" fw-bold"
                style={{ color: "gray", fontSize: "12px" }}
              >
                TENTANG KAMI
              </h3>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                About Us
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                We Are Hiring
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Testimonial
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Pusat Bantuan
              </a>
              <br />
            </div>
            <div className="col text-black" style={{ fontFamily: "serif" }}>
              <h3
                className=" fw-bold"
                style={{ color: "gray", fontSize: "12px" }}
              >
                HUBUNGI KAMI
              </h3>
              <a className="nav-item text-black text-decoration-none" href="">
                (021) 29023334
              </a>
              <br />
              <a className="nav-item text-black text-decoration-none" href="">
                cs@zeniuseducation.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between text-black mt-5 fw-bold container">
        <p className=" mt-3" style={{ color: "gray", fontSize: "12px" }}>
          © PT Zona Edukasi Nusantara, 2023. 
        <a href="" className="text-decoration-none px-2" style={{ color: "gray", fontSize: "12px" }}>Kebijakan Privasi</a>
        <a href="" className="text-decoration-none " style={{ color: "gray", fontSize: "12px" }}>Ketentuan Pengguna</a>
        </p>
        <div className="d-flex gap-3 ">
          <a className="bi bi-facebook"></a>
          <a className="bi bi-twitter"></a>
          <a className="bi bi-youtube"></a>
          <a className="bi bi-instagram"></a>
          <a className="bi bi-tiktok"></a>
        </div>
      </div>
    </>
  );
}

export default Homepage;
