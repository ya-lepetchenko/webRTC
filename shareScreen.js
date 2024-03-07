
const shareScreen = async () => {

    const options = {
        video: true,
        audio: true,
        surfaceSwitching: 'include'
    }
    try {
        mediaStream = await navigator.mediaDevices.getDisplayMedia(options)
    } catch(err) {
        console.log(err)
    }

    changeButtons([
        'green', 'green', 'blue', 'blue',  'green', 'green', 'blue', 'blue'
    ])
}