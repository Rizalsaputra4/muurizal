const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');

imageUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    imagePreview.src = URL.createObjectURL(file);
    imagePreview.style.display = 'block';
  }
});

const audioUpload = document.getElementById('audioUpload');
const audioPlayer = document.getElementById('audioPlayer');

audioUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    audioPlayer.src = URL.createObjectURL(file);
    audioPlayer.style.display = 'block';
  }
});
