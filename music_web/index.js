document.getElementById("home").addEventListener("click", handleHome);


function handleHome() {
    document.getElementsByClassName("playlists")[0].style.display = "block";
    document.getElementsByClassName("album-container")[0].style.display = "none";
    document.getElementsByClassName("artist-page")[0].style.display = "none";
    document.getElementsByClassName("search-page")[0].style.display = "none";
}


document.getElementById("search").addEventListener("click", handlesearch);


function handlesearch() {
    document.getElementsByClassName("playlists")[0].style.display = "none";
    document.getElementsByClassName("album-container")[0].style.display = "none";
    document.getElementsByClassName("artist-page")[0].style.display = "none";
    document.getElementsByClassName("search-page")[0].style.display = "block";
}


document.querySelectorAll('.card').forEach(element => {
    element.addEventListener('click', handlePlaylist)
})
function handlePlaylist() {
    document.getElementsByClassName("playlists")[0].style.display = "none";
    document.getElementsByClassName("album-container")[0].style.display = "block";
}

document.querySelectorAll('.s-search').forEach(element => {
    element.addEventListener('click', handleArtists)
})
function handleArtists() {
    document.getElementsByClassName("artist-page")[0].style.display = "block";
    document.getElementsByClassName("album-container")[0].style.display = "none";
}