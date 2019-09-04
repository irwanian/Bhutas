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
        selectCategory: 0
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
        console.log(e.target.files[0]);
        
        var file = e.target.files[0]
        
        if(file){
            this.setState({ imageFileName : file.name ,addimageFile : file})
            console.log(this.state.addImageFile)
        }else{
            this.setState({imageFileName : 'Select Product Image...', addimageFile : undefined})
        };
    }


    onBtnUploadClick = () => {
        var formData = new FormData()
                var headers ={
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }

        var productData = {
            productname: this.refs.productname.value,
            price: this.refs.price.value,
            description: this.refs.description.value,
            brand_id: this.state.selectBrand,
            category_id: this.state.selectCategory,
            image: this.state.addImageFile,
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
            console.log(res)
        })
        .catch((err)=> {
            console.log(err)
        })
        
        console.log(this.state.selectBrand, this.state.selectCategory)
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
                        <div className='mb-2'>
                            Product Name :
                        </div>
                         <input ref='productname' className='form-control' type='text' placeholder='Insert Product Name' /> 
                    </div>
                    <div className='mb-3 mt-3'>
                        <div className='mb-2'>
                            Product Price :
                        </div>
                         <input ref='price' className='form-control' type='number' defaultValue={0} /> 
                    </div>
                    <div className='mb-3'>
                        <div className='mb-2'>
                            Brands : 
                        </div>
                        {/* ======================RENDER BRAND OPTIONS HERE============================== */}
                         <select onChange={ this.onSelectBrandChange }>
                             {this.renderBrandSelection()}
                         </select>
                    </div>
                    <div className='mb-3'>
                        <div className='mb-2'>
                            Category : 
                        </div>

                        {/*==========================RENDER CATEGORY OPTIONS HERE============================ */}
                       <select onChange={ this.onSelectCategoryChange }>
                            {this.renderCategorySelection()} 
                       </select>
                    </div>
                    <div className='mb-3'>
                        <div>
                            Stock Availability :
                        </div>
                        <table className='table-stock mt-3'>
                            <tr className='text-center'>
                                <td>46</td>
                                <td>47</td>
                                <td>48</td>
                                <td>49</td>
                                <td>50</td>
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
                            Product Description :
                        </div>
                         <textarea ref='description' className='form-control' type='text' />
                    </div>
                    <div >
                        <p className='mb-xl-3'>IMAGE UPLOAD</p>
                        <CustomInput label={this.state.imageFileName} onChange={this.onUploadImageFile} className='mb-3' type='file'/>
                    </div>
                </form>
                <input onClick={this.onBtnUploadClick} style={{position: 'relative', left: '83%', marginBottom: '70px'}} type="button" className='btn btn-dark' value='ADD PRODUCT' />
            </div>
            </div>
        )
    }
}

export default ProductUpload