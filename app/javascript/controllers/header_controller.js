import { enter, leave, toggle } from 'el-transition';
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['openUserMenu'];
  connect() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownButton = document.getElementById('dropdown-button');
    function openMenu() {
      enter(dropdownMenu);
    }

    function closeMenu() {
      leave(dropdownMenu);
    }

    function toggleDropdownMenu() {
      toggle(dropdownMenu);
    }

    dropdownButton.addEventListener('click', toggleDropdownMenu);

    document.addEventListener('click', (event) => {
      if (!dropdownButton.contains(event.target)) {
        closeMenu();
      }
    });
  }
}
