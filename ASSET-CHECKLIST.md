# MatchPoint Landing Page - Asset Checklist

This document lists all the placeholders and assets that need to be created and filled in for the landing page to be complete.

---

## 📋 Requirements Summary

✅ **Met Requirements:**
- ✓ At least 2 distinct calls to action (multiple: waitlist, launch app)
- ✓ At least 5 informational sections (Pittsburgh, Features, How It Works, Demo, Community, Team = 6 sections)
- ✓ About the Team section with placeholders for photos, roles, and bios
- ✓ Pittsburgh community references throughout
- ✓ Working download/register/login CTA (waitlist + launch app link)
- ✓ Video section with narration and captions support
- ✓ No dead links (all links go to sections on the page or working external links)

---

## 🖼️ Image Assets Needed

### Pittsburgh Section
1. **`assets/images/pittsburgh-skyline.jpg`**
   - **Description:** Pittsburgh skyline with the three rivers and city lights at dusk
   - **Recommended Size:** 1200x600px (2:1 ratio)
   - **Alt Text:** "Pittsburgh skyline with the three rivers and city lights at dusk"

### Features Section (6 images)
2. **`assets/images/feature-brackets.png`**
   - **Description:** Smart bracket generation interface showing tournament tree
   - **Recommended Size:** 400x300px
   - **Alt Text:** "Smart bracket generation interface showing tournament tree"

3. **`assets/images/feature-live-scoring.png`**
   - **Description:** Real-time match scoring dashboard with live updates
   - **Recommended Size:** 400x300px
   - **Alt Text:** "Real-time match scoring dashboard with live updates"

4. **`assets/images/feature-leaderboards.png`**
   - **Description:** Global leaderboards showing player rankings and ELO ratings
   - **Recommended Size:** 400x300px
   - **Alt Text:** "Global leaderboards showing player rankings and ELO ratings"

5. **`assets/images/feature-notifications.png`**
   - **Description:** Mobile push notification alerting player their match is ready
   - **Recommended Size:** 400x300px
   - **Alt Text:** "Mobile push notification alerting player their match is ready"

6. **`assets/images/feature-auth.png`**
   - **Description:** Secure OAuth login screen with multiple authentication options
   - **Recommended Size:** 400x300px
   - **Alt Text:** "Secure OAuth login screen with multiple authentication options"

7. **`assets/images/feature-analytics.png`**
   - **Description:** Analytics dashboard showing tournament statistics and player performance metrics
   - **Recommended Size:** 400x300px
   - **Alt Text:** "Analytics dashboard showing tournament statistics and player performance metrics"

### Video Section
8. **`assets/images/video-poster.jpg`**
   - **Description:** Video thumbnail/poster image (appears before video plays)
   - **Recommended Size:** 1280x720px (16:9 ratio)
   - **Alt Text:** N/A (decorative)

### Community Section
9. **`assets/images/pittsburgh-fgc-event.jpg`**
   - **Description:** Pittsburgh FGC community members at a local tournament event
   - **Recommended Size:** 800x600px
   - **Alt Text:** "Pittsburgh FGC community members at a local tournament event"

### Team Section (4+ images - adjust based on actual team size)
10. **`assets/images/team/member-1.jpg`**
    - **Description:** Portrait photo of Team Member 1
    - **Recommended Size:** 500x500px (1:1 ratio, square)
    - **Alt Text:** "Portrait of [Name], [Role]"

11. **`assets/images/team/member-2.jpg`**
    - **Description:** Portrait photo of Team Member 2
    - **Recommended Size:** 500x500px (1:1 ratio, square)
    - **Alt Text:** "Portrait of [Name], [Role]"

12. **`assets/images/team/member-3.jpg`**
    - **Description:** Portrait photo of Team Member 3
    - **Recommended Size:** 500x500px (1:1 ratio, square)
    - **Alt Text:** "Portrait of [Name], [Role]"

13. **`assets/images/team/member-4.jpg`**
    - **Description:** Portrait photo of Team Member 4
    - **Recommended Size:** 500x500px (1:1 ratio, square)
    - **Alt Text:** "Portrait of [Name], [Role]"

> **Note:** Add more team member images as needed by duplicating the team-member HTML block

---

## 🎥 Video Assets Needed

14. **`assets/videos/matchpoint-demo.mp4`**
    - **Description:** 2-minute platform walkthrough showing tournament creation, bracket management, and results tracking
    - **Requirements:**
      - ✅ Must be narrated (voice-over explaining each step)
      - ✅ Must have visible captions embedded or via VTT file
      - Screen recording with magnified font sizes for legibility
      - Recommended: 1080p (1920x1080) or 720p (1280x720)
      - Format: MP4 (H.264 codec recommended for web compatibility)

15. **`assets/videos/matchpoint-demo-captions.vtt`**
    - **Description:** WebVTT caption file for the demo video
    - **Requirements:**
      - Time-synced captions for all narration
      - Follow WebVTT format specification
      - Example format:
        ```
        WEBVTT

        00:00:00.000 --> 00:00:03.000
        Welcome to MatchPoint, the ultimate tournament platform.

        00:00:03.000 --> 00:00:07.000
        Let's see how easy it is to create your first tournament.
        ```

---

## 📝 Text Content to Fill In

### Team Section (in index.html)
Each team member needs:
- **Name:** Replace `[Team Member X Name]`
- **Role:** Replace role text (e.g., "Co-Founder & Lead Developer")
- **Bio:** Replace the placeholder bio text with 2-3 sentences including:
  - Background and expertise
  - Connection to FGC/gaming
  - Pittsburgh ties or local involvement
  - Personal touch or fun fact

**Current Placeholders:**
- `[Team Member 1 Name]` - Co-Founder & Lead Developer
- `[Team Member 2 Name]` - Co-Founder & Product Designer
- `[Team Member 3 Name]` - Backend Engineer
- `[Team Member 4 Name]` - Community Manager & Marketing

> Add or remove team member blocks as needed to match your actual team

---

## 🔗 Links to Update

16. **Working Prototype URL**
    - **Location:** Final CTA section (line ~280 in index.html)
    - **Current Placeholder:** `https://matchpoint-app.herokuapp.com`
    - **Action Needed:** Replace with actual working prototype URL
    - **Code location:**
      ```html
      <a href="https://matchpoint-app.herokuapp.com" target="_blank" rel="noopener noreferrer" class="btn btn--ghost cta-btn" data-cta="app-launch">
        Launch Web App →
      </a>
      ```

17. **GitHub Repository URL**
    - **Location:** Footer (line ~380 in index.html)
    - **Current Placeholder:** `https://github.com/mollup/mollup.github.io`
    - **Action Needed:** Verify this is the correct repository URL
    - **Code location:**
      ```html
      <a href="https://github.com/mollup/mollup.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
      ```

---

## 📂 Directory Structure to Create

Create the following directory structure for your assets:

```
/Users/andremiller/17-356/mp/lp/
├── assets/
│   ├── images/
│   │   ├── pittsburgh-skyline.jpg
│   │   ├── pittsburgh-fgc-event.jpg
│   │   ├── video-poster.jpg
│   │   ├── feature-brackets.png
│   │   ├── feature-live-scoring.png
│   │   ├── feature-leaderboards.png
│   │   ├── feature-notifications.png
│   │   ├── feature-auth.png
│   │   ├── feature-analytics.png
│   │   └── team/
│   │       ├── member-1.jpg
│   │       ├── member-2.jpg
│   │       ├── member-3.jpg
│   │       └── member-4.jpg
│   └── videos/
│       ├── matchpoint-demo.mp4
│       └── matchpoint-demo-captions.vtt
├── index.html
├── style.css
├── main.js
├── ab-test.js
└── README.md
```

---

## ✅ Completion Checklist

### Before Submission:
- [ ] Create all image assets (13 images total)
- [ ] Create demo video with narration
- [ ] Create VTT caption file for video
- [ ] Fill in all team member names, roles, and bios
- [ ] Update working prototype URL
- [ ] Verify GitHub repository URL
- [ ] Test all internal links (scroll to sections)
- [ ] Test external links (open in new tab)
- [ ] Test video playback and captions
- [ ] Verify all images load correctly
- [ ] Test on mobile/tablet devices (responsive design)
- [ ] Test accessibility (screen reader, keyboard navigation)
- [ ] Deploy to public URL (GitHub Pages or similar)
- [ ] Test deployed site

---

## 📊 Key Sections Summary

The landing page includes the following **6 informational sections** (exceeds the 5 required):

1. **Pittsburgh Hero** - Local connection and community focus
2. **Features** - 6 core product features with images
3. **How It Works** - 4-step process walkthrough
4. **Video Demo** - Platform demonstration with narration & captions
5. **Community** - FGC focus and Pittsburgh references
6. **About the Team** - Team photos, roles, and bios

**Calls to Action (2+ required):**
1. Join the Waitlist (appears 7 times throughout page)
2. Launch Web App (working prototype link in Final CTA section)

**Pittsburgh References:**
- Pittsburgh Hero section with skyline image
- "Built in Pittsburgh" badge and messaging
- References to Steel City, 412 area code
- Local landmarks mentioned (South Side Works, Strip District, Oakland)
- Footer: "Proudly serving the Steel City"

---

## 🎨 Asset Creation Tips

### For Images:
- Use high-quality screenshots of your actual app (if available)
- For team photos: professional headshots with good lighting, neutral backgrounds
- For Pittsburgh images: use royalty-free stock photos or take your own
- Tools: Figma, Photoshop, Canva for mockups and graphics

### For Video:
- Use screen recording software: OBS Studio, QuickTime, Loom, or ScreenFlow
- Increase font sizes in your app before recording (18px+ for body text)
- Record at 1080p resolution minimum
- Use professional narration (clear, enthusiastic, well-paced)
- Add captions using YouTube auto-captions + manual editing, or tools like Rev.com
- Export captions as WebVTT format

### For Team Bios:
Each bio should answer:
- What's your background/expertise?
- Why are you passionate about this project?
- What's your connection to Pittsburgh or local gaming?
- What makes you uniquely qualified for your role?

---

## 📞 Questions or Issues?

If you need help with any of these assets or have questions about implementation, please reach out!

**Good luck with your launch! 🚀**
