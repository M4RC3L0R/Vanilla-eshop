App.controllers = {
    setHeader() {
      const els = App.elements 

      console.log(els.app)

      const header = els.header

      header.container = document.createElement("div")
      Bakelogo = document.createElement("img")
      Cartlogo = document.createElement("img")

      header.Bakelogo.src = "./imgvanilla/Bakery.png"
    
      header.Cartlogo.src = "./imgvanilla/Cart.png"
      header.Cartlogo.onclick = () => {
        console.log("clicked here")
      }
    
      header.container.appendChild(header.Bakelogo)
      header.container.appendChild(header.Cartlogo)
      els.app.appendChild(header.container)

      this.setStyle(header.Bakelogo, {
        display: "flex",
        margin: "48px",
      })
      this.setStyle(header.Cartlogo, {
        display: "flex",
        width: "36px",
        height: "36px",
        marginRight: "53px",
        cursor: "pointer",
       })
      this.setStyle(header.container, {
        display: "flex",
        background: "rgba(102, 102, 102, 0.3)",
        height: "120px",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: "1",
       })
    },
    setBody() {
      const els = App.elements 

      const mainbody = els.mainbody

      mainbody.container = document.createElement("div")
      mainbody.bigimage = document.createElement("img")

      //mainbody.container.style.border = "1px solid blue"
     // mainbody.container.style.height = "200px"
      mainbody.container.style.flexGrow = "1"

      mainbody.bigimage.src = "./imgvanilla/BackGroundBread.png"
      mainbody.bigimage.style.width = "100%"
      mainbody.bigimage.style.height = "auto"
      mainbody.bigimage.style.marginTop = "-150px"
      


      mainbody.container.appendChild(mainbody.bigimage)
      els.app.appendChild(mainbody.container)

      this.setStyle(mainbody.bigimage, {
        
      })

    },
    setFooter() {
      const els = App.elements 
      const footer = els.footer

      footer.container = document.createElement("div")
      footer.footerlogo = document.createElement("img")

  
      footer.footerlogo.src = "./imgvanilla/Bakery.png"
      

      footer.container.appendChild(footer.footerlogo)
      els.app.appendChild(footer.container)

      this.setStyle(footer.container, {
        display: "flex",
        backgroundColor: "black",
        height: "250px",
        justifyContent: "center",
        alignItems: "center",
      })
    },
    setApp() {
      const els = App.elements 
      const app = els.app

      app.style.display = "flex"
      app.style.border = "5px solid green"
      app.style.height = "100vh"
      app.style.flexDirection = "column"
    },


 setStyle(el, style) {
    for (let key in style) {
        console.log("hey", key, style[key])
        el.style[key] = style[key]
    }
}
}

