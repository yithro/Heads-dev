<template>
    <div class="mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base metaclass">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div class="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div class="mdl-layout--large-screen-only mdl-layout__header-row">
          <h3>Name &amp; Title</h3>
        </div>
        <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
          <a href="#overview" class="mdl-layout__tab is-active">Overview</a>
          <a href="#features" class="mdl-layout__tab">Features</a>
          <a href="#features" class="mdl-layout__tab">Details</a>
          <a href="#features" class="mdl-layout__tab">Technology</a>
          <a href="#features" class="mdl-layout__tab">FAQ</a>
          <!-- <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
            <i class="material-icons" role="presentation">add</i>
            <span class="visuallyhidden">Add</span>
          </button> -->
        </div>
      </header>
      <main class="mdl-layout__content">
        <div class="mdl-layout__tab-panel is-active" id="overview">
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
              <i class="material-icons">play_circle_filled</i>
            </header>
            <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div class="mdl-card__supporting-text">
                <h4>Features</h4>
                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
              </div>
              <div class="mdl-card__actions">
                <a href="#" class="mdl-button">Read our features</a>
              </div>
            </div>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
              <i class="material-icons">more_vert</i>
            </button>
            <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn1">
              <li class="mdl-menu__item">Lorem</li>
              <li class="mdl-menu__item" disabled>Ipsum</li>
              <li class="mdl-menu__item">Dolor</li>
            </ul>
          </section>
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div class="mdl-card mdl-cell mdl-cell--12-col">
              <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <h4 class="mdl-cell mdl-cell--12-col">Details</h4>
                <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div class="section__circle-container__circle mdl-color--primary"></div>
                </div>
                <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
                <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div class="section__circle-container__circle mdl-color--primary"></div>
                </div>
                <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
                <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div class="section__circle-container__circle mdl-color--primary"></div>
                </div>
                <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
              </div>
              <div class="mdl-card__actions">
                <a href="#" class="mdl-button">Read our features</a>
              </div>
            </div>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn2">
              <i class="material-icons">more_vert</i>
            </button>
            <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn2">
              <li class="mdl-menu__item">Lorem</li>
              <li class="mdl-menu__item" disabled>Ipsum</li>
              <li class="mdl-menu__item">Dolor</li>
            </ul>
          </section>
          <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div class="mdl-card mdl-cell mdl-cell--12-col">
              <div class="mdl-card__supporting-text">
                <h4>Technology</h4>
                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse. Pariatur occaecat nisi laboris tempor laboris eiusmod qui id Lorem esse commodo in. Exercitation aute dolore deserunt culpa consequat elit labore incididunt elit anim.
              </div>
              <div class="mdl-card__actions">
                <a href="#" class="mdl-button">Read our features</a>
              </div>
            </div>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn3">
              <i class="material-icons">more_vert</i>
            </button>
            <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn3">
              <li class="mdl-menu__item">Lorem</li>
              <li class="mdl-menu__item" disabled>Ipsum</li>
              <li class="mdl-menu__item">Dolor</li>
            </ul>
          </section>
          <section class="section--footer mdl-color--white mdl-grid">
            <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div class="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div class="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Lorem ipsum dolor sit amet</h5>
              Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
            <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div class="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div class="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Lorem ipsum dolor sit amet</h5>
              Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
          </section>
        </div>
        <div class="mdl-layout__tab-panel" id="features">
          <section class="section--center mdl-grid mdl-grid--no-spacing">
                      </section>
        </div>
        <footer class="mdl-mega-footer">
          <div class="mdl-mega-footer--middle-section">
            <div class="mdl-mega-footer--drop-down-section">
              <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer--heading">Features</h1>
              <ul class="mdl-mega-footer--link-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Updates</a></li>
              </ul>
            </div>
            <div class="mdl-mega-footer--drop-down-section">
              <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer--heading">Details</h1>
              <ul class="mdl-mega-footer--link-list">
                <li><a href="#">Spec</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>
            <div class="mdl-mega-footer--drop-down-section">
              <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer--heading">Technology</h1>
              <ul class="mdl-mega-footer--link-list">
                <li><a href="#">How it works</a></li>
                <li><a href="#">Patterns</a></li>
                <li><a href="#">Usage</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contracts</a></li>
              </ul>
            </div>
            <div class="mdl-mega-footer--drop-down-section">
              <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer--heading">FAQ</h1>
              <ul class="mdl-mega-footer--link-list">
                <li><a href="#">Questions</a></li>
                <li><a href="#">Answers</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div class="mdl-mega-footer--bottom-section">
            <div class="mdl-logo">
              More Information
            </div>
            <ul class="mdl-mega-footer--link-list">
              <li><a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy and Terms</a></li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
        <a href="https://github.com/google/material-design-lite/blob/mdl-1.x/templates/text-only/" target="_blank" id="view-source" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--accent mdl-color-text--accent-contrast">View Source</a>
    </div> 
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {};
  }
};
</script>

<style scoped>
.metaclass {
  font-family: "Roboto", "Helvetica", sans-serif;
  margin: 0;
  padding: 0;
}
.mdl-demo .mdl-layout__header-row {
  padding-left: 40px;
}
.mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {
  font-size: inherit;
}
.mdl-demo .mdl-layout__tab-bar-button {
  display: none;
}
.mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {
  display: none;
}
.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,
.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {
  overflow: visible;
}
.mdl-demo .mdl-layout__tab-bar-container {
  height: 64px;
}
.mdl-demo .mdl-layout__tab-bar {
  padding: 0;
  padding-left: 16px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {
  height: 64px;
  line-height: 64px;
}
.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {
  background-color: white;
  height: 4px;
}
.mdl-demo main > .mdl-layout__tab-panel {
  padding: 8px;
  padding-top: 48px;
}
.mdl-demo .mdl-card {
  height: auto;
  display: flex;
  flex-direction: column;
}
.mdl-demo .mdl-card > * {
  height: auto;
}
.mdl-demo .mdl-card .mdl-card__supporting-text {
  margin: 40px;
  flex-grow: 1;
  padding: 0;
  color: inherit;
  width: calc(100% - 80px);
}
.mdl-demo.mdl-demo .mdl-card__supporting-text h4 {
  margin-top: 0;
  margin-bottom: 20px;
}
.mdl-demo .mdl-card__actions {
  margin: 0;
  padding: 4px 40px;
  color: inherit;
}
.mdl-demo .mdl-card__actions a {
  color: #00bcd4;
  margin: 0;
}
.mdl-demo .mdl-card__actions a:hover,
.mdl-demo .mdl-card__actions a:active {
  color: inherit;
  background-color: transparent;
}
.mdl-demo .mdl-card__supporting-text + .mdl-card__actions {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.mdl-demo #add {
  position: absolute;
  right: 40px;
  top: 36px;
  z-index: 999;
}

.mdl-demo .mdl-layout__content section:not(:last-of-type) {
  position: relative;
  margin-bottom: 48px;
}
.mdl-demo section.section--center {
  max-width: 860px;
}
.mdl-demo #features section.section--center {
  max-width: 620px;
}
.mdl-demo section > header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.mdl-demo section > .section__play-btn {
  min-height: 200px;
}
.mdl-demo section > header > .material-icons {
  font-size: 3rem;
}
.mdl-demo section > button {
  position: absolute;
  z-index: 99;
  top: 8px;
  right: 8px;
}
.mdl-demo section .section__circle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 0;
  flex-shrink: 1;
}
.mdl-demo section .section__text {
  flex-grow: 1;
  flex-shrink: 0;
  padding-top: 8px;
}
.mdl-demo section .section__text h5 {
  font-size: inherit;
  margin: 0;
  margin-bottom: 0.5em;
}
.mdl-demo section .section__text a {
  text-decoration: none;
}
.mdl-demo
  section
  .section__circle-container
  > .section__circle-container__circle {
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin: 8px 0;
}
.mdl-demo section.section--footer .section__circle--big {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 8px 32px;
}
.mdl-demo .is-small-screen section.section--footer .section__circle--big {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 8px 16px;
}
.mdl-demo section.section--footer {
  padding: 64px 0;
  margin: 0 -8px -8px -8px;
}
.mdl-demo section.section--center .section__text:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
}
.mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {
  margin-bottom: 24px;
}
.mdl-demo .mdl-layout__tab-panel:not(#overview) {
  background-color: white;
}
.mdl-demo #features section {
  margin-bottom: 72px;
}
.mdl-demo #features h4,
#features h5 {
  margin-bottom: 16px;
}
.mdl-demo .toc {
  border-left: 4px solid #c1eef4;
  margin: 24px;
  padding: 0;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
}
.mdl-demo .toc h4 {
  font-size: 0.9rem;
  margin-top: 0;
}
.mdl-demo .toc a {
  color: #4dd0e1;
  text-decoration: none;
  font-size: 16px;
  line-height: 28px;
  display: block;
}
.mdl-demo .mdl-menu__container {
  z-index: 99;
}

#view-source {
  position: fixed;
  display: block;
  right: 0;
  bottom: 0;
  margin-right: 40px;
  margin-bottom: 40px;
  z-index: 900;
}
</style>
