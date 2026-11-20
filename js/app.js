const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    toggle.click(); toggle.focus();
  }
});
const search = document.querySelector('#service-search');
const chips = document.querySelectorAll('[data-filter]');
let category = 'All';
function filterServices() {
  const term = search.value.toLowerCase().trim();
  let count = 0;
  document.querySelectorAll('#service-results .service-card').forEach(card => {
    const show = card.dataset.search.includes(term) && (category === 'All' || card.dataset.category === category);
    card.hidden = !show;
    if (show) count++;
  });
  document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'service' : 'services'} found`;
  document.querySelector('#no-results').hidden = count !== 0;
}
search?.addEventListener('input', filterServices);
chips.forEach(chip => chip.addEventListener('click', () => {
  category = chip.dataset.filter;
  chips.forEach(item => {item.classList.toggle('selected', item === chip);item.setAttribute('aria-pressed',String(item === chip));});
  filterServices();
}));

const dateInput = document.querySelector('#preferred_date');
if (dateInput) {
  const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Karachi',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const part = type => parts.find(p => p.type === type).value;
  dateInput.min = `${part('year')}-${part('month')}-${part('day')}`;
  const max = new Date(`${dateInput.min}T12:00:00Z`);
  max.setUTCDate(max.getUTCDate() + 90);
  dateInput.max = max.toISOString().slice(0,10);
}
const form = document.querySelector('#whatsapp-booking');
if (form) {
  const button = form.querySelector('.submit-button');
  const result = document.querySelector('#booking-result');
  const link = document.querySelector('#whatsapp-request');
  const service = form.querySelector('#service');
  const preselected = new URLSearchParams(location.search).get('service');
  if ([...service.options].some(o => o.value === preselected)) service.value = preselected;
  button.disabled = false;
  const clearMessage = () => {result.hidden = true; link.removeAttribute('href');};
  form.addEventListener('input', clearMessage);
  form.addEventListener('change', clearMessage);
  form.addEventListener('submit', event => {event.preventDefault(); prepare();});
  button.addEventListener('click', prepare);
  function prepare() {
    const phone = form.querySelector('#phone');
    phone.setCustomValidity('');
    if (!/^(03\d{9}|923\d{9})$/.test(phone.value.replace(/[\s()+-]/g,''))) {
      phone.setCustomValidity('Enter a Pakistani mobile number, e.g. 0311-0332314.');
    }
    if (!form.reportValidity()) return;
    if (form.elements.website.value) return;
    const message = [
      'Assalam o Alaikum HOWA, I would like to request a home physiotherapy visit.',
      `Name: ${form.elements.name.value.trim()}`,
      `Mobile: ${phone.value.trim()}`,
      `Area in Lahore: ${form.elements.area.value.trim()}`,
      `Service: ${service.selectedOptions[0].textContent}`,
      `Preferred date: ${dateInput.value}`,
      `Preferred time: ${form.elements.preferred_time.value}`,
      'Please confirm availability and fees. I understand this is not a confirmed appointment.'
    ].join('\n');
    link.href = 'https://wa.me/923110332314?text=' + encodeURIComponent(message);
    result.hidden = false;
    link.focus();
  }
  form.querySelector('#phone').addEventListener('input', event => event.target.setCustomValidity(''));
}

/* Scroll reveal: soft fade/slide-in. Elements stay visible if JS or IntersectionObserver is unavailable. */
(function () {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var groups = [
    ['.section-heading, .center-heading, .page-intro .container', ''],
    ['.service-grid .service-card, #service-results .service-card', 'stagger'],
    ['.about-art', 'slide-left'], ['.about-grid > div:last-child', 'slide-right'],
    ['.steps article', 'stagger'], ['.guide-band .container > *', 'stagger'],
    ['.faq-layout > *', ''], ['.cta > *', ''], ['.benefit-strip > div', 'stagger'],
    ['.booking-layout > *', ''], ['.contact-grid > *', 'stagger']
  ];
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) {
        var t = e.target; t.classList.add('in'); io.unobserve(t);
        /* hand control back to the element's own hover transitions once revealed */
        setTimeout(function () { t.classList.remove('reveal', 'in', 'slide-left', 'slide-right'); t.style.removeProperty('--d'); }, 1300);
      } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  groups.forEach(function (g) {
    document.querySelectorAll(g[0]).forEach(function (el, i) {
      el.classList.add('reveal');
      if (g[1] === 'slide-left' || g[1] === 'slide-right') el.classList.add(g[1]);
      if (g[1] === 'stagger') el.style.setProperty('--d', (i % 4) * 0.09 + 's');
      io.observe(el);
    });
  });
})();