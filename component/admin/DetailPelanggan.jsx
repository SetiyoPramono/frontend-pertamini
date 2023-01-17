import React from 'react'

export default function DetailPelanggan({agen}) {
    const Details = agen.attributes.agens.data
  return (
    <div>
        <div className="container">
            <h3>Detail Agen</h3>
            <div className="row">
                <div className="col">
                    Nama
                </div>
                <div className="col">
                    {agen.attributes.nama}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Kode Agen
                </div>
                <div className="col">
                    {agen.attributes.kode_agen}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Alamat
                </div>
                <div className="col">
                    {agen.attributes.alamat}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Produk
                </div>
                <div className="col">
                    {agen.attributes.agens[0].attributes.produks.nama}
                </div>
            </div>
        </div>
    </div>
  )
}
