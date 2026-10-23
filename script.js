'use strict';

// Novabia EIP: the entire portal is static and runs on GitHub Pages.
// Edit contact links in index.html when an official investor address is available.
const TABS = ['overview', 'product', 'market', 'economics', 'roadmap', 'tools', 'investors'];
const pages = [...document.querySelectorAll('main > .page')];
const tabLinks = [...document.querySelectorAll('[data-tab]')];
const nav = document.getElementById('primaryNav');
const menuToggle = document.getElementById('menuToggle');

function showPage() {
  const requested = decodeURIComponent(location.hash.slice(1));
  const active = TABS.includes(requested) ? requested : 'overview';

  pages.forEach(page => { page.hidden = page.id !== active; });
  tabLinks.forEach(link => {
    if (link.dataset.tab === active) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.title = `${({overview:'Overview', product:'The Game', market:'Audience', economics:'Economics', roadmap:'Milestones', tools:'Tools & Workflow', investors:'Investor Room'})[active]} | Novabia EIP`;
}
window.addEventListener('hashchange', showPage);
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
showPage();

document.getElementById('year').textContent = String(new Date().getFullYear());

// Stage 3 evolution demo: three documented Hound provincial branches.
const heir = document.getElementById('heirBranch');
const tutor = document.getElementById('tutorBranch');
const evolutionResult = document.getElementById('evolutionResult');
const evolutionMessage = document.getElementById('evolutionMessage');
function updateEvolution(changed) {
  if (heir.value === tutor.value) {
    // Two different provincial branches are required for this demonstration.
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

// The economic model is intentionally labelled illustrative; it does not assert a price or a forecast.
const inputs = ['unitCount','unitPrice','refundRate','platformRate'].map(id => document.getElementById(id));
const money = new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0});
function numeric(input) {
  const raw = Number(input.value);
  const min = Number(input.min);
  const max = Number(input.max);
  return Number.isFinite(raw) ? Math.min(max, Math.max(min, raw)) : min;
}
function recalcEconomics() {
  const [units, price, refund, platform] = inputs.map(numeric);
  const gross = units * price;
  // Simplified sequential calculation. Actual channel economics can vary.
  const postRefund = gross * (1 - refund / 100);
  const afterFees = postRefund * (1 - platform / 100);
  document.getElementById('grossValue').textContent = money.format(gross);
  document.getElementById('netValue').textContent = money.format(afterFees);
}
inputs.forEach(input => input.addEventListener('input', recalcEconomics));
recalcEconomics();

// Print browser PDF or paper. The print stylesheet exposes the complete investor brief.
document.getElementById('printBrief').addEventListener('click', () => window.print());
