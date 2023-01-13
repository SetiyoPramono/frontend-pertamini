import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

const TablePelanggan = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    
    async function hapusMahasiswaGql(id,kode_agen){
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                  deleteAgen(id:${id}){
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
        router.push('/ui/pelanggan')
    }
  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Data Agent
          </CardTitle>
          <CardBody className="text-center">
            <Table bordered>
              <thead>
                <tr>
                  <th>Kode Agen</th>
                  <th>Nama</th>
                  <th>Tanggal</th>
                  <th>Nomer Hp</th>
                  <th>Alamat</th>
                  <th>Product</th>
                  <th>Action</th>
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
                                    pathname: `/ui/produks`,
                                    query: {
                                        kode_agen:plg.attributes.kode_agen,
                                        nama:plg.attributes.nama,
                                        tanggal_daftar:plg.attributes.tanggal_daftar,
                                        nomor_hp:plg.attributes.nomor_hp,
                                        alamat:plg.attributes.alamat
                                    }
                                }}>
                                    <a ><i className="bi bi-eye-fill me-2">Lihat</i></a>
                                </Link>
                            </td>
                            
                            <td>
                                <div className="d-flex justify-content-between">
                                    
                                    <Link href={`/ui/updateAgen?id=${plg.id}&kode_agen=${plg.attributes.kode_agen}&nama=${plg.attributes.nama}&tanggal_daftar=${plg.attributes.tanggal_daftar}&nomor_hp=${plg.attributes.nomor_hp}&alamat=${plg.alamat}`}
                                    >
                                        <a>Edit</a>
                                    </Link>

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {plg.kode_agen}
                                        onClick={(e)=>hapusMahasiswaGql(plg.id, plg.attributes.kode_agen)}
                                    >
                                            Hapus
                                    </button>
                                </div>
                            </td>
                    </tr>
                    ))
                }
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      
    </Row>
  );
};

export default TablePelanggan;
