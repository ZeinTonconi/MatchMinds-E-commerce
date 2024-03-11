import ServiceImage from "./ServiceImage";

export default class ProxyImage{
    constructor(){
        this.serviceImage = new ServiceImage();
        this.imageCache = {};
    }

    async getImage(imageUrl){
        if(!this.imageCache[imageUrl]){
            try{
                const imageDataUrl = await this.serviceImage.downloadImage(imageUrl)
                this.imageCache[imageUrl] = imageDataUrl
                return imageDataUrl 
            } catch (error) {
                console.error('Error getting image:', error);
                throw error
            }
        }
        else{
            return this.imageCache[imageUrl]
        }
    }

}