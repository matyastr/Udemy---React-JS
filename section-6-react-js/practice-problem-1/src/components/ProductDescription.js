/*jshint esversion: 6 */

import React from 'react';
import classes from '../styles/ProductDescription.module.css';
import ProductData from '../ProductData';


const ProductDescription = (props) => {
    const ColorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.WatchOption];
        
        if (pos === props.currentWatchImagePos) {
            classArr.push(classes.SelectedWatchOption);
        }
        
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} 
            onClick={() => props.onColorOptionClick(pos)} />
        );
    });

    const featureButtons = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureButton];
        
        if (pos === props.currentWatchFeaturePos) {
            classArr.push(classes.SelectedFeatureButton);
        }
        
        return (
            <button key={pos} onClick={() => props.onWatchItemClick(pos)} className={classArr.join(' ')} 
            type="button">{ProductData.featureList[pos]}</button>
        );
    });
    

    return (
        <div className={classes.PdpDescription}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDesc}>{props.data.description}</p>

            <h2>Select Color</h2>
            <div className={classes.WatchOptionsContainer}>
                {ColorOptions}
            </div>

            <h2>Features</h2>
            <div className={classes.FeaturesContainer}>
                {featureButtons}
            </div>

            <button className={classes.ATCButton} type="button">Add To Cart</button>
        </div>
    );
}

export default ProductDescription;