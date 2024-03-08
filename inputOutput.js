

const getDevices = async () => {
    try {
        const devices = navigator.mediaDevices.enumerateDevices()
        console.log(devices)
    } catch(err) {
        console.log(err)
    }
}

getDevices()