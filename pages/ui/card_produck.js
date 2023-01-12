import React from 'react';
// import cardproduks from '../../component/cardproduks'
import CardProduk from '../../component/CardProduk'
// import AdminLayout from '../../../components/admin/AdminLayout';
// import MahasiswaBykode_barang from '../../../components/admin/mahasiswa/MahasiswaBykode_agen';

// export async function getServerSideProps() {
//     const res = await axios.get('http://localhost:1337/api/produks?_expand=kategori');
//     const products = res.data;
  
//     return { props: { products } }
//   }
  
  const cardproduks = () => {
      return(
          <CardProduk />
      )
  }
  
  export default cardproduks;
