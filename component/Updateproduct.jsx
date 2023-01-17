import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';

const UpdateProduct = () => {
    const [_kode_barang, setKodeBarang] = useState('');
    const [_nama, setNama] = useState('');
    const [_harga, setHarga] = useState('');
    const [_deskripsi, setDeskripsi] = useState('');

    const router = useRouter();
    const { id, kode_barang, nama, harga, deskripsi} = router.query;

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    useEffect(() => {
        if (typeof kode_barang == 'string') {
            setKodeBarang(kode_barang);
        }
        if (typeof nama == 'string') {
            setNama(nama)
        }
        if (typeof harga == 'string') {
            setHarga(harga);
        }
        if (typeof deskripsi == 'string') {
            setDeskripsi(deskripsi)
        }
        
    }, [kode_barang, nama, harga, deskripsi])

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
                mutation:gql `
                mutation{
                    updateProduk(id:${id},data:{
                      kode_barang:"${_kode_barang}",
                      nama: "${_nama}",
                      harga:${_harga},
                      deskripsi:"${_deskripsi}"
                    })
                    {
                      data{
                        id
                        attributes{
                            kode_barang
                            nama
                            harga
                            deskripsi
                          }
                      }
                    }
                  }`
            })
            alert("Update data sukses")
            router.push('/admin/card_produck')
            clearInput()
        } catch (e) {
            // throw Error(e.message)
            alert("gagal")
            console.log({message: e.message})
        }
        
    }
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h1>Product</h1>
                    <p>Kode barang :{kode_barang}</p>
            <p>Nama Barang : {nama}</p>
                </div>
            </div>
            <div className="produk-form mt-5">
                <form onSubmit={submitHandler}>
                    <h2>Update Product</h2>
                    <div className="form-group mb-3">
                        <div className="row">
                            <div className="col">
                                <input 
                                type="text" 
                                id="kode_barang" 
                                className="form-control" 
                                placeholder="Kode Barang" 
                                required="required" 
                                value={_kode_barang} 
                                onChange={(e) => setKodeBarang(e.target.value)} />
                            </div>
                            <div className="col">
                                <input 
                                type="text" 
                                id="nama" 
                                className="form-control" 
                                placeholder="Nama" 
                                required="required" 
                                value={_nama} 
                                onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="col">
                                <input 
                                type="number" 
                                id="harga" 
                                className="form-control" 
                                placeholder="harga" 
                                required="required" 
                                value={_harga} 
                                onChange={(e) => setHarga(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea 
                        type="text" 
                        id="deskripsi" 
                        className="form-control" 
                        placeholder="Deskripsi" 
                        value={_deskripsi} 
                        onChange={(e) => setDeskripsi(e.target.value)} />
                    </div>
                    
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-lg btn-block rounded-0" id='demo'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProduct;