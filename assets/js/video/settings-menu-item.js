import videojs from 'video.js';
const MenuItem = videojs.getComponent("MenuItem");
const playbackRateMenuButton = videojs.getComponent("PlaybackRateMenuButton");
const component = videojs.getComponent("Component");
const toTitleCase = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
class SettingsMenuItem extends MenuItem {
  constructor(player, options, entry) {
    super(player, options);
    const subMenuName = toTitleCase(entry);
    const SubMenuComponent = videojs.getComponent(subMenuName);
    if (!SubMenuComponent) {
      throw new Error(`Component ${subMenuName} does not exist`);
    }
    this.subMenu = new SubMenuComponent(this.player(), options);
    const update = videojs.bind(this, this.update);
    const updateAfterTimeout = function () {
      setTimeout(update, 0);
    };
    for (let item of this.subMenu.menu.children()) {
      if (!(item instanceof component)) {
        continue;
      }
      item.on("click", updateAfterTimeout);
    }
    this.update();
  }
  createEl() {
    const el = videojs.createEl("li", {
      className: "vjs-menu-item"
    });
    this.settingsSubMenuTitleEl_ = videojs.createEl("div", {
      className: "vjs-settings-sub-menu-title"
    });
    el.appendChild(this.settingsSubMenuTitleEl_);
    this.settingsSubMenuValueEl_ = videojs.createEl("div", {
      className: "vjs-settings-sub-menu-value"
    });
    el.appendChild(this.settingsSubMenuValueEl_);
    this.settingsSubMenuEl_ = videojs.createEl("div", {
      className: "vjs-settings-sub-menu vjs-hidden"
    });
    el.appendChild(this.settingsSubMenuEl_);
    return el;
  }
  handleClick() {
    videojs.dom.removeClass(this.el_, "open");
    super.handleClick();
    if (videojs.dom.hasClass(this.settingsSubMenuEl_, "vjs-hidden")) {
      videojs.dom.removeClass(this.settingsSubMenuEl_, "vjs-hidden");
    } else {
      videojs.dom.addClass(this.settingsSubMenuEl_, "vjs-hidden");
    }
  }
  update() {
    this.settingsSubMenuTitleEl_.innerHTML = this.subMenu.controlText_ + ":";
    this.settingsSubMenuEl_.appendChild(this.subMenu.menu.el_);
    if (this.subMenu instanceof playbackRateMenuButton) {
      this.settingsSubMenuValueEl_.innerHTML = this.subMenu.labelEl_.innerHTML;
    } else {
      for (let subMenuItem of this.subMenu.menu.children_) {
        if (!(subMenuItem instanceof component)) {
          continue;
        }
        if (
          subMenuItem.options_.selected ||
          subMenuItem.hasClass("vjs-selected")
        ) {
          this.settingsSubMenuValueEl_.innerHTML = subMenuItem.options_.label;
        }
      }
    }
  }
  hideSubMenu() {
    if (videojs.dom.hasClass(this.el_, "open")) {
      videojs.dom.addClass(this.settingsSubMenuEl_, "vjs-hidden");
      videojs.dom.removeClass(this.el_, "open");
    }
  }
}
SettingsMenuItem.prototype.contentElType = "button";
videojs.registerComponent("SettingsMenuItem", SettingsMenuItem);
export default SettingsMenuItem;
