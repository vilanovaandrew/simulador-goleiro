import './style.css'
import { baseStats } from './data.js'

const MAX_POINTS = 40;
const MAX_SHEETS = 4;
const sheetsWrapper = document.getElementById('sheets-wrapper');
const sheetTemplate = document.getElementById('sheet-template');
const btnAddSheet = document.getElementById('btn-add-sheet');

let sheetCounter = 0;
const activeSheets = [];

class Sheet {
  constructor() {
    this.id = `sheet-${sheetCounter++}`;
    this.currentAltura = 'Muito Alto';
    this.currentTipo = 'Felino';
    this.currentPoints = MAX_POINTS;
    this.userAddedPoints = {};
    
    this.initDOM();
    this.initUserPoints();
    this.renderGrid();
  }

  initDOM() {
    const clone = sheetTemplate.content.cloneNode(true);
    this.element = clone.querySelector('.sheet-container');
    this.element.id = this.id;
    
    this.selectAltura = this.element.querySelector('.select-altura');
    this.selectTipo = this.element.querySelector('.select-tipo');
    this.btnReset = this.element.querySelector('.btn-reset');
    this.btnRemove = this.element.querySelector('.btn-remove-sheet');
    this.badgeAltura = this.element.querySelector('.badge-altura');
    this.badgeTipo = this.element.querySelector('.badge-tipo');
    this.pointsValueEl = this.element.querySelector('.points-value');
    this.grid = this.element.querySelector('.attributes-grid');
    
    this.selectAltura.value = this.currentAltura;
    this.selectTipo.value = this.currentTipo;

    this.selectAltura.addEventListener('change', () => this.changeBase());
    this.selectTipo.addEventListener('change', () => this.changeBase());
    this.btnReset.addEventListener('click', () => this.resetPoints());
    this.btnRemove.addEventListener('click', () => {
      this.element.remove();
      const index = activeSheets.indexOf(this);
      if (index > -1) activeSheets.splice(index, 1);
      updateGlobalState();
    });

    sheetsWrapper.appendChild(this.element);
  }

  initUserPoints() {
    this.userAddedPoints = {};
    const categories = baseStats[this.currentAltura][this.currentTipo];
    for (const category in categories) {
      this.userAddedPoints[category] = {};
      for (const attr in categories[category]) {
        this.userAddedPoints[category][attr] = 0;
      }
    }
  }

  getBaseValue(category, attr) {
    return baseStats[this.currentAltura][this.currentTipo][category][attr];
  }

  getTotalValue(category, attr) {
    return this.getBaseValue(category, attr) + this.userAddedPoints[category][attr];
  }

  updatePointsDisplay() {
    this.pointsValueEl.textContent = this.currentPoints;
    if (this.currentPoints === 0) {
      this.pointsValueEl.style.color = 'var(--danger-hover)';
    } else {
      this.pointsValueEl.style.color = 'var(--accent-hover)';
    }
    
    const plusBtns = this.element.querySelectorAll('.btn-plus');
    plusBtns.forEach(btn => {
      btn.disabled = this.currentPoints <= 0;
    });
    
    const minusBtns = this.element.querySelectorAll('.btn-minus');
    minusBtns.forEach(btn => {
      const cat = btn.dataset.category;
      const attr = btn.dataset.attr;
      btn.disabled = this.userAddedPoints[cat][attr] <= 0;
    });
  }

  handleIncrement(category, attr) {
    if (this.currentPoints > 0) {
      this.userAddedPoints[category][attr]++;
      this.currentPoints--;
      this.renderGrid();
      highlightBestAttributes(); // Re-evaluate best across all sheets
    }
  }

  handleDecrement(category, attr) {
    if (this.userAddedPoints[category][attr] > 0) {
      this.userAddedPoints[category][attr]--;
      this.currentPoints++;
      this.renderGrid();
      highlightBestAttributes(); // Re-evaluate best across all sheets
    }
  }

  renderGrid() {
    this.grid.innerHTML = '';
    
    const categories = baseStats[this.currentAltura][this.currentTipo];
    
    for (const category in categories) {
      const col = document.createElement('div');
      col.className = 'category-group';
      
      const title = document.createElement('div');
      title.className = 'category-title';
      title.textContent = category;
      col.appendChild(title);
      
      for (const attr in categories[category]) {
        const baseVal = this.getBaseValue(category, attr);
        const addedVal = this.userAddedPoints[category][attr];
        const totalVal = baseVal + addedVal;
        
        const row = document.createElement('div');
        row.className = 'attribute-row';
        row.dataset.cat = category;
        row.dataset.attr = attr;
        
        const addedHTML = addedVal > 0 ? `<span class="attr-added">+${addedVal}</span>` : '';
        
        row.innerHTML = `
          <div class="attribute-name">${attr}</div>
          <div class="attribute-controls">
            <div class="attr-value-container">
              <span class="attr-value" style="color: ${addedVal > 0 ? 'var(--text-main)' : 'inherit'}">${totalVal}</span>
              ${addedHTML}
            </div>
            <button class="attr-btn btn-minus no-print" data-category="${category}" data-attr="${attr}" ${addedVal <= 0 ? 'disabled' : ''}>-</button>
            <button class="attr-btn btn-plus no-print" data-category="${category}" data-attr="${attr}" ${this.currentPoints <= 0 ? 'disabled' : ''}>+</button>
          </div>
        `;
        col.appendChild(row);
      }
      
      this.grid.appendChild(col);
    }

    this.element.querySelectorAll('.btn-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleIncrement(btn.dataset.category, btn.dataset.attr);
      });
    });

    this.element.querySelectorAll('.btn-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleDecrement(btn.dataset.category, btn.dataset.attr);
      });
    });

    this.updatePointsDisplay();
  }

  changeBase() {
    this.currentAltura = this.selectAltura.value;
    this.currentTipo = this.selectTipo.value;
    this.badgeAltura.textContent = this.currentAltura;
    this.badgeTipo.textContent = this.currentTipo;
    
    this.currentPoints = MAX_POINTS;
    this.initUserPoints();
    this.renderGrid();
    highlightBestAttributes();
  }

  resetPoints() {
    this.currentPoints = MAX_POINTS;
    this.initUserPoints();
    this.renderGrid();
    highlightBestAttributes();
  }
}

function updateGlobalState() {
  if (activeSheets.length >= MAX_SHEETS) {
    btnAddSheet.disabled = true;
    btnAddSheet.textContent = "Limite de Fichas Atingido";
  } else {
    btnAddSheet.disabled = false;
    btnAddSheet.textContent = "Adicionar Nova Ficha";
  }
  highlightBestAttributes();
}

function highlightBestAttributes() {
  // If only 1 sheet or 0, remove highlights
  if (activeSheets.length <= 1) {
    activeSheets.forEach(sheet => {
      sheet.element.querySelectorAll('.attribute-row.is-best').forEach(el => {
        el.classList.remove('is-best');
      });
    });
    return;
  }

  // Categories structure is the same for all (just picking from any first sheet is fine)
  // Let's iterate over all known categories from the first sheet
  const firstSheet = activeSheets[0];
  const categories = baseStats[firstSheet.currentAltura][firstSheet.currentTipo];

  for (const category in categories) {
    for (const attr in categories[category]) {
      // Find max value across all sheets
      let maxVal = -1;
      activeSheets.forEach(sheet => {
        const val = sheet.getTotalValue(category, attr);
        if (val > maxVal) maxVal = val;
      });

      // Apply the class to those matching maxVal, remove from others
      activeSheets.forEach(sheet => {
        const row = sheet.element.querySelector(`.attribute-row[data-cat="${category}"][data-attr="${attr}"]`);
        if (row) {
          const val = sheet.getTotalValue(category, attr);
          if (val === maxVal && maxVal > 0) {
            row.classList.add('is-best');
          } else {
            row.classList.remove('is-best');
          }
        }
      });
    }
  }
}

// Initialize Global Controls
btnAddSheet.addEventListener('click', () => {
  if (activeSheets.length < MAX_SHEETS) {
    const newSheet = new Sheet();
    activeSheets.push(newSheet);
    updateGlobalState();
  }
});

document.getElementById('btn-export-all').addEventListener('click', () => {
  const element = document.getElementById('sheets-wrapper');
  
  // Ocultar botões para o PDF sem quebrar o CSS do print padrão
  element.classList.add('hide-buttons-for-pdf');

  // Usar formato A2 Paisagem. Ele tem tamanho de sobra para 4 fichas (sem espremer)
  // e resolve o problema do page break cortando as informações.
  const opt = {
    margin:       0.2,
    filename:     `Comparacao_Goleiros.pdf`,
    image:        { type: 'jpeg', quality: 1.0 },
    html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#0b1120' },
    jsPDF:        { unit: 'in', format: 'a2', orientation: 'landscape' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    element.classList.remove('hide-buttons-for-pdf');
  });
});

// Create the first initial sheet
const initialSheet = new Sheet();
activeSheets.push(initialSheet);
updateGlobalState();
