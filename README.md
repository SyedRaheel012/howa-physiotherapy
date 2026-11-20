# HOWA — GitHub Pages version

Upload the CONTENTS of this folder to your GitHub repository. `index.html` must be at the repository root, alongside `css`, `js` and `images`.

```
index.html                 Home page
about.html                 About HOWA
services.html              Searchable services
guides.html                Conditions and exercises
contact.html               Contact details
appointment.html           WhatsApp visit request
privacy.html               Privacy information
*.html                     Individual service pages
css/style.css              Styling
js/app.js                  Menu, search and WhatsApp form
images/                    Logo and optimised images
.nojekyll                  GitHub Pages configuration
```

## Publish
1. Create a GitHub repository and upload these files and folders.
2. Open Settings → Pages → Build and deployment.
3. Choose Deploy from a branch, then `main` and `/ (root)`, and Save.
4. GitHub will show your published website URL after deployment.

All local links are relative, so a repository URL such as `https://username.github.io/howa/` works. No Python installation, server, database or build command is required. Do not upload the separate Python project's `instance` directory.

## Booking
The form validates details locally and prepares a WhatsApp message. The patient clicks Open WhatsApp, reviews the message and presses Send. Nothing is submitted or saved by this website. There is no admin dashboard, automatic appointment confirmation or email notification in this static version. WhatsApp remains available without JavaScript.

## Preview and updates
Double-click index.html, or serve this folder with any static web server. Edit the HTML pages, css/style.css and js/app.js directly. Keep the images folder alongside the pages.

The original Python project remains in ../website. To regenerate the export after editing its templates, run `python export_static.py` there with its dependencies installed. Regeneration overwrites exported pages and assets; preserve direct static edits before doing so.
