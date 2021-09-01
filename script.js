(function(){
    setInterval(modifyImage, 1);

    let spacingEl = document.getElementById("spacing");
    let blurEl = document.getElementById("blur");
    let colorInput = document.getElementById("base-color");
    let sampleImage = document.getElementById("Sample-image");

    function modifyImage(){
        let spacingElVal = spacingEl.value + "px";
        let blurElVal = blurEl.value + "px";
        let colorVal = colorInput.value;

        sampleImage.style.setProperty("--padding", spacingElVal);
        sampleImage.style.setProperty("--blur", blurElVal);
        sampleImage.style.setProperty("--color", colorVal);    
    }

}());