

const Coba = ({ data }) => {
    return (
        <>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-12"><h2>Product<b>Details</b></h2></div>
                        </div>
                    </div>
                    <table className="table table-bordered table-light">
                        <thead>
                            <tr>
                                {/* <th>Gambar</th> */}
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Deskripsi</th>
                                <th>Kode Barang</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((produks, idx) => (
                                <tr key={idx}>
                                    <td>{produks.attributes.nama}</td>
                                    <td>{produks.attributes.harga}</td>
                                    <td>{produks.attributes.deskripsi}</td>
                                    <td>{produks.attributes.kode_barang}</td>
                                    <img src={produks.attributes.foto.data.attributes.url}/>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Coba;