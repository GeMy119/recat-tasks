import React, { Component } from 'react';
import Product from './product';
const newProduct = {
  "id": 11,
  "title": "Fog Scent Xpressio Perfume",
  "price": 13,
  "brand": "Fog Scent Xpressio",
  "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp"
}
export default class Home extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        price: 549,
        brand: "Apple",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      },
      {
        id: 2,
        title: "iPhone X",
        price: 899,
        brand: "Apple",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        brand: "Samsung",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg"
      },
      {
        id: 4,
        title: "OPPOF19",
        price: 280,
        brand: "OPPO",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      },
      {
        id: 5,
        title: "Huawei P30",
        price: 499,
        brand: "Huawei",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      },
      {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        brand: "Apple",
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png"
      },
      {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        brand: "Samsung",
        thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
      },
      {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        price: 1499,
        brand: "Microsoft Surface",
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
      },
      {
        id: 9,
        title: "Infinix INBOOK",
        price: 1099,
        brand: "Infinix",
        thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      },
      {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        price: 1099,
        brand: "HP Pavilion",
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      }
    ]
    }
    componentDidMount() {
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        this.setState({ products: JSON.parse(savedProducts) });
      }
    }
    componentDidUpdate() {
      localStorage.setItem('products', JSON.stringify(this.state.products));
    }
  increasePrice = (index)=>{
    let products = [...this.state.products]
    products[index].price +=100;
    this.setState({products:products})
  }
  deleteProduct = (index)=>{
    let products = [...this.state.products]
    products.splice(index, 1);
    this.setState({ products });
  }
  addNewProduct = () => {
    let products = [...this.state.products];
    const updatedProducts = [...products, newProduct];
    this.setState({ products: updatedProducts });
  }

  render() {
    return (
      
      <div className="container mt-5">
        <div className="row">
        <button className="btn btn-success w-25 mb-3" onClick={this.addNewProduct}>Add Product</button>
        </div> 
        <div className="row">
          {this.state.products.map((product,index) => 
            <Product key={index} productDetails={product} index = {index} increaseProductPrice={this.increasePrice} deleteProduct ={this.deleteProduct}/>
          )}
        </div>
        
      </div>
    );
  }
}
