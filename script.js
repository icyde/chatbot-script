const iframe = document.createElement("iframe");
iframe.style.position = "fixed";
iframe.style.zIndex = "999"
iframe.style.right = "10px"
iframe.style.bottom = "50px"
iframe.style.width = "100%"
iframe.style.height = "fit-content"
//iframe.style.border = "none"
iframe.src = "https://chat-bot-fawn-one.vercel.app/";
document.body.appendChild(iframe);