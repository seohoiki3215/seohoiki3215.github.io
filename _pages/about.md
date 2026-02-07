---
permalink: /
title: "Hoigi Seo"
layout: single
author_profile: false
show_page_header: false
redirect_from:
  - /about/
  - /about.html
---

{% assign publications = site.publications | sort: "date" | reverse %}
{% assign publication_total = publications | size %}
{% assign latest_publication = publications | first %}
{% assign latest_news_item = site.data.news | first %}

<div class="liquid-home">
  <section class="liquid-hero glass-panel" data-reveal>
    <div class="liquid-hero-grid">
      <div>
        <span class="liquid-kicker">Research Homepage</span>
        <h1 class="liquid-home-title">Building Reliable and Efficient Multimodal AI</h1>
        <p class="liquid-home-summary">
          I am an M.S.-Ph.D. student in Electrical and Computer Engineering at Seoul National University, working with the Intelligent Computing Lab.
          My research focuses on multimodal language-vision systems, diffusion-based generation, and robust visual representation learning.
        </p>
        <div class="liquid-cta-row">
          <a class="liquid-btn is-primary" href="{{ '/publications/' | relative_url }}">View Publications</a>
          <a class="liquid-btn" href="{{ '/cv/' | relative_url }}">Open CV</a>
          {% if site.author.googlescholar %}
            <a class="liquid-btn" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          {% endif %}
        </div>
      </div>

      <div class="liquid-metrics">
        <div class="metric-card" data-reveal style="--reveal-delay: 0.08s;">
          <p class="metric-label">Publications</p>
          <p class="metric-value">{{ publication_total }}</p>
        </div>
        <div class="metric-card" data-reveal style="--reveal-delay: 0.14s;">
          <p class="metric-label">Latest Publication</p>
          <p class="metric-value">{{ latest_publication.date | date: "%Y" }}</p>
        </div>
        <div class="metric-card" data-reveal style="--reveal-delay: 0.2s;">
          <p class="metric-label">Latest News</p>
          <p class="metric-value">{{ latest_news_item.date | date: "%b %Y" }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="liquid-section glass-panel" data-reveal>
    <h2>Research Focus</h2>
    <div class="focus-grid">
      <article class="focus-item" data-reveal style="--reveal-delay: 0.05s;">
        <h3>Multimodal Language-Vision Models</h3>
        <p>Understanding and reducing object hallucinations with uncertainty-aware token analysis.</p>
      </article>
      <article class="focus-item" data-reveal style="--reveal-delay: 0.1s;">
        <h3>Diffusion Model Efficiency</h3>
        <p>Improving speed and memory efficiency with adaptive sampling and lightweight optimization.</p>
      </article>
      <article class="focus-item" data-reveal style="--reveal-delay: 0.15s;">
        <h3>Text-to-Image Alignment</h3>
        <p>Studying token geometry and cross-attention behavior for stronger semantic binding.</p>
      </article>
      <article class="focus-item" data-reveal style="--reveal-delay: 0.2s;">
        <h3>Practical Robustness</h3>
        <p>Designing methods that remain effective under limited compute and real-world constraints.</p>
      </article>
    </div>
  </section>

  <section class="liquid-section glass-panel" data-reveal>
    <h2>Recent News</h2>
    <div class="news-grid">
      {% for item in site.data.news limit: 10 %}
        <article class="news-item" data-reveal style="--reveal-delay: {{ forloop.index0 | times: 0.045 }}s;">
          <p class="news-date">{{ item.date | date: "%b %d, %Y" }}</p>
          <p class="news-title">{{ item.title }}</p>
          {% if item.links and item.links.size > 0 %}
            <div class="news-links">
              {% for link in item.links %}
                <a class="news-link" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
              {% endfor %}
            </div>
          {% endif %}
        </article>
      {% endfor %}
    </div>
    <p class="news-footer">
      For the full list and paper metadata, visit the <a class="liquid-link" href="{{ '/publications/' | relative_url }}">publications page</a>.
    </p>
  </section>
</div>
