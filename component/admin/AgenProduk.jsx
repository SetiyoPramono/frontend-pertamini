import React from 'react'

export default function AgenProduk({ dataAgen }) {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Info Produk Pelanggan
                    </div>
                <div className="col md-12 mb-0 px-5 py-5 text-start mt-1">
                <h5 className="fw-bolder fs-1">Kode Agen :{dataAgen.kode_agen}</h5>
                <h5 className="fw-bolder fs-1">Nama Agen :{dataAgen.nama}</h5>
                <p className="fw-display" style={{ fontSize: "1.2rem" }}> Alamat :{dataAgen.alamat}</p>
                <button className="btn btn-danger"><a href="/admin/das">Back</a></button>
            </div>
                </div>
            </div>
        </>
    )
}