let songs = [];

function App() {
  let running = true;
  while (running) {
    showMenu();
    const userChoice = getUserInput();

    if (userChoice === "1") {
      showAllSongs(songs);
    } else if (userChoice === "2") {
      addNewSong();
    } else if (userChoice === "3") {
      modifyExistingSong();
    } else if (userChoice === "4") {
      deleteSongInterface();
    } else if (userChoice === "5") {
      console.log("Exiting...");
      running = false;
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
}



songs.push(
  { id: 1, name: "Only in My Fantasy", genre: "bossa nova", artist: "Mano Esperanza" },
  { id: 2, name: "Attention", genre: "pop", artist: " Charlie Puth" },
  { id: 3, name: "DuuDuu DuuDuu", genre: "pop", artist: "Black Pink" },
);
function addNewSong(songs, name, genre, artist) {
  let newSong = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    genre: genre,
    artist: artist,
  };
  songs.push(newSong);
}

function modifyExistingSong(songs, id, newSongName, newGenre, newArtist) {
  let song = null;
  for (let s of songs) {
    if (s.id == id) {
      song = s;
    }
  }
  if (song) {
    song.name = newSongName;
    song.genre = newGenre;
    song.artist = newArtist;
  } else {
    console.log("Task not found");
  }
}

function deleteSongInterface(songs, id) {
  let indexToDelete = null;
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].id == id) {
      indexToDelete = i;
      break;
    }
  }
  if (indexToDelete !== null) {
    song.splice(indexToDelete, 1);
  } else {
    console.log("Task not found");
  }
}


App();

function showMenu() {
  console.log("====Songs List Menu ====");
  console.log("1.Show all song");
  console.log("2.Add new song");
  console.log("3. Modify an existing song");
  console.log("4. Delete a song");
  console.log("5.Exit");
}

function getUserInput() {
  return prompt("Enter your choice :");
}
function showAllSongs(songs) {
  if (songs.length === 0) {
    console.log("There are no songs to display.");
    return;
  }
  console.log("===== Songs =====");
  for (let song of songs) {
    console.log(`ID: ${ song.id }, Name: ${ song.name }, Genre: ${ song.genre } Artist : ${ song.artist }`);
  }
}

function addNewsong() {
  let name = prompt("Enter the name of the song: ");
  let genre = prompt("Enter the genre: ");
  let artist = prompt(" Enter the name of the artist:");
  addsong(songs, name, genre, artist);
  console.log("Song added successfully!");
}

function modifyExistingSong() {
  let id = parseInt(prompt("Enter the song ID to modify: "));
  let newSongName = prompt("Enter the new name for the song: ");
  let newGenre = prompt("Enter the new genre: ");
  let newArtist = prompt("Enter the new artist name :");
  modifySong(songs, id, newSongName, newGenre, newArtist);
  console.log("Song modified successfully!");
}

function deleteSongInterface() {
  let id = parseInt(prompt("Enter the song ID to delete: "));
  deletesong(songs, id);
  console.log("Song deleted successfully!");
}

