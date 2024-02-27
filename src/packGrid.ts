import { packs } from './packs';
import './styles/packGrid.css';

//show all packs in a div
export const packGrid = () => {
	const grid = document.createElement('div');
	grid.classList.add('grid');
	packs.slice(0, 5).forEach((pack) => {
		const packDiv = document.createElement('div');
		packDiv.classList.add('pack');
		packDiv.innerHTML = `
      <div class="pack">
				<div class="pack-download">
				<iframe class="frametest" src=${pack.packFrame} frameborder="0" ></iframe>
					
				</div>
			</div>
    `;
		grid.appendChild(packDiv);
	});
	return grid;
};
