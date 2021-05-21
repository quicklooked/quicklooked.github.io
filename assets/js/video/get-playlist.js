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
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
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
      src: 'https://m.wsj.net/video/20210104/010521nio2/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks:[ { "kind":"subtitles", "label":"English", "src":"https://m.wsj.net/video/20210104/010521nio2/010521nio2.en_US.vtt", "srclang":"en" } ],
    name: 'Tesla vs. NIO: Battle for the World’s Largest EV Market',
    duration: '388',
    date: 'May 17',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: "Gone are the long waits at charging stations: Chinese electric-vehicle startup NIO is pioneering battery-swap systems, challenging Tesla and other rival car makers. Here’s how NIO and Tesla are racing for the world’s largest EV market in China. Photo illustration: Sharon Shi",
    poster: 'https://m.wsj.net/video/20210104/010521nio2/010521nio2_960x540.jpg',
    thumbnail: [{
      srcset: 'https://m.wsj.net/video/20210104/010521nio2/010521nio2_960x540.jpg',
      type: 'image/jpg',
      media: '(width: 112px; height: 112px;)'
    }, {
      src: 'https://m.wsj.net/video/20210104/010521nio2/010521nio2_960x540.jpg'
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
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
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
