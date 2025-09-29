---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

You can download my CV in <a href="/files/Hoigi_CV.pdf" target="_blank">here</a>

Education
======
* M.S.-Ph.D. in Electrical and Computer Engineering, Seoul National University, 2024~
* B.S. in Electrical and Computer Engineering, Seoul National University, 2018~2024
  
Skills
======
* English (fluent)
* Programming language
  * Python
  * C++
  * CUDA
* Deep learning framework
  * PyTorch
  * TensorFlow

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
