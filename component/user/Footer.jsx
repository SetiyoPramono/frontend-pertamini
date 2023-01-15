

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg bg-secondary">
                <div className="row p-5">
                    <div className="col-md-4 text-white d-flex justify-content-center">
                        <h5>OUR WEBSITE:</h5>
                        <ul>
                            <li>
                                <a className="text-white" href="#">Kebijakan Privasi</a>
                            </li>
                            <li>
                                <a className="text-white" href="#">Waspada Penipuan</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-white  d-flex justify-content-center">
                        <h5>CONTACT:</h5>
                        <ul>
                            <li>
                                <p>
                                    Address: Grha Pertamina, Jl. Medan Merdeka Timur No.11-13, Jakarta 10110 Indonesia
                                </p>
                            </li>
                            <li>
                                <p>Email: pcc135@pertamina.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-white d-flex justify-content-center">
                        <h5>ANNOUNCEMENT:</h5>
                        <ul>
                            <li>
                                <a className="text-white" href="#">Pertamina Info</a>
                            </li>
                            <li>
                                <a className="text-white" href="#">Pengadaan Umum</a>
                            </li>
                            <li>
                                <a className="text-white" href="#">Pengumuman</a>
                            </li>
                            <li>
                                <a className="text-white" href="#">E-Procurement</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}