App.elements = {
    elements: {
        app: document.getElementById("app"),

        header: {
            container: document.createElement("div"),
            logoleft: {
                container: document.createElement("div"),
                logoL: document.createElement("img"),
            },
            logoright: {
                container: document.createElement("div"),
                logoR: document.createElement("img"),
            },
        },

        mainbody: {
            container: document.createElement("div"),
            bigimage: document.createElement("img"),
            Pdctcontainer: {
                container: document.createElement("div"),
                pdcttitle: document.createElement("h2"),
                pdctsubtitle: document.createElement("p"),
                pdct: {
                    container: document.createElement("div"),
                }
            },
        }, 

        cartbody: {
            container: document.createElement("div"),
            pdct: {
                container: document.createElement("div"),
            },
            button: document.createElement("button"),
        },


        footer: { 
            container: document.createElement("div"),
            footerlogo: document.createElement("img"),
        }
    }
}