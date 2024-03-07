let mediaRecorder
let recordedBlobs

const startRecording = () => {
    if(!stream) {
        alert("No current feed")
        return
    }
    console.log("Start recording")
    const recordedBlobs = []
    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.ondataavailable = e => {
        console.log("Data is available for media recorder")
        recordedBlobs.push(e.data)
    }
    mediaRecorder.start()
    changeButtons([
        'green', 'green', 'blue', 'blue',  'green', 'blue', 'grey', 'blue'
    ])
}

const stopRecording = () => {
    if(!mediaRecorder) {
        alert("Please record before stopping")
        return
    }
    console.log("Stoprecording")
    mediaRecorder.stop()
    changeButtons([
        'green', 'green', 'blue', 'blue',  'green', 'green', 'blue', 'blue'
    ])
}

const playRecording = () => {
    if(!recordedBlobs) {
        alert("No recording saved")
        return
    }
    console.log("Play recording")
    const superBuffer = new Blob(recordedBlobs)
    const recordedVideoEl = document.querySelector('#other-video')
    recordedVideoEl.src = window.URL.createObjectURL(superBuffer)
    recordedVideoEl.controls = true
    recordedVideoEl.play()
    changeButtons([
        'green', 'green', 'blue', 'blue',  'green', 'green', 'green', 'blue'
    ])
}