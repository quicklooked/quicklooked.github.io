var jwDefaults = {
  "key": "GytdaYuqfyvirEusXu6WqDo4Flbquswk8SceF+iP+chw318UDdxUxovv3nFnvgsa",
  "hlshtml": true,
  "primary": "html5",
  "fullscreen": true,
  "flashplayer": "//ssl.p.jwpcdn.com/player/v/8.12.5/jwplayer.flash.swf",
  "stagevideo": true,
  "renderCaptionsNatively": false,
  "controls": true,
  "debug": false,
  "responsive": true,
  "nextupoffset": 0, 
  "localization": {
    "related": "Episodes"
  },
  "related": {
    "autoplaymessage": "__title__ will play in xxs",
    "autoplaytimer": 0,
    //"file": "//cdn.jwplayer.com/v2/playlists/rU34S8ZY?related_media_id=MEDIAID",
    "onclick": "play",
    "oncomplete": "autoplay",
    //"displayMode": "shelf",
    "displayMode": "none"
  },
  "floating": {
    "dismissible": true
  },
  "advertising": {
    "client": "vast",
    //"skipoffset": 5,
    "admessage": "Quicklook advertising',
    //"admessage": "Video will play after ad",
    //"skipmessage": 'Video will play after ad',
    //"skiptext": "Skip ad",
    //"skipmessage": 'Skip this ad in XXs',
    //"adscheduleid": "Az87bY12",
    "schedule": [{
      "offset": "pre",
      "tag": "https://video-ads-apex.rubiconproject.com/apex/assets/testad/forest_vast2.xml"
    }]
  },
  "cast": {},
  "abouttext": "Quicklook TV+",
  "related_dimensions": true,
  "name": "Quicklook TV+ Player",
  "aboutlink": "https://quicklooked.github.io/media/watch/help",
  "aspectratio": "16:9",
  "horizontalVolumeSlider": false,
  "autostart": false,
  "controls": true,
  //"nextUpDisplay": true,
  "nextUpDisplay": false,
  "displaydescription": false,
  "displaytitle": false,
  "displayPlaybackLabel": false,
  "height": "100%",
  "visualplaylist": true,
  "captions": {
    "fontFamily": "Arial, sans-serif",
    "fontOpacity": 100,
    "edgeStyle": "none", 
    "color": "#ffffff",
    "windowColor": "#000000",
    "windowOpacity": 0,
    "backgroundColor": "#000000",
    "backgroundOpacity": 50
  },
  "mute": true,
  "ph": 1,
  "pid": "Jq6HIbgz",
  "playbackRateControls": false,
  "preload": "metadata",
  "stretching": "uniform",
  "repeat": false,
  "width": "100%"
};
jwplayer.defaults = jwDefaults;
