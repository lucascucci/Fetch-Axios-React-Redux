import React from "react";
import { useSelector } from "react-redux";





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
                    </div>
                </div>
            </div>

        );
    });
    return (
        <>

            {renderList}

        </>
    )

}

export default ProductComponent;

