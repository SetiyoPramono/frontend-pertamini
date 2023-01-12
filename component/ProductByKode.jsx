import { Row, Col, Table, Card, CardTitle, CardBody } from 'reactstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})

const TableProduks = ({ data }) => {
  const [message, setMessage] = useState(false)
  const router = useRouter()

  async function hapusMahasiswaGql(id, kode_agen) {
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
                `,
      })
      alert(`Mahasiswa dengan kode_agen ${kode_agen} telah terhapus`)
    } catch (error) {
      console.log({ message: error.message })
    }
    router.push('admin/mahasiswa/datamahasiswa')
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
                  <th>Kode Barang</th>
                  <th>Nama</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>foto</th>
                  <th>Kategori</th>
                </tr>
              </thead>
              <tbody>
                {data.map((prd, idx) => (
                  <tr key={idx}>
                    <td>{prd.attributes.kode_barang}</td>
                    <td>{prd.attributes.nama}</td>
                    <td>{prd.attributes.deskripsi}</td>
                    <td>{prd.attributes.harga}</td>
                    <td>{prd.attributes.foto}</td>
                    <td>
                      {prd.attributes.kategori.data[0].attributes.kategori}
                    </td>

                    <td>
                      <div className="d-flex justify-content-between">
                        <Link
                          href={`/admin/mahasiswa-gql/updatemahasiswa?id=${prd.id}&kode_agen=${prd.attributes.kode_agen}&nama=${prd.attributes.nama}&angkatan=${prd.attributes.angkatan}&nomor_hp=${prd.attributes.nomor_hp}`}
                        >
                          <a>Edit</a>
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          value={prd.kode_agen}
                          onClick={(e) =>
                            hapusMahasiswaGql(prd.id, prd.attributes.kode_agen)
                          }
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default TableProduks
