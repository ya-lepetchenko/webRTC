let stream = null
const constraints = {
    audio: true,
    //video: true
}
const videoEl = document.querySelector('#my-video')

const getMic = async(e) => {
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints)
        console.log(stream)
        changeButtons([
            'green', 'blue', 'blue', 'grey',  'grey', 'grey', 'grey', 'grey'
        ])
    } catch {
        console.log("User denied access to constraints")
    }
}

const showMyFeed = e => {
    console.log('The feed is working')
    if(!stream) {
        alert("Stream still loading...")
        return
    }
    videoEl.srcObject = stream
    const tracks = stream.getTracks()
    changeButtons([
        'green', 'green', 'blue', 'blue',  'blue', 'grey', 'grey', 'blue'
    ])
    //console.log(tracks)
}

const stopMyFeed = e => {
    if(!stream) {
        alert("Stream still loading...")
        return
    }
    const tracks = stream.getTracks()
    tracks.forEach(track => {
        //console.log(tracks)
        track.stop()
    })
    changeButtons([
        'blue', 'grey', 'grey', 'grey',  'grey', 'grey', 'grey', 'grey'
    ])
} 

document.querySelector('#share').addEventListener('click', e=>getMic(e))
document.querySelector('#show-video').addEventListener('click', e=>showMyFeed(e))
document.querySelector('#stop-video').addEventListener('click', e=>stopMyFeed(e))
document.querySelector('#change-size').addEventListener('click', e=>changeVideoSize(e))