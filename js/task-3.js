function getElementWidth(content,padding,border) {
    let contentWidth = parseFloat(content);
    let paddingWidth = parseFloat(padding);
    let borderWidth = parseFloat(border);
    return contentWidth + paddingWidth * 2 + borderWidth * 2;
}