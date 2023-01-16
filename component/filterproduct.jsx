import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'


export default function FilterProduct({ props }) {
    const [nama, setNama] = useState("");
    const router = useRouter();

    function test(e) {
        e.preventDefault();
        Router.push({
            pathname: "/admin/card_produck",
            query: { 'nama': nama }
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
                        value={nama}
                        onChange={(e) => setNama(nama => e.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-dark" id="search" type="submit">
                            cari
                        </button>
                    </div>
                </div>
            </form>

        </>
    )
}
