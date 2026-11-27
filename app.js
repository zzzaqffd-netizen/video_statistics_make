import * as THREE from 'three';

const THEMES = [
  {
    name: 'NVDA · Cyberpunk Neon',
    metricLabel: 'TECH MARKET CAP RACE',
    metricValue: '$3.42T',
    delta: '+184.6% YTD · #1',
    bg: 0x070614,
    accent: '#00f0ff',
    secondary: '#ff2a85',
    shape: 'torusKnot',
    riseStyle: 'rocket',
    rows: [
      { label: 'NVDA · NVIDIA', value: 3.42, unit: 'T', color: '#76b900' },
      { label: 'AAPL · Apple', value: 3.35, unit: 'T', color: '#64748b' },
      { label: 'MSFT · Microsoft', value: 3.18, unit: 'T', color: '#0ea5e9' },
      { label: 'AMZN · Amazon', value: 2.24, unit: 'T', color: '#f59e0b' },
      { label: 'GOOGL · Alphabet', value: 2.12, unit: 'T', color: '#ef4444' },
      { label: 'META · Meta', value: 1.48, unit: 'T', color: '#3b82f6' },
    ],
  },
  {
    name: 'TSLA · Solaris Gold',
    metricLabel: 'EV & MOBILITY SURGE',
    metricValue: '$1.12T',
    delta: '+72.4% Q4 · #1',
    bg: 0x120b05,
    accent: '#ffb703',
    secondary: '#fb8500',
    shape: 'icosahedron',
    riseStyle: 'spring',
    rows: [
      { label: 'TSLA · Tesla', value: 1120, unit: 'B', color: '#e11d48' },
      { label: 'TM · Toyota', value: 245, unit: 'B', color: '#ea580c' },
      { label: 'BYD · BYD Auto', value: 118, unit: 'B', color: '#0284c7' },
      { label: 'RACE · Ferrari', value: 84, unit: 'B', color: '#dc2626' },
      { label: 'P911 · Porsche', value: 62, unit: 'B', color: '#ca8a04' },
      { label: 'RIVN · Rivian', value: 14, unit: 'B', color: '#16a34a' },
    ],
  },
  {
    name: 'WEALTH · Abyssal Ocean',
    metricLabel: 'BILLIONAIRE RACE',
    metricValue: '$1,156B',
    delta: 'ROAD TO $1 TRILLION',
    bg: 0x03101a,
    accent: '#38bdf8',
    secondary: '#2dd4bf',
    shape: 'octahedron',
    riseStyle: 'smooth',
    rows: [
      { label: 'Elon Musk · TSLA', value: 1156, unit: 'B', color: '#dc2626' },
      { label: 'Larry Page · GOOG', value: 291, unit: 'B', color: '#2563eb' },
      { label: 'Sergey Brin · GOOG', value: 268, unit: 'B', color: '#1d4ed8' },
      { label: 'Jeff Bezos · AMZN', value: 249, unit: 'B', color: '#7c3aed' },
      { label: 'Larry Ellison · ORCL', value: 229, unit: 'B', color: '#ea580c' },
      { label: 'Jensen Huang · NVDA', value: 175, unit: 'B', color: '#16a34a' },
    ],
  },
  {
    name: 'CLOUD · Emerald Matrix',
    metricLabel: 'CLOUD & AI REVENUE',
    metricValue: '$3.18T',
    delta: '+31.2% YoY · AZURE',
    bg: 0x04120a,
    accent: '#10b981',
    secondary: '#a3e635',
    shape: 'dodecahedron',
    riseStyle: 'cascade',
    rows: [
      { label: 'AWS · Amazon', value: 108, unit: 'B', color: '#f59e0b' },
      { label: 'Azure · Microsoft', value: 96, unit: 'B', color: '#0ea5e9' },
      { label: 'GCP · Google', value: 44, unit: 'B', color: '#10b981' },
      { label: 'OCI · Oracle', value: 24, unit: 'B', color: '#ef4444' },
      { label: 'CRM · Salesforce', value: 38, unit: 'B', color: '#06b6d4' },
      { label: 'NOW · ServiceNow', value: 11, unit: 'B', color: '#84cc16' },
    ],
  },
  {
    name: 'CHIPS · Crimson Pulse',
    metricLabel: 'SILICON & COMPUTE',
    metricValue: '$2.24T',
    delta: '+49.8% YoY · #1',
    bg: 0x14050a,
    accent: '#ff3366',
    secondary: '#c084fc',
    shape: 'torus',
    riseStyle: 'flip',
    rows: [
      { label: 'NVDA · NVIDIA', value: 3420, unit: 'B', color: '#76b900' },
      { label: 'TSM · TSMC', value: 980, unit: 'B', color: '#e11d48' },
      { label: 'AVGO · Broadcom', value: 840, unit: 'B', color: '#dc2626' },
      { label: 'ASML · ASML', value: 310, unit: 'B', color: '#2563eb' },
      { label: 'AMD · AMD', value: 245, unit: 'B', color: '#0d9488' },
      { label: 'INTC · Intel', value: 98, unit: 'B', color: '#0284c7' },
    ],
  },
];

const canvas = document.getElementById('webgl-canvas');
const themePill = document.getElementById('theme-pill');
const themeDot = document.getElementById('theme-dot');
const navDotsEl = document.getElementById('nav-dots');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const scene = new THREE.Scene();
scene.background = new THREE.Color(THEMES[0].bg);
scene.fog = new THREE.FogExp2(THEMES[0].bg, 0.045);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.35, 8.2);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const keyLight = new THREE.PointLight(THEMES[0].accent, 3.5, 25);
keyLight.position.set(0, 3, 5);
scene.add(keyLight);

const rimLight = new THREE.PointLight(THEMES[0].secondary, 2.5, 25);
rimLight.position.set(-4, -2, 3);
scene.add(rimLight);

// Floor Grid
const gridHelper = new THREE.GridHelper(48, 48, 0x00f0ff, 0x161b33);
gridHelper.position.y = -2.45;
gridHelper.material.transparent = true;
gridHelper.material.opacity = 0.35;
scene.add(gridHelper);

// Particle Field
const particleCount = 420;
const particleGeo = new THREE.BufferGeometry();
const particlePos = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  particlePos[i * 3] = (Math.random() - 0.5) * 34;
  particlePos[i * 3 + 1] = (Math.random() - 0.5) * 14;
  particlePos[i * 3 + 2] = (Math.random() - 0.5) * 18 - 2;
}
particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
const particleMat = new THREE.PointsMaterial({
  size: 0.065,
  color: new THREE.Color(THEMES[0].accent),
  transparent: true,
  opacity: 0.75,
});
const particles = new THREE.Points(particleGeo, particleMat);
scene.add(particles);

function formatCounter(targetStr, progress) {
  const match = targetStr.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
  if (!match) return targetStr;
  const [, prefix, numStr, suffix] = match;
  const hasComma = numStr.includes(',');
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  const targetNum = parseFloat(numStr.replace(/,/g, ''));
  const current = targetNum * progress;
  let formatted = current.toFixed(decimals);
  if (hasComma) {
    const parts = formatted.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    formatted = parts.join('.');
  }
  return `${prefix}${formatted}${suffix}`;
}

function drawCardTexture(c, theme, index, progress = 1) {
  const ctx = c.getContext('2d');
  const eased = 1 - Math.pow(1 - progress, 3);

  // Card background gradient
  const grad = ctx.createLinearGradient(0, 0, 640, 840);
  grad.addColorStop(0, '#0f1322');
  grad.addColorStop(1, '#070911');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 640, 840);

  // Top glow
  const glow = ctx.createRadialGradient(320, 120, 10, 320, 120, 340);
  glow.addColorStop(0, `${theme.accent}33`);
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 640, 840);

  // Border
  ctx.strokeStyle = `${theme.accent}aa`;
  ctx.lineWidth = 6;
  ctx.strokeRect(18, 18, 604, 804);

  // Header
  ctx.fillStyle = theme.accent;
  ctx.font = 'bold 22px Inter, sans-serif';
  ctx.fillText(`0${index + 1} // ${theme.name.toUpperCase()}`, 52, 78);

  // Metric Label
  ctx.fillStyle = 'rgba(255,255,255,0.58)';
  ctx.font = '600 22px Inter, sans-serif';
  ctx.fillText(theme.metricLabel, 52, 170);

  // Metric Value (rises once)
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 92px Inter, sans-serif';
  ctx.fillText(formatCounter(theme.metricValue, eased), 52, 268);

  // Delta pill
  ctx.fillStyle = `${theme.secondary}33`;
  ctx.fillRect(52, 298, 290, 42);
  ctx.fillStyle = theme.secondary;
  ctx.font = 'bold 21px Inter, sans-serif';
  ctx.fillText(theme.delta, 68, 326);

  // Subtitle / Rank Header
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.font = '600 18px Inter, sans-serif';
  ctx.fillText('LIVE RANKING · HORIZONTAL SURGE', 52, 386);

  // Horizontal Bar Chart Race (Global Stats style)
  const startY = 412;
  const rowH = 52;
  const rowGap = 14;
  const maxBarW = 395;
  const maxVal = theme.rows[0].value;

  theme.rows.forEach((row, i) => {
    const rowDelay = i * 0.07;
    const rowProg = Math.max(0, Math.min(1, (eased - rowDelay) / (1 - rowDelay)));
    const y = startY + i * (rowH + rowGap);
    const barW = Math.max(24, (row.value / maxVal) * maxBarW * rowProg);

    // Bar background track
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(52, y, maxBarW, rowH);

    // Colored horizontal bar
    const barGrad = ctx.createLinearGradient(52, y, 52 + barW, y);
    barGrad.addColorStop(0, row.color);
    barGrad.addColorStop(1, `${row.color}cc`);
    ctx.fillStyle = barGrad;
    ctx.fillRect(52, y, barW, rowH);

    // Rank & Company Label
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.fillText(`#${i + 1}  ${row.label}`, 64, y + 33);

    // Animated Value on the right
    const curVal = row.value * rowProg;
    const valStr = row.value >= 100 ? `$${Math.round(curVal)}${row.unit}` : `$${curVal.toFixed(2)}${row.unit}`;
    ctx.fillStyle = i === 0 ? theme.accent : 'rgba(255,255,255,0.88)';
    ctx.font = 'bold 22px Inter, sans-serif';
    ctx.fillText(valStr, 52 + maxBarW + 16, y + 34);
  });
}

function createCardTexture(theme, index) {
  const c = document.createElement('canvas');
  c.width = 640;
  c.height = 840;
  drawCardTexture(c, theme, index, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return { tex, canvas: c };
}

function createAccentMesh(theme) {
  let geo;
  switch (theme.shape) {
    case 'torusKnot':
      geo = new THREE.TorusKnotGeometry(0.45, 0.14, 64, 12);
      break;
    case 'icosahedron':
      geo = new THREE.IcosahedronGeometry(0.55, 0);
      break;
    case 'octahedron':
      geo = new THREE.OctahedronGeometry(0.58, 0);
      break;
    case 'dodecahedron':
      geo = new THREE.DodecahedronGeometry(0.52, 0);
      break;
    default:
      geo = new THREE.TorusGeometry(0.46, 0.16, 16, 48);
  }
  const mat = new THREE.MeshStandardMaterial({
    color: theme.accent,
    emissive: theme.secondary,
    emissiveIntensity: 0.35,
    wireframe: true,
  });
  return new THREE.Mesh(geo, mat);
}

// Build 3D Cards from Left to Right
const CARD_SPACING = 3.8;
const cards = [];
const cardGroup = new THREE.Group();
scene.add(cardGroup);

THEMES.forEach((theme, i) => {
  const group = new THREE.Group();
  group.position.x = i * CARD_SPACING;

  const cardGeo = new THREE.BoxGeometry(2.6, 3.4, 0.12);
  const { tex: frontTex, canvas: cardCanvas } = createCardTexture(theme, i);
  const sideMat = new THREE.MeshStandardMaterial({
    color: 0x111626,
    metalness: 0.6,
    roughness: 0.3,
  });
  const frontMat = new THREE.MeshStandardMaterial({
    map: frontTex,
    roughness: 0.25,
    metalness: 0.1,
  });

  const mesh = new THREE.Mesh(cardGeo, [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat]);
  mesh.userData = { index: i };
  group.add(mesh);

  const accentMesh = createAccentMesh(theme);
  accentMesh.position.set(0, 2.25, -0.4);
  group.add(accentMesh);

  cardGroup.add(group);
  cards.push({
    group,
    mesh,
    accentMesh,
    theme,
    index: i,
    cardCanvas,
    frontTex,
    riseProgress: 0,
    hasStartedRise: i === 0,
  });

  // Nav dot
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Select ${theme.name}`);
  dot.addEventListener('click', () => setTargetIndex(i));
  navDotsEl.appendChild(dot);
});

let currentPos = 0;
let targetIndex = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartPos = 0;

function setTargetIndex(idx) {
  targetIndex = Math.max(0, Math.min(THEMES.length - 1, idx));
  updateHUD(targetIndex);
}

function updateHUD(idx) {
  const t = THEMES[idx];
  themePill.textContent = `Theme ${idx + 1} / ${THEMES.length} · ${t.name}`;
  themePill.style.borderColor = `${t.accent}66`;
  themeDot.style.background = t.accent;
  themeDot.style.boxShadow = `0 0 16px ${t.accent}`;

  const dots = navDotsEl.querySelectorAll('.dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

prevBtn.addEventListener('click', () => setTargetIndex(targetIndex - 1));
nextBtn.addEventListener('click', () => setTargetIndex(targetIndex + 1));

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') setTargetIndex(targetIndex - 1);
  if (e.key === 'ArrowRight') setTargetIndex(targetIndex + 1);
});

window.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaX) > 10 || Math.abs(e.deltaY) > 10) {
    const dir = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) > 0 ? 1 : -1;
    setTargetIndex(targetIndex + dir);
  }
}, { passive: true });

canvas.addEventListener('pointerdown', (e) => {
  isDragging = true;
  dragStartX = e.clientX;
  dragStartPos = currentPos;
});

window.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const dx = (e.clientX - dragStartX) / 220;
  const next = Math.max(0, Math.min(THEMES.length - 1, dragStartPos - dx));
  targetIndex = Math.round(next);
  currentPos = next;
  updateHUD(targetIndex);
});

window.addEventListener('pointerup', () => {
  isDragging = false;
});

// Raycaster for clicking cards directly
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
canvas.addEventListener('click', (e) => {
  if (Math.abs(e.clientX - dragStartX) > 8) return;
  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(cards.map((c) => c.mesh));
  if (hits.length > 0) {
    setTargetIndex(hits[0].object.userData.index);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const tempBg = new THREE.Color();
const tempAccent = new THREE.Color();
const tempSecondary = new THREE.Color();
const clock = new THREE.Clock();
const RISE_DURATION_SECONDS = 180; // 3 minutes

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);
  const t = clock.elapsedTime;

  if (!isDragging) {
    currentPos += (targetIndex - currentPos) * 0.08;
  }

  // Smoothly interpolate scene theme from left to right
  const floorIdx = Math.floor(currentPos);
  const ceilIdx = Math.min(THEMES.length - 1, floorIdx + 1);
  const frac = currentPos - floorIdx;

  const themeA = THEMES[floorIdx];
  const themeB = THEMES[ceilIdx];

  tempBg.setHex(themeA.bg).lerp(new THREE.Color(themeB.bg), frac);
  scene.background.copy(tempBg);
  scene.fog.color.copy(tempBg);

  tempAccent.set(themeA.accent).lerp(new THREE.Color(themeB.accent), frac);
  tempSecondary.set(themeA.secondary).lerp(new THREE.Color(themeB.secondary), frac);

  keyLight.color.copy(tempAccent);
  rimLight.color.copy(tempSecondary);
  particleMat.color.copy(tempAccent);

  // Move card stage horizontally
  cardGroup.position.x = -currentPos * CARD_SPACING;

  cards.forEach((card, i) => {
    const dist = i - currentPos;
    const absDist = Math.abs(dist);

    if (absDist < 0.85) {
      card.hasStartedRise = true;
    }

    if (card.hasStartedRise && card.riseProgress < 1) {
      card.riseProgress = Math.min(1, card.riseProgress + dt / RISE_DURATION_SECONDS);
      drawCardTexture(card.cardCanvas, card.theme, card.index, card.riseProgress);
      card.frontTex.needsUpdate = true;
    }

    let riseEase = 1 - Math.pow(1 - card.riseProgress, 3);
    let riseOffsetY = (1 - riseEase) * -1.1;
    let riseRotX = 0;

    if (card.theme.riseStyle === 'rocket') {
      riseEase = 1 - Math.pow(1 - card.riseProgress, 5);
      riseOffsetY = (1 - riseEase) * -2.2;
    } else if (card.theme.riseStyle === 'spring') {
      const p = card.riseProgress;
      const c4 = (2 * Math.PI) / 3;
      riseEase = p === 0 ? 0 : p === 1 ? 1 : Math.pow(2, -8 * p) * Math.sin((p * 10 - 0.75) * c4) + 1;
      riseOffsetY = (1 - riseEase) * -1.4;
    } else if (card.theme.riseStyle === 'cascade') {
      const steps = 6;
      const stepped = Math.floor(card.riseProgress * steps) / steps;
      riseEase = stepped + (card.riseProgress - stepped) * 0.6;
      riseOffsetY = (1 - Math.min(1, riseEase)) * -1.2;
    } else if (card.theme.riseStyle === 'flip') {
      riseEase = 1 - Math.pow(1 - card.riseProgress, 3);
      riseOffsetY = (1 - riseEase) * -1.3;
      riseRotX = (1 - riseEase) * Math.PI * 0.45;
    }

    // 3D depth, tilt, and scale
    card.group.position.z = -absDist * 1.15;
    card.group.rotation.y = -dist * 0.36;
    card.group.rotation.x = riseRotX;
    const scale = Math.max(0.74, 1.06 - absDist * 0.16);
    card.group.scale.setScalar(scale);

    // Rise once + subtle floating motion
    card.group.position.y = riseOffsetY + Math.sin(t * 1.4 + i) * 0.08;

    // Spin 3D theme accent geometry
    card.accentMesh.rotation.x = t * 0.6 + i;
    card.accentMesh.rotation.y = t * 0.9 + i;
  });

  particles.rotation.y = t * 0.03;
  renderer.render(scene, camera);
}

updateHUD(0);
animate();
