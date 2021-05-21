(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('global/document'), require('video.js')) : typeof define === 'function' && define.amd ? define(['global/document', 'video.js'], factory) : (global.videojsPlaylistUi = factory(global.document, global.videojs));
  }
  (this, (function(document, videojs) {
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
      }
      ();
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
      var pic_coverc = document.createElement('div');
      var pic_coverd = document.createElement('div');
      pic_coverc.className = "FixedRatioDiv__fixedRatioDiv___1_-Ez";
      pic_coverc.style.paddingTop = "56.25%";
      pic_coverd.className = "ImgLoader__imgLoaderWrapper___1aFip";
      if(typeof thumbnail === 'string') {
        var img = document.createElement('img');
        img.className = 'VideoCard__videoImage___LaG5l ImgLoader__imgPlaceholder___3weo0';
        img.src = thumbnail;
        pic_coverd.appendChild(img);
        pic_coverc.appendChild(pic_coverd);
      } else {
        var variant = thumbnail[thumbnail.length - 1];
        var _img = document.createElement('img');
        _img.className = 'VideoCard__videoImage___LaG5l ImgLoader__imgPlaceholder___3weo0';
        for(var _prop in variant) {
          _img[_prop] = variant[_prop];
        }
        pic_coverd.appendChild(_img);
        pic_coverc.appendChild(pic_coverd);
      }
      return pic_coverc;
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
          li.className = 'col medium-4 large-3 xlarge-2 xsmall-12 small-6';
          li.setAttribute('tabIndex', 0);
          this.thumbnail = createThumbnail(item.thumbnail);
          var pic_covera = document.createElement('a');
          var pic_coverb = document.createElement('div');
          pic_covera.className = "Card__card___2FbPd VideoCard__videoCard___1_mDZ VideoCard__horizontalDisplayOnXSmall___1UhhD";
          pic_coverb.className = "VideoCard__videoImageWrapper___3Zlzf";
          pic_coverb.appendChild(this.thumbnail);
          pic_covera.appendChild(pic_coverb);
          li.appendChild(pic_covera);
          if(item.duration) {
            var durations = document.createElement('div');
            var duration = document.createElement('div');
            var time = videojs.formatTime(item.duration);
            duration.className = 'PlayingIndicatorTag__videoDuration___3E0Bu';
            duration.setAttribute('datetime', 'PT0H0M' + item.duration + 'S');
            duration.appendChild(document.createTextNode(time));
            durations.className = 'PlayingIndicatorTag__playingIndicatorTag___193h3 PlayingIndicatorTag__horizontalCards___1wcU- VideoCard__playingTag___39XFp';
            durations.appendChild(duration);
            this.thumbnail.appendChild(durations);
          }
          var nowPlayingEl = document.createElement('div');
          var nowPlayingText = this.localize('Playing now');
          nowPlayingEl.className = 'PlayingIndicatorTag__playingIndicatorTag___193h3 PlayingIndicatorTag__horizontalCards___1wcU- VideoCard__playingTag___39XFp PlayingIndicatorTag__highlightedBackground___3UDd7';
          nowPlayingEl.appendChild(document.createTextNode(nowPlayingText));
          nowPlayingEl.setAttribute('title', nowPlayingText);
          durations.appendChild(nowPlayingEl);
          var titleContainerEl = document.createElement('div');
          titleContainerEl.className = 'VideoCard__videoInfo___3ftYk';
          var authorsinfor = document.createElement('div');
          authorsinfor.className = 'VideoCard__videoChannelInfo___3b-l0';
          var imgauthors = document.createElement('img');
          imgauthors.className = 'SmallLogo__smallLogo___SNcSq VideoCard__videoChannelLogo___1vhL0';
          imgauthors.setAttribute('src', item.authorsImg);
          imgauthors.setAttribute('alt', item.authors);
          imgauthors.setAttribute('title', item.authors);
          authorsinfor.appendChild(imgauthors);
          var authorsname = document.createElement('span');
          authorsname.className = 'VideoCard__videoChannelName___3ktxc';
          authorsname.setAttribute('title', item.authors);
          authorsname.innerHTML = item.authors;
          authorsinfor.appendChild(authorsname);
          var verified_partner = document.createElement('span');
          verified_partner.className = 'SVGInline Icon__SVGInline___1nuux VideoCard__videoChannelVerifiedSymbol___3yX3c';
          authorsname.setAttribute('title', 'Verified Partner');
          verified_partner.innerHTML = '<svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Checkmark" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Explore-VerifiedPartner" transform="translate(-114.000000, -321.000000)" fill="#FFFFFF"><g id="Chekmark-Copy" transform="translate(114.000000, 321.000000)"><path d="M6,11.5 C2.96243388,11.5 0.5,9.03756612 0.5,6 C0.5,2.96243388 2.96243388,0.5 6,0.5 C9.03756612,0.5 11.5,2.96243388 11.5,6 C11.5,9.03756612 9.03756612,11.5 6,11.5 Z M3.67525589,5.65073262 L2.72476852,6.78116419 L5.30310359,8.94907508 L9.26825187,4.17163614 L8.13177254,3.22838828 L5.11591605,6.86206582 L3.67525589,5.65073262 Z" id="Combined-Shape"></path></g></g></g></svg>';
          authorsinfor.appendChild(verified_partner);
          pic_covera.appendChild(titleContainerEl);
          var upNextEl = document.createElement('div');
          var upNextText = this.localize('Playing next');
          upNextEl.className = 'PlayingIndicatorTag__playingIndicatorTag___193h3 PlayingIndicatorTag__horizontalCards___1wcU- VideoCard__playingTag___39XFp PlayingIndicatorTag__mutedBackground___1ZYg5';
          upNextEl.appendChild(document.createTextNode(upNextText));
          upNextEl.setAttribute('title', upNextText);
          durations.appendChild(upNextEl);
          var titleEl = document.createElement('div');
          var titleText = item.name || this.localize('Untitled Video');
          titleEl.className = 'VideoCard__videoTitle___Yclps';
          titleEl.appendChild(document.createTextNode(titleText));
          titleEl.setAttribute('title', titleText);
          titleContainerEl.appendChild(titleEl);
          titleContainerEl.appendChild(authorsinfor);
          if(showDescription) {
            var descriptionEl = document.createElement('div');
            var descriptionText = item.description || '';
            descriptionEl.className = 'vjs-playlist-description';
            descriptionEl.appendChild(document.createTextNode(descriptionText));
            descriptionEl.setAttribute('title', descriptionText);
            titleContainerEl.appendChild(descriptionEl);
          }
          return li;
        };
        return PlaylistMenuItem;
      }
      (Component);
    var PlaylistMenu = function(_Component2) {
        _inheritsLoose(PlaylistMenu, _Component2);

        function PlaylistMenu(player, options) {
          var _this2;
          if(!player.playlist) {
            throw new Error('videojs-playlist is required for the playlist component');
          }
          _this2 = _Component2.call(this, player, options) || this;
          _this2.items = [];
          if(options.supportsCssPointerEvents) {
            _this2.addClass('vjs-csspointerevents');
          }
          _this2.createPlaylist_();
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
          var list = this.el_.querySelector('.row');
          var overlay = this.el_.querySelector('.row');
          var overlays = this.el_.querySelector('.row');
          if(!list) {
            list = document.createElement('div');
            list.className = 'row';
            this.el_.appendChild(list);
            if(!overlay) {
              overlay = document.createElement('div');
              overlays = document.createElement('div');
              overlay.className = 'col xsmall-6 medium-4 large-3 xlarge-2 DiscoveryVideoSection__videoSectionTitleDisplayGenericCard___XdNKN';
              overlays.className = 'col';
              overlay.innerHTML = '<a href="/@the_economist" class="Card__card___2FbPd DiscoveryVideoSection__genericCard___1cam_ GenericCard__genericCard___2YvD4 Card__nohover___FjJE7" style="background-color: rgba(35,35,35,.95);color: #f5f5f7;"><div class="GenericCard__logo___2YleC" style="background-image: url(https://www.economist.com/engassets/ico/favicon.f1ea908894.ico);"></div><div class="GenericCard__tagline___Du7dd">Top Stories in</div><div class="GenericCard__title___3AHSD" title="The Economist">The Economist</div></a>';
              overlays.innerHTML = '<div class="DiscoveryVideoSection__videoSectionTitleContainer___1nlk- DiscoveryVideoSection__videoSectionTitleDisplayRawTitle___rBHam"><a class="VideoListSectionTitle__sectionTitle___3sko8 QueueTitle__queueTitle___3s7az" href="/@the_economist"><span class="VideoListSectionTitle__sectionTitleTagline___M2_PZ">Playlist</span><h2 class="VideoListSectionTitle__sectionTitleTitle___1f_0x">Top Stories in The Economist! <span class="DSIcon__dsIcon___2_fah VideoListSectionTitle__sectionTitleIcon___11AqF"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g><path id="right-arrow-a" fill="#f5f5f7" d="M13.5857864,12 L9.29289322,7.70710678 C8.90236893,7.31658249 8.90236893,6.68341751 9.29289322,6.29289322 C9.68341751,5.90236893 10.3165825,5.90236893 10.7071068,6.29289322 L15.7071068,11.2928932 C16.0976311,11.6834175 16.0976311,12.3165825 15.7071068,12.7071068 L10.7071068,17.7071068 C10.3165825,18.0976311 9.68341751,18.0976311 9.29289322,17.7071068 C8.90236893,17.3165825 8.90236893,16.6834175 9.29289322,16.2928932 L13.5857864,12 Z"></path></g></svg></span></h2></a></div>';
              list.appendChild(overlays);
              list.appendChild(overlay);
            } else {
              list.appendChild(overlays);
              list.appendChild(overlay);
            }
          }
          this.empty_();
          for(var i = 0; i < playlist.length; i++) {
            var item = new PlaylistMenuItem(this.player_, {
              item: playlist[i]
            }, this.options_);
            this.items.push(item);
            list.appendChild(item.el_);
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
      }
      (Component);
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
