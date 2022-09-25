import { useState } from "react";
import Form from "../../components/Form.js";

const Products = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [discountedPrice, setDicountedPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState("");

    const [item, setItem] = useState({
        id: 0,
        discountedPrice: 105000,
        price: 120000,
        title: "MacBook Air M1(8GB, 256GB)",
        thumbnail: "placeholder.jpg"
    });

    const handleInput = (event) => {
        console.log(event.target);
        setItem({
            ...item,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("updated item", item);
        if(discountedPrice > price){
            alert("discounted price cannot be greater than original price");
            return;
        }
    }

    return (
        <Form item = {item} onChangeInput={handleInput} onFormSubmission = {handleSubmit}/>
    )
}

export default Products;