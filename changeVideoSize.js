
const supportCOnstraints = navigator.mediaDevices.getSupportedConstraints()
console.log(supportCOnstraints)

const changeVideoSize = (e) => {
    stream.getTracks().forEach(track => {
        const c = track.getCapabilities()
        console.log(c)
    })
}