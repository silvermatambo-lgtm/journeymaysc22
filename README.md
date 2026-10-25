# My Journey My Scars Foundation — Independent Website Source

**Repository destination:** https://github.com/silvermatambo-lgtm/journeymaysc22

This repository uses TanStack Start, React, Vite, Tailwind CSS and Nitro. Deploy to Vercel by connecting its `main` branch to a Vercel project (framework: TanStack Start). All visible site text, colours, contact details, content, routes and UI components were preserved from the supplied archive.

## Install and develop

```bash
npm install
npm run dev
npm run build
npm start
```

Original media validation is enforced by `npm run verify:media` and `npm run build` to prevent deploying with missing assets.

Node.js 22+ recommended. Vercel detects the framework automatically using `vercel.json` and the Nitro plugin. Pushes to the connected production branch then deploy automatically.

## Original media restored and included

On 25 October 2026 the complete original media backup was supplied and restored into `public/media/`. The following original files are now included and verified as part of the website build:

- `founder.jpg` (119,016 bytes)
- `logo.png` (2,765,422 bytes)
- `mm1.jpg` (184,641 bytes)
- `mm13.jpg` (121,828 bytes)
- `mm14.jpg` (149,124 bytes)
- `mm5.jpg` (198,871 bytes)
- `mm8.jpg` (146,739 bytes)
- `mmmain.jpg` (114,844 bytes)
- `video1.mp4` (1,435,463 bytes)
- `video2.mp4` (2,932,950 bytes)

The site code points only at local `/media/` files, and no original builder-hosted asset URLs remain. `npm run verify:media` confirms all 10 original files. Two local, padded logo derivatives are used for PWA icons; the full original logo is retained.

## GitHub + Vercel automatic deployment

The ZIP contains the **contents** of the repository. Extract it so `package.json` sits in the repository root (do not commit an outer `journeymaysc22/` wrapper).

**Git/Vercel access checked:** The `silvermatambo-lgtm` account has GitHub write permission. Vercel project `journeymaysc22` (production branch `main`) has been linked to this repository. Upload or push this source to `main` to trigger the first deployment.

Once the correct GitHub account is connected, push all the files from this ZIP to the `main` branch:

```bash
git init
git add .
git commit -m "Migrate independent MJMS website with original media"
git branch -M main
git remote add origin https://github.com/silvermatambo-lgtm/journeymaysc22.git
git push -u origin main
```

Vercel has already been linked to `silvermatambo-lgtm/journeymaysc22`. After pushing, inspect the deployment in the Vercel dashboard. Subsequent pushes to `main` deploy automatically.

**Build verification:** Media integrity and source checks have passed locally, but full dependency installation/build could not run inside this environment because the npm registry was unreachable (`EAI_AGAIN`). Confirm the first Vercel build succeeds before advertising the new site as live.

## Configuration

- Site identity/contact content: `src/lib/site.ts`
- Visual theme/brand: `src/styles.css`
- Routes, SEO metadata: `src/routes/`
- PWA metadata: `public/manifest.webmanifest`
- Automatic deployment: connect this GitHub repository in the Vercel Dashboard
- Sitemap: `/sitemap.xml` (canonical URL set to `https://www.myjourneymyscars.co.za`)

## Original website project brief (retained for reference)

# Journey to Power

CREATE A PREMIUM MODERN MULTI-PAGE WEBSITE + PWA FOR:

MY JOURNEY MY SCARS FOUNDATION

FROM PAIN TO POWER

MY JOURNEY MY SCARS FOUNDATION

MY JOURNEY MY SCARS Foundation is dedicated to fostering hope and creating positive change in marginalized communities across South Africa and the African Continent.

Founder & Director

Sandile P Sibande

OUR GOAL

To strengthen the capacity of duty bearers through scaling up violence-prevention programmes.

SANITARY PADS DRIVE

Donation to 4 Local Schools:

✓ Imemeza Secondary School

✓ Ebhudlweni Primary School

✓ Sikhulile Secondary School

✓ Dumezizweni Primary School

OUR MOTO

Building the Future Today to Enjoy the Benefits Tomorrow

WHAT WE DO

Community Service

Tree planting in schools, libraries and local parks.

Food Parcels Donations

Tutoring & Mentorship

Donate Sanitary Pads to Schools

Conduct Youth Workshop

Conduct Debates

Art and Culture Performance

Volunteerism Promotion

Education and Research Task Team (Crew)

Health

Educating young and old about the importance of abstaining or safe sexual intercourse.

OUR KEY INITIATIVES

Back to School Campaign

Held in January and February of each year.

Sanitary Pads Drive

Christmas Toy Drive

To disadvantaged child-headed households.

Christmas Hampers Drive

Our Flagship Year-End Event

WE CAN BE REACHED ON

076 943 7774

Sandile P Sibande

Founder and Director

SOCIAL MEDIA & CONTACT DETAILS

Facebook

My Journey My Scars (Facebook)

https://www.facebook.com/profile.php?id=61578901354083

WhatsApp Channel

My Journey My Scars WhatsApp Channel

https://whatsapp.com/channel/0029Vb8BwGO3LdQSpfaNNX2c

Website

www.myjourneymyscars.co.za

SLOGAN

FROM PAIN TO POWER

ORGANISATION SUMMARY

MY JOURNEY MY SCARS Foundation is a South African community-based organisation focused on:

Violence Prevention Programmes

Community Development

Sanitary Pads Drives

Food Parcel Donations

Youth Development

Tutoring & Mentorship

Volunteerism Promotion

Health Awareness Campaigns

Art & Culture Programmes

Education & Research Initiatives

Christmas Toy Drives

Christmas Hampers Drives

Back-to-School Campaigns

Founder & Director: Sandile P Sibande

Contact: 076 943 7774

Website: www.myjourneymyscars.co.za

Motto: Building the Future Today to Enjoy the Benefits Tomorrow

Slogan: From Pain to Power

IMAGE INSTRUCTIONS:

* Use ONLY the provided client images 

* Images must look premium, realistic, modern, and professional.

* Avoid cartoon/vector illustrations.

* Optimize all images for mobile performance and fast loading.

WEBSITE STYLE:

Design a PREMIUM modern business website with smooth animations, professional layouts, modern typography, premium UI/UX, and strong mobile responsiveness.

IMPORTANT:

* Build a fully responsive MULTI-PAGE website.

* Keep the website lightweight and optimized.

* Focus on premium mobile experience.

* Ensure fast loading speed.

* Avoid over-heavy effects that slow down mobile devices.

SERVICES:

 as mentioned above

REQUIRED PAGES:for this project make as many pages required

1. Home

2. About Us

3. Services

4. Gallery

5. Contact

add more relevant pages as per above description

HOMEPAGE REQUIREMENTS:

* Premium hero slider with 3 slides

* Smooth automatic slide transitions

* Animated typing text effect

* Professional overlay gradients

* Call-to-action buttons:

  • Call Now

  • WhatsApp

  • Request Quote

* Smooth reveal animations

* Floating animated elements

* Modern service cards

* Premium hover effects

* Sticky transparent header changing on scroll

* Smooth section transitions

MOBILE MENU REQUIREMENTS:

* Mobile menu must have a proper solid background

* Never allow transparent/colorless mobile menus

* Add smooth slide-in animation

* Ensure menu text is fully visible on mobile

* Include animated close button

* Mobile navigation must feel premium and app-like

CHATBOT REQUIREMENTS:

Create a floating WhatsApp/chat assistant with:

* Welcome popup after few seconds

* Collect:

  • Name

  • Phone Number

  • Service Needed

* Quick reply buttons

* Smooth open/close animations

* Mobile-friendly layout

* Connect directly to WhatsApp

BOOKING / CONTACT FORM:

Include a professional form with:

* Full Name

* Phone Number

* Email

* Service Selection

* Message

Add:

* Loading animations

* Success confia animation

* Mobile-friendly spacing

ANIMATION REQUIREMENTS:

* Lightweight smooth animations

* Fade-up scroll effects

* Hover transitions

* Typing animations

* Smooth card reveals

* Floating effects

* Professional scrolling experience

* Avoid excessive heavy motion graphics

PWA REQUIREMENTS:

Convert website into installable PWA:

* Add install popup after few seconds

* Popup must include:

  • Company logo

  • Install button

  • Short install message

* Compatible with:

  • Android

  • iPhone/iPad

  • Windows

* Include offline support

* Add app-like transitions

FOOTER REQUIREMENTS:

* Premium modern footer

* Company logo

* Quick links

* Contact details

* Social media icons

* WhatsApp quick action

* Copyright section

* Footer credit:

  “Website designed by [www.webdevpro.co.za”]+27812159792

EXTRA FEATURES:

* Google Maps integration

* SEO optimization

* Lazy-loaded images

* Smooth scrolling

* FAQ accordion

* Testimonials slider

* Interactive gallery

* Scroll-to-top button

* Professional loading screen

* Browser favicon

FINAL WEBSITE REQUIREMENTS:

* Fully responsive on all devices

* Modern premium business appearance

* Clean professional layout

* Smooth mobile experience

* Fast-loading pages

* Clean animations without lag

on mobile version can we have a bottom mobile like menu with 4 main features,also try and put the google map on contact page and a small google map on the footer using the provided address

also makesure to ceate an access code for anyone who opens the website link  the code is 1234mic then the website can open,on the access code login page should also specify that the webdite demo is only valid for 48hrs ,the website will only stay permanent after invoice payment,at the far bottom also make sure its visible -Website designed by [www.webdevpro.co.za]+27812159792 the website link should be clickable



Okay, using only the attached, uh, logo and the images and the videos, let's create the website

## Quick upload from Windows

1. Extract the ZIP on your Windows computer.
2. Open the `journeymaysc22` directory inside it.
3. Double-click `PUSH_TO_GITHUB_WINDOWS.bat`. It uses your own Git installation and browser sign-in to push files to the already linked GitHub repository. It does **not** ask you to paste an access token into ChatGPT.
4. Verify all files (including `public/media` images/videos) are visible at https://github.com/silvermatambo-lgtm/journeymaysc22 .
5. Check the deployment status at https://vercel.com/dashboard (project `journeymaysc22`).

If Git is missing, install Git for Windows first: https://git-scm.com/download/win . If the initial push fails because the remote has commits, do not force-push over them; reconcile the branch before retrying.

**Deployment status at packaging:** Vercel Git integration created, no successful source upload, production build, or live domain yet verified.
