const iframe = document.createElement("iframe");
iframe.style.position = "fixed";
iframe.setAttribute("id", "chatbot-iframe")
iframe.style.zIndex = "999"
iframe.style.right = "10px"
iframe.style.bottom = "50px"
iframe.style.width = "100px"
iframe.style.height = "100px"
//iframe.style.border = "none"
iframe.src = "https://chat-bot-fawn-one.vercel.app/";
document.body.appendChild(iframe);

// iframe width:415px h:700px
iframe.addEventListener('load', handleLoad,true)

const handleLoad = () =>{
  let showModal = false;
  const button = document.getElementById("chatbot-button");
  button.addEventListener("click", () => {
    if (showModal) {
      iframe.style.width = "100px";
      iframe.style.height = "100px";
    } else {
      iframe.style.width = "415px";
      iframe.style.height = "700px";
    }
  });
}

