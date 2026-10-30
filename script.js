'use strict';

// Novabia EIP: seven independently crawlable HTML pages on GitHub Pages.
// Navigation uses canonical paths (/product/, /investors/, etc.), not hash-tab routing.
const nav = document.getElementById('primaryNav');
const menuToggle = document.getElementById('menuToggle');
if (nav && menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// The Heir/Tutor prototype appears only on /product/. Do not require
// elements from other pages, and never treat this selector as live game state.
const heir = document.getElementById('heirBranch');
const tutor = document.getElementById('tutorBranch');
const evolutionResult = document.getElementById('evolutionResult');
const evolutionMessage = document.getElementById('evolutionMessage');
if (heir && tutor && evolutionResult && evolutionMessage) {
  function updateEvolution(changed) {
    if (heir.value === tutor.value) {
      // Different provincial Stage 2 branches are required for this demonstration.
      if (changed === heir) {
        tutor.value = ['Pyro', 'Arctic', 'Physical'].find(x => x !== heir.value);
      } else {
        heir.value = ['Pyro', 'Arctic', 'Physical'].find(x => x !== tutor.value);
      }
      evolutionMessage.textContent = 'Stage 3 needs companions from different provincial branches, so the other branch was adjusted.';
    } else {
      evolutionMessage.textContent = '';
    }
    evolutionResult.textContent = `${heir.value} · ${tutor.value} · Shock Hound`;
  }
  heir.addEventListener('change', () => updateEvolution(heir));
  tutor.addEventListener('change', () => updateEvolution(tutor));
  updateEvolution(heir);
}

// The financial calculator appears only on /economics/. Its results are
// simplified illustrations, not sales forecasts, Net Receipts definitions,
// or independently verified commercial performance.
const inputIds = ['unitCount','unitPrice','refundRate','platformRate'];
const inputs = inputIds.map(id => document.getElementById(id));
if (inputs.every(Boolean)) {
  const money = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0
  });
  function numeric(input) {
    const raw = Number(input.value);
    const min = Number(input.min);
    const max = Number(input.max);
    return Number.isFinite(raw) ? Math.min(max, Math.max(min, raw)) : min;
  }
  function recalcEconomics() {
    const [units, price, refund, platform] = inputs.map(numeric);
    const gross = units * price;
    const postRefund = gross * (1 - refund / 100);
    const afterFees = postRefund * (1 - platform / 100);
    const grossDisplay = document.getElementById('grossValue');
    const netDisplay = document.getElementById('netValue');
    if (grossDisplay) grossDisplay.textContent = money.format(gross);
    if (netDisplay) netDisplay.textContent = money.format(afterFees);
  }
  inputs.forEach(input => input.addEventListener('input', recalcEconomics));
  recalcEconomics();
}

// Only the Investor Room has the print control; do not require it on every page.
const printBrief = document.getElementById('printBrief');
if (printBrief) printBrief.addEventListener('click', () => window.print());
