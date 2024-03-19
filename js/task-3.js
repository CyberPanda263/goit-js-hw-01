let content;
let padding;
let border;
function getElementWidth(content,padding,border) {
    let contentWidth = parseFloat(content);
    let paddingWidth = parseFloat(padding);
    let borderWidth = parseFloat(border);
    console.log(contentWidth + paddingWidth * 2 + borderWidth * 2);
}