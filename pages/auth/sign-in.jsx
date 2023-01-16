import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from 'next/image'
import Logopertamini from "../../src/assets/images/logos/logopertamina2.svg"
// import UserLayout from "../../components/user/UserLayout";

export default function SignIn(){
    const router = useRouter();

    const onSubmit = async(e)=>{
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        if (result.ok){
            router.replace('/');
            return;
        }
        alert('Credential is not valid');
    };
    return(
        <div>
            <section className="h-100" >
                <div className="container h-100">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div className="text-center my-5">
                                {/* <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width={100} /> */}
                                <Image src={Logopertamini} alt="logo" />
                            </div>
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                    <form  className="needs-validation"  onSubmit={onSubmit}>
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                            <input id="email" type="email" className="form-control" name="email"  />
                                            <div className="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label className="text-muted" htmlFor="password">Password</label>
                                            </div>
                                            <input id="password" type="password" className="form-control" name="password" required />
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="form-check">
                                                <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                                <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                            </div>
                                            
                                            <button  className="btn btn-primary ms-auto">
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}