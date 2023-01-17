import React from 'react'
import FullLayout from '../../src/layouts/FullLayout'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import DataProduk from '../../component/dataproduk';


export default function Home({ produks }) {
  return (
    <div>
    <FullLayout>
      
        <DataProduk data={produks.data} />

    </FullLayout>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  let nama = query.nama
  { typeof nama === 'string' ? nama = nama : nama = "" }
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()

  })

  const { data } = await client.query({
    query: gql`
    query getAllProduk{
      produks(filters:{nama:{containsi:"${nama}"}}){
          data {
            id
            attributes {
                 kode_barang
                nama
                harga
                deskripsi
              foto{
                data{
                  attributes{
                    url
                    name
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


