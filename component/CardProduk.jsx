// components/ProductPage.js
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

// import React, { useState, useEffect } from 'react';

const ProductPage = ({ data }) => {
  // const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(false)
    const router = useRouter()
    
    async function hapusProduck(id,kode_barang){
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                  deleteProduk(id:${id}){
                        data{
                            id
                        }
                    }
                }
                `
            })
            alert(`Produk dengan kode ${kode_barang} telah terhapus`)
        } catch (error) {
            console.log({message : error.message});

        }
        router.push('/ui/card_produck')
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
                  <th>Foto</th>
                  <th>Kategori</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              { data.map((prd, idx) => (
                    <tr key ={idx}>
                        
                            <td>
                                {prd.attributes.kode_barang}
                            </td>
                            <td>
                                 {prd.attributes.nama}
                            </td>
                            <td>
                                {prd.attributes.deskripsi}
                            </td>
                            <td>
                                 {prd.attributes.harga}
                            </td>
                            <td>
                                 <img src={prd.attributes.foto} alt={prd.attributes.nama} srcset="" />
                            </td>
                            <td>
                     x           {prd.attributes.kategori}
                            </td>
                            
                            <td>
                                <div className="d-flex justify-content-between">
                                    
                                    <Link href={`/admin/mahasiswa-gql/updatemahasiswa?id=${prd.id}&kode_barang=${prd.attributes.kode_barang}&nama=${prd.attributes.nama}&angkatan=${prd.attributes.angkatan}&nomor_hp=${prd.attributes.nomor_hp}`}
                                    >
                                        <a>Edit</a>
                                    </Link>

                                    <button 
                                        className = "btn btn-danger btn-sm"
                                        value = {prd.kode_barang}
                                        onClick={(e)=>hapusProduck(prd.id, prd.attributes.kode_barang)}
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
            {data.map((prd, idx)=>(
                <Card>
                  <div className="row">
                  <div className="col" key={idx}>
                <div className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top img-fluid" src="http://localhost:1337/uploads/pertamini_b88824de22.jpg" alt="..." style={{height: "400px",widht:"10px"}}/>
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-start">
                            {/* Product name*/}
                            <h5 className="fw-bolder">{prd.attributes.nama}</h5>
                            <p className="fw-display" style={{fontSize: "15px"}}>{prd.attributes.deskripsi}</p>
                            {/* Product price*/}
                            Rp. {prd.attributes.harga}
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-start">
                            <a className="btn btn-outline-dark mt-auto mb-3 rounded-0" href="#">Check Product</a>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                </Card>

            ))}
          </CardBody>
        </Card>
      </Col>
      
    </Row>
    
  );
};

export default ProductPage;
