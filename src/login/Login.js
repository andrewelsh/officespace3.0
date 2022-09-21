import { Link } from "react-router-dom";

export default function Login(){

    let style1 = {backgroundcolor: "#9A616D"}
    let style2 = {borderradius: "1rem" }
    let style3 = {borderradius: "1rem 0 0 1rem" }
    let style4 = {backgroundcolor: "#ff6219" }
    let style5 = {letterspacing: "1px" }
    let style6 = {color: "#393f81" }
    let style7 = {color: "#393f81" }
    return(
        <div>
        <section class="vh-90" style={style1}>
        <div class="container mb-5 h-90">
          <div class="row d-flex justify-content-center align-items-center h-90">
            <div class="col col-xl-10">
              <div class="card" style={style2}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt="login form" class="img-fluid" style={style3} />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
      
                      <form>
      
                        <div class="d-flex align-items-center mb-3 pb-1">
                        
                          <span class="h1 fw-bold mb-0">Office Space</span>
                        </div>
      
                        <h5 class="fw-normal mb-3 pb-3" style={style5}>Sign into your account</h5>
      
                        <div class="form-outline mb-4">
                          <input type="email" id="form2Example17" class="form-control form-control-lg"  required placeholder='email@example.com'/>
                          <label class="form-label" for="form2Example17" >Email address</label>
                        </div>
      
                        <div class="form-outline mb-4">
                          <input placeholder='password' type="password" id="form2Example27" class="form-control form-control-lg" required />
                          <label class="form-label" for="form2Example27" >Password</label>
                        </div>
                        <div class="pt-1 mb-4">
                        
                        
                        
                        <Link to='/app'>
                        <button class="btn btn-dark btn-lg btn-block" type="button" disabled>Login</button>
                        </Link>
                        <a href ='https://www.google.com/'>
                        <button class="btn btn-dark btn-lg btn-block" type="button">Cancel</button>
                        </a>
                        </div>
      
                        <Link to='/app'>Forgot password?</Link>
                        <p class="mb-5 pb-lg-2" style={style6}>Don't have an account? <Link to="/app"
                            style={style7}>Guest Login</Link></p>
                        
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>       

        </div>
    )
}