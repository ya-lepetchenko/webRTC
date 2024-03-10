const audioInputEl = document.querySelector('#audio-input')
const audioOutputEl = document.querySelector('#audio-output')
const videoInputEl = document.querySelector('#video-input')

const getDevices = async () => {
    try {
        const devices = navigator.mediaDevices.enumerateDevices()
        console.log(devices)
        ;(await devices).forEach(d=>{
            const option = document.createElement('option')
            option.value = d.deviceId
            option.text = d.label
        })
    } catch(err) {
        console.log(err)
    }
}

getDevices()