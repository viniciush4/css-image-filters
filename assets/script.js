    
    var filters = {}

    function blurFilter() {
        let value = document.getElementById("input-blur").value
        filters.blur = `blur(${value}px)`
        apply()
    }

    function brightnessFilter() {
        let value = document.getElementById("input-brightness").value
        filters.brightness = `brightness(${value}%)`
        apply()
    }

    function contrastFilter() {
        let value = document.getElementById("input-contrast").value
        filters.contrast = `contrast(${value}%)`
        apply()
    }

    function grayscaleFilter() {
        let value = document.getElementById("input-grayscale").value
        filters.grayscale = `grayscale(${value}%)`
        apply()
    }

    function invertFilter() {
        let value = document.getElementById("input-invert").value
        filters.invert = `invert(${value}%)`
        apply()
    }

    function opacityFilter() {
        let value = document.getElementById("input-opacity").value
        filters.opacity = `opacity(${value}%)`
        apply()
    }

    function saturateFilter() {
        let value = document.getElementById("input-saturate").value
        filters.saturate = `saturate(${value}%)`
        apply()
    }

    function sepiaFilter() {
        let value = document.getElementById("input-sepia").value
        filters.sepia = `sepia(${value}%)`
        apply()
    }

    function hueRotateFilter() {
        let value = document.getElementById("input-hue-rotate").value
        filters.hueRotate = `hue-rotate(${value}deg)`
        apply()
    }

    function dropShadowFilter() {
        let valueX = document.getElementById("input-drop-shadow-x").value
        let valueY = document.getElementById("input-drop-shadow-y").value
        let valueR = document.getElementById("input-drop-shadow-r").value
        let valueC = document.getElementById("input-drop-shadow-c").value
        filters.dropShadow = `drop-shadow(${valueX}px ${valueY}px ${valueR}px ${valueC})`
        apply()
    }

    function apply() {
        
        let img = document.getElementById("img")
        let filtersString = ''
        for (e in filters) {
            filtersString += ` ${filters[e]}`
        }
        Object.assign(document.querySelector('#img').style, {
            filter: filtersString
        })
    }