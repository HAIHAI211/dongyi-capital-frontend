/**
 * Judge whether the browser is compatible with the image of webp format
 */

const checkWebP = async () => {
    //Using the method of loading webp on iPhone, iPad and MAC Safari
    const uaStr = window.navigator.userAgent.toLowerCase();
    if (// Safari 14 supports webp format, but image / PNG is still used in dataurl
        uaStr.includes(`iphone`) ||
        uaStr.includes(`ipad`) ||
        (uaStr.includes(`macintosh`) && uaStr.includes(`version/`))
    ) {
        return await _checkLoadWebP();
    }
    return _checkCanvasWebP(); // faster
};

/**
 * support Chrome,Firefox
 * Safari 14 supports webp format, but image / PNG is still used in dataurl
 */
const _checkCanvasWebP = () => {
    const ele = document.createElement("canvas");
    if (ele && typeof ele.toDataURL === "function") {
        const dataUrl = ele.toDataURL("image/webp") || "";
        return dataUrl.indexOf("data:image/webp") === 0;
    }
    return false;
};

const _checkLoadWebP = () => {
    return new Promise < Boolean > ((resolve, reject) => {
        var img = new Image();
        let isSupportWebp = false;
        img.onload = () => {
            isSupportWebp = !!(img.height > 0 && img.width > 0);
            resolve(isSupportWebp);
        };
        img.onerror = () => {
            isSupportWebp = false;
            resolve(isSupportWebp);
        };
        img.src = `data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=`;
    });
};



export default async ({ app, store }) => {

    const webp = await checkWebP()
    app.$config.webp = webp
    // document.body.classList.add(webp ? 'webp' : 'nowebp')
    document.body.classList.replace('webp-nocheck', webp ? 'webp' : 'nowebp')
    console.log('webp', webp)

}


