import Card from "../../component/user/Card";
import Navbar from "../../component/user/Navbar";
import Content from "../../component/user/Content";
import ContentDua from "../../component/user/ContentDua";
import Footer from "../../component/user/Footer";

export default function Home(){
    return(
        <div>
        <Navbar />
        <Content/>
        <ContentDua/>
        <Card />
        <Content/>
        <Footer/>
        </div>
    )
}