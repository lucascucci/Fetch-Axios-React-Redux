import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { selectedProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
    const product = useSelector((state) => state.allProducts.products);
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    //const product = useSelector((state) => state.product);



    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(selectedProduct(response.data));
    };
    useEffect(()=> {
        if(productId && productId !== "") fetchProductDetail();
    },[productId]);
    console.log (fetchProductDetail);

    return (
        <></>
    )
};

export default ProductDetail;
