/*jshint esversion: 6 */

import React from 'react';
import classes from '../styles/ProductPreview.module.css';


const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMin = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  
    return (
        <div className={classes.PdpImgBlock}>
            <img className={classes.PdpImage} src={props.currentWatchImage} alt="Watch selection" />

            {
                props.currentWatchFeaturePos === 1 ?
                <div className={classes.HeartRateSection}>
                    <i className="fas fa-heartbeat"></i>
                    <p>78</p>
                </div>
                :
                <div className={classes.TimeSection}>
                    <p>{`${currentHour}:${currentMin}`}</p>
                </div>
            }

        </div>
    );
}

export default ProductPreview;