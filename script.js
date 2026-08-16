(function () {
  "use strict";

  const project_data = [
    { title: "Backpack Brawl", year: "2026", description: "A 30-second merge puzzler for rewarded placements. Swipe, chain combos, chase that high score.", tags: ["Fighting", "Merge"], url: "projects/BACKPACK_play022_01.html" },
    { title: "Car Mania", year: "2025", description: "One-thumb runner. Tap to trade fuel for height. Quick restarts make it weirdly addictive.", tags: ["Runner", "Hyper-casual"], url: "projects/CM_play003_01.html" },
    { title: "Color Fill 3D", year: "---", description: "Knife-slicing with perfect-stop timing. Full loop in under 15 seconds. Great for interstitials.", tags: ["Minigame", "Tap"], url: "projects/CF_play031_01.html" },
    { title: "Color Fill 3D", year: "---", description: "Zen stacking. Precise timing, clean cuts. Tuned for high completion rates in rewarded videos.", tags: ["Hyper-casual", "Puzzle"], url: "projects/CF_play038_02.html" },
    { title: "Color Fill 3D", year: "---", description: "Tap to flip, land to continue. Fluid animation, forgiving hitboxes. Safe bet for broad audiences.", tags: ["Runner", "Minigame"], url: "projects/CF_play048_01.html" },
    { title: "Dye Hard", year: "---", description: "Match-3 in a fish tank. Soft visuals, no text, pure gesture. Works great muted on mobile.", tags: ["Puzzle", "Match-3"], url: "projects/DYE_play027_01.html" },
    { title: "Fashion Queen", year: "---", description: "Jump through an enchanted forest. Collect fireflies, avoid obstacles. Whimsical and light.", tags: ["Adventure", "Tap"], url: "projects/FASH_play049_01.html" },
    { title: "Hidden Objects", year: "---", description: "Match colorful candies, trigger chain reactions. Satisfying combos with every move.", tags: ["Puzzle", "Match-3"], url: "projects/HO_play056_01.html" },
    { title: "Home Flip", year: "---", description: "Slice through obstacles as a shadow ninja. Fast reflexes, precise timing, high scores.", tags: ["Runner", "Action"], url: "projects/HOFL_play025_01.html" },
    { title: "Jelly Run 2048", year: "---", description: "Dig into alien planets, collect minerals, upgrade your drill. Surprisingly addictive.", tags: ["Minigame", "Strategy"], url: "projects/JELLY_play033_01.html" },
    { title: "Line Color 3D", year: "---", description: "Classic falling blocks puzzle. Simple to learn, hard to master. Timeless.", tags: ["Puzzle", "Classic"], url: "projects/LNC_play003_01.html" },
    { title: "Lostville", year: "---", description: "Soar through ancient skies as a dragon. Collect gems, dodge obstacles. Majestic.", tags: ["Adventure", "Runner"], url: "projects/LOV_play002_01.html" },
    { title: "Mergic", year: "---", description: "Slice juicy fruits before they fall. Fast action, satisfying feedback. Hard to put down.", tags: ["Action", "Tap"], url: "projects/MERGIC_play001_03.html" },
    { title: "Mergic", year: "---", description: "Race down snowy slopes, pull off tricks. Balance speed and style for high scores.", tags: ["Runner", "Sports"], url: "projects/MERGIC_play001_04.html" },
    { title: "Mergic", year: "---", description: "Match seeds to grow magical plants. Beautiful combos. Watch your garden flourish.", tags: ["Puzzle", "Relaxing"], url: "projects/MERGIC_play007_01.html" },
    { title: "Mergic", year: "---", description: "Connect parts to assemble robots. Logic puzzles, mechanical challenge. Very satisfying.", tags: ["Puzzle", "Logic"], url: "projects/MERGIC_play009_01.html" },
    { title: "Mergic", year: "---", description: "Bump, set, spike on a sunny beach. Quick matches, perfect for short sessions.", tags: ["Sports", "Casual"], url: "projects/MERGIC_play011_01.html" },
    { title: "Rise Up", year: "---", description: "Explore a spooky mansion, solve puzzles, escape before midnight. Atmospheric and fun.", tags: ["Adventure", "Puzzle"], url: "projects/RISE_play021_01.html" },
    { title: "Spot Hidden Differences", year: "---", description: "Fast-paced cooking. Serve hungry customers, manage orders. Hectic but fun.", tags: ["Simulation", "Casual"], url: "projects/SHD_play031_01.html" },
    { title: "Slime", year: "---", description: "A 30-second merge puzzler for rewarded placements. Swipe, chain combos, chase that high score.", tags: ["Fighting", "Merge"], url: "projects/SLIME_play021_01.html" },
    { title: "State Connect", year: "---", description: "One-thumb runner. Tap to trade fuel for height. Quick restarts make it weirdly addictive.", tags: ["Runner", "Hyper-casual"], url: "projects/STATEC_play099_01.html" },
    { title: "Tap Arrows Gallery", year: "---", description: "Knife-slicing with perfect-stop timing. Full loop in under 15 seconds. Great for interstitials.", tags: ["Minigame", "Tap"], url: "projects/TAG_play022_01.html" },
    { title: "Tank Stars", year: "---", description: "Zen stacking. Precise timing, clean cuts. Tuned for high completion rates in rewarded videos.", tags: ["Hyper-casual", "Puzzle"], url: "projects/TAST_play059_01.html" },
    { title: "Tap Gallery", year: "---", description: "Tap to flip, land to continue. Fluid animation, forgiving hitboxes. Safe bet for broad audiences.", tags: ["Runner", "Minigame"], url: "projects/TG_play004_02.html" },
    { title: "Tap Gallery", year: "---", description: "Match-3 in a fish tank. Soft visuals, no text, pure gesture. Works great muted on mobile.", tags: ["Puzzle", "Match-3"], url: "projects/TG_play009_01.html" },
    { title: "Tap Gallery", year: "---", description: "Jump through an enchanted forest. Collect fireflies, avoid obstacles. Whimsical and light.", tags: ["Adventure", "Tap"], url: "projects/TG_play024_01.html" },
    { title: "Tap Gallery", year: "---", description: "Match colorful candies, trigger chain reactions. Satisfying combos with every move.", tags: ["Puzzle", "Match-3"], url: "projects/TG_play032_01.html" },
    { title: "Tap Gallery", year: "---", description: "Slice through obstacles as a shadow ninja. Fast reflexes, precise timing, high scores.", tags: ["Runner", "Action"], url: "projects/TG_play033_05.html" },
    { title: "Tap Gallery", year: "---", description: "Dig into alien planets, collect minerals, upgrade your drill. Surprisingly addictive.", tags: ["Minigame", "Strategy"], url: "projects/TG_play045_01.html" },
    { title: "Tap Gallery", year: "---", description: "Classic falling blocks puzzle. Simple to learn, hard to master. Timeless.", tags: ["Puzzle", "Classic"], url: "projects/TG_play049_01.html" },
    { title: "Tap Gallery", year: "---", description: "Soar through ancient skies as a dragon. Collect gems, dodge obstacles. Majestic.", tags: ["Adventure", "Runner"], url: "projects/TG_play050_01.html" },
    { title: "Tap Gallery", year: "---", description: "Slice juicy fruits before they fall. Fast action, satisfying feedback. Hard to put down.", tags: ["Action", "Tap"], url: "projects/TG_play055_02.html" },
    { title: "Tap Gallery", year: "---", description: "Race down snowy slopes, pull off tricks. Balance speed and style for high scores.", tags: ["Runner", "Sports"], url: "projects/TG_play078_03.html" },
    { title: "Tap Gallery", year: "---", description: "Match seeds to grow magical plants. Beautiful combos. Watch your garden flourish.", tags: ["Puzzle", "Relaxing"], url: "projects/TG_play093_20.html" },
		{ title: "Tap Gallery", year: "---", description: "Connect parts to assemble robots. Logic puzzles, mechanical challenge. Very satisfying.", tags: ["Puzzle", "Logic"], url: "projects/TG_play103_01.html" },
		{ title: "Tomb of the Mask", year: "---", description: "Connect parts to assemble robots. Logic puzzles, mechanical challenge. Very satisfying.", tags: ["Puzzle", "Logic"], url: "projects/TOMB_play007.html" },
    { title: "Tomb of the Mask", year: "---", description: "Connect parts to assemble robots. Logic puzzles, mechanical challenge. Very satisfying.", tags: ["Puzzle", "Logic"], url: "projects/TOMB_play024.html" },
    { title: "Worm Zone", year: "---", description: "Bump, set, spike on a sunny beach. Quick matches, perfect for short sessions.", tags: ["Sports", "Casual"], url: "projects/WZ_play026_01.html" },
    { title: "Worm Zone", year: "---", description: "Explore a spooky mansion, solve puzzles, escape before midnight. Atmospheric and fun.", tags: ["Adventure", "Puzzle"], url: "projects/WZ_play029_01.html" },
    { title: "Worm Zone", year: "---", description: "Fast-paced cooking. Serve hungry customers, manage orders. Hectic but fun.", tags: ["Simulation", "Casual"], url: "projects/WZ_play033_01.html" },
  ];

  let currentPlayingCard = null;

  function RenderProjectCard(project, index) {
    const cardId = 'project-card-' + index;
    return '<div class="ProjectCardWrapper" id="' + cardId + '">'
      + '<article class="ProjectCard">'
        + '<div class="ProjectCard__Inner">'
          + '<div class="ProjectCard__ScreenPanel">'
            + '<div class="ProjectCard__Media">'
              + '<div class="PhoneFrame">'
                + '<div class="PhoneNotch"></div>'
                + '<iframe data-src="' + project.url + '" style="display: none;" loading="lazy"></iframe>'
              + '</div>'
              + '<button class="PlayButton" onclick="togglePlayable(\'' + cardId + '\')" aria-label="Play ' + project.title + '">'
                + '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'
              + '</button>'
              + '<div class="ProjectCard__Body">'
                + '<div class="ProjectCard__Meta">' + project.year + '</div>'
                + '<h3 class="ProjectCard__Title">' + project.title + '</h3>'
                + '<p class="ProjectCard__Desc">' + project.description + '</p>'
                + '<div class="ProjectCard__Tags">'
                  + project.tags.map(function (tag) { return '<span class="Tag">' + tag + '</span>'; }).join("")
                + '</div>'
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
      + '</article>'
    + '</div>';
  }

  function RenderProjects() {
    const grid = document.getElementById("project-grid");
    grid.innerHTML = project_data.map(RenderProjectCard).join("");
  }

  function InitReveal() {
    const elements = document.querySelectorAll(".Reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) { el.classList.add("Reveal--Visible"); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("Reveal--Visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    elements.forEach(function (el) { observer.observe(el); });
  }

  function InitYear() {
    const year_el = document.getElementById("year");
    if (year_el) year_el.textContent = new Date().getFullYear().toString();
  }

  function stopIframe(iframe) {
    if (!iframe) return;

    // Try multiple methods to truly stop all processes in the iframe
    try {
      // Method 1: Use contentWindow.location.replace to navigate away
      if (iframe.contentWindow) {
        iframe.contentWindow.location.replace('about:blank');
      }
    } catch (e) {
      // Cross-origin iframe, can't access contentWindow
    }

    // Method 2: Remove the src attribute
    iframe.removeAttribute('src');

    // Method 3: Set src to empty (will navigate to about:blank)
    iframe.src = 'about:blank';

    // Method 4: Hide the iframe
    iframe.style.display = 'none';
  }

  function startIframe(iframe) {
    if (!iframe) return;
    iframe.src = iframe.dataset.src;
    iframe.style.display = 'block';
  }

  window.togglePlayable = function(cardId) {
    const wrapper = document.getElementById(cardId);
    const iframe = wrapper.querySelector('iframe');
    const playButton = wrapper.querySelector('.PlayButton');
    const cardBody = wrapper.querySelector('.ProjectCard__Body');

    // If clicking the same card that's already playing, stop it
    if (currentPlayingCard === cardId) {
      stopIframe(iframe);
      playButton.classList.remove('PlayButton--Hidden');
      cardBody.classList.remove('ProjectCard__Body--hidden');
      currentPlayingCard = null;
      return;
    }

    // Stop any currently playing card
    if (currentPlayingCard) {
      const prevWrapper = document.getElementById(currentPlayingCard);
      if (prevWrapper) {
        const prevIframe = prevWrapper.querySelector('iframe');
        const prevButton = prevWrapper.querySelector('.PlayButton');
        const prevBody = prevWrapper.querySelector('.ProjectCard__Body');
        stopIframe(prevIframe);
        prevButton.classList.remove('PlayButton--Hidden');
        prevBody.classList.remove('ProjectCard__Body--hidden');
      }
    }

    // Start the new card
    startIframe(iframe);
    playButton.classList.add('PlayButton--Hidden');
    cardBody.classList.add('ProjectCard__Body--hidden');
    currentPlayingCard = cardId;
  };

  // Also stop iframes when the page is hidden/backgrounded
  document.addEventListener('visibilitychange', function() {
    if (document.hidden && currentPlayingCard) {
      const wrapper = document.getElementById(currentPlayingCard);
      if (wrapper) {
        const iframe = wrapper.querySelector('iframe');
        const playButton = wrapper.querySelector('.PlayButton');
        const cardBody = wrapper.querySelector('.ProjectCard__Body');
        stopIframe(iframe);
        playButton.classList.remove('PlayButton--Hidden');
        cardBody.classList.remove('ProjectCard__Body--hidden');
        currentPlayingCard = null;
      }
    }
  });

  // Also stop iframes when page is being unloaded
  window.addEventListener('beforeunload', function() {
    if (currentPlayingCard) {
      const wrapper = document.getElementById(currentPlayingCard);
      if (wrapper) {
        const iframe = wrapper.querySelector('iframe');
        stopIframe(iframe);
      }
    }
  });

  RenderProjects();
  InitReveal();
  InitYear();
})();
