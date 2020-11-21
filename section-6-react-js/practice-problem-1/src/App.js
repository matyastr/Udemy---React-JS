/*jshint esversion: 6 */

import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './components/ProductPreview';
import ProductDescription from './components/ProductDescription';
import AppHeader from './components/AppHeader';
import ProductData from './ProductData';


class App extends Component{
  state = {
    productData: ProductData,
    currentWatchImagePos: 0,
    currentWatchFeaturePos: 0
  }

  onColorOptionClick = (pos) => {
    this.setState({currentWatchImagePos: pos});
  }

  onWatchItemClick = (pos) => {
    this.setState({currentWatchFeaturePos: pos});
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentWatchFeaturePos !== this.state.currentWatchImagePos;
  }

  render() {
    return (
      <div className={classes.App}>
        <AppHeader />

        <section className={classes.PdpContainer}>
          <ProductPreview 
          currentWatchImage={this.state.productData.colorOptions[this.state.currentWatchImagePos].imageUrl} 
          currentWatchFeaturePos={this.state.currentWatchFeaturePos} />

          <ProductDescription 
          data={this.state.productData} 
          onColorOptionClick={this.onColorOptionClick}
          currentWatchImagePos={this.state.currentWatchImagePos} 
          onWatchItemClick={this.onWatchItemClick}
          currentWatchFeaturePos={this.state.currentWatchFeaturePos} />

        </section>
      </div>
    )
  }
}

export default App;





