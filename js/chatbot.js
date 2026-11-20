(function () {
  var WA = 'https://wa.me/923110332314';
  var PHONE = 'tel:+923110332314';

  /* Every answer has English (en) and Roman Urdu (ur) text. Only facts that appear on the website are used. */
  var A = {
    greet: { k: ['hi', 'hello', 'hey', 'salam', 'slam', 'assalam', 'assalamualaikum', 'aoa', 'asalam', 'adaab', 'good morning', 'good evening', 'good afternoon'],
      en: 'Assalam o Alaikum! Welcome to HOWA Physical Therapy. How can I help you today?',
      ur: 'Walaikum Assalam! HOWA Physical Therapy mein khush aamdeed. Main aap ki kya madad kar sakta hoon?' },
    how: { k: ['how are you', 'kaise ho', 'kaisay ho', 'kaise hain', 'kese ho', 'kese hain', 'kya hal', 'hal chal', 'kaisa hai'],
      en: 'I am doing well, thank you! How can I help you with physiotherapy today?',
      ur: 'Main theek hoon, shukriya! Physiotherapy ke bare mein aap ki kya madad kar sakta hoon?' },
    who: { k: ['who are you', 'tum kon', 'aap kon', 'ap kon', 'apka naam', 'aap ka naam', 'your name', 'bot', 'about', 'howa kya', 'what is howa', 'tarruf', 'taaruf'],
      en: 'I am the HOWA assistant. HOWA Physical Therapy Services provides personalised, one-to-one physiotherapy at your home in Lahore. "Better movement. More life."',
      ur: 'Main HOWA ka assistant hoon. HOWA Physical Therapy Services Lahore mein aap ke ghar par personalised, one-to-one physiotherapy deti hai. "Better movement. More life."',
      links: [['About HOWA', 'about.html']] },
    thanks: { k: ['thanks', 'thank', 'thankyou', 'shukriya', 'shukria', 'jazakallah', 'jazak', 'meherbani', 'mehrbani'],
      en: 'You are welcome! Wishing you better movement and more life.',
      ur: 'Aap ka shukriya! Allah aap ko sehat de. Aur koi sawal ho to zaroor poochein.' },
    bye: { k: ['bye', 'goodbye', 'allah hafiz', 'khuda hafiz', 'khudahafiz', 'allahhafiz', 'fi amanillah', 'ok bye'],
      en: 'Allah Hafiz! Take care. We are here whenever you need us.',
      ur: 'Allah Hafiz! Apna khayal rakhein. Zaroorat ho to hum hazir hain.' },
    visit: { k: ['home visit', 'home visits', 'ghar', 'ghar par', 'ghar pe', 'ghar aa', 'clinic', 'area', 'areas', 'kahan', 'kahaan', 'where', 'lahore', 'visit', 'doorstep', 'aate', 'aati', 'ate ho', 'ate hain'],
      en: 'Yes. HOWA provides home visits only, in Lahore. Please tell us your area so we can confirm availability before arranging a visit.',
      ur: 'Ji haan. HOWA sirf ghar par (home visit) physiotherapy deta hai, Lahore mein. Apna area bata dein taake hum visit se pehle availability confirm kar sakein.',
      links: [['Request a home visit', 'appointment.html']] },
    book: { k: ['book', 'booking', 'appointment', 'apointment', 'schedule', 'request', 'time lena', 'time lene', 'mulaqat', 'wakt', 'waqt', 'milna', 'karwana', 'karna hai', 'lena hai'],
      en: 'You can fill in the visit request form and send it to us on WhatsApp, or call 0311-0332314. Your appointment is confirmed only after our team contacts you.',
      ur: 'Aap visit request form bhar kar WhatsApp par bhej sakte hain, ya 0311-0332314 par call kar sakte hain. Appointment tab confirm hota hai jab hamari team aap se rabta kar le.',
      links: [['Request a home visit', 'appointment.html'], ['WhatsApp', WA]] },
    price: { k: ['fee', 'fees', 'cost', 'price', 'charge', 'charges', 'rate', 'rates', 'package', 'packages', 'paisay', 'paise', 'paisa', 'kitne', 'kitna', 'kharcha', 'kharch', 'qeemat', 'qimat', 'rupay', 'rupee', 'rs'],
      en: 'Session fees and packages depend on your needs. Please contact us and we will confirm the cost and visit arrangements with you before booking.',
      ur: 'Session ki fees aur packages aap ki zaroorat par depend karte hain. Please hum se rabta karein, booking se pehle hum fees aur visit ki tafseel confirm kar denge.',
      links: [['WhatsApp', WA], ['Call now', PHONE]] },
    first: { k: ['first visit', 'first appointment', 'first session', 'pehli', 'pehla', 'assessment', 'what happens', 'expect', 'kya hota', 'kya hoga', 'check up', 'checkup'],
      en: 'At your first visit the physiotherapist discusses your concerns and goals, assesses your movement and explains a personalised care plan. Please keep any reports or surgical instructions ready.',
      ur: 'Pehli visit par physiotherapist aap ki takleef aur goals sunte hain, aap ki movement ka assessment karte hain aur personalised care plan samjhate hain. Apni koi bhi reports ya surgery ki hidayat tayyar rakhein.' },
    sessions: { k: ['how many', 'sessions', 'session', 'duration', 'how long', 'kitne din', 'kitni der', 'kitni sitting', 'sitting', 'kab tak', 'recovery time', 'theek hone'],
      en: 'The number of sessions depends on your assessment, condition and goals. Your physiotherapist will suggest a plan and review it as you progress.',
      ur: 'Sessions ki tadaad aap ke assessment, condition aur goals par depend karti hai. Physiotherapist aap ke saath plan banate hain aur progress ke mutabiq usay review karte hain.' },
    services: { k: ['service', 'services', 'treatment', 'treat', 'treatments', 'ilaj', 'ilaaj', 'khidmat', 'khidmaat', 'conditions', 'kya kya', 'kon kon si', 'kaun kaun si', 'help', 'madad'],
      en: 'We help with: back & neck pain, knee & joint care, post-surgical rehabilitation, stroke rehabilitation, elderly rehabilitation, sports & shoulder injuries, posture & movement, and general physiotherapy.',
      ur: 'Hum in masail mein madad karte hain: back aur neck pain, knee aur joint care, surgery ke baad rehabilitation, stroke rehabilitation, buzurgon ki rehabilitation, sports aur shoulder injuries, posture aur movement, aur general physiotherapy.',
      links: [['See all services', 'services.html']] },
    back: { k: ['back', 'neck', 'kamar', 'kamr', 'gardan', 'gardan', 'sciatica', 'slipped disc', 'disc', 'lower back', 'peeth', 'reerh'],
      en: 'For back and neck pain we support lower back pain, neck pain, sciatica, muscle stiffness and slipped disc with personalised care at home.',
      ur: 'Kamar aur gardan ke dard ke liye hum lower back pain, neck pain, sciatica, muscles ki akrahat aur slipped disc mein ghar par personalised care dete hain.',
      links: [['Back & neck pain', 'back-neck-pain.html']] },
    knee: { k: ['knee', 'ghutna', 'ghutne', 'ghutnay', 'joint', 'joints', 'jorr', 'jor', 'arthritis', 'gathiya', 'acl', 'meniscus', 'stiffness'],
      en: 'For knee and joint care we help with knee pain, arthritis, joint stiffness, ACL recovery and meniscus injuries.',
      ur: 'Knee aur joint care mein hum ghutne ke dard, arthritis (gathiya), joints ki akrahat, ACL recovery aur meniscus injuries mein madad karte hain.',
      links: [['Knee & joint care', 'knee-joint-care.html']] },
    surgery: { k: ['surgery', 'surgical', 'operation', 'post operative', 'post-operative', 'joint replacement', 'replacement', 'operation ke baad', 'surgery ke baad', 'fracture'],
      en: 'After surgery we offer step-by-step rehabilitation for post-operative recovery, joint replacement recovery, stiffness and muscle weakness. Please keep your surgeon\'s instructions handy.',
      ur: 'Surgery ke baad hum step-by-step rehabilitation dete hain: post-operative recovery, joint replacement recovery, akrahat aur muscles ki kamzori. Apne surgeon ki hidayat saath rakhein.',
      links: [['Post-surgical rehabilitation', 'post-surgical-rehabilitation.html']] },
    stroke: { k: ['stroke', 'paralysis', 'falij','lakwa', 'laqwa', 'faalij', 'balance', 'walking', 'chalna', 'hath', 'haath', 'bazu'],
      en: 'For stroke rehabilitation we support post-stroke weakness, walking difficulties, reduced balance, and hand and arm movement, with patient, practical care at home.',
      ur: 'Stroke rehabilitation mein hum stroke ke baad ki kamzori, chalne ki mushkil, balance ki kami aur haath/bazu ki movement mein ghar par sabr aur tawajjuh ke saath madad karte hain.',
      links: [['Stroke rehabilitation', 'stroke-rehabilitation.html']] },
    elderly: { k: ['elderly', 'old', 'old age', 'senior', 'buzurg', 'buzurgon', 'boorha', 'boorhay', 'daada', 'dadi', 'nana', 'nani', 'walid', 'walida', 'abbu', 'ammi', 'bujurg'],
      en: 'Our elderly rehabilitation focuses on reduced mobility, balance difficulties, muscle weakness and age-related joint stiffness, with thoughtful care at home.',
      ur: 'Buzurgon ki rehabilitation mein hum kam hoti movement, balance ke masail, muscles ki kamzori aur umar ke saath joints ki akrahat par ghar par tawajjuh se kaam karte hain.',
      links: [['Elderly rehabilitation', 'elderly-rehabilitation.html']] },
    sports: { k: ['sports', 'shoulder', 'kandha', 'kandhe', 'kandhay', 'frozen shoulder', 'gym', 'strain', 'muscle', 'khiladi', 'chot', 'injury', 'injuries'],
      en: 'For sports and shoulder injuries we help with frozen shoulder, shoulder injuries, gym injuries and muscle strains, to get you back to the activities you enjoy.',
      ur: 'Sports aur shoulder injuries mein hum frozen shoulder, kandhe ki chot, gym injuries aur muscle strain mein madad karte hain taake aap apni pasandeeda activities par wapas aa sakein.',
      links: [['Sports & shoulder injuries', 'sports-shoulder-injuries.html']] },
    posture: { k: ['posture', 'postural', 'jhuk', 'jhukna', 'sidha', 'seedha', 'baithne', 'baithna', 'movement'],
      en: 'We offer posture and movement care to make everyday movement more comfortable, with a personalised postural plan.',
      ur: 'Hum posture aur movement care dete hain taake roz marra ki harkat zyada aasan ho, aur aap ke liye personalised postural plan banate hain.',
      links: [['Posture & movement', 'posture-correction.html']] },
    general: { k: ['general', 'general physiotherapy', 'dard', 'pain', 'takleef', 'takleef', 'body pain', 'jism', 'aches', 'ache'],
      en: 'General physiotherapy covers everyday aches, stiffness and movement concerns. If you are not sure which service fits you, our team will help you choose.',
      ur: 'General physiotherapy roz marra ke dard, akrahat aur movement ke masail ke liye hai. Agar aap ko yaqeen nahi ke kaun si service theek hai, to hamari team choose karne mein madad karegi.',
      links: [['General physiotherapy', 'general-physiotherapy.html'], ['Request a visit', 'appointment.html']] },
    guide: { k: ['exercise', 'exercises', 'guide', 'patient guide', 'warzish', 'warzishein', 'tips', 'learn', 'information', 'maloomat', 'sikhna'],
      en: 'Our patient guide explains common conditions, what physiotherapy can do, and gentle exercises to help you get started.',
      ur: 'Hamari patient guide mein aam masail, physiotherapy kya kar sakti hai, aur shuru karne ke liye halki warzishein samjhai gayi hain.',
      links: [['Patient guide', 'guides.html']] },
    timing: { k: ['timing', 'timings', 'open', 'close', 'kab', 'morning', 'evening', 'afternoon', 'subah', 'shaam', 'dopahar', 'sunday', 'friday', 'jumma'],
      en: 'You can request a preferred date and a time slot (morning, afternoon, evening or flexible) on the booking form. Our team will confirm availability with you.',
      ur: 'Booking form mein aap apni pasandeeda date aur waqt (subah, dopahar, shaam ya flexible) bata sakte hain. Availability hamari team aap se confirm karegi.',
      links: [['Request a home visit', 'appointment.html']] },
    contact: { k: ['contact', 'phone', 'call', 'number', 'whatsapp', 'whats app', 'talk', 'speak', 'baat', 'raabta', 'rabta', 'address', 'pata', 'location', 'email', 'mobile'],
      en: 'Call or WhatsApp 0311-0332314. Address: 10th St, Block L, Khayaban Ameen, Lahore. HOWA provides home visits only.',
      ur: 'Call ya WhatsApp karein: 0311-0332314. Pata: 10th St, Block L, Khayaban Ameen, Lahore. HOWA sirf ghar par visit deta hai.',
      links: [['WhatsApp', WA], ['Call now', PHONE], ['Contact page', 'contact.html']] },
    privacy: { k: ['privacy', 'data', 'private', 'raaz', 'raz', 'safe', 'information safe', 'confidential'],
      en: 'The booking form only prepares a WhatsApp message on your device. Nothing is saved by this website until you press Send in WhatsApp.',
      ur: 'Booking form sirf aap ke device par WhatsApp message tayyar karta hai. Jab tak aap WhatsApp mein Send nahi dabate, website par kuch save nahi hota.',
      links: [['Privacy', 'privacy.html']] },
    urgent: { k: ['emergency', 'urgent', 'chest pain', 'seene mein dard', 'bleeding', 'khoon', 'unconscious', 'behosh', 'saans', 'heart attack', 'faint', 'accident'],
      en: 'This sounds urgent. Please do not wait for a chat. Call your local emergency number or go to the nearest hospital right away.',
      ur: 'Ye surat-e-haal urgent lag rahi hai. Chat ka intezar na karein, foran emergency number par call karein ya qareebi hospital jayein.' }
  };

  var URDU_HINTS = ['kya', 'kia', 'hai', 'hain', 'hy', 'hein', 'mujhe', 'mujhay', 'mera', 'meri', 'mere', 'aap', 'ap', 'apka', 'apki', 'kaise', 'kese', 'kaisay', 'kitne', 'kitna', 'kitni', 'ghar', 'karna', 'karni', 'karein', 'karen', 'chahiye', 'chahie', 'nahi', 'nahin', 'haan', 'han', 'ji', 'jee', 'salam', 'assalam', 'aoa', 'shukriya', 'dard', 'kamar', 'ghutna', 'batao', 'batayen', 'bataiye', 'bata', 'milega', 'milti', 'hota', 'hoga', 'wala', 'wali', 'ke', 'ki', 'ko', 'se', 'mein', 'main', 'par', 'pe', 'koi', 'kab', 'kahan', 'kyun', 'kyon', 'tha', 'thi', 'rahe', 'raha', 'abhi', 'bohat', 'bahut', 'zaroor', 'theek', 'acha', 'accha', 'allah', 'khuda', 'bhai', 'baji', 'sir'];

  var CHIPS = {
    en: [['Home visits', 'visit'], ['Services', 'services'], ['Book a visit', 'book'], ['Fees', 'price'], ['Contact', 'contact']],
    ur: [['Ghar par visit?', 'visit'], ['Services', 'services'], ['Booking', 'book'], ['Fees', 'price'], ['Rabta', 'contact']]
  };
  var UI = {
    en: { ph: 'Type your question...', sub: 'Quick answers, 24/7', note: 'Automated assistant, not medical advice.', hello: 'Assalam o Alaikum! I am the HOWA assistant. Ask me about home visits, services, booking or fees. Roman Urdu is fine too.',
      fb: 'I am not sure I understood. For a precise answer, please talk to our team directly.', fbl: [['Chat on WhatsApp', WA], ['Call 0311-0332314', PHONE]] },
    ur: { ph: 'Apna sawal likhein...', sub: 'Fori jawab, 24/7', note: 'Ye automated assistant hai, medical mashwara nahi.', hello: 'Assalam o Alaikum! Main HOWA ka assistant hoon. Home visit, services, booking ya fees ke bare mein poochein. Aap Roman Urdu ya English dono mein likh sakte hain.',
      fb: 'Maaf kijiye, main poori tarah samajh nahi saka. Sahi jawab ke liye hamari team se seedha baat karein.', fbl: [['WhatsApp par baat karein', WA], ['Call 0311-0332314', PHONE]] }
  };
  var lang = 'ur'; /* starts in Roman Urdu; switches automatically to English when the user writes English */

  function norm(q) { return ' ' + q.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9؀-ۿ ]/g, ' ').replace(/\s+/g, ' ') + ' '; }
  function has(q, k) { return q.indexOf(' ' + k + ' ') > -1 || (k.length > 4 && q.indexOf(k) > -1); }

  function detectLang(q) {
    var words = q.trim().split(' '), hits = 0;
    words.forEach(function (w) { if (URDU_HINTS.indexOf(w) > -1) hits++; });
    if (/[؀-ۿ]/.test(q) || hits >= 1 && hits / Math.max(words.length, 1) >= 0.25) return 'ur';
    if (hits === 0 && /^[a-z0-9 ]+$/.test(q.trim()) && words.length >= 3) return 'en';
    return null;
  }

  function find(raw) {
    var q = norm(raw);
    var l = detectLang(q); if (l) lang = l;
    if (A.urgent.k.some(function (k) { return has(q, k); })) return A.urgent;
    var best = null, score = 0;
    Object.keys(A).forEach(function (id) {
      var s = 0;
      A[id].k.forEach(function (k) { if (has(q, k)) s += k.length + (k.indexOf(' ') > -1 ? 4 : 0); });
      if (id === 'greet' || id === 'thanks' || id === 'bye') { if (q.trim().split(' ').length > 4) s = Math.floor(s / 3); }
      if (s > score) { score = s; best = A[id]; }
    });
    return best;
  }
  function out(a) {
    if (!a) return { text: UI[lang].fb, links: UI[lang].fbl };
    return { text: a[lang], links: a.links };
  }

  var root = document.createElement('div');
  root.className = 'hw-chat';
  root.innerHTML =
    '<div class="hw-panel" id="hw-panel" role="dialog" aria-label="HOWA assistant" hidden>' +
      '<div class="hw-head"><img src="images/logo.svg" alt=""><div><strong>HOWA Assistant</strong><span class="hw-sub"></span></div>' +
      '<button type="button" class="hw-lang" aria-label="Switch language">EN / Urdu</button>' +
      '<button type="button" class="hw-close" aria-label="Close chat">&times;</button></div>' +
      '<div class="hw-log" role="log" aria-live="polite"></div>' +
      '<div class="hw-chips"></div>' +
      '<form class="hw-form"><input type="text" maxlength="200" autocomplete="off" aria-label="Your question"><button type="submit" aria-label="Send">&#10148;</button></form>' +
      '<p class="hw-note"></p>' +
    '</div>' +
    '<button type="button" class="hw-launch" aria-label="Open HOWA assistant" aria-expanded="false" aria-controls="hw-panel"><img src="images/logo.svg" alt=""></button>';
  document.body.appendChild(root);

  var panel = root.querySelector('.hw-panel');
  var launch = root.querySelector('.hw-launch');
  var log = root.querySelector('.hw-log');
  var chipBox = root.querySelector('.hw-chips');
  var form = root.querySelector('.hw-form');
  var input = form.querySelector('input');
  var started = false;

  function renderUI() {
    input.placeholder = UI[lang].ph;
    root.querySelector('.hw-sub').textContent = UI[lang].sub;
    root.querySelector('.hw-note').textContent = UI[lang].note;
    root.querySelector('.hw-lang').textContent = lang === 'en' ? 'Roman Urdu' : 'English';
    chipBox.innerHTML = '';
    CHIPS[lang].forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = c[0];
      b.addEventListener('click', function () { add(c[0], 'user'); reply(out(A[c[1]])); });
      chipBox.appendChild(b);
    });
  }
  function add(text, who, links) {
    var m = document.createElement('div');
    m.className = 'hw-msg ' + who;
    m.textContent = text;
    if (links) {
      var box = document.createElement('div');
      box.className = 'hw-links';
      links.forEach(function (l) {
        var a = document.createElement('a');
        a.href = l[1]; a.textContent = l[0];
        if (/^https?:/.test(l[1])) { a.target = '_blank'; a.rel = 'noopener'; }
        box.appendChild(a);
      });
      m.appendChild(box);
    }
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
  }
  function reply(o) { renderUI(); setTimeout(function () { add(o.text, 'bot', o.links); }, 350); }
  function setOpen(open) {
    panel.hidden = !open;
    launch.setAttribute('aria-expanded', String(open));
    if (open) {
      if (!started) { started = true; renderUI(); add(UI.ur.hello, 'bot'); }
      input.focus();
    } else { launch.focus(); }
  }
  launch.addEventListener('click', function () { setOpen(panel.hidden); });
  root.querySelector('.hw-close').addEventListener('click', function () { setOpen(false); });
  root.querySelector('.hw-lang').addEventListener('click', function () {
    lang = lang === 'en' ? 'ur' : 'en'; renderUI();
    add(UI[lang].hello, 'bot');
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) setOpen(false); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var q = input.value.trim();
    if (!q) return;
    add(q, 'user'); input.value = '';
    reply(out(find(q)));
  });
})();
