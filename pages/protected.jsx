import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";


export default function Protected(){
    return (
        <div className="container">
            <Head>
                <title>Pertamini</title>
            </Head>
            <h1>Protected Page</h1>
            <Link href="/">
                <button>Back to Home Page</button>
            </Link>
        </div>
    );
}

export const getServerSideProps = async (context)=>{
    const session=await getSession(context);
    console.log(session);
    //check is session exists or not if not redirect
    if (session == null){
        return{
            redirect:{
                destination: '/auth/not-authenticated',
                permanent:true,
            },
        };
    }
    return{
        props:{},
    };
};