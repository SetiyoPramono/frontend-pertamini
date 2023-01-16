import { useRouter } from 'next/router'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import Link from 'next/link';
import FilterProduct from './filterproduct';

const DataProduk = ({ data }) => {
    const router = useRouter()

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    async function hapusProduct(id, kdRst) {
        // e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                    deleteProduk(id:${id}){
                      data{
                        id
                      }
                    }
                  }`
            })

            alert(`${produks.attributes.nama} berhasil dihapus!`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin')
    }
    return (
        <>
            {/* <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-12"><h2>Product<b>Details</b></h2></div>
                        </div>
                    </div>
                    <table className="table table-bordered table-light">
                        <thead>
                            <tr>
                                <th>Kode Barang</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Deskripsi</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((produks, idx) => (
                                <tr key={idx}>
                                    <td>{produks.attributes.kode_barang}</td>
                                    <td>{produks.attributes.nama}</td>
                                    <td>{produks.attributes.harga}</td>
                                    <td>{produks.attributes.deskripsi}</td>
                                    <td>
                                        <Link legacyBehavior
                                            href={`/admin/updateproduct/?id=${produks.id}&kode_barang=${produks.attributes.kode_barang}&nama=${produks.attributes.nama}&harga=${produks.attributes.harga}&deskripsi=${produks.attributes.deskripsi}`}
                                        ><button className="btn edit" title="Edit" data-toggle="tooltip"><i className="fa fa-pencil" />Edit</button></Link>
                                        <button className="btn btn-danger btn-sm" title="Delete" value={produks.attributes.kode_barang} onClick={(e) => hapusRestaurant(produks.id, produks.attributes.kode_barang)}><i className="fa fa-trash" />Hapus</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}
            <div>
                <div className="container">
                    <div className="row flex-lg-nowrap">
                        <div className="col">
                            <div className="row flex-lg-nowrap">
                                <div className="col mb-3">
                                    <div className="e-panel card">
                                        <div className="card-body">
                                            <FilterProduct />
                                            <div className="d-flex bd-highlight">
                                                <div className="p-2 flex-grow-1 bd-highlight">Admin</div>
                                                <div className="p-2 bd-highlight">
                                                    <Link href="/admin/createproduk">
                                                        <button className='btn btn-primary'>Tambah Data</button>
                                                    </Link>
                                                </div>
                                            </div>


                                            <div className="e-table">
                                                <div className="table-responsive table-lg mt-3">
                                                    <table className="table table-bordered text-center">
                                                        <thead>
                                                            <tr className=''>
                                                                <th className="max-width">Kode Barang.</th>
                                                                <th className="sortable">Nama</th>
                                                                <th className="sortable">Harga</th>
                                                                <th className="sortable">Deskripsi</th>
                                                                <th className="sortable">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.map((produks, idx) => (
                                                                <tr key={idx}>
                                                                    <td className="text-nowrap align-middle">{produks.attributes.kode_barang}</td>
                                                                    <td className="text-nowrap align-middle">{produks.attributes.nama}</td>
                                                                    <td className="text-nowrap align-middle">{produks.attributes.harga}</td>
                                                                    <td className="text-nowrap align-middle">{produks.attributes.deskripsi}</td>
                                                                    <td className="text-center align-middle">
                                                                        <div className="align-top">
                                                                            <Link legacyBehavior
                                                                                href={`/admin/updateproduct/?id=${produks.id}&kode_barang=${produks.attributes.kode_barang}&nama=${produks.attributes.nama}&harga=${produks.attributes.harga}&deskripsi=${produks.attributes.deskripsi}`}
                                                                            ><button className='btn btn-primary mr-2'>Edit</button></Link>

                                                                            <button className='btn btn-danger' value={produks.attributes.kode_barang} onClick={(e) => hapusProduct(produks.id, produks.attributes.kode_barang)} >Hapus</button>

                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataProduk;