window.addEventListener("load", async () => {

    const sW = await navigator.serviceWorker.register("./sw.js");
    console.log("Service worker => ",sW)

    const subscribeButton = document.querySelector("#subscribeButton");

    subscribeButton.addEventListener("click", async () => {

        const serverWorker = await navigator.serviceWorker.ready;
        const clientID = await serverWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: "BIAqq0xpax06YIomiGEy0Za4F_tUcZo17vRLG-R_lw6JhCKZCs2rRW04ruOG-WeM4bjAzqQ-BxfFAKnPtpU-myE"
        });

        console.log(clientID);

        console.log(JSON.stringify(clientID));
    });

   
});