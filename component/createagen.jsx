import axios from "axios";
import React from "react";
import { useState } from "react";
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import { useRouter } from 'next/router'


const CreateAgen = () => {
    const router = useRouter()

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const [kode_agen, setKodeAgen] = useState('');
    const [nama, setNama] = useState('');
    const [nomorhp, setNomorHp] = useState('');
    const [alamat, setAlamat] = useState('');


    const clearInput = () => {
        setKodeAgen('')
        setNama('')
        setNomorHp('')
        setAlamat('')
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
            mutation{
                createAgen(data:{
                  kode_agen:"${kode_agen}",
                  nama:"${nama}",
                  nomor_hp:${nomorhp},
                  alamat:"${alamat}"
                })
                {
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
            alert("Penambahan data sukses")
            router.push('/admin/pelanggan')
            clearInput()
        } catch (error) {
            
            console.log({ message: error.message });
          }
          
    }
    return (
        <div>
            <div className="card p-3">
            <div className="produk-form mt-5">
                <form onSubmit={submitHandler}>
                    <h2>Add Agen</h2>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    id="kode_agen"
                                    className="form-control"
                                    placeholder="Kode Agen"
                                    required="required"
                                    value={kode_agen}
                                    onChange={(e) => setKodeAgen(e.target.value)} />

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
                            
                        </div>
                    </div>
                    <div className="form-group mt-3">
                    <div className="row">
                        <div className="col">
                                <input
                                    type="number"
                                    id="nomorhp"
                                    className="form-control"
                                    placeholder="nomorhp"
                                    required="required"
                                    value={nomorhp}
                                    onChange={(e) => setNomorHp(e.target.value)} />
                            </div>
                        <div className="col">
                        <input
                            type="text"
                            id="alamat"
                            className="form-control"
                            placeholder="alamat"
                            value={alamat}
                            onChange={(e) => setAlamat(e.target.value)} />
                        </div>
                    </div>
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

export default CreateAgen;