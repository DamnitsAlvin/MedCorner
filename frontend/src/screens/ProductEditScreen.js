import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, updateProduct } from '../action/productAction';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import Axios from 'axios';


export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [distributor, setDistributor] = useState("");
  const [generic_name, setGenericName] = useState("");
  const [DOP, setDOP] = useState("DD/MM/YYYY"); 
  const [DOE, setDOE] = useState("DD/MM/YYYY");
  const [purpose, setPurpose] = useState("");




  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {

   if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setDistributor(product.Distributor);
      setGenericName(product.generic_name);
      setPrice(product.price);
      setDOP(product.Date_of_Production); 
      setDOE(product.Date_of_Expiry);
      setPurpose(product.Purpose);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock); 
      setDescription(product.description);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
        updateProduct({
          _id: productId,
          name,
          distributor, 
          price,
          description, 
          generic_name, 
          DOP,
          DOE, 
          purpose, 
          image,
          category,
          purpose,
          countInStock,
        })
      );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  console.log(errorUpload);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loadingUpdate && <Loading></Loading>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="distributor">Distributor</label>
              <input
                id="name"
                type="text"
                placeholder="Enter distributor"
                value={distributor}
                onChange={(e) => setDistributor(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="name">Generic Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Generic name"
                value={generic_name}
                onChange={(e) => setGenericName(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="name">Date of Production</label>
              <input
                id="name"
                type="date"
                placeholder="Enter Date of Production"
                value={DOP}
                onChange={(e) => setDOP(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="name">Date of Expiry</label>
              <input
                id="name"
                type="date"
                placeholder="Enter Date of Expiry"
                value={DOE}
                onChange={(e) => setDOE(e.target.value)}
              ></input>
            </div>


            <div>
              <label htmlFor="name">Purpose</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
            <label htmlFor="imageFile">Image File</label>
            <input
              type="file"
              id="imageFile"
              label="Choose Image"
              onChange={uploadFileHandler}
            ></input>
            {loadingUpload && <Loading></Loading>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )}

           


          </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
           
            <div>
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}