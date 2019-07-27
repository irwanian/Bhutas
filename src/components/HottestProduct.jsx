import React from 'react'
import {GiAllSeeingEye} from 'react-icons/gi'
import {FaCartPlus} from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'


class HottestProduct extends React.Component{
    render(){
        return(
            <div >
                <div className='row justify-content-center'>
                    <h1 style={{fontWeight : '700'}}>HOTTEST PRODUCTS </h1> <img src='https://us.123rf.com/450wm/puruan/puruan1702/puruan170203772/72014139-icono-de-fuego-en-el-estilo-de-color-plano-llama-caliente-negocio-de-elementos.jpg?ver=6'
                    style={{width: '55px', paddingBottom: '50px'}} alt='hot product' className='img-fluid' />
                </div>
{/* ========================================== SINGLE CARD START ===================================================== */}

                <div className='row  justify-content-center' >
                    <div className='col-md-3 mr-5 mb-5'>
                        <div data-tip='peek' data-for='eye' className="circle text-uppercase">
                        <ReactTooltip id='eye' place='right'><span>Quick View</span></ReactTooltip>
                        <GiAllSeeingEye style={{fontWeight: 'bold'}} />
                    </div>
                    <div className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                        <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} />
                    </div>
                        <img src='https://media.giphy.com/media/tntfKAkzFmeu4/giphy.gif' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}} />
                </div>

{/* ========================================== SINGLE CARD END ===================================================== */}

                    <div className='col-md-3 mr-5 mb-5'>
                    <div data-tip='peek' data-for='eye' className="circle text-uppercase ">
                    <ReactTooltip id='eye' place='right'><span>Quick View</span></ReactTooltip>
                        <GiAllSeeingEye style={{fontWeight: 'bold'}} /></div>
                    <div className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                    <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} /></div>
                        <img src='https://media.giphy.com/media/tntfKAkzFmeu4/giphy.gif' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}} />
                    </div>
                    <div className='col-md-3 mr-5 mb-5'>
                    <div data-tip='peek' data-for='eye' className="circle text-uppercase">
                    <ReactTooltip id='eye' place='right'><span>Quick View</span></ReactTooltip>
                        <GiAllSeeingEye style={{fontWeight: 'bold'}} /></div>
                    <div className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                    <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} /></div>
                        <img src='https://media.giphy.com/media/tntfKAkzFmeu4/giphy.gif' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}} />
                    </div>
                    <div className='col-md-3 mr-5 mb-5'>
                    <div data-tip='peek' data-for='eye' className="circle text-uppercase">
                    <ReactTooltip id='eye' place='right'><span>Quick View</span></ReactTooltip>
                        <GiAllSeeingEye style={{fontWeight: 'bold'}} /></div>
                    <div className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                    <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} /></div>
                        <img src='https://media.giphy.com/media/tntfKAkzFmeu4/giphy.gif' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}} />
                    </div>
                    <div className='col-md-3 mr-5 mb-5'>
                    <div data-tip='peek' data-for='eye' className="circle text-uppercase">
                    <ReactTooltip id='eye' place='right'><span>Quick View</span></ReactTooltip>
                        <GiAllSeeingEye style={{fontWeight: 'bold'}} /></div>
                    <div className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                    <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} /></div>
                        <img src='https://media.giphy.com/media/tntfKAkzFmeu4/giphy.gif' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}} />
                    </div>
                    <div className='col-md-3 mr-5 mb-5'>
                    <div data-tip='peek' data-for='eye' className="circle text-uppercase">
                    <ReactTooltip id='eye' place='right'><span>Quick View</span></ReactTooltip>
                        <GiAllSeeingEye style={{fontWeight: 'bold'}} /></div>
                    <div className="circle2 text-uppercase" data-tip='cart' data-for='cart'>
                    <ReactTooltip id='cart'  place='right'><span>Add to Cart</span></ReactTooltip>
                        <FaCartPlus style={{fontWeight: 'bold'}} /></div>
                        <img src='https://media.giphy.com/media/tntfKAkzFmeu4/giphy.gif' alt='hothothot' style={{width : '250px', border : '0.5px solid grey'}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HottestProduct