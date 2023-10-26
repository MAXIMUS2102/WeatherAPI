const button = document.getElementById('get-location-button')

const cityName=document.getElementById('city-name')
const cityTime=document.getElementById('city-time')
const cityTemp=document.getElementById('city-temp')


async function getData(lat,long) {
    const promise=await fetch('http://api.weatherapi.com/v1/current.json?key=4cfd967ab2b440a2b35180540232310&q=${lat},${long}&aqi=yes')
    return await promise.json()
}


async function gotLocation(position){
    const result=await getData(position.coords.latitude,position.coords.longitude)
    console.log(result)
    
}
function failedToGetLocation() {
    console.log('There was some issue')
}
button.addEventListener('click',async()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGetLocation)
    
})



//http://api.weatherapi.com/v1/current.json?key=4cfd967ab2b440a2b35180540232310&q=Bhadrak&aqi=yes
