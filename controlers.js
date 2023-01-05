App.controlers = {
    setHeader() {
        console.log("..[create static elements]")
        const els = App.elements 

        console.log(els.app)
        console.log("..[static elements created ]")

        els.app.style.height = "100%"
        els.app.style.width = "100%"

        const header = els.header

        logoleft = document.createElement("div")
        logoL = document.createElement("img")

        logoright = document.createElement("div")
        logoR = document.createElement("img")

        header.container.appendChild(logoleft)
        header.container.appendChild(logoright)
        els.app.appendChild(header.container)


      this.setStyle(header.container, {
        display: "flex",
        border: "1px solid black",
        height: "120px",
        width: "1440px",
        justifyContent: "space-between"
      })
      this.setStyle(logoleft, {
        display: "flex",
        border: "1px solid black",
        width: "100px",
      })
      this.setStyle(logoright, {
        display: "flex",
        border: "1px solid black",
        width: "100px",
      })
 },
 setStyle(el, style) {
    for (let key in style) {
        console.log("hey", key, style[key])
        el.style[key] = style[key]
    }
}
}