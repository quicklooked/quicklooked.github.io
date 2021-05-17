(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('global/document'), require('video.js')) : typeof define === 'function' && define.amd ? define(['global/document', 'video.js'], factory) : (global.videojsPlaylistUi = factory(global.document, global.videojs));
}(this, (function(document, videojs) {
  'use strict';
  document = document && document.hasOwnProperty('default') ? document['default'] : document;
  videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var version = "3.8.0";
  var dom = videojs.dom || videojs;
  var registerPlugin = videojs.registerPlugin || videojs.plugin;
  var indexOf = function indexOf(array, target) {
    for(var i = 0, length = array.length; i < length; i++) {
      if(array[i] === target) {
        return i;
      }
    }
    return -1;
  };
  var supportsCssPointerEvents = function() {
    var element = document.createElement('x');
    element.style.cssText = 'pointer-events:auto';
    return element.style.pointerEvents === 'auto';
  }();
  var defaults = {
    className: 'vjs-playlist',
    playOnSelect: false,
    supportsCssPointerEvents: supportsCssPointerEvents
  };
  var addSelectedClass = function addSelectedClass(el) {
    el.addClass('vjs-selected');
  };
  var removeSelectedClass = function removeSelectedClass(el) {
    el.removeClass('vjs-selected');
    if(el.thumbnail) {
      dom.removeClass(el.thumbnail, 'vjs-playlist-now-playing');
    }
  };
  var upNext = function upNext(el) {
    el.addClass('vjs-up-next');
  };
  var notUpNext = function notUpNext(el) {
    el.removeClass('vjs-up-next');
  };
  var createThumbnail = function createThumbnail(thumbnail) {
    if(!thumbnail) {
      var placeholder = document.createElement('div');
      placeholder.className = 'vjs-playlist-thumbnail vjs-playlist-thumbnail-placeholder';
      return placeholder;
    }
    var pictures = document.createElement('div');
    var picture = document.createElement('div');
    pictures.className = 'vdj';
    picture.className = 'vdk vdl';
    picture.style.width = '112px';
    picture.style.height = '112px';
    if(typeof thumbnail === 'string') {
      var img = document.createElement('img');
      img.ariaHidden = true;
      img.draggable = false;
      img.loading = 'lazy';
      img.src = thumbnail;
      img.setAttribute('data-test-id', "entity-image");
      img.alt = '';
      img.className = 'vdm vdak vdn';
      picture.appendChild(img);
      pictures.appendChild(picture);
    } else {
      for(var i = 0; i < thumbnail.length - 1; i++) {
        var _variant = thumbnail[i];
        var source = document.createElement('source');
        for(var prop in _variant) {
          source[prop] = _variant[prop];
        }
        picture.appendChild(source);
      }
      var variant = thumbnail[thumbnail.length - 1];
      var _img = document.createElement('img');
      _img.ariaHidden = true;
      _img.draggable = false;
      _img.loading = 'lazy';
      _img.setAttribute('data-test-id', "entity-image");
      _img.className = 'vdm vdak vdn';
      _img.alt = '';
      for(var _prop in variant) {
        _img[_prop] = variant[_prop];
      }
      picture.appendChild(_img);
      pictures.appendChild(picture);
    }
    return pictures;
  };
  var Component = videojs.getComponent('Component');
  var PlaylistMenuItem = function(_Component) {
    _inheritsLoose(PlaylistMenuItem, _Component);

    function PlaylistMenuItem(player, playlistItem, settings) {
      var _this;
      if(!playlistItem.item) {
        throw new Error('Cannot construct a PlaylistMenuItem without an item option');
      }
      playlistItem.showDescription = settings.showDescription;
      _this = _Component.call(this, player, playlistItem) || this;
      _this.item = playlistItem.item;
      _this.playOnSelect = settings.playOnSelect;
      _this.emitTapEvents();
      _this.on(['click', 'tap'], _this.switchPlaylistItem_);
      _this.on('keydown', _this.handleKeyDown_);
      return _this;
    }
    var _proto = PlaylistMenuItem.prototype;
    _proto.handleKeyDown_ = function handleKeyDown_(event) {
      if(event.which === 13 || event.which === 32) {
        this.switchPlaylistItem_();
      }
    };
    _proto.switchPlaylistItem_ = function switchPlaylistItem_(event) {
      this.player_.playlist.currentItem(indexOf(this.player_.playlist(), this.item));
      if(this.playOnSelect) {
        this.player_.play();
      }
    };
    _proto.createEl = function createEl() {
      var vdfitem = document.createElement('div');
      vdfitem.className = 'vdf';
      var hritem = document.createElement('hr');
      hritem.className = 'vdg';
      hritem.setAttribute('aria-hidden', "true");
      vdfitem.appendChild(hritem);
      var li = document.createElement('div');
      var item = this.options_.item;
      var showDescription = this.options_.showDescription;
      if(typeof item.data === 'object') {
        var dataKeys = Object.keys(item.data);
        dataKeys.forEach(function(key) {
          var value = item.data[key];
          li.dataset[key] = value;
        });
      }
      li.className = 'vdh vdi';
      li.setAttribute('tabIndex', 0);
      li.setAttribute('data-testid', "episode-0");
      li.setAttribute('draggable', "true");
      this.thumbnail = createThumbnail(item.thumbnail);
      li.appendChild(this.thumbnail);
      if(item.duration) {
        var durationstime = document.createElement('div');
        var durations = document.createElement('div');
        var duration = document.createElement('p');
        var time = videojs.formatTime(item.duration);
        var datesss = item.date;
        var dates = document.createElement('p');
        dates.className = 'vdx vdai';
        dates.setAttribute('as', 'p');
        dates.appendChild(document.createTextNode(datesss));
        durationstime.className = 'vdv';
        durations.className = 'vdw';
        duration.className = 'vdx vdai';
        duration.setAttribute('as', 'p');
        duration.style = "margin-top: 0px !important;";
        duration.setAttribute('datetime', 'PT0H0M' + item.duration + 'S');
        duration.appendChild(document.createTextNode(time));
        durations.appendChild(dates);
        durations.appendChild(duration);
        durationstime.appendChild(durations);
        var vdy = document.createElement('div');
        var vdybnt = document.createElement('button');
        vdy.className = 'vdy';
        vdybnt.setAttribute('type', 'button');
        vdybnt.setAttribute('aria-haspopup', 'menu');
        vdybnt.setAttribute('aria-label', 'More');
        vdybnt.className = 'vdz';
        vdybnt.setAttribute('title', 'More');
        vdybnt.innerHTML = "<svg role=\"img\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" class=\"Svg-ulyrgf-0 cMigZB\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path d=\"M4.5 11c-.8 0-1.5.7-1.5 1.5S3.7 14 4.5 14 6 13.3 6 12.5 5.3 11 4.5 11zm15 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM12 11c-.8 0-1.5.7-1.5 1.5S11.2 14 12 14s1.5-.7 1.5-1.5S12.8 11 12 11z\"></path></svg>";
        vdy.appendChild(vdybnt);
        li.appendChild(vdy);
        var vdaa = document.createElement('div');
        var vdaabtn = document.createElement('button');
        var vdaabtnsvg = document.createElement('svg');
        vdaabtn.className = 'vdab vdac';
        vdaabtn.setAttribute('aria-label', 'Share');
        vdaabtn.setAttribute('aria-hidden', 'false');
        vdaabtn.setAttribute('tabindex', '0');
        vdaabtn.setAttribute('title', 'Share');
        vdaabtn.style = '--size:24px;';
        vdaabtn.innerHTML = "<svg role=\"img\" focusable=\"false\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" class=\"Svg-sc-1usfroi-0 hShlue\"><polyline points=\"8 7 12 3 16 7\" fill=\"none\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"3\" fill=\"none\"></line><polyline points=\"16 10.5 19.5 10.5 19.5 21.5 4.5 21.5 4.5 10.5 8 10.5\" fill=\"none\"></polyline></svg>";
        vdaa.className = 'vdaa';
        vdaa.appendChild(vdaabtn);
        li.appendChild(vdaa);
        li.appendChild(durationstime);
      }
      var titleContainerEl = document.createElement('div');
      titleContainerEl.className = 'vdo';
      var palt = document.createElement('div');
      palt.className = 'vdad';
      var paltbnt = document.createElement('button');
      paltbnt.className = 'vdae vdaf';
      paltbnt.setAttribute('aria-label', 'Play');
      paltbnt.setAttribute('data-testid', 'play-button');
      paltbnt.style = "--size:32px;";
      var paltbntsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      paltbntsvg.setAttribute('height', '16');
      paltbntsvg.setAttribute('role', 'img');
      paltbntsvg.setAttribute('width', '16');
      paltbntsvg.setAttribute('viewBox', '0 0 24 24');
      paltbntsvg.setAttribute('aria-hidden', 'true');
      paltbntsvg.innerHTML = "<polygon points='21.57 12 5.98 3 5.98 21 21.57 12' fill='currentColor'></polygon>";
      paltbnt.appendChild(paltbntsvg);
      palt.appendChild(paltbnt);
      li.appendChild(palt);
      li.appendChild(titleContainerEl);
      var titleEln = document.createElement('a');
      var titleEl = document.createElement('h4');
      var titleText = item.name || this.localize('Untitled Video');
      titleEln.className = 'vdp';
      titleEl.className = 'vdq vdr';
      titleEl.appendChild(document.createTextNode(titleText));
      titleEl.setAttribute('as', 'h4');
      titleEln.appendChild(titleEl);
      titleContainerEl.appendChild(titleEln);
      if(item.description) {
        var descriptionEld = document.createElement('div');
        var descriptionEl = document.createElement('p');
        var descriptionText = item.description || '';
        descriptionEld.className = 'vds';
        descriptionEl.className = 'vdt vdu';
        descriptionEl.appendChild(document.createTextNode(descriptionText));
        descriptionEld.appendChild(descriptionEl);
        titleContainerEl.appendChild(descriptionEld);
      }
      vdfitem.appendChild(li);
      return vdfitem;
    };
    return PlaylistMenuItem;
  }(Component);
  var PlaylistMenu = function(_Component2) {
    _inheritsLoose(PlaylistMenu, _Component2);

    function PlaylistMenu(player, options) {
      var _this2;
      if(!player.playlist) {
        throw new Error('videojs-playlist is required for the playlist component');
      }
      _this2 = _Component2.call(this, player, options) || this;
      _this2.items = [];
      if(!videojs.browser.TOUCH_ENABLED) {
        _this2.addClass('vjs-mouse');
      }
      _this2.on(player, ['loadstart', 'playlistchange', 'playlistsorted'], function(event) {
        _this2.update();
      });
      _this2.on(player, 'adstart', function() {
        _this2.addClass('vjs-ad-playing');
      });
      _this2.on(player, 'adend', function() {
        _this2.removeClass('vjs-ad-playing');
      });
      _this2.on('dispose', function() {
        _this2.empty_();
        player.playlistMenu = null;
      });
      _this2.on(player, 'dispose', function() {
        _this2.dispose();
      });
      return _this2;
    }
    var _proto2 = PlaylistMenu.prototype;
    _proto2.createEl = function createEl() {
      return dom.createEl('div', {
        className: this.options_.className
      });
    };
    _proto2.empty_ = function empty_() {
      if(this.items && this.items.length) {
        this.items.forEach(function(i) {
          return i.dispose();
        });
        this.items.length = 0;
      }
    };
    _proto2.createPlaylist_ = function createPlaylist_() {
      var playlist = this.player_.playlist() || [];
      var list = this.el_.querySelector('.vjs-playlist-item-list');
      var overlay = this.el_.querySelector('.vjs-playlist-ad-overlay');
      if(!list) {
        list = document.createElement('div');
        this.el_.appendChild(list);
      }
      this.empty_(); // create new items
      for(var i = 0; i < playlist.length; i++) {
        var item = new PlaylistMenuItem(this.player_, {
          item: playlist[i]
        }, this.options_);
        this.items.push(item);
        list.appendChild(item.el_);
      }
      if(!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'vjs-playlist-ad-overlay';
        list.appendChild(overlay);
      } else {
        list.appendChild(overlay);
      }
      var selectedIndex = this.player_.playlist.currentItem();
      if(this.items.length && selectedIndex >= 0) {
        addSelectedClass(this.items[selectedIndex]);
        var thumbnail = this.items[selectedIndex].$('.vjs-playlist-thumbnail');
        if(thumbnail) {
          dom.addClass(thumbnail, 'vjs-playlist-now-playing');
        }
      }
    };
    _proto2.update = function update() {
      var playlist = this.player_.playlist();
      if(this.items.length !== playlist.length) {
        this.createPlaylist_();
        return;
      }
      for(var i = 0; i < this.items.length; i++) {
        if(this.items[i].item !== playlist[i]) {
          this.createPlaylist_();
          return;
        }
      }
      var currentItem = this.player_.playlist.currentItem();
      for(var _i = 0; _i < this.items.length; _i++) {
        var item = this.items[_i];
        if(_i === currentItem) {
          addSelectedClass(item);
          if(document.activeElement !== item.el()) {
            dom.addClass(item.thumbnail, 'vjs-playlist-now-playing');
          }
          notUpNext(item);
        } else if(_i === currentItem + 1) {
          removeSelectedClass(item);
          upNext(item);
        } else {
          removeSelectedClass(item);
          notUpNext(item);
        }
      }
    };
    return PlaylistMenu;
  }(Component);
  var hasChildEls = function hasChildEls(el) {
    for(var i = 0; i < el.childNodes.length; i++) {
      if(dom.isEl(el.childNodes[i])) {
        return true;
      }
    }
    return false;
  };
  var findRoot = function findRoot(className) {
    var all = document.querySelectorAll('.' + className);
    var el;
    for(var i = 0; i < all.length; i++) {
      if(!hasChildEls(all[i])) {
        el = all[i];
        break;
      }
    }
    return el;
  };
  var playlistUi = function playlistUi(options) {
    var player = this;
    if(!player.playlist) {
      throw new Error('videojs-playlist plugin is required by the videojs-playlist-ui plugin');
    }
    if(dom.isEl(options)) {
      videojs.log.warn('videojs-playlist-ui: Passing an element directly to playlistUi() is deprecated, use the "el" option instead!');
      options = {
        el: options
      };
    }
    options = videojs.mergeOptions(defaults, options);
    if(player.playlistMenu) {
      var el = player.playlistMenu.el();
      if(el) {
        var parentNode = el.parentNode;
        var nextSibling = el.nextSibling;
        player.playlistMenu.dispose();
        dom.emptyEl(el);
        if(nextSibling) {
          parentNode.insertBefore(el, nextSibling);
        } else {
          parentNode.appendChild(el);
        }
        options.el = el;
      }
    }
    if(!dom.isEl(options.el)) {
      options.el = findRoot(options.className);
    }
    player.playlistMenu = new PlaylistMenu(player, options);
  };
  videojs.registerComponent('PlaylistMenu', PlaylistMenu);
  videojs.registerComponent('PlaylistMenuItem', PlaylistMenuItem);
  registerPlugin('playlistUi', playlistUi);
  playlistUi.VERSION = version;
  return playlistUi;
})));
