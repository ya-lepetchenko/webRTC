
const supportCOnstraints = navigator.mediaDevices.getSupportedConstraints()
console.log(supportCOnstraints)

const changeVideoSize = (e) => {
    //stream.getTracks().forEach(track => {
        const c = track.getCapabilities()
        const height = document.querySelector('#vid-height').value
        const width = document.querySelector('#vid-with').value
        stream.getVideoTracks().forEach(track => {
            const vConstraints = {
                height: {exact: height < c.height.max ? height : c.height.max},
                width: {exact: width < c.width.max ? width : c.width.max},
                //frameRate: 5
            }
            track.applyConstraints(vConstraints)
        })
        // const c = track.getCapabilities()
        // console.log(c)
    //})
}