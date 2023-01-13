import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';

const UpdateAgen = () => {
    const [_kode_agen, setKode_agen] = useState('');
    const [_nama, setNama] = useState('');
    const [_tanggalDaftar, setTanggalDaftar] = useState('');
    const [_nomorhp, setNomor_hp] = useState('');
    const [_alamat, setAlamat] = useState('');

    const router = useRouter();
    const { id, kode_agen, nama,nomor_hp,tanggalDaftar,alamat} = router.query;

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    useEffect(() => {
        if (typeof kode_agen == 'string') {
            setKode_agen(kode_agen);
        }
        if (typeof nama == 'string') {
            setNama(nama)
        }
        if (typeof tanggalDaftar == 'string') {
            setTanggalDaftar(tanggalDaftar)
        }
        if (typeof nomor_hp == 'number') {
            setNomor_hp(nomor_hp)
        }
        if (typeof alamat == 'string') {
            setAlamat(alamat)
        }
    }, [kode_agen, nama, tanggalDaftar, alamat])

    const clearInput = () => {
        setKode_agen('')
        setNama('')
        setTanggalDaftar('')
        setNomor_hp('')
        setAlamat('')
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation:gql `
                mutation{
                    UpdateAgen(id:${id},
                    data:{
                        kode_agen: "${_kode_agen}",
                        nama: "${_nama}",
                        tanggal_daftar: "${_tanggalDaftar}",
                        nomor_hp: "${_nomorhp}",
                        alamat: "${_alamat}"
                    })
                    {
                        data {
                            id
                        }
                    }
                }`
            })
            alert("Update data sukses")
            router.push('/ui/pelanggan')
            clearInput()
        } catch (e) {
            // throw Error(e.message)
            console.log({message: e.message})
        }
    }
    return (
        <div>
            <div className="produk-form mt-5">
                <form onSubmit={submitHandler}>
                    <h2>Update Agen</h2>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <input type="text" id="kode_agen" className="form-control" placeholder="Kode Restaurant" required="required" value={_kode_agen} onChange={(e) => setKode_agen(e.target.value)} />
                            </div>
                            <div className="col">
                                <input type="text" id="nama" className="form-control" placeholder="Nama" required="required" value={_nama} onChange={(e) => setNama(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <div className="row">
                            <div className="col">
                                <input type="date" id="tanggalDaftar" className="form-control" placeholder="Tanggal" required="required" value={_tanggalDaftar} onChange={(e) => setTanggalDaftar(e.target.value)} />
                            </div>
                            <div className="col">
                                <input type="text" id="nomor_hp" className="form-control" placeholder="nomor_hp" required="required" value={_nomorhp} onChange={(e) => setNomor_hp(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group mt-3">
                        <input type="text" id="alamat" className="form-control" placeholder="nomor_hp" value={_alamat} onChange={(e) => setAlamat(e.target.value)} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-lg btn-block rounded-1" id='demo'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateAgen;