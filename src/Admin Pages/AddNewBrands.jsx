import React from 'react';
import { CustomInput } from 'reactstrap'
import AdminSidePanel from './AdminSidePanel'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL';

class AddNewBrand extends React.Component {
    state = {
        brandLists : [],
        addBrandName: '',
        editBrandName: '',
        brandLogoName: 'Select Brand Logo..',
        editBrandLogoName: 'Select Brand Logo..',
        addBrandLogo: undefined,
        editBrandLogo: undefined,
        errorMessage: '',
        successMessage: '',
        selectedEditId: 0
    }
    
    componentDidMount () {
        Axios.get(API_URL + '/brands/allbrands')
        .then((res) => {
            this.setState({brandLists: res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    onAddBrandNameChange = (e) => {
        console.log(e.target.value);
        
        if(e.target.value.length <= 20){
            this.setState({addBrandName: e.target.value})
        }
    }

    onEditBrandNameChange = (e) => {
        console.log(e.target.value);
        
        if(e.target.value.length <= 20){
            this.setState({editBrandName: e.target.value})
        }
    }

    onUploadBrandLogo = (e) => {
        console.log(e.target.files[0]);
        
        var file = e.target.files[0]
        
        if(file){
            this.setState({ brandLogoName : file.name ,addBrandLogo : file})
        }else{
            this.setState({brandLogoName : 'Select Image...', addBrandLogo : undefined})
        };
    }

    onEditImageFileChange = (e) => {
        if(e.target.files[0]) {
            this.setState({ editBrandLogoName: e.target.files[0].name, editBrandLogo: e.target.files[0]})
        }
        else {
            this.setState({ editBrandLogoName: 'Select Image...', editBrandLogo: undefined })
        }
    }

    onDeleteBtn = (id) =>{
        if(window.confirm('Are You Sure?')){
            
            Axios.delete(API_URL + '/brands/deletebrands/' + id)
            .then((res)=>{
                console.log(id);
                this.setState({brandLists: res.data, errorMessage: '' ,successMessage: 'Data Successfully Deleted'})
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    onSaveEditButton = (id) => {
        var formData = new FormData()
                var headers ={
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                var data = { 
                    brandname: this.state.editBrandName,
                }

                formData.append('image', this.state.editBrandLogo)
                formData.append('data', JSON.stringify(data))

                Axios.put(API_URL + '/brands/editbrands/' + id, formData, headers)
                .then((res)=>{
                        this.setState({brandLists : res.data})
                    })
                .catch((err)=>{
                    console.log(err);
                })
                this.setState({brandLogoName : 'Select Brand Logo..',selectedEditId : 0 , successMessage: 'Data Successfully Edited', errorMessage: ''})
    }

    onBtnAddNewBrand = () => {
        var {addBrandName, addBrandLogo} = this.state
        if(!addBrandLogo || addBrandName === ''){
        this.setState({errorMessage: 'All data Must be Filled', successMessage: ''})
        }else{
            var formData = new FormData()
                var headers ={
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                var data = { 
                    brandname: this.state.addBrandName,
                }

                formData.append('image', this.state.addBrandLogo)
                formData.append('data', JSON.stringify(data))

                Axios.post(API_URL + '/brands/addbrands', formData, headers)
                .then((res)=>{
                        this.setState({brandLists : res.data})
                    })
                .catch((err)=>{
                    console.log(err);
                })
                this.setState({brandLogoName : 'Select Brand Logo..', addBrandName : '', successMessage: 'Data Successfully Added', errorMessage: ''})
        }   
    }

    renderBrandList = () => {
        return this.state.brandLists.map((val, index) => {
            if(this.state.selectedEditId !== val.id){
                return (
                    <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td><img src={API_URL + val.image} alt={val.brandname} width={80} /> </td>
                        <td>{val.brandname}</td>
                        <td> <input type='button' onClick={()=> this.setState({selectedEditId: val.id})} style={{width: '70px'}} className='btn btn-info' value='Edit'/> </td>
                        <td> <input type='button' onClick={()=> this.onDeleteBtn(val.id, index)} style={{width: '70px'}} className='btn btn-danger' value='Delete'/> </td>
                    </tr>
                )
            }else{
                return (
                    <tr key={val.id}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={API_URL + val.image} alt={val.brandname} width={80} />
                                <CustomInput label={this.state.editBrandLogoName} onChange={this.onEditImageFileChange}   type='file' />
                             </td>
                            <td><input type='text' value={this.state.EditBrandName} onChange={this.onEditBrandNameChange} defaultValue={val.brandname} /></td>
                            <td> <input onClick={()=> this.setState({selectedEditId: 0})} type='button' style={{width: '70px'}} className='btn btn-danger' value='Cancel'/> </td>
                            <td> <input type='button' onClick={()=> this.onSaveEditButton(val.id)} style={{width: '70px'}} className='btn btn-success' value='Save'/> </td>
                        </tr>
                )
            }
        })
            
    }

    render () {
        return (
            <div className='row' >
                <AdminSidePanel  />
                <center>
                    <h1 style={{marginTop: '80px'}} >BRAND MANAGEMENT</h1>
                    <table className='mt-xl-5 ml-5 table-brand text-center' >
                        <thead>
                            <td>No.</td>
                            <td>Brand Logo</td>
                            <td>Brand Name</td>
                            <td colSpan='2' >Actions</td>
                        </thead>
                        <tbody>
                            {this.renderBrandList()}
                        </tbody>
                        <tfoot>
                            <td colSpan='2'> <CustomInput label={this.state.brandLogoName} onChange={this.onUploadBrandLogo}   type='file' /> </td>
                            <td><input type='text' value={this.state.addBrandName} onChange={this.onAddBrandNameChange} placeholder='Insert Brand Name' /></td>
                            <td colspan='2' ><input onClick={this.onBtnAddNewBrand} type='button' value='ADD +' className='btn btn-success' /></td>
                        </tfoot>
                    </table>

                    {/* =======================RENDERING ERROR OR SUCCESS MESSAGE=============================== */}
                    {
                        this.state.successMessage === '' ? null :
                        <div style={{width:'500px'}} className='mt-4 alert alert-success'>{this.state.successMessage}</div>
                    }

                    { this.state.errorMessage === '' ? null :
                        <div style={{width: '500px'}} className='mt-4 alert alert-danger'>{this.state.errorMessage}</div>
                    }
                </center>
            </div>
        )
    }
}

export default AddNewBrand;
