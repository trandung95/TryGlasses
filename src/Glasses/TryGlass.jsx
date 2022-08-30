import React, { Component } from 'react'
import { connect } from 'react-redux'

class TryGlass extends Component {
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

  renderGlassesList = () => {
    return this.dataGlasses.map((item, index) => {
      return <div className='col-2' key={index}>
        <div className='card my-2'>
          <img src={item.url} alt={index} className="w-100" />
          <button className='btn btn-success mt-3' onClick={() => { this.props.pickGlass(item) }}>Try this glass</button>
        </div>
      </div>
    })
  }
  render() {
    // console.log("props", this.props)
    return (
      <div className='row mt-5'>
        {this.renderGlassesList()}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    pickGlass: (glass) => {
      const action = {
        type: "PICK_GLASS",
        glass
      };
      dispatch(action)
    }
  }
}
export default connect(null, mapDispatchToProps)(TryGlass)