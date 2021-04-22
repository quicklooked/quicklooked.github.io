document.addEventListener('DOMContentLoaded', () => { 
  const controls = ['play-large', 'play', 'progress', 'current-time', 'duration', 'volume', 'fullscreen']
  const settings = ['speed']
  const i18n = { speed: 'Speed' }
  const keyboard = { global: true }
  const tooltips = { controls: true }
  const captions = { active: true }
  const vimeo = { referrerPolicy: 'no-referrer' }
  const fullscreen = { enabled: true , fallback: true , iosNative: false }
  const speed =  { selected: 1, options: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
  const player = new Plyr('#player', { debug: true , title: 'Quicklook Video Player' , iconUrl: '/assets/images/fit/32/1_m-R_BkNf1Qjr1YbyOIJY2w.png' , controls , settings , i18n , speed , keyboard , tooltips , captions , vimeo , fullscreen });
  window.player = player;
  player.volume = 0.5;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
