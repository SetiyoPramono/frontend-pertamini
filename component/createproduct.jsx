import { useRouter } from 'next/router'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import Link from 'next/link';

const CreateProduct = ({ data }) => {
    const router = useRouter()

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    async function hapusRestaurant(id, kdRst) {
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

            alert(`Restaurant dengan kode ${kode_barang} telah terhapus`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin')
    }
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
            </div>
        </>
    );
}

export default CreateProduct;