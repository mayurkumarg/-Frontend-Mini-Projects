let currentAudio = null;
let currentIndex = null;
let isPlaying = false;
let maxIndex = null; 

async function getSongs() {
    let response = await fetch("songs/songs.json");
    let songs = await response.json();
    maxIndex = songs.length - 1; 
    return songs;
}

function resetAllSongIcons() {
    document.querySelectorAll(".play_button_2_e img").forEach(img => {
        img.src = "Play_button_2.svg";
        img.style.height = "";
        img.style.filter = "";
    });
}

function updateIcons(songIndex) {

     resetAllSongIcons();

    if (songIndex !== null) {
        let parent_btn = document.getElementById(`${songIndex}`);
        let button_child = parent_btn?.children[0];
        if (button_child) {
            if (isPlaying) {
                button_child.src = "Pause_Button.svg";
                button_child.style.height = "35px";
                button_child.style.filter = "invert(1)";
            } else {
                button_child.src = "Play_button_2.svg";
                button_child.style.height = "";
                button_child.style.filter = "";
            }
        }
    }

    let playbarImg = document.querySelector("#playPauseBtn img");
    if (playbarImg) {
        playbarImg.src = isPlaying ? "Pause_Button.svg" : "Play_button_2.svg";
        playbarImg.style.filter = isPlaying ? "invert(1)" : "";
    }
}

async function main(songIndex) {
    let songs = await getSongs();

    if (currentIndex === songIndex) {
        
        if (currentAudio.paused) {
            currentAudio.play();
        } else {
            currentAudio.pause();
        }
        return;
    }

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio("songs/" + songs[songIndex]);
    currentIndex = songIndex;

   
    currentAudio.addEventListener("play", () => {
        isPlaying = true;
        updateIcons(currentIndex);
    });
    currentAudio.addEventListener("pause", () => {
        isPlaying = false;
        updateIcons(currentIndex);
    });
    currentAudio.addEventListener("ended", () => {
        isPlaying = false;
        updateIcons(currentIndex);
    });

    currentAudio.play();
}

function showPlaybarOnce() {
    if (!document.querySelector(".playbar")) {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="playbar">
                <button class="prev_button nav_button pp" id="prev_button">
                    <img src="skip_previous_button.svg" alt="Previous" class="nv">
                </button>
                <button class="play_button_2 pp" id="playPauseBtn">
                    <img src="Play_button_2.svg" alt="Play_button_2" class="play_button_2_i">
                </button>
                <button class="next_button nav_button pp" id="next_button">
                    <img src="skip_next_button.svg" alt="Next button" class="nv">
                </button>
            </div>
        `);
    }
}

function setupPlaybarControls() {
    const playPauseBtn = document.getElementById("playPauseBtn");
    if (playPauseBtn) {
        playPauseBtn.addEventListener("click", () => {
            if (!currentAudio && currentIndex !== null) {
                main(currentIndex);
                return;
            }
            if (currentAudio.paused) {
                currentAudio.play();
            } else {
                currentAudio.pause();
            }
        });
    }
}

// function setupPlaybarNavigation() {
//     const prev = document.getElementById("prev_button");
//     const next = document.getElementById("next_button");

//     prev.addEventListener("click", () => {
//         if (currentIndex !== null && currentIndex > 0) {
//             main(currentIndex - 1); 
//         }
//     });
//     next.addEventListener("click", () => {
//         if (currentIndex !== null && currentIndex < maxIndex) {
//             main(currentIndex + 1); 
//         }
//     });
// }

//This function have a bug
// function setupPlaybarNavigation() {
//     const prev = document.getElementById("prev_button");
//     const next = document.getElementById("next_button");

//     prev.addEventListener("click", async () => {
//         let songs = await getSongs();
//         if (currentIndex !== null && currentIndex > 0) {
//             main(currentIndex - 1);
//         }
//     });

//     next.addEventListener("click", async () => {
//         let songs = await getSongs();
//         if (currentIndex !== null && currentIndex < songs.length - 1) {
//             main(currentIndex + 1);
//         }
//     });
// }





function playSong() {
    let ply_btn = document.querySelectorAll(".play_button_2_e");
    ply_btn.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (!document.querySelector(".playbar")) {
                showPlaybarOnce();
                setupPlaybarControls();
                // setupPlaybarNavigation();
            }
            let idx = parseInt(event.currentTarget.id);
            main(idx);
        });
    });
}
