function getAwesomePlaylist() {
  const BASE_URL = 'https://storage.googleapis.com/media-session/';
  return [{
    sources: [{
      src: 'https://m.wsj.net/video/20200710/20200710chromeyfc5/hls/manifest-hd-wifi.m3u8',
      type: 'video/m3u8'
    }],
    textTracks:[ { "kind":"subtitles", "label":"English", "src":"https://m.wsj.net/video/20200710/20200710chromeyfc5/20200710chromeyfc5.en_US.vtt", "srclang":"en" } ],
    name: 'How Roblox Plans to Expand Beyond Gaming',
    duration: '240',
    date: 'May 14',
    description: "This week The Wall Street Journal is sitting down with industry movers and shakers for our Future of Everything Festival. Today we hear from Roblox founder and CEO David Baszucki on the videogame platform's dramatic rise over the past year, how he sees it continuing to grow, and how his company could be affected by the ongoing court battle between Epic Games and Apple. Amanda Lewellyn hosts. Christopher Zinsli is our supervising producer. Kateri Jochum is the executive producer of WSJ Podcasts. Learn more about your ad choices. Visit megaphone.fm/adchoices",
    poster: 'https://m.wsj.net/video/20200710/20200710chromeyfc5/20200710chromeyfc5_960x540.jpg',
    thumbnail: [{
      srcset: 'https://m.wsj.net/video/20200710/20200710chromeyfc5/20200710chromeyfc5_960x540.jpg',
      type: 'image/png',
      media: '(width: 112px; height: 112px;)'
    }, {
      src: 'https://m.wsj.net/video/20200710/20200710chromeyfc5/20200710chromeyfc5_960x540.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210504/040421yellenecon/hls/manifest-hd-wifi.m3u8',
      type: 'video/m3u8'
    }],
    textTracks:[ { "kind":"subtitles", "label":"English", "src":"https://m.wsj.net/video/20210504/040421yellenecon/040421yellenecon.en_US.vtt", "srclang":"en" } ],
    name: 'Treasury Secretary Yellen Doesn\'t Anticipate Inflation to Be a Problem',
    duration: '87',
    date: 'May 14',
    description: "At The Wall Street Journal\'s CEO Council Summit, Janet Yellen expressed her confidence that the U.S. economy and employment will return to normal by next year.",
    poster: 'https://m.wsj.net/video/20210504/040421yellenecon/040421yellenecon_960x540.jpg',
    thumbnail: [{
      srcset: 'https://m.wsj.net/video/20210504/040421yellenecon/040421yellenecon_960x540.jpg',
      type: 'image/png',
      media: '(width: 112px; height: 112px;)'
    }, {
      src: 'https://m.wsj.net/video/20210504/040421yellenecon/040421yellenecon_960x540.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210516/pipelinecyberattack051621/hls/manifest-hd-wifi.m3u8',
      type: 'video/m3u8'
    }],
    textTracks:[ { "kind":"subtitles", "label":"English", "src":"https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621.en_US.vtt", "srclang":"en" } ],
    name: 'How Vulnerable Is U.S. Energy Infrastructure to Future Cyberattacks?',
    duration: '352',
    date: 'May 14',
    description: "A cyberattack on the U.S.’s largest fuel pipeline on May 7 forced a shutdown that triggered a spike in gas prices and shortages in parts of the Southeast. WSJ explains just how vulnerable the nation’s critical energy infrastructure is to attack. Photo illustration: Liz Ornitz/WSJ",
    poster: 'https://i.scdn.co/image/c274a8abb1d57d18f0c4f1d45d73aadd4c9f18dd',
    thumbnail: [{
      srcset: 'https://i.scdn.co/image/c274a8abb1d57d18f0c4f1d45d73aadd4c9f18dd',
      type: 'image/png',
      media: '(width: 112px; height: 112px;)'
    }, {
      src: 'https://i.scdn.co/image/c274a8abb1d57d18f0c4f1d45d73aadd4c9f18dd'
    }],
  }];
}
