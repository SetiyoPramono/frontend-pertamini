//import { SessionProvider, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Card from "../component/user/Card";
// import Navbar from "../component/user/Navbar";
import Content from "../component/user/Content";
import ContentDua from "../component/user/ContentDua";
import Footer from "../component/user/Footer";
import { signOut, useSession } from 'next-auth/react'
import LogoPertamini from '../src/assets/images/logos/logopertamina2.svg'


export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session == null) return;
    console.log('session.jwt', session.jwt);
  }, [session]);

  return (
    <>
      <div className='container mt-4' >
        <Head>
          <title>Pertamini</title>
        </Head>

        {session ? (
          <div className="card container text-center">
            <div>
              <h1>Welcome User</h1>
              <div style={{ marginBottom: 10 }}>
                <h3>Terima Kasih sudah login dengan akun anda</h3>
                <div>Email User :{session.user.email}</div>
                {/* <div>JWT fronm strapi : check console</div> */}

                <div>{session.maxAge}</div>
              </div>
            </div>
          </div>
        ) : <h1>Welcome To Landingpage Pertamini</h1>}

        {session ? (
          <button className='btn btn-danger' onClick={signOut}>Sign out</button>
        ) : (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Image src={LogoPertamini} alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">
                    <li className="nav-item">
                      <a className="nav-link text-body" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-body" href="#">Bisnis Kami</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-body" href="#">Media & Informasi</a>
                    </li>
                    <li className="nav-item" >
                      <Link href="/auth/sign-in">
                        <button className='btn btn-success'>sign In</button>
                      </Link>
                      <Link href="/auth/sign-up">
                        <button className='btn btn-primary ms-2'>sign Up</button>
                      </Link>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-danger" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>


          </div>
        )} 
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              {/* <Image src={LogoPertamini} alt="Logo" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button> */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">
                  
                    <Link href="/protected">
                      <a className='ms-2 mt-4'>Protected Page</a>
                    </Link>
                  
                    <Link href="/admin/pelanggan">
                      <a className='ms-2 mt-4'>Data Pelanggan</a>
                    </Link>
                  
                    <Link href="/admin/card_produck">
                      <a className='ms-2 mt-4'>Data Produk</a>
                    </Link>
                  
                    <Link href="/admin/das">
                      <a className='ms-2 mt-4'>Dasboard</a>
                    </Link>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Content/>
        <ContentDua/>
        <Card/>
        <Footer/>
      </div>
    </>
  );
}





