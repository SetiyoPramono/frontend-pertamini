import axios from 'axios'
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap'
import { Router } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const CreateProduks = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  })

  const [kode_barang, setKodeBarang] = useState('')
  const [nama, setNama] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [harga, setHarga] = useState('')
  const [foto, setFoto] = useState('')
  const [kategori, setKategori] = useState('')
  const getKodeAndKategori =()=>{
    const objKate = { '11':'elektrik', '31':'manual'}

    const kategori = objKate

    setKategori(kategori)

    console.log(kategori);
}

  const clearInput = () => {
    setKodeBarang('')
    setNama('')
    setDeskripsi('')
    setHarga('')
    setFoto('')
    setKategori('')
  }

  async function submitHandler(e) {
    e.preventDefault()
    try {
      await client.mutate({
        mutation: gql`
                mutation{
                    createProduk(data:{
                        kode_barang: "${kode_barang}",
                        nama: "${nama}",
                        deskripsi: "${deskripsi}",
                        harga: "${harga}",
                        foto: "${foto}",
                        kategori: "${kategori}",
                    })
                    {
                        data {
                            id
                            attributes {
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
                }`,
      })
      alert('Penambahan data sukses')
      clearInput()
    } catch (e) {
        throw Error(e.message)
    }
  }
  return (
    <div>
      <Row>
        <Col>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Create Produck
          </CardTitle>
          <CardBody>
            <div className="card p-3">
              <Form >
                <form action="" onSubmit={submitHandler}>
                <div className="row">
                  <div className="col">
                    
                      <Label for="nama">Kode Produk</Label>
                      <Input
                        type="text"
                        id="kode_barang"
                        className="form-control"
                        placeholder="Kode Barang"
                        required="required"
                        value={kode_barang}
                        onChange={(e) => setKodeBarang(e.target.value)}
                        onBlur = {getKodeAndKategori}
                      />
                    
                  </div>
                  <div className="col">
                    
                      <Label for="nama">Nama Produk</Label>
                      <Input
                        type="text"
                        id="nama"
                        className="form-control"
                        placeholder="Nama"
                        required="required"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    
                      <Label for="nama">Deskripsi Produk</Label>
                      <Input
                        type="text"
                        id="deskripsi"
                        className="form-control"
                        placeholder="Deskripsi"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                      />
                    
                  </div>
                  <div className="col">
                    
                      <Label for="nama">Harga Produk</Label>
                      <Input
                        type="text"
                        id="harga"
                        className="form-control"
                        placeholder="Harga"
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                      />
                    
                  </div>
                </div>
                <div className="row ">
                    <div className="col ">
                    
                      <Label for="nama">Foto Produk</Label>
                      <Input
                        type="file"
                        id="foto"
                        className="form-control"
                        placeholder="Masukkan Foto Produk"
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                      />
                    
                    </div>
                    <div className="col">
                    
                  <Label for="exampleSelect">Kategori</Label>
                  <Input id="kategori" name="select" type="select">
                    <option>Elektrik</option>
                    <option>Manual</option>
                    
                  </Input>
                
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group text-center">
            <button
              type="submit"
              className="btn btn-lg btn-primary rounded-5"
              id="demo"
            >
              Submit
            </button>
          </div>
                    </div>
                </div>
                </form>
              </Form>
            </div>
          </CardBody>
        </Col>
      </Row>
      
    </div>
  )
}

export default CreateProduks
