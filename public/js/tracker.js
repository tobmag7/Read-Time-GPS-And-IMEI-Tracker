document.addEventListener('DOMContentLoaded', () => {
  const socket = io('/')

  socket.emit('_ping')

  socket.on('_pong', () => {
    console.log('got pong')
  })

  const positionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  setInterval(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude: lat, longitude: lng } = pos.coords
      socket.emit('updateLocation', { lat, lng })
    }, err => {
      console.error(err)
    }, positionOptions)
  }, 2000)

  

})

  // new lines of codes for another method

  


