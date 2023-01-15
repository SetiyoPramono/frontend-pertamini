import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';

const Editagen = () => {
    const [_kode_agen, setKodeAgen] = useState('');
    const [_nama, setNama] = useState('');
    const [_nomorhp, setNomorhp] = useState('');
    const [_alamat, setAlamat] = useState('');

    const router = useRouter();
    const { id, kode_agen, nama, nomor_hp, alamat} = router.query;

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    useEffect(() => {
        if (typeof kode_agen == 'string') {
            setKodeAgen(kode_agen);
        }
        if (typeof nama == 'string') {
            setNama(nama)
        }
        if (typeof nomor_hp == 'string') {
            setNomorhp(nomor_hp);
        }
        if (typeof alamat == 'string') {
            setAlamat(alamat)
        }
        
    }, [kode_agen, nama, nomor_hp, alamat])

    const clearInput = () => {
        setKodeAgen('')
        setNama('')
        setnomor_hp('')
        setAlamat('')
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation:gql `
                mutation{
                    updateAgen(id:${id},data:{
                      kode_agen:"${_kode_agen}",
                      nama: "${_nama}",
                      nomor_hp:${_nomorhp},
                      alamat:"${_alamat}"
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
            alert("Update data sukses")
            router.push('/admin/pelanggan')
            clearInput()
        } catch (e) {
            // throw Error(e.message)
            console.log({message: e.message})
        }
        
    }
    return (
        <div>
            <p>{kode_agen}</p>
            <p>{_kode_agen}coba</p>
            <div className="produk-form mt-5">
                <form onSubmit={submitHandler}>
                    <h2>Update Agens</h2>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <input 
                                type="text" 
                                id="kode_agen" 
                                className="form-control" 
                                placeholder="Kode Agen bisa" 
                                value={_kode_agen} 
                                onChange={(e) => setKodeAgen(e.target.value)} />
                            </div>
                            <div className="col">
                                <input 
                                type="text" 
                                id="nama" 
                                className="form-control" 
                                placeholder="Nama" 
                                value={_nama} 
                                onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="col">
                                <input 
                                type="number" 
                                id="nomor_hp" 
                                className="form-control" 
                                placeholder="Nomor HP" 
                               
                                value={_nomorhp} 
                                onChange={(e) => setNomorhp(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        id="alamat" 
                        className="form-control" 
                        placeholder="Alamat" 
                        value={_alamat} 
                        onChange={(e) => setAlamat(e.target.value)} />
                    </div>
                    
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-lg btn-block rounded-0" id='demo'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Editagen;