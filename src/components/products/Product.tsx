import React, {FC} from 'react';
export interface IProduct {

    "id"?: number
    "title"?: string
    "description"?: string[]
    "price"?: number
    "discountPercentage"?: number
    "rating"?: number
    "stock"?: number
    "brand"?: string
    "category"?: string
    "thumbnail"?: string
    "images"?:any}




const Product: FC<IProduct> = ({
                                   id,
                                   title,
                                   description,
                                   price,
                                   discountPercentage,
                                   rating,
                                   stock,
                                   brand,
                                   category,
                                   thumbnail,
                                   images
                               }) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                <li> Item ID:{id}</li>
                <li>Description:{description}</li>
                <li>Price:{price}</li>
                <li>discount:{discountPercentage}</li>
                <li>Rating:{rating}</li>
                <li>Stock:{stock}</li>
                <li>Brand:{brand}</li>
                <li>Category:{category}</li>


            </ul>
            <div><img src={thumbnail} alt={title}/></div>

            <img src={images} alt={title}/>
        </div>
    );
};

export default Product;