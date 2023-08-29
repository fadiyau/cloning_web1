import "../../src/App.css"
import { Link } from "react-router-dom";

export default function Login() {
 
  return (
    <>
        <Main />
    </>
  );
}

function Main() {
  return (
    <>
      <div className="d-md-flex h-md-100 align-items-center">
        <div className="col-md-6 p-0 bg-indigo h-md-100%">
          <div className="text-black d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div className="logoarea pt-5 pb-5">
              <form>
                <img className="d-flex justify-content-start mb-2" src="https://www.zenius.net/product/zeniusImages/profile/sign_up.svg" />
                <h4 className=" d-flex justify-content-start">Bikin cerdas beneran</h4>
                <p className="d-flex justify-content-start">Di Zenius cara belajarnya beda. Yuk, cobain!</p>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="fw-light form-label d-flex justify-content-start">Masukkan Email atau Nomor HP</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ketik salah satu di sini" style={{borderRadius:'10px'}} />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword" className="fw-light form-label d-flex justify-content-start">Kata Sandi</label>
                  <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="emailHelp" placeholder="Ketik di sini" style={{borderRadius:'10px'}} />
                </div>
                <div className="mb-3 form-check ">
                  <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">I'm not robot</label>
                </div>
                <button type="submit" className="btn text-white mb-3" style={{background: '#916DB3'}} >Submit</button>
                <p>~ atau masuk dengan ~</p>    
                <div className="d-flex gap-3 justify-content-center">  
                  <button type="submit" className="btn btn-outline-secondary text-black mb-3 bi bi-google" style={{width: '95px', borderRadius: '13px'}} ></button>
                  <button type="submit" className="btn btn-outline-secondary text-black mb-3 bi bi-facebook" style={{width: '95px', borderRadius: '13px'}}></button>
                  <button type="submit" className="btn btn-outline-secondary text-black mb-3 bi bi-apple" style={{width: '95px', borderRadius: '13px'}}></button>
                </div> 
                <p className="mt-3 d-flex justify-content-start">
                  Belum punya akun?  <Link to="/regist" className="text-decoration-none fw-bold px-1" style={{color: '#916DB3'}}>Daftar Sekarang</Link>
                </p>
                {/* <p>
                 
                  Syarat & Ketentuan serta  Kebijakan Privasi  yang berlaku.
                </p> */}
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0 h-md-100 loginarea" style={{background: 'white'}}>
            <div className="d-md-flex align-items-center h-md-100% p-5 justify-content-center">
              <div className="row mt-5">
                <div className="d-flex justify-content-center mt-5">
                  <img src="src/assets/lolos.png" width="250px" height="250px" />
                </div>
                <div className="mt-5">
                  <h4 className="d-flex justify-content-center fw-bold" style={{color:'grey'}}>
                    Lolos UTBK? Bisa!
                  </h4>
                </div>
              </div>
            </div>
        </div>     
      </div>
    </>
  );
}

