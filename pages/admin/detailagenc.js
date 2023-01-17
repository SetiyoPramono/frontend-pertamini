import React from 'react'
import DetailPelanggan from '../../component/admin/DetailPelanggan'

export default function DetailAgen({DetailAgen}) {
  return (
    <div>
        <DetailPelanggan agen={DetailAgen.data[0]} />
    </div>
  )
}

export async function getServerSideProps(query){
    const kode_agen = query.kode_agen
    const url = `http://localhost:1337/api/agens/agens?filters[kode_agen][$eq]=${kode_agen}&populate`
    const res = await fetch(url)
    const DetailAgen = await res.json()

    return{props : {DetailAgen}}
}