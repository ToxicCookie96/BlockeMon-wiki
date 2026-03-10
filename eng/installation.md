---
title: Technical Briefing
description: Equipping the BlockéMon Frontier Modpack.
---

# 🛠️ Start Your Expedition

To interface with the **BlockéMon Frontier**, your system must be equipped with the correct modded environment. Follow these protocols to initialize your client.

---

## ⚙️ Protocol I: Launcher Initialization

We utilize the **CurseForge Architecture** to manage our expedition modules. This ensures all players are synchronized on the same version.

1. **Acquisition:** Download the launcher from the [Official CurseForge Portal](https://www.curseforge.com/download/app).
2. **Setup:** Install the application following the standard prompts for your OS (Windows/macOS).
3. **Authentication:** Sign in to ensure your profile data is cloud-synced.

::: danger IMPORTANT
Ensure **Minecraft Java Edition** is installed and has been launched at least once before proceeding.
:::

---

## 📦 Protocol II: Acquiring the Manifest

Download the official BlockéMon Frontier configuration archive below. This manifest contains the logic required to render the custom biomes and entities.

<div class="action-container">
  <a class="VPButton brand download-btn" href="/blockemon/data/modpac.zip" download>
    🚀 Click Here to Download Mod File (.zip)
  </a>
</div>

*Store this file in a temporary directory; you will import it into the launcher in the next phase.*

---

## 📥 Protocol III: System Integration

1. Launch **CurseForge** and select **Minecraft**.
2. Navigate to **Create Custom Profile** (located at the top right).
3. Select the **"Import"** link in the dialog box.
4. Locate and select the `modpac.zip` you just downloaded.
5. **Wait for Initialization:** CurseForge will now pull the required assets from our repository.

---

## ⚡ Protocol IV: Performance Optimization

For a smooth experience in the wild frontier, your system requires proper memory allocation. 

| Requirement Type | Recommended Setting |
| :--- | :--- |
| **Minimum** | 4 GB (4096 MB) |
| **Recommended** | **6 GB (6144 MB)** |
| **Pioneer (16GB+ RAM)** | 8 GB (8192 MB) |

**How to adjust:** Go to `CurseForge Settings` ➔ `Minecraft` ➔ Scroll down to `Allocated Memory`.

::: tip OPTIMIZATION NOTE
Since the Frontier features heavy entity rendering and custom biomes, allocating 6GB-8GB ensures your frame rate remains stable during boss encounters.
:::

---

## 🔄 Protocol V: Version Synchronization
**Last Manifest Update:** March 10, 2026

When the frontier expands, you must synchronize your files. We offer a **Delta Update** to save your personal data.

---

## 🆘 Technical Interference?

If the initialization fails or you encounter a "Java Exception" error:
* Verify you are using the correct **Java Runtime**.
* Contact our Dispatch Team in the [**Discord Support Channel**](https://discord.gg/TDBcpqBxvZ).

<style>
/* Center the button container */
.action-container {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

/* Make the Download Button BIG and Bold */
.download-btn {
  font-size: 1.4rem !important;
  padding: 15px 40px !important;
  height: auto !important;
  line-height: 1.5 !important;
  font-weight: 800 !important;
  border-radius: 16px !important;
  background: linear-gradient(135deg, #FFD700 10%, #FF4500 90%) !important;
  color: white !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 10px 30px -10px rgba(255, 69, 0, 0.6);
}

.download-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 35px -10px rgba(255, 69, 0, 0.8);
}

/* Subtle glow animation */
@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(255, 69, 0, 0.4); }
  50% { box-shadow: 0 0 20px rgba(255, 69, 0, 0.7); }
  100% { box-shadow: 0 0 5px rgba(255, 69, 0, 0.4); }
}

.download-btn {
  animation: glow 3s infinite ease-in-out;
}
</style>