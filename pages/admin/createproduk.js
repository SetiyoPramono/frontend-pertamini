import React from 'react';
import CreateProduks from '../../component/admin/CreateProduct';

import FullLayout from '../../src/layouts/FullLayout';

function createproduk() {

    // let hasil
    // { Array.isArray(data) ? hasil = data : hasil = [data] }

    //console.log(hasil)
    return (
        <FullLayout>
            <div>
                <div className="container">
                   <CreateProduks /> 
                </div>
            </div>
        </FullLayout>
    );
}

export default createproduk ;