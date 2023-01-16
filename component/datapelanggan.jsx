
import { useRouter } from 'next/router'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import Link from 'next/link';
import FilterAgen from './filteragen';

const DataPelanggan = ({ data }) => {
    const router = useRouter()

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    async function hapusAgen(id, kdRst) {
        // e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                  deleteAgen(id:${id}){
                    data{
                      id
                    }
                  }
                }`
            })

            alert(`${agens.attributes.nama} berhasil dihapus!`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin/pelanggan')
    }
    return (
        <>
            {/* <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-12"><h2>Agens<b>Details</b></h2></div>
                        </div>
                    </div>
                    <table className="table table-bordered table-light">
                        <thead>
                            <tr>
                                <th>Kode Agen</th>
                                <th>Nama</th>
                                <th>Nomor HP</th>
                                <th>Alamat</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((agens, idx) => (
                                <tr key={idx}>
                                    <td>{agens.attributes.kode_agen}</td>
                                    <td>{agens.attributes.nama}</td>
                                    <td>{agens.attributes.nomor_hp}</td>
                                    <td>{agens.attributes.alamat}</td>
                                    <td>
                                        <Link href={`/admin/updateagen/?id=${agens.id}&kode_agen=${agens.attributes.kode_agen}&nama=${agens.attributes.nama}&nomor_hp=${agens.attributes.nomor_hp}&alamat=${agens.attributes.alamat}`}>
                                        <button className="btn edit" title="Edit" data-toggle="tooltip"><i className="fa fa-pencil" />Edit</button>
                                        </Link>
                                        <button className="btn btn-danger btn-sm" title="Delete" value={agens.attributes.kode_agen} onClick={(e) => hapusAgen(agens.id, agens.attributes.kode_agen)}><i className="fa fa-trash" />Hapus</button>
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
                                            <FilterAgen />
                                            <div className="d-flex bd-highlight">
                                                <div className="p-2 flex-grow-1 bd-highlight">Admin</div>
                                                <div className="p-2 bd-highlight">
                                                    <Link href="/admin/createagen">
                                                        <button className='btn btn-primary'>Tambah Data</button>
                                                    </Link>
                                                </div>
                                            </div>


                                            <div className="e-table">
                                                <div className="table-responsive table-lg mt-3">
                                                    <table className="table table-bordered text-center">
                                                        <thead>
                                                            <tr className=''>
                                                                <th className="max-width">Kode Agen.</th>
                                                                <th className="sortable">Nama</th>
                                                                <th className="sortable">Nomor Hp</th>
                                                                <th className="sortable">Alamat</th>
                                                                <th className="sortable">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.map((agens, idx) => (
                                                                <tr key={idx}>
                                                                    <td className="text-nowrap align-middle">{agens.attributes.kode_agen}</td>
                                                                    <td className="text-nowrap align-middle">{agens.attributes.nama}</td>
                                                                    <td className="text-nowrap align-middle">{agens.attributes.nomor_hp}</td>
                                                                    <td className="text-nowrap align-middle">{agens.attributes.alamat}</td>
                                                                    <td className="text-center align-middle">
                                                                        <div className="align-top">
                                                                            <Link legacyBehavior
                                                                                href={`/admin/updateAgen/?id=${agens.id}&kode_agen=${agens.attributes.kode_agen}&nama=${agens.attributes.nama}&nomor_hp=${agens.attributes.nomor_hp}&alamat=${agens.attributes.alamat}`}
                                                                            ><button className='btn btn-primary mr-2'>Edit</button></Link>

                                                                            <button className='btn btn-danger' value={agens.attributes.kode_agen} onClick={(e) => hapusAgen(agens.id, agens.attributes.kode_agen)} >Hapus</button>

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

export default DataPelanggan;