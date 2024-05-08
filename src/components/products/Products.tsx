import React, {FC, useEffect, useState} from 'react';
import product, {IProduct} from "./Product";
import Product from "./Product";
import {json} from "node:stream/consumers";
import {stringify} from "node:querystring";




const Products:FC = () => {
    const [items, setItems] = useState<IProduct[]>([])
    useEffect(() => {  fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(({products}):void =>setItems(products))
        console.log(items)

    }, []);

    return (
        <>
            {items.map(({
                            id,
                            title,
                            rating,
                            discountPercentage,
                            brand,
                            category,
                            stock,
                            images,
                            price,
                            description,
                            thumbnail
                        }) => (
                <Product key={id} brand={brand} id={id} thumbnail={thumbnail} description={description} images={images[2]} price={price} category={category} stock={stock} rating={rating} title={title} discountPercentage={discountPercentage}/>))}

        </>
    );
};

export default Products;