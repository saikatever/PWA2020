var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html, customElement } from 'lit-element';
// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';
let AppHome = class AppHome extends LitElement {
    static get styles() {
        return css `
      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 22em;
      }

      #welcomeBlock img {
        width: 6em;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      @media(spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `;
    }
    constructor() {
        super();
    }
    share() {
        if (navigator.share) {
            navigator.share({
                title: 'PWABuilder pwa-starter',
                text: 'Check out the PWABuilder pwa-starter!',
                url: 'https://github.com/pwa-builder/pwa-starter',
            });
        }
    }
    render() {
        return html `
      <div>

        <div id="welcomeBlock">

          <img src="assets/icons/icon_512.png" alt="app icon">
          <h2>Welcome!</h2>

          <p>
            Welcome to the lit-element edition of the <a href="https://pwabuilder.com">PWABuilder</a> pwa-starter!

            Be sure to head back to <a href="https://pwabuilder.com">PWABuilder</a> when you are ready to ship this PWA to the Microsoft, Google Play and Samsung Galaxy stores!
          </p>

          ${'share' in navigator ? html `<button @click="${this.share}">Share this Starter!</button>` : null}
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
    }
};
AppHome = __decorate([
    customElement('app-home')
], AppHome);
export { AppHome };
