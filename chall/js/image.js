

function getRandomImage() {
    let imageId = Math.floor((Math.random() * 4));
    console.log("getRandomImage : ",imageId);
    return `img/image_${imageId}.jpg`;
}

function changedBackGroundImage(image) {
    console.log("image : ",image);
    document.body.style.background = `url('${image}')`;
}

function changedAutoImage() {
    changedBackGroundImage(getRandomImage());
}

function initImage() {
    setInterval(changedAutoImage,5000);
}


initImage();