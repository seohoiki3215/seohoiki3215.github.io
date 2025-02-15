---
title: "Harmonization for a black-box deep learning model"
collection: publications
category: conference_short
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about harmonizing MR image for a black-box deep learning model'
date: 2025-02-01
venue: 'International Society for Magnetic Resonance in Medicine (ISMRM) <b>(oral)</b>'
# paperurl: 'https://arxiv.org/pdf/2409.06210'
citation: 'Minjun Kim, Hwihun Jeong, <b>Hoigi Seo</b>, Se Young Chun, and Jongho Lee'
---

Deep learning has demonstrated remarkable success across various fields, leading to the deployment of numerous models in practical and commercial applications. However, most commercially available tools are a black-box model, where model parameters are inaccessible, preventing additional training or adaptation of this model to a new domain. MR images acquired from diverse environments (e.g., vendors, scanners, parameters) can contain domain gaps, which may hinder model performance on data from a different domain. To address performance degradation, studies have proposed harmonization methods. However, these methods often require access to target domain data or model parameters, limiting their applicability to a black-box model. To address this challenge, we propose BboxHarmony to train a harmonization network for a black-box model using a small dataset of source domain images and labels.