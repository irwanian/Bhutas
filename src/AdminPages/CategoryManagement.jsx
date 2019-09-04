import React from 'react';
import AdminSidePanel from './AdminSidePanel'
import Axios from 'axios'
import { API_URL } from '../Helpers/API_URL';

class CategoryManagement extends React.Component {
    state = {
        categoryLists : [],
        addCategoryName: '',
        editCategoryName: '',
        errorMessage: '',
        successMessage: '',
        selectedEditId: 0
    }
    
    componentDidMount () {
        Axios.get(API_URL + '/categories/allcategories')
        .then((res) => {
            this.setState({ categoryLists: res.data })
            console.log(this.state.categoryLists);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    onAddCategoryNameChange = (e) => {
        console.log(e.target.value);
        
        if(e.target.value.length <= 20){
            this.setState({addCategoryName: e.target.value})
        }
    }

    onEditCategoryNameChange = (e) => {
        console.log(e.target.value);
        
        if(e.target.value.length <= 20){
            this.setState({editCategoryName: e.target.value})
        }
    }

     onDeleteBtn = (id) =>{
        if(window.confirm('Are You Sure?')){
            
            Axios.delete(API_URL + '/categories/deletecategories/' + id)
            .then((res)=>{
                console.log(id);
                this.setState({categoryLists: res.data, errorMessage: '' ,successMessage: 'Data Successfully Deleted'})
                console.log(this.state.categoryLists)
            })
            .catch((err)=>{
                console.log(this.state.categoryLists)
                console.log('error disini1 ' + err);
            })
        }
    }

    onSaveEditButton = (id) => {
        var data = {
            categoryname: this.state.editCategoryName
        }

        Axios.put(API_URL + '/categories/editcategories/' + id, data)
        .then((res)=>{
                this.setState({ categoryLists : res.data })
            })
        .catch((err)=>{
            console.log(this.state.categoryLists)
            console.log('error disini2 ' + err);
        })
        this.setState({selectedEditId : 0 , successMessage: 'Data Successfully Edited', errorMessage: ''})
    }

    onBtnAddNewCategory = () => {
        if( this.state.addCategoryName === ''){
        this.setState({errorMessage: 'Data Must be Filled', successMessage: ''})
        }else{
            var data = { 
                categoryname: this.state.addCategoryName,
            }

                Axios.post(API_URL + '/categories/addcategories', data)
            .then((res)=>{
                this.setState({categoryLists : res.data})
                })
            .catch((err)=>{
                console.log(this.state.categoryLists)
                console.log('error disini3 ' + err);
            })
            this.setState({addCategoryName : '', successMessage: 'Data Successfully Added', errorMessage: ''})
        }   
    }

    renderCategoryList = () => {
        return this.state.categoryLists.map((val, index) => {
                if(this.state.selectedEditId !== val.id){
                    return (
                        <tr key={val.id}>
                            <td>{index + 1}</td>
                            <td>{val.categoryname}</td>
                            <td> <input type='button' onClick={()=> this.setState({selectedEditId: val.id})} style={{width: '70px'}} className='btn btn-info' value='Edit'/> </td>
                            <td> <input type='button' onClick={()=> this.onDeleteBtn(val.id, index)} style={{width: '70px'}} className='btn btn-danger' value='Delete'/> </td>
                        </tr>
                    )
                }else{
                    return (
                        <tr key={val.id}>
                                <td>{index + 1}</td>
                                <td><input type='text' value={this.state.editCategoryName} onChange={this.onEditCategoryNameChange} defaultValue={val.categoryname} /></td>
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
                    <h1 style={{marginTop: '80px'}} >CATEGORY MANAGEMENT</h1>
                    <table className='mt-xl-5 ml-5 table-brand text-center' >
                        <thead>
                            <td>No.</td>
                            <td>Category Name</td>
                            <td colSpan='2' >Actions</td>
                        </thead>
                        <tbody>
                            {this.renderCategoryList()}
                        </tbody>
                        <tfoot>
                            <td colSpan='2' ><input type='text' value={this.state.addCategoryName} onChange={this.onAddCategoryNameChange}
                              style={{border: 'none', outline: 'none'}} placeholder='Insert Category Name' /></td>
                            <td colSpan='2' ><input onClick={this.onBtnAddNewCategory} type='button' value='ADD +' className='btn btn-success' /></td>
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

export default CategoryManagement;
