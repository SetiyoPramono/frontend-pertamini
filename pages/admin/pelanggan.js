import React from 'react'
import FullLayout from '../../src/layouts/FullLayout'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import DataPelanggan from '../../component/datapelanggan';



export default function Home({ agens }) { 



  return (
    <div>
      <FullLayout>
        <DataPelanggan data={agens.data} />
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
    query getAllAgen{
        agens(filters:{nama:{containsi:"${nama}"}}){
          data{
            id
            attributes{
              kode_agen
              nama
              nomor_hp
              alamat
            }
          }
        }
      }`
  })
  return { props: { agens: data.agens } }
}


