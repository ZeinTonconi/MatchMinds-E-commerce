

export default class ServiceImage {

    async downloadImage(imageUrl){
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } catch (error) {
            console.error('Error downloading image:', error);
            throw error;
        }
    }
}
