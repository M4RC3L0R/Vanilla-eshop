App.elements = {
        app: document.getElementById("app"),

        header: {
            container: document.createElement("section"),
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
            container: document.createElement("section"),
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
            container: document.createElement("section"),
            pdct: {
                container: document.createElement("div"),
            },
            button: document.createElement("button"),
        },

        footer: { 
            container: document.createElement("section"),
            footerlogo: document.createElement("img"),
        }
}