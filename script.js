// const iframe = document.createElement("iframe");
// iframe.style.position = "fixed";
// iframe.setAttribute("id", "chatbot-iframe")
// iframe.style.zIndex = "999"
// iframe.style.right = "10px"
// iframe.style.bottom = "50px"
// iframe.style.width = "100px"
// iframe.style.height = "100px"
// //iframe.style.border = "none"
// iframe.src = "https://chat-bot-fawn-one.vercel.app/";
// document.body.appendChild(iframe);

// window.addEventListener("message", (evt) => {
//   if (evt.origin !== "https://chat-bot-fawn-one.vercel.app") {
//     return;
//   }

//   if (evt.data === "show") {
//     api.hide();
//   }
// });

(() => {
  const script = document.currentScript;

  const loadWidget = () => {
    const widget = document.createElement("div");

    const widgetStyle = widget.style;
    widgetStyle.display = "none";
    widgetStyle.boxSizing = "border-box";
    widgetStyle.width = "100px";
    widgetStyle.height = "100px";
    widgetStyle.position = "fixed";
    widgetStyle.bottom = "50px";
    widgetStyle.right = "10px";

    const iframe = document.createElement("iframe");

    const iframeStyle = iframe.style;
    iframeStyle.boxSizing = "borderBox";
    iframeStyle.position = "fixed";
    iframeStyle.right = 0;
    iframeStyle.bottom = 0;
    iframeStyle.width = "100%";
    iframeStyle.height = "100%";
    iframeStyle.border = 0;
    iframeStyle.margin = 0;
    iframeStyle.padding = 0;
    iframeStyle.width = "100px";

    widget.appendChild(iframe);

    const greeting = script.getAttribute("data-greeting");

    const api = {
      sendMessage: (message) => {
        iframe.contentWindow.postMessage(
          {
            sendMessage: message,
          },
          "https://chat-bot-fawn-one.vercel.app"
        );
      },

      show: () => {
        iframe.style.height= "715px";
        iframe.style.width = "425px"
      },

      hide: () => {
        iframe.style.height = "100px";
        iframe.style.width = "100px";
      },

      toggle: () => {
        const display = window.getComputedStyle(widget, null).display;
        widget.style.display = display === "none" ? "block" : "none";
      },
    };

    iframe.addEventListener("load", () => {
      window.addEventListener("getWidgetApi", () => {
        const event = new CustomEvent("widgetApi", { detail: api });
        window.dispatchEvent(event);
      });

      window.addEventListener("message", (evt) => {
        if (evt.origin !== "https://chat-bot-fawn-one.vercel.app") {
          return;
        }

        if (evt.data === "hide") {
          api.hide();
        }

        if (evt.data === "show"){
          api.show();
        }
      });

      widgetStyle.display = "block";
    });

    iframe.src = "https://chat-bot-fawn-one.vercel.app";

    document.body.appendChild(widget);
  };

  if (document.readyState === "complete") {
    loadWidget();
  } else {
    document.addEventListener("readystatechange", () => {
      if (document.readyState === "complete") {
        loadWidget();
      }
    });
  }
})();





