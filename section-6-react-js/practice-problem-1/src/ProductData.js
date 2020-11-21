const ProductData = {
    title: 'FitBit 20 - The Smartest Watch',
    description: 'From steps and distance to calories burned and active minutes, see your daily progress each day and over time.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
};

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;