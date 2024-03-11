import ProxyImage from "./ProxyImage";


export default async function HandlerImage(imageUrl, setImageDataUrl){
    console.log("Handler")
    const proxyImage = new ProxyImage();
    try {
      const dataUrl = await proxyImage.getImage(imageUrl);
      console.log({dataUrl})
      setImageDataUrl(dataUrl);
    } catch (error) {
      console.error('Error loading image:', error);
    }
}