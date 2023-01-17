import React from 'react'
import { useRouter } from 'next/router';
import AgenProduk from '../../component/admin/AgenProduk';
import Product from '../../component/dataproduk';
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import Link from 'next/link';

export default function productagen({ produks }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    return (
        <>
            <div className="container px-4 px-lg-1 my-5">
            <Link href="/admin/datapelanggann">
                <i className="text-dark bx bx-chevrons-left me-1 my-3 fs-1"/>
            </Link>
            </div>
            <AgenProduk dataAgen={router.query} />
            <Product data={produks.data} />
        </>
    )
}

export async function getServerSideProps({ query }) {
    let kode_agen = query.kode_agen
    // {typeof nama === 'string' ? nama = nama : nama = ""}
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
            query getProdukBykode_agen{
                produks(filters:{agen:{kode_agen:{contains:"${kode_agen}"}}}){
                data {
                    id
                    attributes {
                        kode_barang
                        nama
                        deskripsi
                        harga
                        agen{
                            data{
                                attributes{
                                    kode_agen
                                    nama
                                    alamat
                                }
                            }
                        }
                    }
                }
            }
        }`
    })
    return { props: { produks: data.produks } }
}