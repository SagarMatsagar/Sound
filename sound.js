const sounds = ["pushpa","money","tomjerry","scam1992","kgf"]

const panel1 = document.getElementById('panel-1')
const panel2 = document.getElementById('panel-2')
const panel3 = document.getElementById('panel-3')
const panel4 = document.getElementById('panel-4')
const panel5 = document.getElementById('panel-5')

function panelRemoveClass(){
    panel1.classList.remove("active")
    panel2.classList.remove("active")
    panel3.classList.remove("active")
    panel4.classList.remove("active")
    panel5.classList.remove("active")
}

function stopSound(){
    for(let i=0;i<sounds.length;i++){
        const sound = document.getElementById(sounds[i])
        sound.pause()

        sound.currentTime = 0
    }
}
function selectPanel(songName){
    panelRemoveClass()
    stopSound()

    switch(songName){
        case pushpa:
            panel1.classList.add("active")
            document.getElementById("pushpa").play()
            break;
        case money:
            panel2.classList.add("active")
            document.getElementById("money").play()
            break;
        case tomjerry:
            panel3.classList.add("active")
            document.getElementById("tomjerry").play()
            break;
        case scam1992:
            panel4.classList.add("active")
            document.getElementById("scam1992").play()
            break;
        default:
            panel5.classList.add("active")
            document.getElementById("kgf").play()
            break;
    }
}