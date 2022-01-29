import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialData } from './socialData';
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            cartOpen: false,
            links: linkData,
            socialIcons: socialData,
            cart: [],
            cartItems: 10,
            cartSubTotal: 0,
            cartText: 0,
            cartTotal: 0,
            storeProducts: [],
            filteredProducts: [],
            featuredProducts: [],
            singleProduct: {},
            loading: false,

        }
    }


    handleSidebar = () => this.setState({ sidebarOpen: !this.state.sidebarOpen });
    handleCart = () => this.setState({ cartOpen: !this.state.cartOpen });

    closeCart = () => this.setState({ cartOpen: false });
    openCart = () => this.setState({ cartOpen: true });
    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = { id, ...item.fields,image };
            return product;
        });
        // featuredProducts
        let featuredProducts = storeProducts.filter(item => item.featured === true);
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,
        });
    }
    getStorageCart = () => {
        return [];
    }
    getStorageProduct = () => {
        return [];
    }
    getTotals = () => {

    }

    addTotal = () => {

    }
    syncStorage = () => {

    }

    addToCart = (id) => {
        console.log(`add to cart ${id}`);
    }

    setProduct = (id) => {
        console.log(`set Product ${id}`);
    }
    componentDidMount() {
        this.setProducts(items);
    }
    render() {
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    closeCart: this.closeCart,
                    openCart: this.openCart,
                    addToCart: this.addToCart,
                    setProduct: this.setProduct,
                }
            }>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };