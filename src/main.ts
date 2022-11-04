import { packGrid } from './packGrid';

/* Calling the packGrid function and then using the outerHTML property to get the HTML of the
  element. */
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${packGrid().outerHTML}
  </div>  
`;
