import React from 'react';
const weatherIcons = importAllImagesHelper(require.context('../../assets/weatherIcons', false, /\.(png|jpe?g|svg)$/));

const weatherIcon = props => {
 return(
    <img src={weatherIcons[`${props.icon}.svg`]} alt={props.icon}/>
 );   
}

/**
 * Since there are a lot of icons in the weatherIcons assets folder.
 * This helper function sets all the images in an object while dynamically
 * importing them into webpack
 * See {@link https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack|stackoverflow}
 * post for more information,
 * 
 */
function importAllImagesHelper(images) {
    let newImagesObj = {};
    images.keys().forEach((item) => {newImagesObj[item.replace("./", "")] = images(item)});
    return newImagesObj;
}

export default weatherIcon;