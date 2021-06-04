function getPlaylistTheEconomist() {
  const BASE_URL = 'https://storage.googleapis.com/media-session/';
  return [{
    sources: [{
      src: 'https://m.wsj.net/video/20210301/030221minwage/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL',
      "audio": "https://r8---sn-42u-nbosy.googlevideo.com/videoplayback?expire=1622861686&ei=FpO6YJGNCdC5qAHM_5RY&ip=1.52.213.138&id=o-AD-yNS7QbFHF47YYZ2CZ1yAXTrIL1jlYiiMl0A6x-1Dr&itag=251&source=youtube&requiressl=yes&mh=6E&mm=31%2C26&mn=sn-42u-nbosy%2Csn-npoeeney&ms=au%2Conr&mv=m&mvi=8&pl=24&initcwndbps=1411250&vprv=1&mime=audio%2Fwebm&ns=SCtVrGUxqgt7oQ6XMx7fuvkF&gir=yes&clen=5480951&dur=312.741&lmt=1616950187237311&mt=1622839741&fvip=4&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=Zb11wwmngQi53A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAL_PPl1D6r0c7-3pFCFhIwLXTy9K-4vS9NhMlMxEfodZAiEAkVkHeO2mgp4iOwfAJwFXs6PVA1vR4i0mRS-ejB5OLXs%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAOVhhrMs3bI1oQy3CDmvH-_1li__jpDb0tbN23Fo3Qc0AiBDSZ3N7bh1ZYv24KxBd-dS7wZtI0P0p7Rs8rpNbkmh9w%3D%3D&alr=yes&cpn=_EmNNkxhOWdEx8jH&cver=2.20210603.07.00&rn=59&rbuf=0",
    }],
    audioTracks: [{
      "kind": "translation",
      "label": "Vietnamese Audio Descriptions",
      "audio": "https://r8---sn-42u-nbosy.googlevideo.com/videoplayback?expire=1622861686&ei=FpO6YJGNCdC5qAHM_5RY&ip=1.52.213.138&id=o-AD-yNS7QbFHF47YYZ2CZ1yAXTrIL1jlYiiMl0A6x-1Dr&itag=251&source=youtube&requiressl=yes&mh=6E&mm=31%2C26&mn=sn-42u-nbosy%2Csn-npoeeney&ms=au%2Conr&mv=m&mvi=8&pl=24&initcwndbps=1411250&vprv=1&mime=audio%2Fwebm&ns=SCtVrGUxqgt7oQ6XMx7fuvkF&gir=yes&clen=5480951&dur=312.741&lmt=1616950187237311&mt=1622839741&fvip=4&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=Zb11wwmngQi53A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAL_PPl1D6r0c7-3pFCFhIwLXTy9K-4vS9NhMlMxEfodZAiEAkVkHeO2mgp4iOwfAJwFXs6PVA1vR4i0mRS-ejB5OLXs%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAOVhhrMs3bI1oQy3CDmvH-_1li__jpDb0tbN23Fo3Qc0AiBDSZ3N7bh1ZYv24KxBd-dS7wZtI0P0p7Rs8rpNbkmh9w%3D%3D&alr=yes&cpn=_EmNNkxhOWdEx8jH&cver=2.20210603.07.00&rn=59&rbuf=0",
      "srclang": "en",
      "default": true,
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210301/030221minwage/030221minwage.en_US.vtt",
      "srclang": "vn",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210301/030221minwage/030221minwage.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "The Costs and Benefits of a $15 Federal Minimum Wage",
      "src": "https://m.wsj.net/video/20210301/030221minwage/030221minwage.en_US.vtt",
      "srclang": "en",
    }],
    name: 'The Costs and Benefits of a $15 Federal Minimum Wage',
    epsiodes: '1',
    duration: '503',
    date: 'May 14',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'Biden has identified raising the minimum wage as a key goal of his administration, but economists and lawmakers disagree on the potential impact. WSJ asked two economists and a minimum-wage worker what the costs and benefits of a $15 minimum wage might be. Photo: Bill Clark/Congressional Quarterly/Zuma Press',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">Why the U.S. needs a $15 minimum wage</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">Minimum Wage Tracker</a></li>',
    poster: 'https://m.wsj.net/video/20210301/030221minwagesplash/030221minwagesplash_960x540.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210301/030221minwagesplash/030221minwagesplash_960x540.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210104/010521nio2/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210104/010521nio2/010521nio2.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210104/010521nio2/010521nio2.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "Tesla vs. NIO: Battle for the World’s Largest EV Market",
      "src": "https://m.wsj.net/video/20210104/010521nio2/010521nio2.en_US.vtt",
      "srclang": "en",
    }],
    name: 'Tesla vs. NIO: Battle for the World’s Largest EV Market',
    epsiodes: '2',
    duration: '388',
    date: 'May 17',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'Gone are the long waits at charging stations: Chinese electric-vehicle startup NIO is pioneering battery-swap systems, challenging Tesla and other rival car makers. Here’s how NIO and Tesla are racing for the world’s largest EV market in China. Photo illustration: Sharon Shi',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">Which is the largest electric market in the world?</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">NIO - Company Profile</a></li>',
    poster: 'https://m.wsj.net/video/20210104/010521nio2/010521nio2_960x540.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210104/010521nio2/010521nio2_960x540.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210516/pipelinecyberattack051621/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "How Vulnerable Is U.S. Energy Infrastructure to Future Cyberattacks?",
      "src": "https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621.en_US.vtt",
      "srclang": "en",
    }],
    name: 'How Vulnerable Is U.S. Energy Infrastructure to Future Cyberattacks?',
    epsiodes: '3',
    duration: '352',
    date: 'May 18',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'A cyberattack on the U.S.’s largest fuel pipeline on May 7 forced a shutdown that triggered a spike in gas prices and shortages in parts of the Southeast. WSJ explains just how vulnerable the nation’s critical energy infrastructure is to attack. Photo illustration: Liz Ornitz/WSJ',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">A cyber-attack exposes risks to America’s energy infrastructure</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">Cyberattack on pipeline spotlights holes in U.S. energy security</a></li>',
    poster: 'https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621_960x540.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210516/pipelinecyberattack051621/pipelinecyberattack051621_960x540.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210505/05042021streetwisesalim/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210505/05042021streetwisesalim/05042021streetwisesalim.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210505/05042021streetwisesalim/05042021streetwisesalim.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "50 Years\' Worth of Indexing",
      "src": "https://m.wsj.net/video/20210505/05042021streetwisesalim/05042021streetwisesalim.en_US.vtt",
      "srclang": "en",
    }],
    name: '50 Years\' Worth of Indexing',
    epsiodes: '4',
    duration: '175',
    date: 'May 19',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'Salim Ramji, global head of iShares and index investments for BlackRock, discusses innovations in indexing and how investors can balance active and passive management.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">Indexing Data to a Common Starting Point</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">Indexing: The Manual of Good Practice</a></li>',
    poster: 'https://m.wsj.net/video/20210505/05042021streetwisesalim/05042021streetwisesalim_960x540.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210505/05042021streetwisesalim/05042021streetwisesalim_960x540.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210426/04262021mbep97/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210426/04262021mbep97/04262021mbep97.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210426/04262021mbep97/04262021mbep97.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "Low Rates, Rising Yields & Your Money",
      "src": "https://m.wsj.net/video/20210426/04262021mbep97/04262021mbep97.en_US.vtt",
      "srclang": "en",
    }],
    name: 'Low Rates, Rising Yields & Your Money',
    epsiodes: '5',
    duration: '563',
    date: 'May 20',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'Ahead of this week\'s Fed meeting, Dana Peterson, chief economist with The Conference Board, unpacks the central bank\'s role amid the ongoing economic recovery. Plus, Lee Ferridge of State Street Global Markets discusses his firm\'s bull case for gold and big tech.',
    moredescription: '<li class="video"><a href="">Interest rate risk — When Interest rates Go up, Prices of Fixed-rate Bonds Fall</a></li>',
    poster: 'https://m.wsj.net/video/20210426/04262021mb97/04262021mb97_1280x720.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210426/04262021mb97/04262021mb97_1280x720.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210407/04072021swoil/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210407/04072021swoil/04072021swoil.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210407/04072021swoil/04072021swoil.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "What\'s next for oil prices? Here\'s what to know",
      "src": "https://m.wsj.net/video/20210407/04072021swoil/04072021swoil.en_US.vtt",
      "srclang": "en",
    }],
    name: 'What\'s next for oil prices? Here\'s what to know',
    epsiodes: '6',
    duration: '245',
    date: 'May 21',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'It\'s been nearly a year since the unprecedented collapse in oil prices and investors are wondering what\'s next. Here are the main price drivers to watch out for.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">Crude Oil Price Prediction - The Balance</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">Will Oil Prices Go Negative Again? Here Are 3 Things To Watch For</a></li>',
    poster: 'https://m.wsj.net/video/20210407/04062021swoil/04062021swoil_1280x720.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210407/04062021swoil/04062021swoil_1280x720.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210322/03222021mb92rev/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210322/03222021mb92rev/03222021mb92rev.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210322/03222021mb92rev/03222021mb92rev.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "Wall Street\'s Next Frontier",
      "src": "https://m.wsj.net/video/20210322/03222021mb92rev/03222021mb92rev.en_US.vtt",
      "srclang": "en",
    }],
    name: 'Wall Street\'s Next Frontier',
    epsiodes: '7',
    duration: '576',
    date: 'May 22',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'As investors pursue new opportunities in space, Dylan Taylor, CEO of Voyager Space Holdings, weighs in. Plus, Katie Nixon, CIO of Northern Trust Wealth Management, unpacks her bull case for U.S. stocks.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">Wall Street\'s Next Frontier – Covid-19 Pandemic Survival Guide</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">Crispr\'s Next Frontier: Treating Common Conditions</a></li>',
    poster: 'https://m.wsj.net/video/20210322/03222021mb92/03222021mb92_1280x720.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210322/03222021mb92/03222021mb92_1280x720.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210312/03122021barronsbitcoin/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210312/03122021barronsbitcoin/03122021barronsbitcoin.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210312/03122021barronsbitcoin/03122021barronsbitcoin.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "The Future of Bitcoin",
      "src": "https://m.wsj.net/video/20210312/03122021barronsbitcoin/03122021barronsbitcoin.en_US.vtt",
      "srclang": "en",
    }],
    name: 'The Future of Bitcoin',
    epsiodes: '8',
    duration: '152',
    date: 'May 22',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'Institutional investors are playing a major role in Bitcoin\'s recent uptick. Here\'s why, and what it means for the future.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">What Does the Future Hold for Cryptocurrency?</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">Lessons from Bitcoin price fall and future of the cryptocurrency</a></li>',
    poster: 'https://m.wsj.net/video/20210312/03122021barronsbitcoin/03122021barronsbitcoin_960x540.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210312/03122021barronsbitcoin/03122021barronsbitcoin_960x540.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210224/02242021swpc/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210224/02242021swpc/02242021swpc.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210224/02242021swpc/02242021swpc.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "Desktops are making a comeback during the pandemic",
      "src": "https://m.wsj.net/video/20210224/02242021swpc/02242021swpc.en_US.vtt",
      "srclang": "en",
    }],
    name: 'Desktops are making a comeback during the pandemic',
    epsiodes: '9',
    duration: '218',
    date: 'May 22',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'The remote-work boom has amplified growth in the PC market. Here are 3 ways the pandemic is changing the future of PC design.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">The COVID-driven comeback of the desktop computer</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">The computer comeback PCs surge due to COVID-19 - Deloitte</a></li><li class="video"><a href="">The Virtual Desktop Makes a Comeback</a></li>',
    poster: 'https://m.wsj.net/video/20210224/02242021swpc/02242021swpc_1280x720.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210224/02242021swpc/02242021swpc_1280x720.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210212/02122021swhospitality/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210212/02122021swhospitality/02122021swhospitality.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210212/02122021swhospitality/02122021swhospitality.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "3 major changes in the hotel industry due to COVID-19",
      "src": "https://m.wsj.net/video/20210212/02122021swhospitality/02122021swhospitality.en_US.vtt",
      "srclang": "en",
    }],
    name: '3 major changes in the hotel industry due to COVID-19',
    epsiodes: '10',
    duration: '235',
    date: 'May 22',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'Hotel owners lost nearly $46 billion in revenue last year. Here\'s how the industry is shifting its business model and pivoting towards tech to recover.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">COVID-19 Impact on the Global Hotel Industry</a></li><li class="document" data-hires-status="pending"><a href="" target="_blank">5 Important Ways the COVID-19 Pandemic has Changed the Travel and Hotel Industries</a></li>',
    poster: 'https://m.wsj.net/video/20210212/02122021swhospitality1/02122021swhospitality1_1280x720.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210212/02122021swhospitality1/02122021swhospitality1_1280x720.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210211/02112021exvday/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210211/02112021exvday/02112021exvday.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210211/02112021exvday/02112021exvday.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "3 money mistakes couples make and how to avoid them",
      "src": "https://m.wsj.net/video/20210211/02112021exvday/02112021exvday.en_US.vtt",
      "srclang": "en",
    }],
    name: '3 money mistakes couples make and how to avoid them',
    epsiodes: '11',
    duration: '171',
    date: 'May 22',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'Talking to your partner about your finances may not be romantic, but it is crucial to a healthy relationship. Here\'s how to spot and navigate common pitfalls.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">Couples and Money: 5 Common Money Mistakes Couples Make & How to Fix Them Without Fighting | Managing Marriage Problems</a></li>',
    poster: 'https://m.wsj.net/video/20210211/02112021exvday/02112021exvday_1280x720.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210211/02112021exvday/02112021exvday_1280x720.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210209/02092021swspace/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210209/02092021swspace/02092021swspace.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210209/02092021swspace/02092021swspace.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "How to invest in the space economy in 2021",
      "src": "https://m.wsj.net/video/20210209/02092021swspace/02092021swspace.en_US.vtt",
      "srclang": "en",
    }],
    name: 'How to invest in the space economy in 2021',
    epsiodes: '12',
    duration: '208',
    date: 'May 22',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'Scientific and technological advancements have made the space industry more accessible to everyday investors. Here\'s what to know.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">2021: A New Space Economy</a></li>',
    poster: 'https://m.wsj.net/video/20210209/02092021swspace/02092021swspace_1280x720.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210209/02092021swspace/02092021swspace_1280x720.jpg'
    }],
  }, {
    sources: [{
      src: 'https://m.wsj.net/video/20210208/02082021exshortsell/hls/manifest-hd-wifi.m3u8',
      type: 'application/x-mpegURL'
    }],
    textTracks: [{
      "kind": "captions",
      "label": "English Audio Descriptions",
      "src": "https://m.wsj.net/video/20210208/02082021exshortsell/02082021exshortsell.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "subtitles",
      "label": "English (United States) CC",
      "src": "https://m.wsj.net/video/20210208/02082021exshortsell/02082021exshortsell.en_US.vtt",
      "srclang": "en",
    }, {
      "kind": "chapters",
      "label": "What is short selling and should you do it?",
      "src": "https://m.wsj.net/video/20210208/02082021exshortsell/02082021exshortsell.en_US.vtt",
      "srclang": "en",
    }],
    name: 'What is short selling and should you do it?',
    epsiodes: '13',
    duration: '159',
    date: 'May 22',
    authors: 'The Economist',
    authorsImg: 'https://www.economist.com/engassets/ico/favicon.f1ea908894.ico',
    description: 'The GameStop saga brought short selling into the spotlight for many new investors. Here\'s what it is and why some investors use it.',
    moredescription: '<li class="developerForum" data-hires-status="pending"><a href="" target="_blank">Why short selling is legal in the US - CNBC</a></li>',
    poster: 'https://m.wsj.net/video/20210208/02082021exshortsell/02082021exshortsell_1280x720.jpg',
    thumbnail: [{
      src: 'https://m.wsj.net/video/20210208/02082021exshortsell/02082021exshortsell_1280x720.jpg'
    }],
  }];
}
