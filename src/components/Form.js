import ListItem from "../components/Products/ListItems/ListItem";
import { useState } from "react";
const Form = (props) => {
   
    const handleInput = (event) => {
        props.onChangeInput(event);
   }

    return(
        <div>
        <div className="product-list">
            <div className="product-list-wrapper">
                <div className="form">
                    <form onSubmit={props.onFormSubmission}>
                        <h2>Item Card Detail</h2>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                placeholder="enter title"
                                name="title"
                                onChange={handleInput}
                                value={props.item.title}
                                required>
                            </input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="price">Price</label>
                            <input type="number"
                                name="price"
                                placeholder="enter price"
                                onChange={handleInput}
                                value={props.item.price} required>
                            </input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="discountedPrice">Discounted Price</label>
                            <input type="number"
                                name="discountedPrice"
                                placeholder="enter discounted price"
                                onChange={handleInput}
                                value={props.item.discountedPrice} required></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="thumbnail">Thumbnail</label>
                            <input type="text" 
                                name="thumbnail"
                                placeholder="enter thumbnail"
                                onChange={handleInput}
                                value={props.item.thumbnail} required></input>
                        </div>
                        <button>Update</button>
                    </form>
                </div>
                <ListItem data={props.item}></ListItem>
                {/* <ListItem data={item}></ListItem> */}
            </div>
        </div>
        </div>
    )
}

export default Form