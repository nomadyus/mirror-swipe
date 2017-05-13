(function () {
  $(document).ready(preparePage);

  var rateUpAudio, rateDownAudio;

  function addAudioSounds() {
    rateUpAudio = new Audio('../aud/star5.mp3');
    rateDownAudio = new Audio('../aud/star1.mp3');
  }

  function addEventListenerToPage() {
    $('#rate-up').on('click', function (a, b) {
      console.log('Rate up!');
      stopRateDownSound();
      playRateUpSound();
    });

    $('#rate-down').on('click', function (a, b) {
      console.log('Rate down!');
      stopRateUpSound();
      playRateDownSound();
    });
  }

  function playRateUpSound() {
    rateUpAudio.play();
  }

  function playRateDownSound() {
    rateDownAudio.play();
  }

  function stopRateUpSound() {
    rateUpAudio.pause();
    rateUpAudio.currentTime = 0;
  }

  function stopRateDownSound() {
    rateDownAudio.pause();
    rateDownAudio.currentTime = 0;
  }

  function preparePage() {
    console.log('Yeaaah!');
    addAudioSounds();
    addEventListenerToPage();
  }
})();