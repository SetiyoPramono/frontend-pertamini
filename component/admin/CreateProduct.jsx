import axios from "axios";
import { Router } from "next/router";
import React from "react";
import { useState } from "react";
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import { useRouter } from 'next/router'


const CreateProduks = () => {
  const router = useRouter()

  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  const [kode_barang, setKodeBarang] = useState('');
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [deskripsi, setDeskripsi] = useState('');


  const clearInput = () => {
    setKodeBarang('')
    setNama('')
    setHarga('')
    setDeskripsi('')
  }

  async function submitHandler(e) {
    e.preventDefault()
    try {
      await client.mutate({
        mutation: gql`
                mutation{
                  createProduk(data:{
                    nama:"${nama}",
                    kode_barang:"${kode_barang}",
                    harga:${harga},
                    deskripsi:"${deskripsi}",
                  })
                  {
                    data{
                      id
                      attributes{
                        nama
                        kode_barang
                        harga
                        deskripsi     
                      }
                    }
                  }
                }`
      })
      alert("Penambahan data sukses")
      router.push('/admin/card_produck')
      clearInput()
    } catch (error) {
      alert("gagal")
      console.log({ message: error.message });
    }

  }
  return (
    <div>
      <p id="demo">{kode_barang}</p>
      <div className="card p-2">
        <div className="produk-form mt-5">
        <form onSubmit={submitHandler}>
          <div className="card-header text-center">
          <h2>Add Barang</h2>
          </div>
          <div className="form-group mb-3">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  id="kode_barang"
                  className="form-control"
                  placeholder="Kode Barang"
                  required="required" 
                  value={kode_barang}
                  onChange={(e) => setKodeBarang(e.target.value)} />
                  
              </div>
              <div className="col">
                <input 
                type="text" 
                id="nama" 
                className="form-control" 
                placeholder="Nama" 
                required="required" 
                value={nama} 
                onChange={(e) => setNama(e.target.value)} />
              </div>
              <div className="col">
                <input 
                type="number" 
                id="harga" 
                className="form-control" 
                placeholder="harga" 
                required="required" 
                value={harga} 
                onChange={(e) => setHarga(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input 
            type="text" 
            id="deskripsi" 
            className="form-control" 
            placeholder="Deskripsi" 
            value={deskripsi} 
            onChange={(e) => setDeskripsi(e.target.value)} />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-lg btn-block rounded-0" id='demo'>Submit</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default CreateProduks;