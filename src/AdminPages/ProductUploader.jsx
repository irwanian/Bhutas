import React, { Component } from 'react'
import { CustomInput } from 'reactstrap'
import Axios from 'axios'
import SidePanel from './AdminSidePanel';
import { API_URL } from '../Helpers/API_URL'

class ProductUpload extends Component {
    state = {
        brandLists: [],
        categoryLists: [],
        imageFileName: 'Select Product Image...',
        addImageFile: undefined,
        selectBrand: 0,
        selectCategory: 0,
        errorMessage: '',
        successMessage: '',
        description : '',
        productName: '',
        loading: false
    }
    

    componentDidMount = () => {
        Axios.get(API_URL + '/brands/allbrands')
        .then((res)=> {
            this.setState({ brandLists: res.data })
        })
        .catch((err)=>{
            console.log(err);
        })
        Axios.get(API_URL + '/categories/allcategories')
        .then((res)=> {
            this.setState({ categoryLists: res.data })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    onSelectBrandChange = (e) => {
        const brand = e.target.value
        console.log(brand)
        if(brand){
            this.setState({ selectBrand: brand })
        }
    }

    onSelectCategoryChange = (e) => {
        const category = e.target.value
        console.log(category);
        if(category){
            this.setState({ selectCategory: category })
        }       
    }

    onProductNameChanges = (e) => {
        if(e.target.value.length <= 40){
            this.setState({ productName: e.target.value.toLowerCase()})
        }
    }

    onDescriptionChanges = (e) => {
        if(e.target.value.length <= 400){
            this.setState({ description: e.target.value.toLowerCase()})
        }
    }

    renderBrandSelection = () => {
        return this.state.brandLists.map((val)=>{
            return (
                <option key={val.id} value={val.id} >
                    {val.brandname.toUpperCase()}
                </option>
            )
        })
    }

    renderCategorySelection = () => {
        return this.state.categoryLists.map((val)=> {
            return(
                <option key={val.id} value={val.id}>
                    {val.categoryname.toUpperCase()}
                </option>
            )
        })
    }

    onUploadImageFile = (e) => {
        const file = e.target.files[0]
        console.log(file)
        if(file){
            this.setState({ addImageFile: file, imageFileName: file.name})
        }else{
            this.setState({ addImageFile: undefined,imageFileName: 'Select Product Image...'})
        }
    }


    onBtnUploadClick = () => {
        const { productName, description, selectBrand, selectCategory } = this.state
        if(productName === '' || description === '' || selectBrand === 0 || selectCategory === 0){
            this.setState({ errorMessage: 'All Data Must be Filled!'})
        }
        var formData = new FormData()
                var headers ={
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }

        var productData = {
            productname: this.state.productName.toString(),
            price: Number(this.refs.price.value),
            description: this.state.description,
            brand_id: this.state.selectBrand,
            category_id: this.state.selectCategory,
            size46: Number(this.refs.size46.value),
            size47: Number(this.refs.size47.value),
            size48: Number(this.refs.size48.value),
            size49: Number(this.refs.size49.value),
            size50: Number(this.refs.size50.value) 
        }

        formData.append('image', this.state.addImageFile)
        formData.append('data', JSON.stringify(productData))

        Axios.post(API_URL + '/products/addproduct', formData, headers )
        .then((res)=> {
            console.log('add data success');
            console.log(res)
            this.setState({ errorMessage: '', successMessage: 'Data SUccessfully Added'})
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    render(){
        return(
           <div className='bg-light row'>
                    <SidePanel  />   
            <div className='container' style={{paddingTop : '80px'}}>
                <h1 className='text-center'>ADD NEW PRODUCT</h1>
                <form className='container mt-5' style={{
                    border : '0.02px grey solid',
                    borderCollapse: 'collapse',
                    width : '1000px',
                    backgroundColor: 'light-grey',
                    marginBottom:30
                }}>
                    <div className='mb-3 mt-3'>
                        <div className='ml-2 mr-2 mb-2 row justify-content-between'>
                            Product Name : <span style={{color: 'red'}}>* Required</span>
                        </div>
                         <input onChange={this.onProductNameChanges} className='form-control' style={{ paddingLeft: 10 }} type='text' placeholder='Insert Product Name' /> 
                    </div>
                    <div className='mb-3'>
                        <div className='ml-2 mr-2 mb-2 row justify-content-between'>
                            Product Price : <span style={{color: 'red'}}>* Required</span>
                        </div>
                         <input ref='price' className='form-control' type='number' defaultValue={0} /> 
                    </div>
                    <div className='mt-3'>
                        <div className='ml-3 mr-2 mb-2 row justify-content-between'>
                            Brands : <span style={{color: 'red'}}>* Required</span>
                        </div>
                        {/* ======================RENDER BRAND OPTIONS HERE============================== */}
                         <select onChange={ this.onSelectBrandChange }>
                         <option value={0}>BRAND</option>
                             {this.renderBrandSelection()}
                         </select>
                    </div>
                    <div className='mb-3 mt-4'>
                        <div className='ml-2 mr-2 mb-2 row justify-content-between'>
                            Category : <span style={{color: 'red'}}>* Required</span>
                        </div>

                        {/*==========================RENDER CATEGORY OPTIONS HERE============================ */}
                       <select onChange={ this.onSelectCategoryChange }>
                           <option value={0}>CATEGORY</option>
                            {this.renderCategorySelection()} 
                       </select>
                    </div>
                    <div className='mt-5'>
                        <div className='ml-2 mr-2 mb-2 row justify-content-between'>
                            Stock Availability : <span style={{color: 'red'}}>* Required</span>
                        </div>
                        <table className='table-stock mt-3'>
                            <tr className='text-center'>
                                <td>SIZE 46</td>
                                <td>SIZE 47</td>
                                <td>SIZE 48</td>
                                <td>SIZE 49</td>
                                <td>SIZE 50</td>
                            </tr>
                                <tr>
                                    <td> <input style={{outline: 'none', border: 'none', width: 60, textAlign: 'center'}}
                                     type='number' ref='size46' placeholder='stocks'/> </td>
                                    <td> <input style={{outline: 'none', border: 'none', width: 60, textAlign: 'center'}}
                                     type='number' ref='size47' placeholder='stocks'/> </td>
                                    <td> <input style={{outline: 'none', border: 'none', width: 60, textAlign: 'center'}}
                                     type='number' ref='size48' placeholder='stocks'/> </td>
                                    <td> <input style={{outline: 'none', border: 'none', width: 60, textAlign: 'center'}}
                                     type='number' ref='size49' placeholder='stocks'/> </td>
                                    <td> <input style={{outline: 'none', border: 'none', width: 60, textAlign: 'center'}}
                                     type='number' ref='size50' placeholder='stocks'/> </td> 
                                </tr>
                        </table>
                    </div>
                    <div className='mb-3 mt-3'>
                        <div className='mb-3'>
                            Product Description :5
                        </div>
                         <textarea onChange={this.onDescriptionChanges} className='form-control' type='text' />
                    </div>
                    <div className='ml-2 mr-2 mb-2 row justify-content-between'>
                        <p className='mb-xl-3'>IMAGE UPLOAD</p> <span style={{color: 'red'}}>* Required</span>
                        <CustomInput id={1} label={this.state.imageFileName} onChange={this.onUploadImageFile} className='mb-3' type='file'/>
                    </div>
                </form>
                {this.state.errorMessage !== '' ?
                 <div className='alert alert-danger'> {this.state.errorMessage} </div> : null
                }

                {
                    this.state.successMessage === '' ? null :
                 <div className='alert alert-success'> {this.state.successMessage} </div>                    
                }
                <input onClick={this.onBtnUploadClick} style={{position: 'relative', left: '83%', marginBottom: '70px'}} type="button" className='btn btn-dark' value='ADD PRODUCT' />
            </div>
            </div>
        )
    }
}

export default ProductUpload