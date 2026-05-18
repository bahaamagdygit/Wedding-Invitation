let isOpen = false;

function openEnvelope() {
  if (isOpen) return;
  isOpen = true;
  const env = document.getElementById('envelope');
  const hint = document.getElementById('hint');
  env.classList.add('opened');
  hint.classList.add('hide');

  setTimeout(() => {
    document.getElementById('invitation').classList.add('show');
    launchConfetti();
  }, 1500);
}

function closeInvitation() {
  document.getElementById('invitation').classList.remove('show');
  setTimeout(() => {
    const env = document.getElementById('envelope');
    const hint = document.getElementById('hint');
    env.classList.remove('opened');
    hint.classList.remove('hide');
    isOpen = false;
  }, 600);
}

function launchConfetti() {
  const box = document.getElementById('confetti');
  box.innerHTML = '';
  const colors = ['#b69b54', '#d8c48a', '#6f7a4f', '#8a7338', '#efe2c1'];
  for (let i = 0; i < 70; i++) {
    const c = document.createElement('div');
    c.className = 'conf';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (2.5 + Math.random() * 2.5) + 's';
    c.style.animationDelay = (Math.random() * 0.6) + 's';
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    c.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    box.appendChild(c);
  }
  setTimeout(() => { box.innerHTML = ''; }, 5500);
}

function addToCalendar() {
  // 29 May 2026, 8:00 PM Cairo time
  const start = '20260529T200000';
  const end = '20260529T235900';
  const title = encodeURIComponent('حفل زفاف م/ محمد و م/ همس');
  const details = encodeURIComponent('بحضوركم الكريم تكتمل فرحتنا');
  const location = encodeURIComponent('قاعة البارون - سوهاج - الشرق خلف مستشفى الجامعة');
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  window.open(url, '_blank');
}

function shareWhatsApp() {
  const lines = [
    '✨ دعوة زفاف ✨',
    '',
    'يتشرف م/ محمد و م/ همس بدعوة سيادتكم لحضور حفل زفافهما',
    '',
    '🗓️ يوم الجمعة 29/5/2026 - الساعة 08 مساءً',
    '📍 قاعة البارون – سوهاج (الشرق خلف مستشفى الجامعة)',
    '',
    'بحضوركم الكريم تكتمل فرحتنا 💛',
    '',
    'رابط الدعوة: ' + window.location.href
  ];
  const text = encodeURIComponent(lines.join('\n'));
  const url = 'https://wa.me/?text=' + text;
  window.open(url, '_blank');
}
