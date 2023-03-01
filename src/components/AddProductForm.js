import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/product";

const AddProductForm = () => {

    let productSchema = {
        name: '',
        price: '',
        category: '',
        imageUrl: '',
        stockQty: ''
    }

    const [formData, setFormData] = useState(productSchema)
    const dispatch = useDispatch()


    const onInputChangeHandeler = (e) => {

        let value = e.target.value
        const attribute = e.target.name

        if(attribute === 'price' || attribute === 'stockQty') value = parseInt(value)

        setFormData({...formData, [attribute]: value})

    }


    const handleSubmit = (e) => {

        e.preventDefault()
        
        dispatch(addProduct(formData))

        setFormData(productSchema)

    }

    return(
        <>
          <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>

            <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductform">
                <div className="space-y-2">
                  <label htmlFor="name">Product Name</label>
                  <input onChange={onInputChangeHandeler} value={formData.name} name="name" className="addProductInput" id="lws-inputName" type="text" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="category">Category</label>
                  <input onChange={onInputChangeHandeler} value={formData.category} name="category" className="addProductInput" id="lws-inputCategory" type="text" required />
                </div>
          
                <div className="space-y-2">
                  <label htmlFor="image">Image Url</label>
                  <input onChange={onInputChangeHandeler} value={formData.imageUrl} name="imageUrl" className="addProductInput" id="lws-inputImage" type="text" required />
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">    
                    <div className="space-y-2">
                      <label htmlFor="price">Price</label>
                      <input onChange={onInputChangeHandeler} value={formData.price} name="price" className="addProductInput" type="number" id="lws-inputPrice" required />
                    </div>
          
                    <div className="space-y-2">
                      <label htmlFor="quantity">Quantity</label>
                      <input onChange={onInputChangeHandeler} value={formData.stockQty} name="stockQty" className="addProductInput" type="number" id="lws-inputQuantity" required />
                    </div>
                </div>
      
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
          </div>
        </>
    )
}

export default AddProductForm