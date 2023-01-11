App.controllers = {
    setHeader() {
      const els = App.elements 

      console.log(els.app)

      const header = els.header

      Bakelogo = document.createElement("img")
      Cartlogo = document.createElement("img")

      Bakelogo.src = "./imgvanilla/Bakery.png"
      Cartlogo.src = "./imgvanilla/Cart.png"

      header.container.appendChild(Bakelogo)
      header.container.appendChild(Cartlogo)
      els.app.appendChild(header.container)

      this.setStyle(Bakelogo, {
        display: "flex",
        position: "absolute",
        width: "76.06px",
        height: "50px",
        left: "48px",
        top: "35px",
      })
      this.setStyle(Cartlogo, {
        display: "flex",
        position: "absolute",
        width: "36px",
        height: "36px",
        left: "1351px",
        top: "42px",
        cursor: "pointer",
      })
      this.setStyle(header.container, {
        display: "flex",
        backgroundColor: "rgba(102, 102, 102, 0.3)",
        justifyContent: "space-between",
        position: "absolute",
        width: "1440px",
        height: "120px",
        left: "0px",
        top: "0px",
       })
    },
    setBody() {
      const els = App.elements 

      const mainbody = els.mainbody

      bigimage = document.createElement("img")
      title = document.createElement("h1")
      subtitle = document.createElement("p")

      bigimage.src = "./imgvanilla/BackGroundBread.png"

      title.innerHTML = "Our products"
      subtitle.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."

      mainbody.container.appendChild(bigimage)
      mainbody.container.appendChild(title)
      mainbody.container.appendChild(subtitle)
      els.app.appendChild(mainbody.container)


      this.setStyle(bigimage,{
        display: "flex",
        position: "absolute",
        width: "1440px",
        height: "907px",
        left: "0px",
        top: "-115px",
        zIndex: "-1",
      })
      this.setStyle(title, {
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        width: "1440px",
        height: "40px",
        left: "0px",
        top: "830px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "29px",
        textAlign: "center",
        color: "#000000",
      })
      this.setStyle(subtitle, {
        display: "flex",
        position: "absolute",
        width: "944px",
        height: "62px",
        left: "248px",
        top: "880px",
        fontFamily: "'Inter'",
        fontStyle: "normal",
        fontWeight: "400px",
        fontSize: "24px",
        lineHeight: "29.05px",
        textAlign: "center",
        color: "#000000",
      })
      this.setStyle(mainbody.container, {
        display: "flex",
        backgroundColor: "",
        flexGrow: "1",
        width: "1440px",
        height: "855.75px",
        marginTop: "783.43px",
      })
    },
    setFooter() {
      const els = App.elements 
      const footer = els.footer

      footerlogo = document.createElement("img")

      footerlogo.src = "./imgvanilla/Bakery.png"

      footer.container.appendChild(footerlogo)
      els.app.appendChild(footer.container)

      this.setStyle(footer.container, {
        display: "flex",
        alignItems: "end",
        backgroundColor: "black",
        width: "1440px",
        height: "250px",
        marginTop: "1665px",
      })
      this.setStyle(footerlogo, {
        display: "flex",
        position: "absolute",
        width: "76.06px",
        height: "50px",
        margin: "100px 682px 100px 682px",
      })
    },
    setLayout() {
      const els = App.elements 

      els.app.style.display = "flex"
      els.app.style.border = "5px solid orange"
      els.app.style.height = "100%"
      els.app.style.flexDirection = "column"

      this.setHeader()
      this.setBody()
      this.setFooter()
    },

 setStyle(el, style) {
    for (let key in style) {
        console.log("hey", key, style[key])
        el.style[key] = style[key]
    }
}
}