import videojs from "video.js";
import SettingsMenuItem from "/assets/js/video/settings-menu-item.js";
const MenuButton = videojs.getComponent("MenuButton");
const Menu = videojs.getComponent("Menu");
const Component = videojs.getComponent("Component");
class SettingsMenuButton extends MenuButton {
  constructor(player, options) {
    super(player, options);
    this.el_.setAttribute("aria-label", "Settings Menu");
    this.on("mouseleave", videojs.bind(this, this.hideChildren));
  }
  buildCSSClass() {
    return `vjs-settings-menu vjs-icon-cog ${super.buildCSSClass()}`;
  }
  createMenu() {
    let menu = new Menu(this.player());
    let entries = this.options_.entries;
    if (entries) {
      const openSubMenu = function () {
        if (videojs.hasClass(this.el_, "open")) {
          videojs.removeClass(this.el_, "open");
        } else {
          videojs.addClass(this.el_, "open");
        }
      };
      for (let entry of entries) {
        let settingsMenuItem = new SettingsMenuItem(
          this.player(),
          this.options_,
          entry
        );
        menu.addChild(settingsMenuItem);
        settingsMenuItem.on("click", videojs.bind(this, this.hideChildren));
        settingsMenuItem.on("click", openSubMenu);
      }
    }
    return menu;
  }
  hideChildren() {
    for (let menuChild of this.menu.children()) {
      menuChild.hideSubMenu();
    }
  }
}
SettingsMenuButton.prototype.controlText_ = "Settings Menu";
Component.registerComponent("SettingsMenuButton", SettingsMenuButton);
export default SettingsMenuButton;
