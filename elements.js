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
            container: document.createElement("div"),
            bigimage: document.createElement("img"),
            title: document.createElement("h1"),
            subtitle: document.createElement("p"),
        }, 

        cartbody: {
            container: document.createElement("section"),
            pdct: {
                container: document.createElement("div"),
            },
            button: document.createElement("button"),
        },

        footer: { 
            container: {
                footerlogo: document.createElement("img"),
            }
        }
}