document.addEventListener('DOMContentLoaded', () => { 
  const controls = ["play-large", "mute", "captions", "current-time", "progress", "duration", "fullscreen"]
  const settings = ['captions']
  const i18n = { speed: 'Speed' }
  const keyboard = { global: true }
  const tooltips = { controls: false }
  const	thumbnail = { enabled: true }
  const captions = { active: true }
  const vimeo = { referrerPolicy: 'no-referrer' }
  const fullscreen = { enabled: true , fallback: true , iosNative: false, container: '#container'}
  const speed =  { selected: 1, options: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
  const player = new Plyr('#player', { debug: true , title: '' , iconUrl: 'https://cdn.plyr.io/3.6.7/plyr.svg' , controls , settings , i18n , thumbnail,  speed , keyboard , tooltips , captions , vimeo , fullscreen });
  window.player = player;
  player.volume = 1;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
