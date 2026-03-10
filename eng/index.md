---
layout: home

hero:
  name: "BlockéMon"
  text: "The Ultimate Cobblemon Frontier Adventure"
  tagline: "Forge your path, tame the wild, and survive the blocky unknown."
  image:
    src: /data/logo.png
    alt: BlockéMon Logo
  actions:
    - theme: brand
      text: 📜 Read the Rules
      link: /eng/rules

features:
  - icon: 🧭
    title: Uncharted Expeditions
    details: Traverse a massive world of custom biomes where every corner hides a new discovery.
  - icon: ⛺
    title: Survival & Mastery
    details: It's not just about catching; it's about building your legacy in a dangerous frontier.
  - icon: 🏅
    title: Elite Challenges
    details: Conquer untamed bosses and prove your strength in high-stakes competitive trials.
---

<div class="server-status-banner">
  <div class="inner">
    <span id="status-dot" class="pulse-dot"></span>
    <p>
      <strong>Frontier Status:</strong> <span id="status-text">Scanning...</span> 
      <span id="player-count"></span>
      <br>
      <strong>IP:</strong> <code>dxb-1.zeyroncloud.com:19139</code>
    </p>
  </div>
</div>

<style>
/* Hero Title Gradient Fix & Brand Colors */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #FFD700 10%, #FF4500 90%);
}

/* Fix for the Hero Name rendering */
.VPHero .name {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Professional spacing for high-end readability */
.VPHero .text {
  font-size: clamp(32px, 5vw, 42px) !important;
  line-height: 1.2 !important;
  font-weight: 800 !important;
  color: var(--vp-c-text-1);
  margin-top: 12px;
  letter-spacing: -1px;
}

.VPHero .tagline {
  font-size: clamp(18px, 3vw, 22px) !important;
  letter-spacing: 0.1px !important;
  line-height: 1.6 !important;
  max-width: 650px;
  margin: 0 auto;
  opacity: 0.85;
  font-weight: 500;
}

/* --- BIG BUTTON UPDATE --- */
.VPHero .actions .VPButton.brand {
  font-size: 1.2rem !important; 
  padding: 0 32px !important;   
  height: 54px !important;      
  line-height: 52px !important;
  font-weight: 700 !important;
  border-radius: 12px !important; 
  transition: transform 0.2s ease;
  box-shadow: 0 10px 20px -10px rgba(255, 69, 0, 0.5);
}

.VPHero .actions .VPButton.brand:hover {
  transform: translateY(-2px); 
  box-shadow: 0 12px 24px -10px rgba(255, 69, 0, 0.6);
}

/* Status Banner Styling */
.server-status-banner {
  margin: 40px auto;
  max-width: 600px;
  padding: 10px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.server-status-banner .inner {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.pulse-dot {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
  animation: banner-pulse 2s infinite;
}

@keyframes banner-pulse {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.VPHero .actions {
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
}

.VPFeatures {
  padding: 60px 24px !important;
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const ip = 'dxb-1.zeyroncloud.com';
  const port = '19139';
  
  const statusText = document.getElementById('status-text');
  const statusDot = document.getElementById('status-dot');
  const playerCount = document.getElementById('player-count');

  try {
    const response = await fetch(`https://api.mcstatus.io/v2/status/java/${ip}:${port}`);
    const data = await response.json();

    if (data.online) {
      statusText.innerText = 'All systems operational.';
      statusDot.style.background = '#10b981';
      statusDot.style.boxShadow = '0 0 10px #10b981';
      playerCount.innerHTML = ` — <strong>${data.players.online}</strong> Pioneers Online`;
    } else {
      statusText.innerText = 'Frontier Offline (Maintenance)';
      statusDot.style.background = '#ef4444';
      statusDot.style.boxShadow = '0 0 10px #ef4444';
      playerCount.innerText = '';
    }
  } catch (e) {
    statusText.innerText = 'Status Link Severed';
  }
})
</script>