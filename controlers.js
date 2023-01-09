App.controlers = {
    setHeader() {
        console.log("..[create static elements]")
        const els = App.elements 

        console.log(els.app)

        const header = els.header

        //logo L //
        logoleft = document.createElement("div")
        logoL = document.createElement("img")

        logoL.src = "./imgvanilla/Bakery.png"
        logoL.style.width = "76.06px"
        logoL.style.height = "50px"
        logoL.style.margin = "35px 0 35px 48px"
        logoL.style.position = "absolute"
        
        //logo R //
        logoright = document.createElement("div")
        logoR = document.createElement("img")

        logoR.src = "./imgvanilla/Cart.png"
        logoR.style.width = "36px"
        logoR.style.height = "36px"
        logoR.style.margin = "42px 53px 42px 135px"
        logoR.style.position = "absolute"

        header.container.appendChild(logoleft)
        logoleft.appendChild(logoL)
        header.container.appendChild(logoright)
        logoright.appendChild(logoR)
        els.app.appendChild(header.container)


      this.setStyle(header.container, {
        display: "flex",
        height: "120px",
        width: "100%",
        justifyContent: "space-between",
        position: "fixed",
        backgroundColor: "rgba(102, 102, 102, 0.3)",
      })
      this.setStyle(logoleft, {
        display: "flex",
        width: "200px",
      })
      this.setStyle(logoright, {
        display: "flex",
        width: "200px",
      })
    },
    setBody() {
      const els = App.elements

      const mainbody = els.mainbody
      //bigimage//
      bigimage = document.createElement("img")

      bigimage.src = "./imgvanilla/BackGroundBread.png"

      mainbody.container.appendChild(bigimage)
      //bodyproductstitle//

      mainbody.container.appendChild(bigimage)
      els.app.appendChild(mainbody.container)

      this.setStyle(bigimage, {
        width: "100%",
        top: "0",
        position: "fixed",
        zIndex: "-1",
      })
    },

    setFooter() {
      const els = App.elements
      
      const footer = els.footer

      footer = document.createElement("div")
      footerlogo = document.createElement("img")

      footerlogo.src = "./imgvanilla/Bakery.png"

      footer.appendChild(footerlogo)
      els.app.appendChild(ontainer)

      this.setStyle(footer, {
        display:"flex",
        backgroundColor: "green",
        justifyContent: "center",
        width: "100%",
        height: "250px",
        left: "0px",
        top: "1665px",
        margin: "500px 0 30px 0"
      })
      this.setStyle(footerlogo, {
        display: "flex",
        width: "76.06px",
        height: "50px",
        margin: "100px 682px 100px 682px",
      })
    },

    layout() {
      const els = App.elements

      this.setHeader
      this.setBody
      this.setFooter


    },

 setStyle(el, style) {
    for (let key in style) {
        console.log("hey", key, style[key])
        el.style[key] = style[key]
    }
}
}