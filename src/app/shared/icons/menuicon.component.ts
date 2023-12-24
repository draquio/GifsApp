import { Component } from '@angular/core';

@Component({
  selector: 'menu-icon',
  template: `<svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="48"
      d="M88 152h336M88 256h336M88 360h336"
    ></path>
  </svg>`,
})
export class MenuIconComponent {}
