App.elements = {
        app: document.getElementById("app"),

        header: {
            container: document.createElement("div"),
            Bakelogo: document.createElement("img"),
            Cartlogo: document.createElement("img"),
        },

        mainbody: {
            container: document.createElement("div"),
            bigimage: document.createElement("img"),
            title: document.createElement("h1"),
            subtitle: document.createElement("p"),
            productsdiv: {
                croissant: {
                    croissantImg: document.createElement("img"),
                    croissantTitle: document.createElement("h3"),
                    croissantPrice: document.createElement("span"),
                    croissantText: document.createElement("p"),
                },
                ryeBread: document.createElement("div"),
                riceFlourBread: document.createElement("div"),
            },
            button: document.createElement("button"),
        },

        footer: {
            container: document.createElement("div"),
            footerlogo: document.createElement("img"),
        },
}

