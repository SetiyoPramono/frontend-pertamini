import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import Link from 'next/link';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:1337/api/produks?_expand=kategori');
      setProducts(res.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col lg="4" key={product.id}>
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-card-text me-2"></i>
                {product.kode_barang}
              </CardTitle>
              <CardBody className="text-center">
                <img src={product.foto.url} className="card-img-top" alt={product.kode_barang} />
                <div className="card-body">
                  <h5 className="card-title">{product.nama}</h5>
                  <p className="card-text">{product.deskripsi}</p>
                  <p className="card-text">Rp.{product.harga}</p>
                  <p className="card-text">
                    {product.kategori.nama_kategori}
                  </p>
                  <Link href={`/products/${product.id}`}>
                    <a className="btn btn-primary">Learn More</a>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;

