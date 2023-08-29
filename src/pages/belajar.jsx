import "../../src/App.css"
import { Link } from "react-router-dom";

export default function Belajar() {
 
  return (
    <>
        <Header />
        <Main />
        <Content />
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
          style={{ background: "#916DB3", height: 110 }}
        >
          <div style={{ width: "100%" }}>
            <div className="navbar-brand" href="#">
              <Link
                to={'/homepage'}
                className="btn btn1 btn-light bi bi-house-gear-fill me-3 home "
                style={{ color: "#A78295", height: "31px" }}
              ></Link>
              <a
                href="#"
                className="btn btn1 btn-outline-secondary text-light me-3"
                style={{ fontSize: "12px" }}
              >
                Belajar
              </a>
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
                ZeniusLand
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
                <a href="#" className="text-light mx-3 me-3 text-decoration-none">
                  ZenCore
                </a>
                <a
                  href="#"
                  className="dropdown-toggle text-light me-3 text-decoration-none"
                >
                  Persiapan Ujian
                </a>
                <a
                  href="#"
                  className="dropdown-toggle text-light me-3 text-decoration-none"
                >
                  Pelajaran Sekolah
                </a>
                <a
                  href="#"
                  className="dropdown-toggle text-light me-3 text-decoration-none"
                >
                  Live
                </a>
                <a href="#" className="text-light me-3 text-decoration-none">
                  Try Out
                </a>
                <a href="#" className="text-light me-3 text-decoration-none">
                  Zenbot
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
                <a
                  href="#"
                  className="btn btn2 btn-light login ls fst-italic fw-bold msk pt-1"
                  style={{ color: "#A78295", height: "27px", fontSize: "11px" }}
                >
                  Masuk/Daftar
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <div style={{ marginBottom: "375px" }}>
        <img
          src="src/assets/ungu.jpg"
          className="z-1 position-absolute"
          width="100%"
          height="340px"
        />
        <div
          className="z-2 position-absolute "
          style={{ marginRight: "170px" }}
        >
          <select className="select ok px-3" data-mdb-filter="true" style={{width:"700px", height:"50px", borderRadius:"15px"}}>
            <option value="1">Kelas 12</option>
            <option value="2">Kelas 11</option>
            <option value="3">Kelas 10</option>
            <option value="4">Kelas 9</option>
            <option value="5">Kelas 8</option>
            <option value="6">Kelas 7</option>
            <option value="7">Gap Year</option>       
          </select>
        <div className="input-group mau" >
          <div className="form">
            <input type="search" className="form-control px-3" placeholder="Mau belajar apa hari ini?" style={{width:"400px", height:"90px"}}/>
          </div>
            
        </div>
        </div>
      </div>

      <div className="d-flex justify-content-center" style={{marginBottom: "65px"}}>
        <img
          style={{borderRadius: "30px"}}
          src="src/assets/tulisan.png"
          width="1120"
          height="320"
        />
      </div>
    </>
  );
}

function Content() {
  return (
    <>     
      <div className="mb-5">
        <div className="container pb-3">
          <div className="row">
            {/* zenutbk */}
            <div className="col col-md-9">
              <div>
                <p className="fw-bold" style={{fontStyle:"", fontSize:"25px", color: "#916DB3"}}>
                  ZenUtbk
                </p>
              </div>
            </div>
            <div className="col col-md-3">
              <div className="d-flex justify-content-end">
                <a href="#" className="fw-bold text-decoration-none" style={{fontSize:"17px"}}>
                  Lihat semua Materi UTBK
                </a>
              </div>
            </div>
            {/* 4 gambar */}
            <div className=" mb-5">
              <div className="">
                <a href="#" className="pe-3">
                  <img src="src/assets/zenutbk.png" width="170px" height="120px" style={{borderRadius:"27px"}}/>
                </a>
                <a href="#" className="pe-3">
                  <img src="src/assets/zenutbk.png" width="170px" height="120px" style={{borderRadius:"27px"}}/>
                </a>
                <a href="#" className="pe-3">
                  <img src="src/assets/zenutbk.png" width="170px" height="120px" style={{borderRadius:"27px"}}/>
                </a>
                <a href="#" className="pe-3">
                  <img src="src/assets/zenutbk.png" width="170px" height="120px" style={{borderRadius:"27px"}}/>
                </a>
              </div>
            </div>
          </div>
          {/* AKM SMA */}         
          <div>
            <p className="fw-bold" style={{fontStyle:"", fontSize:"25px", color: "#916DB3"}}>
              AKM SMA
            </p>
          </div>          
          <div className=" mb-5">                       
              <a href="#" className="pe-3">
                <img src="src/assets/zenutbk.png" width="170px" height="120px" style={{borderRadius:"27px"}}/>
              </a>
              <a href="#" className="pe-3">
                <img src="src/assets/zenutbk.png" width="170px" height="120px" style={{borderRadius:"27px"}}/>
              </a>           
          </div>     
          {/* Pelajaran Sekolah */}
          <div>
            <p className="fw-bold" style={{fontStyle:"", fontSize:"25px", color: "#916DB3"}}>
              Pelajaran Sekolah
            </p>
          </div>
          <div className="pelajaran">
            <div className="mb-4 ">
              <div className="row">
                <div className="col">
                  <a className="" href="#">
                    <img className="rounded-circle bi bi-pencil" src="src/assets/zenutbk.png" width="125px" height="120px"/>
                  </a> 
                  <p className="px-3 ">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#">
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a>            
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#">
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a> 
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#">
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a> 
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a> 
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#">
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a>            
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#">
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a> 
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#" >
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a> 
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="row">
                <div className="col">
                  <a href="#">
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a> 
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#" >
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a>            
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#">
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a> 
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
                <div className="col">
                  <a href="#" >
                    <img className="rounded-circle" src="src/assets/zenutbk.png" width="125px" height="120px" style={{borderRadius:"27px"}}/>
                  </a> 
                  <p className="px-3">
                    Matematika Wajib
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Ujian Mandiri */}
          <div className="row">
            <div className="col col-md-9">
              <div>
                <p className="fw-bold" style={{fontStyle:"", fontSize:"25px", color: "#916DB3"}}>
                  Ujian Mandiri
                </p>
              </div>
            </div>
            {/* 3 gambar */}
            <div className=" mb-5">
              <div className="">
                  <img src="src/assets/zenutbk.png" width="160px" height="120px" style={{borderRadius:"27px"}}/>
                <a href="#" className="pe-3">       
                </a>
                <a href="#" className="pe-3">
                  <img src="src/assets/zenutbk.png" width="160px" height="120px" style={{borderRadius:"27px"}}/>
                </a>
                <a href="#" className="pe-3">
                  <img src="src/assets/zenutbk.png" width="160px" height="120px" style={{borderRadius:"27px"}}/>
                </a>
              </div>
            </div>
          </div>
          {/* Fitur Lainnya */}
          <div>
            <p className="fw-bold" style={{fontStyle:"", fontSize:"25px", color: "#916DB3"}}>
                  Pelajaran Sekolah
            </p>
          </div>
          <div className="pb-5">
            <div className="container">
                <div className="row">
                  {/* Card 1 */}
                  <div className="col">
                    <div
                      className="card bg-primary px-3 py-4"
                      style={{borderRadius: "40px", width: "440px"}}>
                      <div className="guru">
                        <img src="src/assets/rbt.png" width="100px" />
                      </div>
                      <div className="px-3">
                        <h4 className="fw-bold text-warning"> 
                          ZenBot
                        </h4>
                        <p style={{fontFamily: "serif"}}>
                          Tanya soal Matematika otomatis sepuasnya! ZenBot bantu jawab & jelasin. Let's go boy!
                          <br/>
                          <a className="text-decoration-none " href="" style={{fontFamily: "serif", fontSize: "12px", color: "gray"}} >
                            Lihat Detail
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="col">
                    <div
                      className="card bg-danger px-4"
                      style={{ borderRadius: "40px"}}>
                      <div className="d-flex justify-content-center align-items-center pe-2 ">
                        <div style={{marginTop: "100px"}}>
                          <h4 className="fw-bold text-warning mt-"> 
                          Live Class
                          </h4>
                          <p style={{fontFamily: "serif"}}>
                            Mantepin pemahaman dengan tambahan insight keren dari tutor Zenius, langsung di kelas yang beneran interaktif dan berasa hidup.
                            <br/>
                            <a className="text-decoration-none" href="" style={{fontFamily: "serif", fontSize: "12px", color: "gray"}} >
                              Lihat Detail
                            </a>
                          </p>
                        </div>
                        <img src="src/assets/todo.png" width="200px"/>
                      </div>                 
                    </div>
                  </div>
                </div>            
            </div>          
          </div>       

        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>   
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
                style={{ color: "gray", fontSize: "18px" }}>
                Perangkat Belajar
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
                style={{ color: "gray", fontSize: "18px" }}
              >
                Perangkat Belajar
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
                style={{ color: "gray", fontSize: "18px" }}
              >
                Perangkat Belajar
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
                style={{ color: "gray", fontSize: "18px" }}
              >
                Perangkat Belajar
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


