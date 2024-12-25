$(document).ready(function(){
    $('.contact-btn .contact-bg').click(function(){
        $('.contact-form-fix').addClass('open');
    });

    $('.close-btn').click(function(){
        $('.contact-form-fix').removeClass('open');
    });
    $('.search').click(function(){
        $('.search-input-area').addClass('show');
    });
    $('#close').click(function(){
        $('.search-input-area').removeClass('show');
    });

});
document.addEventListener('DOMContentLoaded', function () {

    function formatDate(date) {
      return (
        ('0' + date.getDate()).slice(-2) + '/' +
        ('0' + (date.getMonth() + 1)).slice(-2) + '/' +
        date.getFullYear()
      );
    }

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formattedToday = formatDate(today);
    const formattedTomorrow = formatDate(tomorrow);

    // Set the input value to display the default date range (today - tomorrow)
    document.getElementById('daterange').value = `${formattedToday} - ${formattedTomorrow}`;

    const picker = new Litepicker({
      element: document.getElementById('daterange'),
      numberOfMonths: 2,
      numberOfColumns: 2,
      singleMode: false,
      format: 'DD/MM/YYYY',
      startDate: today,
      endDate: tomorrow,
      autoApply: true,
      setup: (picker) => {
        picker.on('selected', (start, end) => {
          document.getElementById('daterange').value = `${start.format('DD/MM/YYYY')} - ${end.format('DD/MM/YYYY')}`;
        });
      }
    });
});
// $(document).on('click', '#search', function () {
//     $(".search-input-area").addClass("show");
//     $("#anywhere-home").addClass("bgshow");
//   });
//   $(document).on('click', '#close', function () {
//     $(".search-input-area").removeClass("show");
//     $("#anywhere-home").removeClass("bgshow");
//   });
//   $(document).on('click', '#anywhere-home', function () {
//     $(".search-input-area").removeClass("show");
//     $("#anywhere-home").removeClass("bgshow");
//   });

function playYouTubeVideo() {
  const videoPlayer = document.getElementById('videoPlayer');
  const iframe = document.getElementById('youtubeIframe');
  const thumbnail = document.getElementById('thumbnail');

  if (videoPlayer.style.display === 'none' || !videoPlayer.style.display) {
    videoPlayer.style.display = 'block';
    thumbnail.style.display = 'none';
    iframe.src = 'https://www.youtube.com/embed/lJzSp0nukLY?autoplay=1';
  } else {
    videoPlayer.style.display = 'none';
    thumbnail.style.display = 'block';
    iframe.src = '';
  }
}

function playYouTubeVideo2() {
  const videoPlayer = document.getElementById('videoPlayer2');
  const iframe = document.getElementById('youtubeIframe2');
  const thumbnail = document.getElementById('thumbnail2');

  if (videoPlayer.style.display === 'none' || !videoPlayer.style.display) {
    videoPlayer.style.display = 'block';
    thumbnail.style.display = 'none';
    iframe.src = 'https://www.youtube.com/embed/ojpkzEqbAyY?autoplay=1';
  } else {
    videoPlayer.style.display = 'none';
    thumbnail.style.display = 'block';
    iframe.src = '';
  }
}