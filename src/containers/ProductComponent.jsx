import React from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ProductDetail from "./ProductDetail";



const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products)


    const renderList = products.map((products) => {
        return (
            <div className="four wide column" key={products.id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={products.image} alt={products.title} />
                        </div>
                        <div className="content">
                            <div className="header">{products.title}</div>
                            <div className="meta price">${products.price}</div>
                            <div className="meta">{products.category}</div>
                        </div>
                        <div>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">

                                <Button>Unidad</Button>
                                <Button>Dos Unidades</Button>
                                <Button>Mas de 5</Button>
                            </ButtonGroup>
                            <div>
                                <h2>Selecciona cantidad:</h2>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    });
    return (
        <>

            {renderList}
            <ProductDetail/>
        </>
    )

}

export default ProductComponent;

