import React, { Component } from 'react'

export default class Main extends Component {
    state = {
        imgSrc: './glassesImage/v1.png',
        glassName: 'GUCCI G8850U',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
        price: 30
    }
    dataGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "urlg": "./glassesImage/g1.jpg",
            "desc": "Light pink square lenses define these sunglasses "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "urlg": "./glassesImage/g2.jpg",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "urlg": "./glassesImage/g3.jpg",
            "desc": " ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "urlg": "./glassesImage/g4.jpg",
            "desc": "Light pink square lenses define amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "urlg": "./glassesImage/g5.jpg",
            "desc": "Light pink enses define these sunglasses, ending with amother  "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "urlg": "./glassesImage/g6.jpg",
            "desc": "Light pink square lenses , ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "urlg": "./glassesImage/g7.jpg",
            "desc": "Light pink square lenses define these sunglasses,  of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "urlg": "./glassesImage/g8.jpg",
            "desc": " lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "urlg": "./glassesImage/g9.jpg",
            "desc": "Light pink square lenses  ending with amother of pearl effect tip. "
        }
    ]
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
        let indexGlass = this.dataGlasses.findIndex(ele => ele.id == glass);
        // console.log('url=> ', this.dataGlasses[indexGlass].url);
        this.setState({
            imgSrc: this.dataGlasses[indexGlass].url,
            glassName: this.dataGlasses[indexGlass].name,
            desc: this.dataGlasses[indexGlass].desc,
            price: this.dataGlasses[indexGlass].price
        })
    }
    render() {

        return (
            <div style={{ background: 'url(./glassesImage/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <h2 className='text-light bg-dark text-center py-4'>TRY GLASSES APP ONLINE</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-0" >
                            <img className='w-100' src="./glassesImage/model.jpg" alt="..." style={{ position: 'relative' }} />
                            <img className='w-50' src={this.state.imgSrc} alt="..." style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-175%)' }} />
                            <div className="info pl-4 font-weight-bold bg-warning text-white w-100" style={{position: 'absolute', bottom: 0, left: 0 }}>
                                <p style={{fontSize:'25px'}}>Product name: {this.state.glassName}</p>
                                <p>Price: {this.state.price}</p>
                                <p>Description: {this.state.desc}</p>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                            <img className='w-100' src="./glassesImage/model.jpg" alt="..." />
                        </div>
                    </div>
                    <div className="row mt-5">
                        {this.renderMap()}
                    </div>
                </div>
            </div>
        )
    }
}
