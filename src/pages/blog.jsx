import { useState } from "react"
import { Link } from "react-router-dom";

export default function Blog()
{
  return (
    <>     
    <div className="" style={{width:'100%'}}>
        <div className="">
          <Header/>
        </div>
        <div className="">
          <Main/>
        </div>
        <div className="">
          <Recomended/>
        </div>
        <div className="">
          <Footer/>
        </div>
    </div>
    </> 
  )
}

function Header() {
  return (
    <>
      <div className="card-header">
        <nav
          className="navbar px-5"
          style={{ background: "#916DB3", height: 80 }}
        >
          <div style={{ width: "100%" }}>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ width: "100%" }}
            >
              <div>
                <img
                  src="src/assets/zeniuslogo.png"
                  width="110"
                  height="35"
                  alt=""
                />
                <Link to={"/homepage"} className="text-light mx-5 me-3 text-decoration-none">
                  Home
                </Link>
                <a
                  href="#"
                  className="dropdown-toggle text-light me-3 text-decoration-none"
                >
                  Zenius Insight
                </a>
                <a
                  href="#"
                  className="dropdown-toggle text-light me-3 text-decoration-none"
                >
                  Mata Pelajaran
                </a>
                <a
                  href="#"
                  className="dropdown-toggle text-light me-3 text-decoration-none"
                >
                  Zenius Kampus
                </a>
                <a
                  href="#"
                  className="dropdown-toggle text-light me-3 text-decoration-none"
                >
                  Ujian
                </a>
                <a
                  href="#"
                  className="dropdown-toggle text-light me-3 text-decoration-none"
                >
                  Zenius Tips
                </a>
                <a href="#" className="text-light me-3 text-decoration-none">
                  Untuk Guru
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
                  className="btn btn1 bi bi-download "
                  style={{ color: "white" }}
                ></a>
               
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

function ContentCard(props)
{
  const [togglePlay, setTogglePlay] = useState(false);

  return(
    <div key={props.key} className="col-3 text-white pe-2">
      <div className="card" style={{width: '370px', border:'none', backgroundColor: togglePlay ? 'gray' : 'transparent'}}>
        <div className="card-body">
          <div style={{position: 'relative'}} onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
            <img src={props.item.image} style={{borderRadius: '20px', width: '350px'}}/>         
          </div>
          <span className="h5 text-white">{props.item.title}</span>
          <p className="text-black fw-bold" style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap', maxLines: 2, fontSize:'20px', fontFamily:'sans-serif'}}>{props.item.desc}</p> 
        </div>
      </div>
    </div>
  )
}


function Section(props) {
  return(
    <div>
      <div className="d-flex justify-content-between">
        <span className="h3 text-white">{props.title}</span>
        <a onClick={props.showAll} className="text-white">Show all</a>
      </div>
      <div className="row w-100 d-flex justify-content-center gap-5 ">
        {
          props.data?.map((item, key) =>  {
            return(
              <ContentCard key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}

function Main()
{
  return(
    <div >
      <div className="card-body">
        <Section 
          showAll={() => {}} 
          data={[
            {
              desc  : "Mimpi Kuliah S2 di UI? Ini Rahasia Sukses Lolos ",
              image : "src/assets/simak.jpg",
              onclick : () => {}
            },
            {
              desc  : "KONZEP, Learning Zine Terbaru dari Zenius",
              image : "src/assets/konzep.jpg",
              onclick : () => {}
            },
            {
              desc  : "Pilih Jurusan Impianmu dengan Kampus 101 dari",
              image : "src/assets/kampus.png",
              onclick : () => {}
            }
          ]}
        />
        <Section title="Focus" 
          showAll={() => {}} 
          data={[
            {
              desc  : "Promo Payday Zenius: Diskon Paket Belajar 15%",
              image : "src/assets/payday.png",
              onclick : () => {}
            },
            {
              desc  : "Cerdas Beneran untuk Jadi Apa Pun yang Kamu Mau!",
              image : "src/assets/jadiapa.png",
              onclick : () => {}
            },
            {
              desc  : "Coba Filter #BikinCerdasBeneran di",
              image : "src/assets/jadiapa2.png",
              onclick : () => {}
            }
          ]}
        />
        <Section title="Focus" 
          showAll={() => {}} 
          data={[
            {
              desc  : "Student Planner: Alat Bantu untuk Mengatur Kegiatan Elo!",
              image : "src/assets/student.jpg",
              onclick : () => {}
            },
            {
              desc  : "Bayar Entar, Belajar Sekarang!",
              image : "src/assets/bayar.jpg",
              onclick : () => {}
            }
          ]}
        />
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center my-5">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

function RecCard(props)
{
  return(
    <div key={props.key} className="text-white">
      <div className="card mt-5 d-flex justify-content-center" style={{width: '600px', height:'145px', border:'none', backgroundColor:'#F4F2DE', borderRadius:'25px'}}>
        <div className="card-body position-absolute d-flex align-items-center">
            <p className="text-black fw-bold px-3" style={{fontSize:'20px', fontFamily:'sans-serif'}}>{props.item.title}</p> 
            <img src={props.item.image} style={{borderRadius: '15px', width: '115px'}}/>         
            <p className="text-black fw-bold px-3" style={{fontSize:'20px', fontFamily:'sans-serif'}}>{props.item.desc}</p> 
        </div>
      </div>
    </div>
  )
}

function Rec(props) {
  return(
    <div>
      <div className="row w-100 mx-2">
        <div className="col">
        {
          props.data?.map((item, key) =>  {
            return(
              <RecCard key={key} item={item}/>
            )
          })  
        }
        </div>
      </div>
    </div>
  )
}

function Recomended() {
  return(
    <div >
      <div className="card-body d-inline-flex mx-3 gap-3">
        <div className="row w-100 ">
          <div className="col ">
            <Rec 
              data={[
                {
                  desc  : "Sejarah dan Penyebab Terjadinya Konflik Syria - Materi Sejarah Kelas 12",
                  image : "src/assets/suriah.jpg",
                  onclick : () => {}
                },
                {
                  desc  : "Cara Menggambar Grafik Fungsi Logaritma dan Contoh Soalnya",
                  image : "src/assets/berpikir.jpg",
                  onclick : () => {}
                },
              ]}
            />       
          </div>
        </div>
       <div className="row w-100">
        <div className="col mb-5">
          <Rec 
            data={[
              {
                desc  : "KBM Bersama ZenRu, Kumpul Berbagai Memahami – Zenius untuk Guru",
                image : "src/assets/kbm.png",
                onclick : () => {}
              },
              {
                desc  : "Pecahin Teka-tekinya, Dapetin Hadiahnya!",
                image : "src/assets/riddle.jpg",
                onclick : () => {}
              }
            ]}
          />       
        </div>
       </div>
      </div>
    </div>
  )
}

// function Recomended() {
//   return(
//       <div className="row w-100 ">
//       {/* direkomendasikan */}
//         <div className="col">            
//             <p className="fw-bold" style={{fontStyle:"", fontSize:"25px", color: "black", paddingLeft:'169px'}}>
//               Direkomendasikan
//             </p>             
//         </div>
//       {/* 4 gambar */}
//         <div className="mt-4 mb-5 d-flex flex-column justify-content-center gap-5">
//           <div className="d-flex justify-content-center gap-5">
//             <a href="#" className="">
//               <img src="src/assets/zenutbk.png" width="470px" height="150px" style={{borderRadius:"27px"}}/>
//             </a>
//             <a href="#" className="">
//               <img src="src/assets/zenutbk.png" width="470px" height="150px" style={{borderRadius:"27px"}}/>
//             </a>
//           </div>
//           <div className="d-flex justify-content-center gap-5">
//             <a href="#" className="">
//               <img src="src/assets/zenutbk.png" width="470px" height="150px" style={{borderRadius:"27px"}}/>
//             </a>
//             <a href="#" className="">
//               <img src="src/assets/zenutbk.png" width="470px" height="150px" style={{borderRadius:"27px"}}/>
//             </a>
//           </div>
//         </div>
//       </div>
//   )
// }

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
            <div className="col mx-5" style={{ fontFamily: "serif" }}>
              <h3
                className=" fw-bold"
                style={{ color: "gray", fontSize: "12px" }}>
                MATERI PELAJARAN
              </h3>
              <a className="ftr" href="" style={{ textDecoration: "none", color: "black" }}>
                Matematika
              </a>
              <br />
              <a className="ftr" href="" style={{ textDecoration: "none", color: "black" }}>
                Fisika
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Kimia
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Biologi
              </a>
              <br />
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Ekonomi
              </a>
              <br/>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Sosiologi
              </a>
              <br/>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Geografi
              </a>
              <br/>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Sejarah Indonesia
              </a>
              <br/>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Sejarah Perminatan
              </a>
              <br/>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Bahasa Inggris
              </a>
              <br/>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Bahasa Indonesia
              </a>
            </div>
            <div className="col" style={{ fontFamily: "serif" }}>
              <h3
                className=" fw-bold"
                style={{ color: "gray", fontSize: "12px" }}
              >
                PREMIUM
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
                PERANGKAT
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
            <div className="col" style={{ fontFamily: "serif" }}>
              <h3
                className=" fw-bold"
                style={{ color: "gray", fontSize: "12px" }}
              >
                BLOG
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
                TENTANG KAMI
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







