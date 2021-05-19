function getAwesomePlaylist() {
  const BASE_URL = 'https://storage.googleapis.com/media-session/';
  return [{
    sources: [{
      src: 'https://m.wsj.net/video/20210301/030221minwage/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks:[ { "kind":"subtitles", "label":"English", "src":"https://m.wsj.net/video/20210301/030221minwage/030221minwage.en_US.vtt", "srclang":"en" } ],
    name: 'The Costs and Benefits of a $15 Federal Minimum Wage',
    duration: '503',
    date: 'May 14',
    description: "Biden has identified raising the minimum wage as a key goal of his administration, but economists and lawmakers disagree on the potential impact. WSJ asked two economists and a minimum-wage worker what the costs and benefits of a $15 minimum wage might be. Photo: Bill Clark/Congressional Quarterly/Zuma Press",
    poster: 'https://m.wsj.net/video/20210301/030221minwagesplash/030221minwagesplash_960x540.jpg',
    thumbnail: [{
      srcset: 'https://m.wsj.net/video/20210301/030221minwagesplash/030221minwagesplash_960x540.jpg',
      type: 'image/jpg',
      media: '(width: 112px; height: 112px;)'
    }, {
      src: 'https://m.wsj.net/video/20210301/030221minwagesplash/030221minwagesplash_960x540.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210504/040421yellenecon/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks:[ { "kind":"subtitles", "label":"English", "src":"https://m.wsj.net/video/20210504/040421yellenecon/040421yellenecon.en_US.vtt", "srclang":"en" } ],
    name: 'Treasury Secretary Yellen Doesn\'t Anticipate Inflation to Be a Problem',
    duration: '87',
    date: 'May 17',
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
      type: 'application/x-mpegURL'
    }],
    textTracks:[ { "kind":"subtitles", "label":"English", "src":"https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621.en_US.vtt", "srclang":"en" } ],
    name: 'How Vulnerable Is U.S. Energy Infrastructure to Future Cyberattacks?',
    duration: '352',
    date: 'May 19',
    description: "A cyberattack on the U.S.’s largest fuel pipeline on May 7 forced a shutdown that triggered a spike in gas prices and shortages in parts of the Southeast. WSJ explains just how vulnerable the nation’s critical energy infrastructure is to attack. Photo illustration: Liz Ornitz/WSJ",
    poster: 'https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621_960x540.jpg',
    thumbnail: [{
      srcset: 'https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621_960x540.jpg',
      type: 'image/png',
      media: '(width: 112px; height: 112px;)'
    }, {
      src: 'https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621_960x540.jpg'
    }],
  }];
}
