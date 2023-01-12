import React from 'react';
// import DataPelanggan from '../../component/DataPelanggan'
import TableProduk from '../../component/ProductByKode'
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

function datamahasiswa({ produks }) {

    // let hasil
    // { Array.isArray(data) ? hasil = data : hasil = [data] }

    //console.log(hasil)
    return (
        <div>
                <div className="container">
                    <TableProduk data={produks.data} />
                </div>
        </div>
    );
}
export async function getServerSideProps({query}){
    const kode_agen = query.kode_agen
    
    const client = new ApolloClient({
        uri:'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    const{data} = await client.query({
        query: gql`
        query getProduksByKode_agen{
            produks(filters:{agen:{kode_agen:{eq:"${kode_agen}"}}}){
                data{
                    id
                    attributes{
                        kode_barang
                        nama
                        deskripsi
                        harga
                        foto
                        kategori{
                            data{
                                attributes{
                                    kategori
                                }
                            }
                        }
                    }
                }
            }
        }
        `
    })
    return {props:{ produks : data.produks}}
}



export default datamahasiswa;