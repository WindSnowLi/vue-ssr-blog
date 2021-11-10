
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/* jshint browser: true, strict: true, undef: true */
/*global define: false */

export function classIe(window) {
  'use strict'

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp('(^|\\s+)' + className + '(\\s+|$)')
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  let hasClass, addClass, removeClass

  if ('classList' in document.documentElement) {
    hasClass = function(elem, c) {
      return elem.classList.contains(c)
    }
    addClass = function(elem, c) {
      elem.classList.add(c)
    }
    removeClass = function(elem, c) {
      elem.classList.remove(c)
    }
  } else {
    hasClass = function(elem, c) {
      return classReg(c).test(elem.className)
    }
    addClass = function(elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c
      }
    }
    removeClass = function(elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ')
    }
  }

  function toggleClass(elem, c) {
    const fn = hasClass(elem, c) ? removeClass : addClass
    fn(elem, c)
  }

  const classie = {
    // full names
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  }

  // transport
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(classie)
  } else {
    // browser global
    window.classie = classie
  }
}

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
let bodyEl = null
let headerOpenBtn = null
let headerCloseBtn = null
let headerIsOpen = false
function toggleMenu() {
  if (headerIsOpen) {
    window.classie.remove(bodyEl, 'show-menu')
  } else {
    window.classie.add(bodyEl, 'show-menu')
  }
  headerIsOpen = !headerIsOpen
}
function initEvents() {
  headerOpenBtn.addEventListener('click', toggleMenu)
  if (headerCloseBtn) {
    headerCloseBtn.addEventListener('click', toggleMenu)
  }
}
export function headerIni() {
  if (process.client) {
    bodyEl = document.body
    headerOpenBtn = document.getElementById('open-button')
    headerCloseBtn = document.getElementById('close-button')
    console.log(bodyEl)
    console.log(headerOpenBtn)
    console.log(headerCloseBtn)
    classIe(window)
    initEvents()
  }
}
