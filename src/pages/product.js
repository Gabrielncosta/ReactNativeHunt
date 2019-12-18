import React, { Component } from 'react';

import { WebView } from 'react-native-webview';
import { requireNativeComponent, UIManager } from 'react-native';


 const Product = ({ navigation }) => (
  <WebView source={{ url: navigation.state.params.product.url}} />
);

/* class Product extends Component {
  render() {
    return (
      <WebView source={{ url: navigationOptions.navigation.state.params.product.url }} />
    );
  }
} */

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title
});

export default Product;

