
const supportCOnstraints = navigator.mediaDevices.getSupportedConstraints()
console.log(supportCOnstraints)

const changeVideoSize = (e) => {
    //stream.getTracks().forEach(track => {
        const height = document.querySelector('#vid-height').nodeValue
        const width = document.querySelector('#vid-with').nodeValue
        stream.getVideoTracks().forEach(track => {
            if(track) {
                const c = track.getCapabilities()
                const vConstraints = {
                    height: {exact: height < c.height.max ? height : c.height.max},
                    width: {exact: width < c.width.max ? width : c.width.max},
                    //frameRate: 5
                }
                track.applyConstraints(vConstraints)
            } 
        })
    }
        // const c = track.getCapabilities()
        // console.log(c)
    //})