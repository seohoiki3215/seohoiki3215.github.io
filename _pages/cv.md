---
layout: single
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

{% assign publications = site.publications | sort: "date" | reverse %}

<div class="liquid-publications">
  <section class="liquid-section glass-panel" data-reveal>
    <p class="publication-intro">
      Download the full CV as PDF:
      <a class="liquid-link" href="{{ '/files/Hoigi_CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Hoigi Seo - CV</a>
    </p>
  </section>

  <section class="publication-category" data-reveal>
    <h2>Education</h2>
    <div class="publication-grid">
      <article class="pub-card" data-reveal>
        <p class="pub-title">M.S.-Ph.D. in Electrical and Computer Engineering, Seoul National University</p>
        <p class="pub-meta"><span>2024 - Present</span></p>
      </article>
      <article class="pub-card" data-reveal style="--reveal-delay: 0.05s;">
        <p class="pub-title">B.S. in Electrical and Computer Engineering, Seoul National University</p>
        <p class="pub-meta"><span>2018 - 2024</span></p>
      </article>
    </div>
  </section>

  <section class="publication-category" data-reveal>
    <h2>Skills</h2>
    <div class="publication-grid">
      <article class="pub-card" data-reveal>
        <p class="pub-title">Programming</p>
        <p class="pub-excerpt">Python, C++, CUDA</p>
      </article>
      <article class="pub-card" data-reveal style="--reveal-delay: 0.05s;">
        <p class="pub-title">Frameworks</p>
        <p class="pub-excerpt">PyTorch, TensorFlow</p>
      </article>
      <article class="pub-card" data-reveal style="--reveal-delay: 0.1s;">
        <p class="pub-title">Language</p>
        <p class="pub-excerpt">English (fluent)</p>
      </article>
    </div>
  </section>

  <section class="publication-category" data-reveal>
    <h2>Publication List</h2>
    <div class="publication-grid">
      {% for post in publications %}
        <article class="pub-card" data-reveal style="--reveal-delay: {{ forloop.index0 | times: 0.03 }}s;">
          <p class="pub-meta">
            <span>{{ post.date | date: "%b %Y" }}</span>
            {% if post.venue %}<span>{{ post.venue }}</span>{% endif %}
          </p>
          <h3 class="pub-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          {% if post.citation %}<p class="pub-authors">{{ post.citation }}</p>{% endif %}
        </article>
      {% endfor %}
    </div>
  </section>
</div>
