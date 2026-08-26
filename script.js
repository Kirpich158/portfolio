(function () {
  "use strict";

  const project_data = [
    { title: "Backpack Brawl", year: "2026", description: "Merge and upgrade axe to fight waves of enemies.", tags: ["Merge", "Action"], url: "projects/BACKPACK_play022_01.html" },
    { title: "Car Mania", year: "2025", description: "Passengers are waiting, find the correct car for each of them.", tags: ["Puzzle", "Sorting"], url: "projects/CM_play003_01.html" },
    { title: "Color Fill 3D", year: "2026", description: "Paint the area to destroy moving cubes.", tags: ["Puzzle", "Drawing"], url: "projects/CF_play038_02.html" },
    { title: "Dye Hard", year: "2025", description: "Idle animation for end screen with eye catching animation.", tags: ["Idle", "Showcase"], url: "projects/DYE_play027_01.html" },
    { title: "Fashion Queen", year: "2026", description: "Paint parts of the outfit with color of your choice.", tags: ["Dressing", "Drawing"], url: "projects/FASH_play049_01.html" },
    { title: "Jelly Run 2048", year: "2025", description: "Mine cubes, upgrade miners and reach the MEGA CUBE.", tags: ["Merge", "Economy"], url: "projects/JELLY_play033_01.html" },
    { title: "Mergic", year: "2025", description: "Merge and serve customers their favorite items with a limited time.", tags: ["Merge", "Timed"], url: "projects/MERGIC_play011_01.html" },
    { title: "State Connect", year: "2026", description: "Connect towns for as much states as you possibly can.", tags: ["Puzzle", "Drawing"], url: "projects/STATEC_play099_01.html" },
    { title: "Tap Arrows Gallery", year: "2026", description: "Sort the arrows, that form animals of Safari.", tags: ["Puzzle", "Sorting"], url: "projects/TAG_play022_01.html" },
    { title: "Tank Stars", year: "2025", description: "Clean, repair and upgrade the tank to prepare it for a fight.", tags: ["Upgrade", "Diverse"], url: "projects/TAST_play059_01.html" },
    { title: "Tap Gallery", year: "2026", description: "Unfreeze this beautiful orchid by sorting the tileset.", tags: ["Puzzle", "Sorting"], url: "projects/TG_play033_05.html" },
    { title: "Tap Gallery", year: "2025", description: "Peeling the fox sticker reveals a tileset for you to sort. Prove you are the genius.", tags: ["Puzzle", "Sorting"], url: "projects/TG_play045_01.html" },
    { title: "Tap Gallery", year: "2026", description: "Sort these funky towers of tiles, help them escape.", tags: ["Puzzle", "Sorting"], url: "projects/TG_play055_02.html" },
    { title: "Tap Gallery", year: "2026", description: "Keep sorting the tiles to not let the music stop. The show must go on.", tags: ["Puzzle", "Sorting"], url: "projects/TG_play078_03.html" },
		{ title: "Tomb of the Mask", year: "2025", description: "Run from the lava as fast as you can. Don't forget to collect some coins along the way.", tags: ["Runner", "Timed"], url: "projects/TOMB_play007.html" },
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
