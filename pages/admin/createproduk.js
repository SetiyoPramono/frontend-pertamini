import React from 'react';
import CreateProduks from '../../component/admin/CreateProduct';

import FullLayout from '../../src/layouts/FullLayout';

function createproduk() {
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