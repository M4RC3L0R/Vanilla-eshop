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
  

      mainbody.container.style.flexGrow = "1"

      mainbody.bigimage.src = "./imgvanilla/BackGroundBread.png"
      mainbody.bigimage.style.width = "100%"
      mainbody.bigimage.style.height = "auto"
      mainbody.bigimage.style.marginTop = "-125px"

      mainbody.title.innerHTML = "Our products"
      mainbody.title.style.fontFamily = "Arial"
      mainbody.title.style.textAlign = "center"
      mainbody.title.style.marginTop = "10px"
      mainbody.subtitle.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."
      mainbody.subtitle.style.fontFamily = "Arial"
      mainbody.subtitle.style.textAlign = "center"
      mainbody.subtitle.style.marginTop = "10px"

      mainbody.productsdiv.style.justifyContent = "space-between" 

      //croissant//
      mainbody.croissantImg.src = "./imgvanilla/CartBreadImg1.png"
      mainbody.croissantTitle.innerHTML = "Croissant"
      mainbody.croissantTitle.style.marginTop = "30px"
      mainbody.croissantPrice.innerHTML = "USD 2"
      mainbody.croissantDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

      //Rice Flour Bread
      mainbody.riceFlourBreadImg.src = "./imgvanilla/CartBreadImg2.png"
      mainbody.riceFlourBreadTitle.innerHTML = "Rice Flour Bread"
      mainbody.riceFlourBreadTitle.style.marginTop = "30px"
      mainbody.riceFlourBreadPrice.innerHTML = "USD 5"
      mainbody.riceFlourBreadDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

      //Rye Bread
      mainbody.ryeBreadImg.src = "./imgvanilla/CartBreadImg3.png"
      mainbody.ryeBreadTitle.innerHTML = "Rye Bread"
      mainbody.ryeBreadTitle.style.marginTop = "30px"
      mainbody.ryeBreadPrice.innerHTML = "USD 3"
      mainbody.ryeBreadDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      
      
      mainbody.container.appendChild(mainbody.bigimage)
      mainbody.container.appendChild(mainbody.title)
      mainbody.container.appendChild(mainbody.subtitle)
      mainbody.container.appendChild(mainbody.productsdiv)

      mainbody.productsdiv.appendChild(mainbody.croissantDiv)
      mainbody.productsdiv.appendChild(mainbody.riceFlourBreadDiv)
      mainbody.productsdiv.appendChild(mainbody.ryeBreadDiv)

      //croissant//
      mainbody.croissantDiv.appendChild(mainbody.croissantImg)
      mainbody.croissantDiv.appendChild(mainbody.croissantTitle)
      mainbody.croissantDiv.appendChild(mainbody.croissantPrice)
      mainbody.croissantDiv.appendChild(mainbody.croissantDescription)

      //Rice Flour Bread//
      mainbody.riceFlourBreadDiv.appendChild(mainbody.riceFlourBreadImg)
      mainbody.riceFlourBreadDiv.appendChild(mainbody.riceFlourBreadTitle)
      mainbody.riceFlourBreadDiv.appendChild(mainbody.riceFlourBreadPrice)
      mainbody.riceFlourBreadDiv.appendChild(mainbody.riceFlourBreadDescription)

      //Rye Bread//
      mainbody.ryeBreadDiv.appendChild(mainbody.ryeBreadImg)
      mainbody.ryeBreadDiv.appendChild(mainbody.ryeBreadTitle)
      mainbody.ryeBreadDiv.appendChild(mainbody.ryeBreadPrice)
      mainbody.ryeBreadDiv.appendChild(mainbody.ryeBreadDescription)




      

  

      els.app.appendChild(mainbody.container)

      this.setStyle(mainbody.bigimage, {
        
      })

      this.setStyle(mainbody.productsdiv, {
        display: "flex",
        //border: "3px solid blue",
        maxWidth: "1082px",
        margin: "30px auto",
        alignItems: "center",
        fontFamily: "Arial",
        fontSize: "15px",
        flexWrap: "wrap",
      })

      this.setStyle(mainbody.croissantDiv, {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "200px",
        margin: "110px 90px 100px 90px"
      })
      this.setStyle(mainbody.riceFlourBreadDiv, {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "200px",
        margin: "110px 90px 100px 50px"
      })
      this.setStyle(mainbody.ryeBreadDiv, {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "200px",
        margin: "110px 90px 100px 50px"
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
        maxWidth: "100%",
        height: "250px",
        justifyContent: "center",
        alignItems: "center",
      })
    },
    setApp() {
      const els = App.elements 
      const app = els.app

      app.style.display = "flex"
     // app.style.border = "5px solid green"
      app.style.height = "220vh"
      app.style.flexDirection = "column"
    },


 setStyle(el, style) {
    for (let key in style) {
        console.log("hey", key, style[key])
        el.style[key] = style[key]
    }
}
}

