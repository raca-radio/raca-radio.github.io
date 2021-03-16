play_pause = "play";
var volume = 0.5;


var options = {
  width: "100%",
  height: "100%",
  channel: "N01SEglobal",
  autoplay: true,
  parent: ["aural-n01se.github.io"],
  controls: true,
  muted: true,
};

var player = new Twitch.Player("twitch", options);



function play() {
  if (player.isPaused() == true) {

    var audio = document.getElementById("audio_recalculando");
    //audio.play();
    if (play_pause == "play"){
      audio.play();
      document.getElementById("play").style.display = "none";
      document.getElementById("pause").style.display = "inline";
      console.log(play_pause)
    } else {
      audio.volume = volume;
      document.getElementById("play").style.display = "none";
      document.getElementById("pause").style.display = "inline";
      play_pause = "play";
      console.log(play_pause)
    }

  } else {
    player.setMuted(false);
    player.setVolume(parseFloat(volume));
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "inline";
    play_pause = "play"; 
  }
}

function pause() {

  if (player.isPaused() == true) {

    var audio = document.getElementById("audio_recalculando");
    //audio.pause();
    document.getElementById("play").style.display = "inline";
    document.getElementById("pause").style.display = "none";
    play_pause = "pause";
    audio.volume = 0;
    console.log(play_pause)

  } else {

    player.setMuted(true);
    document.getElementById("play").style.display = "inline";
    document.getElementById("pause").style.display = "none";
    play_pause = "pause";
      console.log(play_pause)

  }


}

function changevolume(amount) {

  if (player.isPaused() == true) {

    var audio = document.getElementById("audio_recalculando");
    //audio.volume = amount;
    if (play_pause == "play"){
      audio.volume = amount;
    }
    volume = amount;
    if (amount > 0.5){
      document.getElementById("volumeUP").style.display = "inline";
      document.getElementById("volumeDOWN").style.display = "none";
      document.getElementById("volumeMUTE").style.display = "none";
    } else if (0.5 > amount && amount > 0.01){
      document.getElementById("volumeUP").style.display = "none";
      document.getElementById("volumeDOWN").style.display = "inline";
      document.getElementById("volumeMUTE").style.display = "none";
    } else if (amount == 0)if (0.5 > amount > 0.01){
      document.getElementById("volumeUP").style.display = "none";
      document.getElementById("volumeDOWN").style.display = "none";
      document.getElementById("volumeMUTE").style.display = "inline";
    }
    console.log(volume)

  } else {

    volume = amount;
    if (play_pause == "play"){
      player.setVolume(parseFloat(volume));
    }
    if (amount > 0.5){
      document.getElementById("volumeUP").style.display = "inline";
      document.getElementById("volumeDOWN").style.display = "none";
      document.getElementById("volumeMUTE").style.display = "none";
    } else if (0.5 > amount && amount > 0.01){
      document.getElementById("volumeUP").style.display = "none";
      document.getElementById("volumeDOWN").style.display = "inline";
      document.getElementById("volumeMUTE").style.display = "none";
    } else if (amount == 0)if (0.5 > amount > 0.01){
      document.getElementById("volumeUP").style.display = "none";
      document.getElementById("volumeDOWN").style.display = "none";
      document.getElementById("volumeMUTE").style.display = "inline";
    }
    console.log(parseFloat(volume))

  }

  
}

function mute() {

  if (player.isPaused() == true) {

    var audio = document.getElementById("audio_recalculando");
    //audio.volume = 0;
    if (play_pause == "play"){
      audio.volume = 0;
    }
    document.getElementById("volumeUP").style.display = "none";
    document.getElementById("volumeDOWN").style.display = "none";
    document.getElementById("volumeMUTE").style.display = "inline";
    document.getElementById("volume").value = "0";

  } else {

    if (play_pause == "play"){
      player.setMuted(false);
      player.setVolume(0);
    }
    document.getElementById("volumeUP").style.display = "none";
    document.getElementById("volumeDOWN").style.display = "none";
    document.getElementById("volumeMUTE").style.display = "inline";
    document.getElementById("volume").value = "0";

  }

  
}

function volumeup() {

  if (player.isPaused() == true) {

    var audio = document.getElementById("audio_recalculando");
    //audio.volume = volume;
    if (play_pause == "play"){
      audio.volume = volume;
    }
    document.getElementById("volume").value = volume;
    document.getElementById("volumeMUTE").style.display = "none";
    if (volume > 0.5){
      document.getElementById("volumeUP").style.display = "inline";
    } else if (0.5 > volume && volume > 0.01){
      document.getElementById("volumeDOWN").style.display = "inline";
    } else {
      volume = 0.1;
      //audio.volume = volume;
      if (play_pause == "play"){
        audio.volume = volume;
      }
      document.getElementById("volume").value = volume;
      document.getElementById("volumeDOWN").style.display = "inline";
  }

  } else {

    if (play_pause == "play"){
      player.setMuted(false);
      player.setVolume(parseFloat(volume));
    }
    document.getElementById("volume").value = volume;
    document.getElementById("volumeMUTE").style.display = "none";
    if (volume > 0.5){
      document.getElementById("volumeUP").style.display = "inline";
    } else if (0.5 > volume && volume > 0.01){
      document.getElementById("volumeDOWN").style.display = "inline";
    } else {
      volume = 0.1;
      //audio.volume = volume;
      if (play_pause == "play"){
        player.setMuted(false);
        player.setVolume(parseFloat(volume));
      }
      document.getElementById("volume").value = volume;
      document.getElementById("volumeDOWN").style.display = "inline";
    }

  }

  
}


player.addEventListener("Twitch.Player.ONLINE", () => {
  var audio = document.getElementById("audio_recalculando");
  audio.volume = 0;
  player.setMuted(false);
  player.setVolume(parseFloat(volume));
  console.log("ONLINE")
});

player.addEventListener("Twitch.Player.OFFLINE", () => {
  var audio = document.getElementById("audio_recalculando");
  audio.volume = volume;
  player.setMuted(true);
  player.setVolume(0);
  console.log("OFFLINE")
});
