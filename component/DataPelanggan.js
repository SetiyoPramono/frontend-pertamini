// @ts-nocheck

import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const DataPelanggan = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    
    async function hapusMahasiswaGql(id,kode_agen){
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                    deleteMahasiswa(id:${id}){
                        data{
                            id
                        }
                    }
                }
                `
            })
            alert(`Mahasiswa dengan kode_agen ${kode_agen} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});

        }
        router.push('admin/mahasiswa/datamahasiswa')
    }
    
    return ( 
        <div style={{marginLeft : "50px"}}>
            <h3>Data Pelanggan/ Agen</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>Kode Agen</th>
                        <th>Nama</th>
                        <th>Tanggal</th>
                        <th>Nomor Hp</th>
                        <th>Alamat</th>
                        <th>Product</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                { data.map((plg, idx) => (
                    <tr key ={idx}>
                        
                            <td>
                                {plg.attributes.kode_agen}
                            </td>
                            <td>
                                 {plg.attributes.nama}
                            </td>
                            <td>
                                {plg.attributes.tanggal_daftar}
                            </td>
                            <td>
                                 {plg.attributes.nomor_hp}
                            </td>
                            <td>
                                 {plg.attributes.alamat}
                            </td>
                            <td>
                                <Link href={{
                                    pathname: `/admin/mahasiswa-gql/transkrip`,
                                    query: {
                                        kode_agen:plg.attributes.kode_agen,
                                        nama:plg.attributes.nama,
                                        angkatan:plg.attributes.angkatan,
                                        nomor_hp:plg.attributes.nomor_hp
                                    }
                                }}>
                                    <a>Transkrip</a>
                                </Link>
                            </td>
                            <td>
                                 <Link href={
                                    {pathname:'/admin/mahasiswa/history',
                                        query: {kode_agen: plg.attributes.kode_agen}
                                    }
                                 }
                                 >
                                    <a>History</a>
                                 </Link>
                            </td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <Link href={`/admin/mahasiswa/updatemahasiswa?kode_agen=${plg.kode_agen}
                                        &nama=${plg.nama}&angkatan=${plg.angkatan}
                                        &nomor_hp=${plg.nomor_hp}`}
                                    >
                                        <a>Edit</a>
                                    </Link>
                                    <Link href={`/admin/mahasiswa-gql/updatemahasiswa?id=${plg.id}&kode_agen=${plg.attributes.kode_agen}&nama=${plg.attributes.nama}&angkatan=${plg.attributes.angkatan}&nomor_hp=${plg.attributes.nomor_hp}`}
                                    >
                                        <a>Edit gql</a>
                                    </Link>

                                    {/* <Link href={
                                       { pathname : '/admin/updatemahasiswa', 
                                         query : {kode_agen : plg.kode_agen, nama : plg.nama, angkatan : plg.angkatan, nomor_hp : plg.nomor_hp}
                                       }
                                        }
                                    >
                                        <a>Edit 2</a>
                                    </Link> */}

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {plg.kode_agen}
                                        onClick={(e)=>hapusMahasiswa(e.target.value)}
                                    >
                                            Hapus
                                    </button>
                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {plg.kode_agen}
                                        onClick={(e)=>hapusMahasiswaGql(plg.id, plg.attributes.kode_agen)}
                                    >
                                            Hapus-gql
                                    </button>
                                </div>
                            </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
     );
}

export default DataPelanggan;