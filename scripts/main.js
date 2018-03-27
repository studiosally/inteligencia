	$( document ).ready(function() {
		// $(".shareThis").simpleSocialShare();
		$("div.shareThis").simpleSocialShare({sites: "http://www.inteligencia.io", url: "http://www.inteligencia.io", title: "Meet INTELIGENCIA", shareType: "button", triggerButtonActiveState: false, buttonSide: "left", orientation: "horizontal"});
	});



 // function onYouTubeIframeAPIReady() {
 //  var player;
 //  player = new YT.Player('background', {
 //    videoId: 'JXdP7OAZDaA', // YouTube Video ID
 //    playerVars: {
 //      autoplay: 1,        // Auto-play the video on load
 //      controls: 1,        // Show pause/play buttons in player
 //      showinfo: 0,        // Hide the video title
 //      modestbranding: 1,  // Hide the Youtube Logo
 //      mute:0,			  // mute = 1 
 //      loop: 1,            // Run the video in a loop
 //      fs: 0,              // Hide the full screen button
 //      cc_load_policy: 0, // Hide closed captions
 //      iv_load_policy: 3,  // Hide the Video Annotations
 //      autohide: 0         // Hide video controls when playing
 //    },
 //    events: {
 //      onReady: function(e) {
 //        e.target.playVideo();
 //      }
 //    }
 //  });
 // }


 		  // var tag = document.createElement('script');
     //      tag.src = "https://www.youtube.com/iframe_api";
     //      var firstScriptTag = document.getElementsByTagName('script')[0];
     //      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

     //      var player;
     //      function onYouTubeIframeAPIReady() {
     //        player = new YT.Player('background', {
     //          height: '720',
     //          width: '1280',
     //          videoId: 'JXdP7OAZDaA',
     //          playerVars :{'autoplay':1,'loop':1},
     //          events: {
     //            'onReady': onPlayerReady,
     //            'onStateChange': onPlayerStateChange
     //          }
     //        });
     //      }

     //      function onPlayerReady(event) {
     //           event.target.playVideo();
     //           event.target.setVolume(80);
     //      }

     //      var done = false;
     //      function onPlayerStateChange(event) {
     //        if (event.data == YT.PlayerState.PLAYING && !done) {
     //          // setTimeout(playVideo, 500);
     //                  done = true;
     //        }
     //           event.target.setVolume(80);
     //      }


