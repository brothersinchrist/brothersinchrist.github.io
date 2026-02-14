const anchorElement = document.querySelector('.mog-blog-card-image > a');
let href = "";
if (anchorElement) {
    href = anchorElement.href;
}

const articleElement = document.querySelector('article.mog-blog-card');

if (articleElement && href) {
    articleElement.style.cursor = "pointer";
    articleElement.onclick = () => {
    window.location.href = href;
    };
    
    if (anchorElement) {
    anchorElement.style.pointerEvents = "none";
    anchorElement.style.cursor = "default";
    }
}