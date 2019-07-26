import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-menu',
  styleUrl: 'menu.css'
})
export class menu {
  @Element() el;

  openMenu = () => {
    this.el.querySelector('ion-menu-controller').open();
  }

  render() {
    return [
      <ion-menu side="start" contentId="main">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>
              <ion-icon name="home" slot="start"></ion-icon>
              <ion-label>Home</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="person" slot="start"></ion-icon>
              <ion-label>Profile</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="chatbubbles" slot="start"></ion-icon>
              <ion-label>Messages</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="settings" slot="start"></ion-icon>
              <ion-label>Settings</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>,

      <div class="ion-page" id="main">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-button expand="block" onClick={this.openMenu}>Open Menu</ion-button>
        </ion-content>
      </div>,

      <ion-menu-controller />
    ]
  }
}