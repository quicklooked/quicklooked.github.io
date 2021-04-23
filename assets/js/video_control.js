document.addEventListener('DOMContentLoaded', () => { 
  const controls = ["play-large", "mute", "captions", "current-time", "progress", "duration", "fullscreen"]
  const settings = ['captions']
  const i18n = { speed: 'Speed' }
  const keyboard = { global: true }
  const tooltips = { controls: false }
  const	thumbnail = { enabled:true, pic_num: 184, width: 178, height: 100, col: 7, row: 7, offsetX:0, offsetY:0, urls: ['https://cdn.plyr.io/static/demo/thumbs/100p-00001.jpg', 'https://cdn.plyr.io/static/demo/thumbs/100p-00002.jpg', 'https://cdn.plyr.io/static/demo/thumbs/100p-00003.jpg', 'https://cdn.plyr.io/static/demo/thumbs/100p-00004.jpg']	},
  const captions = { active: true }
  const vimeo = { referrerPolicy: 'no-referrer' }
  const fullscreen = { enabled: true , fallback: true , iosNative: false, container: '#container'}
  const speed =  { selected: 1, options: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
  const player = new Plyr('#player', { debug: true , title: '' , iconUrl: 'https://cdn.plyr.io/3.6.7/plyr.svg' , controls , settings , i18n , speed , keyboard , tooltips , captions , vimeo , fullscreen });
  window.player = player;
  player.volume = 1;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
