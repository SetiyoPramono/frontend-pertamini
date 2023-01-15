import Image from "next/image"
import Gambar from "../../src/assets/images/users/gambar1.png"



export default function Content() {
    return (
        <>
        <section>
            <div className="container">
                <div className="row min-vh-100 d-flex align-items-center ">
                    <div className="col md-6 d-flex justify-content-center ">
                        <Image src={Gambar}/>
                    </div>
                    <div className="col-md-6">
                        <div className="content-1 ">
                            <h1 className="mb-5">Pertamina</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, minus quam tenetur consectetur, similique veritatis consequuntur libero deleniti totam iure quas voluptatem eveniet? Sint cupiditate similique fugiat ullam provident quo sed officiis eos ad quae. Quae minus repellendus voluptatibus quisquam, commodi sint soluta nihil neque dicta enim placeat excepturi dolore!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}