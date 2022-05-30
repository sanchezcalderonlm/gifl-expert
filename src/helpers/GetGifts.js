export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wT9EelAxo0U4nPZIwmDCtzO04023gios&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifts = data.map((d)=>{
        return{
            id:d.id,
            title:d.title,
            url:d.images.downsized_medium.url,
        }
    });
    return gifts;
}