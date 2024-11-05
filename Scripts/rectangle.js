function rectangleCalculateArea() {
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleText = rectangleWidthInput.value;
    const width = parseFloat(rectangleText);
    console.log(width);

    // get rectangle leant value
    const rectangleLeantInput = document.getElementById('rectangle-leant');
    const rectangleLeantText = rectangleLeantInput.value;
    const leant = parseFloat(rectangleLeantText);
    console.log(leant);

    // calculate rectangle area
    const area = width * leant;
    console.log('area of the rectangle is:', area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}
