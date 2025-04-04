# 🕵️‍♂️ Tracking Visualizer

Dobrodošel v največjem detektivu interneta – razširitvi za Chrome, ki razkrije **vse skrite trackerje**, ki te vohljajo po spletu!  
To je kot Lightbeam, ampak brez nostalgije – bolj moderno, bolj kompaktno, z veliko manj Mozilla.

---

## 🚀 Kako testirat (za mojo ekipo s faksa – beri do konca)

### 1. Kloniraj repozitorij:
```
git clone https://github.com/galkovse1/Projekt-OIV
```

➡️ ali pa samo klikni “Code” > “Download ZIP” če se igraš na Windowsih brez gita (ne bom sodil, obljubim).

### 2. Odpri Chrome in pojdi na:
```
chrome://extensions
```

### 3. Vključi Developer Mode (gumb zgoraj desno)

### 4. Klikni **"Load unpacked"**:
➡️ Izberi mapo s to razširitvijo.

### 5. Obišči poljubno spletno stran (npr. 24ur, YouTube, Gmail)  
Klikni na ikono razširitve → in glej vizualizacijo!

---

## 🛠️ Kako to deluje

1. `background.js` posluša promet med domenami.
2. Ko greš na stran in ta pokliče neko drugo domeno (recimo oglaševalca) – to beležimo kot tracker.
3. V popupu klikneš → `popup.js` prebere podatke, `graph.js` nariše krogce.
4. Zeleni krog si ti (trenutna stran), rdeči so zasledovalci, povezave so njihove špijonske žice.

---

## 💡 Ideje za nadgradnjo

- Tooltipi (✅ zdaj dodani!)
- Barve glede na tip domen
- Eksport v CSV
- Integracija z Notion (ker zakaj pa ne)

---

## 📞 Če se ti kej zalomi

- Pošlji screenshot.
- Ne paničari.
- Pokliči Gal-a.