---
title: "Training-free Mixed-Resolution Latent Upsampling for Spatially Accelerated Diffusion Transformers"
collection: publications
category: conference_full
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about accelerating Text-to-Image diffusion models with region-adaptive upsampling'
date: 2026-03-12
venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: 'https://arxiv.org/pdf/2507.08422'
citation: 'Wongi Jeong*, Kyeongryeol Lee*, <b>Hoigi Seo</b> and Se Young Chun. (* co-first author)'
---

Diffusion transformers (DiTs) offer excellent scalability for high-fidelity generation, but their computational overhead poses a great challenge for practical deployment. Existing acceleration methods primarily exploit the temporal dimension, whereas spatial acceleration remains underexplored. In this work, we investigate spatial acceleration for DiTs via latent upsampling. We found that na\"ive latent upsampling for spatial acceleration introduces artifacts, primarily due to aliasing in high-frequency edge regions and mismatching from noise-timestep discrepancies. Then, based on these findings and analyses, we propose a training-free spatial acceleration framework, dubbed Region-Adaptive Latent Upsampling (RALU), to mitigate those artifacts while achieving spatial acceleration of DiTs by our mixed-resolution latent upsampling. RALU achieves artifact-free, efficient acceleration with early upsampling only on artifact-prone edge regions and noise-timestep matching for different latent resolutions, leading to up to 7.0$\times$ speedup on FLUX-1.dev and 3.0$\times$ on Stable Diffusion 3 with negligible quality degradation. Furthermore, our RALU is complementarily applicable to existing temporal acceleration methods and timestep-distilled models, leading to up to 15.9$\times$ speedup.