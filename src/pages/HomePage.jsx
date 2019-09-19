import React from 'react'
import JumbotronSlider from '../components/JumbotronSlider';
import FooterPage from '../components/footer';
import NewArrivals from '../components/SliderNewArrivals';
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import Axios from 'axios';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { API_URL } from '../Helpers/API_URL';



class HomePage extends React.Component{
    state = {
        products: [],
        totalPages: 0,
        pages: 0,
        currPage: 1
    }

    componentDidMount(){
        const page = this.props.location.search.split('=')[1] ? this.props.location.search.split('=')[1] : 1 
        console.log(page)
        Axios.get(API_URL + '/products/allproducts?page=' + page)
        .then((res)=> {
            console.log(res)
            this.setState({ products: res.data.dataProduct, totalPages: res.data.totalPages, pages: res.data.pages  })
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    renderPagination = () => {
        let totalButton = []
        let listData = this.state.totalPages
        let totalPages = Math.ceil(listData / 6)
        for(var i = 1; i <= totalPages; i++){
            totalButton.push(<PaginationItem className='mr-2'>
                                <PaginationLink href={'/?page=' + (i)}>
                                    {i}
                                </PaginationLink>
                            </PaginationItem>)
                            console.log(i)
        }
        console.log(totalPages)
        console.log(totalButton)
        return totalButton
    }

    renderAllProducts = () => {
        return this.state.products.map((val, index) => {
                return (
                <div key={index} className="card" style={{marginTop: '40px', marginRight: 20}}>
                    <Link style={{textDecoration: 'none'}}  to={'/detail/' + val.product_id}>
                        
                        {val.discount > 0 ? 
                        <span style={{fontWeight: 600, width: '100px',color: 'white', height: '30px',position: 'absolute',
                         right: 30, backgroundColor: 'red', padding: 5}}>{val.discount + ' % OFF'}</span> : null}
                        <img src={API_URL + val.picture} alt={val.productname} style={{width: "100%" , height: '240px'}} />
                        <h3>{val.productname.toUpperCase()}</h3>
                        <div>
                            <strike className="price">{val.discount === 0 ? <br/> :
                             'Rp. ' + numeral(val.price).format(0,0)}</strike>
                        </div>
                        <div>
                            <p className='final-price'>{val.discount === 0 ? 'Rp. ' + numeral(val.price).format(0,0):
                            'Rp. ' + numeral(val.price - ( val.price * (val.discount / 100))).format(0,0)}</p>
                        </div>
                    </Link>
                </div>
                )
            })
}

    render(){
        

        return(
            <div className='bg-light' >
                <div >
                    <JumbotronSlider />
                </div>
                <div style={{paddingLeft: 70}} className ='container text-center bg-white'>
                    <NewArrivals  />
                    <div className='row d-flex justify-content-center' >
                        {this.renderAllProducts()}
                    </div>
                    <Pagination
                    className='mt-4' aria-label="Page navigation example">
                                    {this.renderPagination()}
                    </Pagination>
                </div>
                <div className='pt-3'>
                    <FooterPage   />
                </div>
            </div>
        )
    }
}

export default HomePage