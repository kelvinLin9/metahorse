<template>
  <div style="color: #f6d860" class="la-pacman la-2x">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
</template>

<style lang="scss" scoped>
/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */
.la-pacman,
.la-pacman > div {
    position: relative;
    box-sizing: border-box;
}
.la-pacman {
    display: block;
    font-size: 0;
    color: #fff;
}
.la-pacman.la-dark {
    color: #333;
}
.la-pacman > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-pacman {
    width: 32px;
    height: 32px;
}
.la-pacman > div:nth-child(1),
.la-pacman > div:nth-child(2) {
    width: 0;
    height: 0;
    background: transparent;
    border-style: solid;
    border-width: 16px;
    border-right-color: transparent;
    border-radius: 100%;
    animation: pacman-rotate-half-up .5s 0s infinite;
}
.la-pacman > div:nth-child(2) {
    margin-top: -32px;
    animation-name: pacman-rotate-half-down;
}
.la-pacman > div:nth-child(3),
.la-pacman > div:nth-child(4),
.la-pacman > div:nth-child(5),
.la-pacman > div:nth-child(6) {
    position: absolute;
    top: 50%;
    left: 200%;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    opacity: 0;
    animation: pacman-balls 2s 0s infinite linear;
}
.la-pacman > div:nth-child(3) {
  animation-delay: -1.44s;
}
.la-pacman > div:nth-child(4) {
  animation-delay: -1.94s;
}
.la-pacman > div:nth-child(5) {
  animation-delay: -2.44s;
}
.la-pacman > div:nth-child(6) {
  animation-delay: -2.94s;
}
.la-pacman.la-sm {
    width: 16px;
    height: 16px;
}
.la-pacman.la-sm > div:nth-child(1),
.la-pacman.la-sm > div:nth-child(2) {
    border-width: 8px;
}
.la-pacman.la-sm > div:nth-child(2) {
    margin-top: -16px;
}
.la-pacman.la-sm > div:nth-child(3),
.la-pacman.la-sm > div:nth-child(4),
.la-pacman.la-sm > div:nth-child(5),
.la-pacman.la-sm > div:nth-child(6) {
    width: 4px;
    height: 4px;
}
.la-pacman.la-2x {
    width: 64px;
    height: 64px;
}
.la-pacman.la-2x > div:nth-child(1),
.la-pacman.la-2x > div:nth-child(2) {
    border-width: 32px;
}
.la-pacman.la-2x > div:nth-child(2) {
    margin-top: -64px;
}
.la-pacman.la-2x > div:nth-child(3),
.la-pacman.la-2x > div:nth-child(4),
.la-pacman.la-2x > div:nth-child(5),
.la-pacman.la-2x > div:nth-child(6) {
    width: 16px;
    height: 16px;
}
.la-pacman.la-3x {
    width: 96px;
    height: 96px;
}
.la-pacman.la-3x > div:nth-child(1),
.la-pacman.la-3x > div:nth-child(2) {
    border-width: 48px;
}
.la-pacman.la-3x > div:nth-child(2) {
    margin-top: -96px;
}
.la-pacman.la-3x > div:nth-child(3),
.la-pacman.la-3x > div:nth-child(4),
.la-pacman.la-3x > div:nth-child(5),
.la-pacman.la-3x > div:nth-child(6) {
    width: 24px;
    height: 24px;
}
/*
 * Animations
 */
@keyframes pacman-rotate-half-up {
    0%,
    100% {
        transform: rotate(270deg);
    }
    50% {
        transform: rotate(360deg);
    }
}
@keyframes pacman-rotate-half-down {
    0%,
    100% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(0deg);
    }
}
@keyframes pacman-balls {
    0% {
        left: 200%;
        opacity: 0;
        transform: translateY(-50%);
    }
    5% {
        opacity: .5;
    }
    66% {
        opacity: 1;
    }
    67% {
        opacity: 0;
    }
    100% {
        left: 0;
        transform: translateY(-50%);
    }
}
</style>
