# 🧠 InSITE Database
 
<img width="20%" alt="InSITE Database logo" src="https://github.com/user-attachments/assets/df9d9655-1ca9-4a0c-8ccc-19cd6d304af7" align="right" vspace="10">
This respository contains the source code for the <a href="https://www.columbia.edu/cu/insitedatabase/" target="_blank">InSITE Database</a>.
 
### 🗂️ What's in the database
 
| Gallery | Contents |
|---|---|
| **Adult Brain** | 1,186 confocal images of the adult brain |
| **Adult VNC** | 665 images of the adult ventral nerve cord |
| **Larval Brain** | 719 images of the larval brain |
| **Stock Table** | Searchable table of 864 InSITE lines with Bloomington stock numbers |
 
### 🖼️ How the galleries work
 
**Step 1 — build (run locally, once per update):**
 
```bash
python generate_manifest.py              # regenerate all galleries
python generate_manifest.py adultbrain   # or target one gallery only
```
 
This scans each gallery's `_thumb/` folder and writes a sorted `manifest.json`:
 
```json
["IT.0001.jpg", "IT.0002.jpg", "IT.0003.jpg"]
```
 
**Step 2 — browser loads the gallery:**
 
Each `.html` gallery page fetches its `manifest.json` at load time and builds the [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) image gallery in JavaScript.

### 🏁 Quick start: run the site locally
 
```bash
# 1. Clone the repository
git clone https://github.com/naureeng/InSITE_Database.git
cd InSITE_Database
 
# 2. Generate image manifests (requires Python 3)
python generate_manifest.py
 
# 3. Start a local server
cd Website
python -m http.server 8000
# → open http://localhost:8000/index.html
```
 
### ➕ Adding or removing images
 
```bash
# 1. Add full-size image to the gallery folder
cp my_image.jpg Website/adultbrain/
 
# 2. Add the matching thumbnail (must have the exact same filename)
cp my_image_thumb.jpg Website/adultbrain/_thumb/my_image.jpg
 
# 3. Regenerate the manifest
python generate_manifest.py adultbrain
 
# 4. Upload the updated files to CUNIX (see Deployment below)
```
 
To **remove** an image, delete it from both the gallery folder and `_thumb/`, then re-run `generate_manifest.py`.
 
### 🚀 Deploying to Columbia CUNIX
 
Files are served from `~/public_html/` on CUNIX at `https://cunix.columbia.edu/~<UNI>/`.
 
**First-time setup:**
 
```bash
# SSH into CUNIX (requires Columbia UNI + Duo MFA)
ssh <UNI>@cunix.columbia.edu
mkdir -p ~/public_html
chmod 755 ~/public_html
```
 
**Upload files:**
 
```bash
# Full upload
scp -r Website/ <UNI>@cunix.columbia.edu:~/public_html/
 
# Incremental update — skips unchanged files, faster for large image sets
rsync -avz --delete Website/ <UNI>@cunix.columbia.edu:~/public_html/
```
 
**Set permissions after every upload:**
 
```bash
chmod -R 755 ~/public_html
```
 
### 🤗 Citation
 
If you use InSITE images or data in your work, please cite:
 
> Expanding the InSITE Gal4 resource for studies of neural development and function. *bioRxiv*. 2026.
 
InSITE lines can be ordered from the [Bloomington Drosophila Stock Center](http://flystocks.bio.indiana.edu/Browse/gal4/insite.php).
 
### 📬 Contact
 
For questions about the database or InSITE lines, please raise a [GitHub issue](https://github.com/naureeng/InSITE_Database/issues) or contact the Grueber Lab:
 
**Grueber Lab** · Columbia University  
3227 Broadway, L9-007 · New York, NY 10027  
Tel: (212) 853-1025 · wg2135@columbia.edu
