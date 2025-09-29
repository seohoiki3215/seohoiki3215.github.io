---
title: "Upsample What Matters: Region-Adaptive Latent Sampling for Accelerated Diffusion Transformers"
collection: publications
category: technical_report
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about accelerating Text-to-Image diffusion models with region-adaptive upsampling'
date: 2025-08-19
venue: 'arXiv'
paperurl: 'https://arxiv.org/pdf/2507.08422'
citation: 'Wongi Jeong*, Kyeongryeol Lee*, <b>Hoigi Seo</b>, and Se Young Chun. (* co-first author)'
---

Diffusion transformers have emerged as an alternative to U-net-based diffusion models for high-fidelity image and video generation, offering superior scalability. However, their heavy computation remains a major obstacle to real-world deployment. Existing acceleration methods primarily exploit the temporal dimension such as reusing cached features across diffusion timesteps. Here, we propose Region-Adaptive Latent Upsampling (RALU), a training-free framework that accelerates inference along spatial dimension. RALU performs mixed-resolution sampling across three stages: 1) low-resolution denoising latent diffusion to efficiently capture global semantic structure, 2) region-adaptive upsampling on specific regions prone to artifacts at full-resolution, and 3) all latent upsampling at full-resolution for detail refinement. To stabilize generations across resolution transitions, we leverage noise-timestep rescheduling to adapt the noise level across varying resolutions. Our method significantly reduces computation while preserving image quality by achieving up to 7.0× speed-up on FLUX and 3.0× on Stable Diffusion 3 with minimal degradation. Furthermore, RALU is complementary to existing temporal accelerations such as caching methods, thus can be seamlessly integrated to further reduce inference latency without compromising generation quality.