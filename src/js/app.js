import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(document.getElementsByClassName("menu__item")).click(function () {
  document.getElementById("menu__toggle").checked = false;
});


import { PageScroll2id } from "./modules/scriptPageScroll2id.js";
PageScroll2id();

import { Slick } from "./modules/scriptSlick.js";
Slick();

import { SendToTelegram } from "./modules/sendToTelegram.js";
SendToTelegram();

import { SmothText } from "./modules/smothText.js";
SmothText();

