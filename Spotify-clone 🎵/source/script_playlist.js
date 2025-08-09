let myPlaylistsongs=[];     

function creatPlaylist() {
    let creat_btn = document.getElementsByClassName("creat_playlist_button")[0];

    creat_btn.addEventListener("click", () => {
        let head = document.getElementsByTagName("head")[0];

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "style_playlist_DEMO.css";
        head.appendChild(link);

        let pl = document.getElementById("playlist");
        pl.innerHTML = `
            <div class="creat_playlist">
                <div class="myplaylist_1 bold">My Playlist</div>

                <div class="search_add">
                    <div class="custom-search-container">
                        <input
                            type="text"
                            id="searchInput"
                            class="custom-search-input"
                            placeholder="Search for songs"
                        />
                        <div id="suggestions" class="custom-suggestions"></div>
                    </div>
                    <button class="library_create_button bold" id="adding_button">
                        <img src="add_logo.svg" alt="Add Logo" style="filter: invert(1);"/>
                        Add
                    </button>
                </div>

                <div class="addedplaylist fancy-scrollbar" id="playlist_adder"></div>
            </div>
        `;

        activateSearchPrediction();
        addSongs();
    });
}

function addSongs() {
    let add_btn = document.getElementById("adding_button");
    let songs = [
        "Why This Kolaveri Di - Dhanush",
        "Aaja Nachle - Madhuri Dixit",
        "Aye Mere Humsafar - Qayamat Se Qayamat Tak",
        "Blue Eyes - Yo Yo Honey Singh",
        "Crying - Bob Marley",
        "Chahun Main Ya Naa - Aashiqui 2",
        "Shape of You - Ed Sheeran",
        "Guzarish - Ghajini",
        "Janam Janam - Dilwale",
        "Saiyaara - Ahaan Panday",
        "Teri Meri - Bodyguard",
        "Tujhe Dekha To - DDLJ",
    ];

    let songs_obj = {
        "Why This Kolaveri Di - Dhanush": 0,
        "Aaja Nachle - Madhuri Dixit": 1,
        "Aye Mere Humsafar - Qayamat Se Qayamat Tak": 2,
        "Blue Eyes - Yo Yo Honey Singh": 3,
        "Crying - Bob Marley": 4,
        "Chahun Main Ya Naa - Aashiqui 2": 5,
        "Shape of You - Ed Sheeran": 6,
        "Guzarish - Ghajini": 7,
        "Janam Janam - Dilwale": 8,
        "Saiyaara - Ahaan Panday": 9,
        "Teri Meri - Bodyguard": 10,
        "Tujhe Dekha To - DDLJ": 11
    };

 

    add_btn.addEventListener("click", () => {
        let user_song = document.getElementById("searchInput").value;
        let song_flag = songs.includes(user_song);

        if (user_song !== "" && song_flag) {
            let index = songs.indexOf(user_song);
            if (index !== -1) {
                myPlaylistsongs.push(index);        //here
                songs.splice(index, 1);
            }

            let i = songs_obj[user_song];

            let adder = document.getElementById("playlist_adder");
            let temp = `
                <div class="playlist_card">
                    <div class="playlist_card_1">
                        <img
                            src="song_logo.svg"
                            alt="songs logo"
                            style="filter: invert(1); height: 40px"
                        />
                        <p class="playlist_card_content" style="text-align: left; margin-right:10px">
                            ${user_song}
                        </p>
                    </div>
                    <button class="play_button_2_e pp" id="${i}">
                        <img
                            src="Play_button_2.svg"
                            alt="Play_button_2"
                            class="play_button_2_i_e"
                        />
                    </button>
                </div>
            `;
            adder.innerHTML += temp;
            currentIndex=i;
            // maxIndex+=1;
            playSong(); // reattach listeners to new buttons
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    creatPlaylist();
});
