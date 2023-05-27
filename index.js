const btn = document.getElementById('btn')
const colorSchemes = document.getElementById('color-schemes')
const displayColors = document.getElementById('display-colors')

function fetchDataAndDisplayColors() {
    const selectedScheme = colorSchemes.value
    const hexColor = document.querySelector('input[type="color"]').value.substring(1); // Remove the '#' from the hex color value
    console.log(hexColor.toUpperCase())
    let url = `https://www.thecolorapi.com/scheme?hex=${hexColor.toUpperCase()}&mode=${selectedScheme}&count=6`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors;
            const colorValues = colors.map(color => color.hex.value);
            const colorImages = colors.map(color => color.image.bare);

            const colorElements = colors.map((color, index) => {
                return `
          <div>
            <img id="img" src="${colorImages[index]}" alt="Color ${index + 1}">
            <span>${colorValues[index]}</span>
          </div>
        `;
            });

            displayColors.innerHTML = colorElements.join('');
        })
}

fetchDataAndDisplayColors(); // Call the function to fetch data and display colors initially

btn.addEventListener('click', function (e) {
    e.preventDefault()
    fetchDataAndDisplayColors();
});
