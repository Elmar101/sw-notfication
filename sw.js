self.addEventListener("push",(event)=>{
    const config = {
        body: "Messaj icheriyi burda yazilir...!",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "4"
        }
    } 
    event.waitUntil(self.registration.showNotification('Yeni Meqale Elave Edildi', config));
})