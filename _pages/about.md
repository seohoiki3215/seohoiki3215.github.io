---
permalink: /
title: "Hoigi Seo"
layout: single
author_profile: true
show_page_header: false
redirect_from:
  - /about/
  - /about.html
---

{% assign publications = site.publications | sort: "date" | reverse %}
{% assign featured_publications = publications | where: "featured", true %}

<div class="liquid-home">
  <section class="liquid-hero glass-panel" data-reveal>
    <div class="liquid-hero-grid">
      <div class="liquid-hero-copy">
        <span class="liquid-kicker">Ph.D. Student · Seoul National University</span>
        <h1 class="liquid-home-title">Efficient training &amp; inference.<br><span class="liquid-gradient-text">Multimodal &amp; generative AI.</span></h1>
        <p class="liquid-home-summary">
          I am a Ph.D. student in Electrical and Computer Engineering at Seoul National University, working with the Intelligent Computing Lab.
          My research focuses on making multimodal and generative AI more efficient to train, adapt, and run, through model merging, training-free methods, and faster, memory-efficient inference.
        </p>
        <div class="liquid-cta-row">
          <a class="liquid-btn is-primary cv-download" href="{{ '/files/Hoigi_CV.pdf' | relative_url }}" download="Hoigi_Seo_CV.pdf">{% include download-icon.html %} Download CV <span class="pdf-label">PDF</span></a>
          <a class="liquid-btn" href="#selected-research">Explore research <span aria-hidden="true">↗</span></a>
          {% if site.author.googlescholar %}
            <a class="liquid-btn" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          {% endif %}
          {% if site.author.email %}
            <a class="liquid-btn" href="mailto:{{ site.author.email }}">Email</a>
          {% endif %}
        </div>
        <div class="liquid-venue-row">
          <span class="venue-note">Published at</span>
          <span class="pub-chip pub-chip--cvpr">CVPR</span>
          <span class="pub-chip pub-chip--neurips">NeurIPS</span>
          <span class="pub-chip pub-chip--icml">ICML</span>
          <span class="pub-chip pub-chip--eccv">ECCV</span>
          <span class="pub-chip pub-chip--ismrm">ISMRM</span>
        </div>
      </div>


    </div>
  </section>

  {% if featured_publications.size > 0 %}
  <section id="selected-research" class="liquid-section glass-panel" data-reveal>
    <div class="liquid-section-head">
      <div><span class="section-eyebrow">01 / SELECTED WORK</span><h2>Research in focus</h2></div>
      <a class="liquid-link" href="{{ '/publications/' | relative_url }}">All publications &rarr;</a>
    </div>
    <div class="featured-grid">
      {% for post in featured_publications limit: 4 %}
        <a class="featured-card" href="{{ post.url | relative_url }}" data-reveal>
          {% if post.teaser %}
            <div class="featured-media">
              <img src="{{ post.teaser | relative_url }}" alt="Teaser figure for {{ post.title | strip_html | escape }}" loading="lazy">
            </div>
          {% endif %}
          <div class="featured-body">
            <div class="pub-chip-row">
              {% include venue-chip.html publication=post %}
            </div>
            <h3 class="featured-title">{{ post.title }}</h3>
            <p class="featured-summary">{{ post.excerpt }}</p>
            <span class="featured-read">Explore paper <span aria-hidden="true">↗</span></span>
          </div>
        </a>
      {% endfor %}
    </div>
  </section>
  {% endif %}

  <div class="liquid-columns">
    <section class="liquid-section glass-panel" data-reveal>
      <span class="section-eyebrow">02 / RESEARCH DIRECTIONS</span><h2>What I work on</h2>
      <div class="focus-grid">
        <article class="focus-item" data-reveal>
          <h3>Multimodal Language-Vision Models</h3>
          <p>Understanding and reducing object hallucinations with uncertainty-aware token analysis.</p>
        </article>
        <article class="focus-item" data-reveal>
          <h3>Diffusion Model Efficiency</h3>
          <p>Improving speed and memory efficiency with adaptive sampling and lightweight optimization.</p>
        </article>
        <article class="focus-item" data-reveal>
          <h3>Text-to-Image Alignment</h3>
          <p>Studying token geometry and cross-attention behavior for stronger semantic binding.</p>
        </article>
        <article class="focus-item" data-reveal>
          <h3>Practical Robustness</h3>
          <p>Designing methods that remain effective under limited compute and real-world constraints.</p>
        </article>
      </div>
    </section>

    <section class="liquid-section glass-panel" data-reveal>
      <span class="section-eyebrow">03 / UPDATES</span><h2>Recent news</h2>
      <div class="news-scroll" tabindex="0" role="region" aria-label="Recent news updates">
        <div class="news-timeline">
          {% for item in site.data.news limit: 5 %}
            <article class="news-item" data-reveal>
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
      </div>
      <p class="news-footer">
        For the full list and paper metadata, visit the <a class="liquid-link" href="{{ '/publications/' | relative_url }}">publications page</a>.
      </p>
    </section>
  </div>
</div>
