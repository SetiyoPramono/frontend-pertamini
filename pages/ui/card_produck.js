import React from 'react';
// import cardproduks from '../../component/cardproduks'
import ProductPage from '../../component/CardProduk'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'


const Produks = ({ produks }) => {
    return (
        <>
        <ProductPage data={produks.data} />;
        </>
    )
};

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const kode_barang = query.kode_barang
    
    let url = `http://localhost:1337/api/produks`
    if (typeof kode_barang === 'string') {
        url = `http://localhost:1337/api/produks?filters[kode_barang][$eq]=${kode_barang}`
    }
    // { typeof kode_barang === 'string' ? kode_barang = kode_barang : kode_barang = "" }
    { typeof kode_barang === 'string'  }
    

    const res = await fetch(url)
    const produks = await res.json()

    // Pass data to the page via props
    // return { props: { produks:data.produks } }
    return { props: { produks: produks } }
}

export default Produks;
