self.addEventListener("push",(event)=>{
    console.log(event);
    const config = {
        body: e.data.text() || "Messaj icheriyi burda yazilir...!",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "4"
        }
    } 
    event.waitUntil(self.registration.showNotification('Yeni Meqale Elave Edildi', config));
})