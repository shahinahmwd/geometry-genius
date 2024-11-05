function calculateParallelogramArea() {
    // get parallelogram base value
    const parallelogramInput = document.getElementById('parallelogram-base');
    const parallelogramText = parallelogramInput.value;
    const base = parseFloat(parallelogramText);
    console.log(base);

    // get par height value
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);

    // calculate area
    const area = base * height;
    console.log('area of parallelogram is:', area);

    // display area
    const parallelogramSpan = document.getElementById('parallelogram-area');
    parallelogramSpan.innerText = area;
}