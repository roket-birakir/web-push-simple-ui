window.addEventListener("load", async () => {
    const subscribeButton = document.querySelector("#subscribeButton");
  
    const sw = await navigator.serviceWorker.register("./sw.js");
  
    subscribeButton.addEventListener("click", async () => {
      const serviceWorker = await navigator.serviceWorker.ready;
      const clientID = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BNTcxjmdzZOUM3mL_NZnsho_bKmdKM86k3oq_txPNYZWpc-8VKYsQD4A6i8uIrGIEOQY51hYCDC4ahrmeO5nDKk",
      });
    });
  });
  