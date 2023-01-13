import React from 'react';
// import DataPelanggan from '../../component/DataPelanggan'
import TableProduk from '../../component/ProductByKode'
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

function dataproduk({ produks }) {

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
        query getProduksByKode_agen($kode_agen: String!){
            produks(filters:{kode_agen:{eq:$kode_agen}}){
                kode_barang
                nama
                deskripsi
                harga
                foto{
                    data{
                        attributes{
                            url
                          }
                    }
                }
                kategori{
                  data{
                    attributes{
                        kategori
                      }
                  }
                }
            }
        }
        `,
        variables: {kode_agen}
    })
    return {props:{ produks : data.produks}}
}



export default dataproduk;