import React from 'react'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL'
import numeral from 'numeral'
import AdminSidePanel from './AdminSidePanel'
import { CustomInput, Modal, ModalBody, ModalHeader } from 'reactstrap'

class AdminPage extends React.Component{
    state= {
        productLists: [],
        brandLists: [],
        categoryLists: [],
        stockData: [],
        expanded: false,
        selectedEditId : 0,
        editBrand: 0,
        stockEditId: 0,
        descriptionId: 0,
        editCategory: 0,
        errorMessage: '',
        successMessage: '',
        editProductPicture: undefined,
        editProductImageName: 'Picture...',
        openModal: false
    }

    componentDidMount(){
        Axios.get(API_URL + '/products/allproducts')
        .then((res)=> {
            this.setState({ productLists: res.data})
        })
        .catch((err)=> {
            console.log(err)
        })
        Axios.get(API_URL + '/categories/allcategories')
        .then((res)=> {
            this.setState({ categoryLists: res.data})
        })
        .catch((err)=> {
            console.log(err)
        })
        Axios.get(API_URL + '/brands/allbrands')
        .then((res)=> {
            this.setState({ brandLists: res.data})
        })
        .catch((err)=> {
            console.log(err)
        })
        // console.log(this.state.editProductPicture)
    }

    

    handleCategoryChange = (e) => {
        const category = e.target.value
        // console.log(category);
        if(category){
            this.setState({ editCategory: category })
        }
    }

    
    handleBrandChange = (e) => {
        const brand = e.target.value
        // console.log(brand);
        if(brand){
            this.setState({ editBrand: brand })
        }
    }

    readMoreClick = (id) => {
        this.setState({ descriptionId: id, expanded: !this.state.expanded})
    }

    onDeleteProduct = (id) => {
        const confirmation = window.confirm('Are You Sure?')
        if(confirmation){
            Axios.put(API_URL + '/products/deleteproduct/' + id)
            .then((res)=>{
                this.setState({productLists: res.data, errorMessage: '' ,successMessage: 'Data Successfully Deleted'})
            })
            .then((err)=> {
                console.log(err)
            })
        }
    }

    onBtnStockdetail = (id) => {
        Axios.get(API_URL + '/products/stocks/' + id)
        .then((res)=> {
            console.log(res.data)
            this.setState({ stockData: res.data, openModal: true })        
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    editStockData = (id) => {
        this.setState({ stockEditId: id })
    }

    updateStockData = (id) => {
        const data = {
            size_46: Number(this.refs.size46.value),
            size_47: Number(this.refs.size47.value),
            size_48: Number(this.refs.size48.value),
            size_49: Number(this.refs.size49.value),
            size_50: Number(this.refs.size50.value)
        }

        Axios.put(API_URL + '/products/stocks/' + id, data)
        .then((res)=> {
            this.setState({ openModal: false, selectedEditId: 0, stockData: res.data })
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    onEditButtonClick = (id) => {
        this.setState({ selectedEditId: id })
    }

    onEditImageFileChange = (e) => {
        console.log(e.target.files[0])
        if(e.target.files) {
            this.setState({ editProductImageName: e.target.files[0].name, editProductPicture: e.target.files[0]})
        }
        else {
            this.setState({ editProductImageName: 'Select Image...', editProductPicture: undefined })
        }
    }

    onSaveEditButtonClick = (id, oldPic, brand, category) => {
        
        var formData = new FormData()
                var headers ={
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                var data = { 
                    productname: this.refs.productName.value.toLowerCase(),
                    price: Number(this.refs.price.value),
                    discount: Number(this.refs.discount.value),
                    description: this.refs.description.value.toLowerCase(),
                    brand_id: this.state.editBrand === 0 ? brand : this.state.editBrand,
                    category_id: this.state.editCategory === 0 ? category : this.state.editCategory,
                    oldPhoto: oldPic
                }
                console.log(data)
                formData.append('image', this.state.editProductPicture)
                formData.append('data', JSON.stringify(data))

                Axios.put(API_URL + '/products/editproduct/' + id, formData, headers)
                .then((res)=>{
                        this.setState({productLists : res.data})
                        console.log(res.data)
                    })
                .catch((err)=>{
                    console.log(err);
                })
                this.setState({ editProductImageName : 'Picture...',selectedEditId : 0 , successMessage: 'Data Successfully Edited', errorMessage: ''})
    
    }

    // ================================== DATA RENDERING ================================================

    renderSuccessOrErrorMessage = () => {
        if(this.state.errorMessage){
            return <span className='alert alert-danger'>{this.state.errorMessage}</span>
        }
        if(this.state.successMessage){
            return <span className='alert alert-success'>{this.state.successMessage}</span>
        }
        return null
    }
    renderingCutDescription = (text) => {
        let arr = text.split(' ')
        let newArr = []

        for( let i = 0; i < 5; i++ ){
            newArr.push(arr[i])
        }
        return newArr.join(' ')
}

    renderCategoryLists = () => {
        return this.state.categoryLists.map((val, index)=> {
            return (
                <option key={index} value={val.id} >{val.categoryname.toUpperCase()}</option>
            )
        })
    }
    
    renderBrandLists = () => {
        return this.state.brandLists.map((val, index)=> {
            return (
                <option key={index} value={val.id} >{val.brandname.toUpperCase()}</option>
            )
        })
    }

    renderStockData = () => {
        return this.state.stockData.map((val)=> {
            if(this.state.stockEditId === val.id){
             return(
                 <tr>
                    <td>{val.productname.toUpperCase()} </td>
                    <td>
                        <input style={{width: '40px'}} type='number' ref='size46' defaultValue={val.size_46}/>
                    </td>
                    <td>
                         <input style={{width: '40px'}} type='number' ref='size47' defaultValue={val.size_47}/>
                    </td>
                    <td>
                         <input style={{width: '40px'}} type='number' ref='size48' defaultValue={val.size_48}/>
                    </td>
                    <td>
                           <input style={{width: '40px'}} type='number' ref='size49' defaultValue={val.size_49}/>
                    </td>
                    <td>
                            <input style={{width: '40px'}} type='number' ref='size50' defaultValue={val.size_50}/>
                    </td>
                    <td>
                            <input onClick={()=> this.updateStockData(val.id)} type='button' className='btn btn-success' value='Update'/>
                    </td>
                    <td>
                            <input type='button' className='btn btn-danger' onClick={ ()=>this.setState({ stockEditId: 0 })} value='Cancel'/>
                    </td>
                 </tr>
             )   
            }
            return (
                <tr>
                    <td>{val.productname.toUpperCase()}</td>
                    <td>{val.size_46}</td>
                    <td>{val.size_47}</td>
                    <td>{val.size_48}</td>
                    <td>{val.size_49}</td>
                    <td>{val.size_50}</td>
                    <td>
                        <input type='button' className='btn btn-primary' onClick={()=> this.editStockData(val.id)} value='Edit' />
                    </td>
                </tr>
            )
        })
    }

    renderProductLists = () => {
        return this.state.productLists.map((val, index)=> {
            if(this.state.selectedEditId !== val.product_id){
                return (
                    <tr key={val.product_id} className='align-content-center justify-content-center'>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <div>
                                    <img src={API_URL + val.picture} alt={val.productname} height={110} width={110} />
                                    </div>
                                    <div style={{fontWeight: 'bold'}}>
                                        {val.productname.toUpperCase()}
                                    </div>
                                </td>
                                <td>{'Rp. ' + numeral(val.price).format(0,0)}</td>
                                <td>{val.discount}</td>
                                <td >
                                    <div style={{width: '160px'}} >
                                        {this.state.descriptionId === val.product_id && this.state.expanded ? val.description :
                                         this.renderingCutDescription(val.description) }
                                     </div>
                                     <div>
                                         <span style={{cursor: 'pointer', color: 'red'}} onClick={()=> this.readMoreClick(val.product_id)}> {this.state.expanded && this.state.descriptionId === val.product_id ? 'Read Less...' : ' Read More...'} </span>
                                     </div>
                                </td>
                                <td>{val.brand.toUpperCase()}</td>
                                <td>{val.category.toUpperCase()}</td>
                                <td>
                                    <input type='button' onClick={()=> this.onBtnStockdetail(val.product_id)} value='Stock Details' className='btn btn-info' />
                                </td>
                                <td><input onClick={()=> this.onEditButtonClick(val.product_id)} type='button' value='Edit' className='btn btn-primary' /> </td>
                                <td><input onClick={() =>this.onDeleteProduct(val.product_id, index)} type='button' value='Delete' className='btn btn-danger' /></td>                                                                                                                
                            </tr>
                )
            } 
            return (
                <tr key={val.product_id} className='align-content-center justify-content-center'>
                                <th scope="row">{index + 1}</th>
                                <td style={{height: 150}}>
                                    <div>
                                    <img src={API_URL + val.picture} alt={val.productname} height={100} />
                                    <CustomInput type='file' id={val.product_id} label={this.state.editProductImageName} onChange={this.onEditImageFileChange} />
                                    </div>
                                    <div style={{fontWeight: 'bold'}}>
                                       <input style={{marginTop: 20}} type='text' ref='productName' defaultValue={val.productname.toUpperCase()} />
                                    </div>
                                </td>
                                <td>
                                     <input ref='price' style={{width: '88px', border: 'none', outline:'none'}} type='number' defaultValue={(val.price)}  />
                                </td>
                                <td>
                                    <input ref='discount' style={{width: '50px'}} type='number' defaultValue={val.discount}  />
                                </td>
                                <td>
                                    <div>
                                       <textarea style={{width:'160px'}} ref='description' defaultValue={val.description}>
                                           
                                        </textarea> 
                                     </div>
                                </td>
                                <td >
                                    <select style={{width: '100px'}} onChange={this.handleBrandChange}  >
                                        <option>BRAND</option>
                                        {this.renderBrandLists()}
                                    </select>
                                </td>
                                <td>
                                    <select style={{width: '100px'}} onChange={this.handleCategoryChange}>
                                        <option>CATEGORY</option>
                                        {this.renderCategoryLists()}
                                    </select>
                                </td>
                                <td>
                                    <input disabled type='button' onClick={()=> this.onBtnStockdetail(val.product_id, index)} value='Stock Details' className='btn btn-info' />
                                </td>
                                <td><input type='button' onClick={()=> this.setState({ selectedEditId: 0 })} value='Cancel' className='btn btn-danger' /></td>                                                                                                                
                                <td><input type='button' onClick={()=> this.onSaveEditButtonClick(val.product_id, val.picture,
                                                                                                     val.brand_id, val.category_id)} value='Save Changes' className='btn btn-success' /> </td>
                            </tr>
            )
        })
    }
    
    
    
    
    render(){
        return(
            <div  className='row' >
                <AdminSidePanel />
            <div className='container'  >
                <div className='text-center mt-5'>
                    <h1 className='mb-5'>Product Management</h1>
                    <table className='text-center justify-content-center align-content-center' >
                        <thead>
                        <tr >
                            <th>No.</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Discount %</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Stocks</th>
                            <th colSpan='2'>Actions</th>
                        </tr>
                        </thead>
                        <tbody className='text-center justify-content-center align-content-center'>
                        {this.renderProductLists()}
                        </tbody>
                        <Modal size='lg' isOpen={this.state.openModal} toggle={()=> this.setState({ openModal: !this.state.openModal })} >
                            <ModalHeader>Stock Data</ModalHeader>
                            <ModalBody>
                            <table className='text-center'>
                                <tr>
                                <th style={{width: 500}}>Product</th>
                                <th style={{width: 150}}>Size 46</th>
                                <th style={{width: 150}}>Size 47</th>
                                <th style={{width: 150}}>Size 48</th>
                                <th style={{width: 150}}>Size 49</th>
                                <th style={{width: 150}}>Size 50</th>
                                <th colSpan='2' >Actions</th>
                                </tr>
                                <tbody>
                                    {this.renderStockData()}
                                </tbody>
                            </table>
                            </ModalBody>
                        </Modal>
                    </table>
                    <div style={{marginTop: '20px'}} >
                        {this.renderSuccessOrErrorMessage()}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AdminPage