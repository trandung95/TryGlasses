import React, { Component } from 'react'
import { connect } from 'react-redux'
import TryGlass from './TryGlass'

class Main extends Component {
    renderMap = () => {
        return this.dataGlasses.map((item, index) => {
            return <div className="col-2" key={index}>
                <div className="card my-2">
                    <img src={item.url} alt={index} className="w-100" />
                    <button className='btn btn-success mt-3' onClick={() => {
                        this.handleGlasses(item.id)
                    }}>Try this glass</button>
                </div>
            </div>
        })
    }
    handleGlasses = (glass) => {
        let indexGlass = this.dataGlasses.findIndex(ele => ele.id === glass);
        // console.log('url=> ', this.dataGlasses[indexGlass].url);
        this.setState({
            imgSrc: this.dataGlasses[indexGlass].url,
            glassName: this.dataGlasses[indexGlass].name,
            desc: this.dataGlasses[indexGlass].desc,
            price: this.dataGlasses[indexGlass].price
        })
    }
    render() {
        // console.log("props main", this.props)
        return (
            <div style={{ background: 'url(./glassesImage/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <h2 className='text-light bg-dark text-center py-4'>TRY GLASSES APP ONLINE</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-0" >
                            <img className='w-100' src="./glassesImage/model.jpg" alt="..." style={{ position: 'relative' }} />
                            <img className='w-50' src={this.props.glasses.url} alt="..." style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-175%)' }} />
                            <div className="info pl-4 font-weight-bold bg-warning text-white w-100" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                                <p style={{ fontSize: '25px' }}>Product name: {this.props.glasses.glassName}</p>
                                <p>Price: {this.props.glasses.price}</p>
                                <p>Description: {this.props.glasses.desc}</p>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                            <img className='w-100' src="./glassesImage/model.jpg" alt="..." />
                        </div>
                    </div>
                    <div className="row mt-5">
                        {/* {this.renderMap()} */}
                        <TryGlass />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        glasses: rootReducer.appTryGlassesReducers
    }
}
export default connect(mapStateToProps)(Main)