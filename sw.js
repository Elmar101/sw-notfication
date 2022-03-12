self.addEventListener("push",(event)=>{
    console.log(event );
    const config = {
        body: event.data.text() || "Messaj icheriyi burda yazilir...!",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "4"
        },
        icon: "./images/logo.png",
        vibrate: [100, 50, 100],
    } 
    event.waitUntil(self.registration.showNotification('Yeni Meqale Elave Edildi', config));
})