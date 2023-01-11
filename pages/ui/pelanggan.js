import React from 'react';
// import DataPelanggan from '../../component/DataPelanggan'
import TablePelanggan from '../../component/DataPel'
// import AdminLayout from '../../../components/admin/AdminLayout';
// import MahasiswaBykode_agen from '../../../components/admin/mahasiswa/MahasiswaBykode_agen';

function datamahasiswa({ agens }) {

    // let hasil
    // { Array.isArray(data) ? hasil = data : hasil = [data] }

    //console.log(hasil)
    return (
        <div>
                <div className="container">
                    <TablePelanggan data={agens.data} />
                </div>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const kode_agen = query.kode_agen
    //const url = `http://localhost:5000/mahasiswa/${kode_agen}`
    let url = `http://localhost:1337/api/agens`

    if (typeof kode_agen === 'string') {
        url = `http://localhost:1337/api/agens?filters[kode_agen][$eq]=${kode_agen}`
    }
    //{ kode_agen === undefined ? res = await fetch(url2) : res = await fetch(url) }

    const res = await fetch(url)
    const agens = await res.json()

    // Pass data to the page via props
    return { props: { agens } }
}


export default datamahasiswa;