import { enter, leave, toggle } from 'el-transition';
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['openUserMenu'];
  connect() {
    // const dropdownMenu = document.getElementById('dropdown-menu');
    // const dropdownButton = document.getElementById('dropdown-button');
    // function openMenu() {
    //   enter(dropdownMenu);
    // }
    // function closeMenu() {
    //   leave(dropdownMenu);
    // }
    // function toggleDropdownMenu() {
    //   toggle(dropdownMenu);
    // }
    // dropdownButton.addEventListener('click', toggleDropdownMenu);
    // document.addEventListener('click', (event) => {
    //   if (!dropdownButton.contains(event.target)) {
    //     closeMenu();
    //   }
    // });
    const loginOverlay = document.getElementById('login-overlay');
    const closeOverlayButton = document.getElementById('close-overlay-button');
    const loginButton = document.getElementById('user-menu-item-0');
    const signUpButton = document.getElementById('user-menu-item-1');
    const modalOverlay = document.getElementById('modal-overlay');

    // enter(loginOverlay);

    function openOverlay() {
      enter(loginOverlay);
    }

    function closeOverlay() {
      leave(loginOverlay);
    }

    function toggleOverlay() {
      toggle(loginOverlay);
    }

    loginButton.addEventListener('click', openOverlay);
    signUpButton.addEventListener('click', openOverlay);
    closeOverlayButton.addEventListener('click', closeOverlay);

    document.addEventListener('click', (event) => {
      if (
        !modalOverlay.contains(event.target) &&
        !loginButton.contains(event.target) &&
        !signUpButton.contains(event.target)
      ) {
        closeOverlay();
      }
    });
  }
}
