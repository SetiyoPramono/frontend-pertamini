import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';

const UpdateRestaurant = () => {
    const [_kdRst, setKdRst] = useState('');
    const [_nama, setNama] = useState('');
    const [_deskripsi, setDeskripsi] = useState('');
    const [_harga, setHarga] = useState('');

    const router = useRouter();
    const { id, kdRst, nama, deskripsi} = router.query;

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    useEffect(() => {
        if (typeof kdRst == 'string') {
            setKdRst(kdRst);
        }
        if (typeof nama == 'string') {
            setNama(nama)
        }
        if (typeof deskripsi == 'string') {
            setDeskripsi(deskripsi)
        }
        // if (typeof harga == 'number') {
        //     setHarga(harga)
        // }
    }, [kdRst, nama, deskripsi])

    const clearInput = () => {
        setKdRst('')
        setNama('')
        setDeskripsi('')
        // setHarga('')
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation:gql `
                mutation{
                    updateRestaurant(id:${id},
                    data:{
                        kdRst: "${_kdRst}",
                        nama: "${_nama}",
                        deskripsi: "${_deskripsi}",
                    })
                    {
                        data {
                            id
                        }
                    }
                }`
            })
            alert("Update data sukses")
            // router.push('/admin')
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
                    <h2>Update Restaurant</h2>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <input type="text" id="kdRst" className="form-control" placeholder="Kode Restaurant" required="required" value={_kdRst} onChange={(e) => setKdRst(e.target.value)} />
                            </div>
                            <div className="col">
                                <input type="text" id="nama" className="form-control" placeholder="Nama" required="required" value={_nama} onChange={(e) => setNama(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" id="deskripsi" className="form-control" placeholder="Deskripsi" value={_deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                    </div>
                    {/* <div className="form-group">
                        <input type="text" id="harga" className="form-control" placeholder="Harga" value={_harga} onChange={(e) => setHarga(e.target.value)} />
                    </div> */}
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-lg btn-block rounded-0" id='demo'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateRestaurant;