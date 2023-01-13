import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import { SearchOutline } from 'react-ionicons'

export default function FilterProduct({ props }) {
    const [kode_barang, setkode_barang] = useState("");
    const router = useRouter();

    function test(e) {
        e.preventDefault();
        Router.push({
            pathname: "/product",
            query: { 'kode_barang': kode_barang }
        })
    }
    return (
        <>
            <form className="d-flex justify-content-center h-100 mb-5" onSubmit={test}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search our dish"
                        value={kode_barang}
                        onChange={(e) => setkode_barang(kode_barang => e.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-dark" id="search" type="button">
                            <SearchOutline style={{ fontSize: "1em" }} color="#fff" />
                        </button>
                    </div>
                </div>
            </form>

        </>
    )
}
