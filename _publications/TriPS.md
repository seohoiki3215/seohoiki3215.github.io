---
title: "Perceptually Consistent Low-Resolution Previews with High-Resolution Image for Efficient Workflows of Diffusion Models"
collection: publications
category: conference_full
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about optimizing CFG, data-consistency, stochasticity scale schedulers for inverse problems.'
date: 2026-03-12
venue: 'International Conference on Machine Learning (ICML)'
# paperurl: 'https://arxiv.org/pdf/2507.08422'
citation: 'Junseo Bang*, Dongju Moon*, <b>Hoigi Seo</b>, Seongmin Hong and Se Young Chun. (* co-first author)'
---

Generative posterior sampling using diffusion models has emerged as a dominant paradigm for solving inverse problems in imaging, which usually consists of three main components: data consistency (DC) guidance, classifier-free guidance (CFG) and stochasticity. While prior arts have focused on how to develop each or all components, less attention has given to how to schedule them, leading to heuristically fixed or partially adjusted suboptimal schedules. In this work, we argue that the interactions among all three components in terms of scheduling are crucial for significantly improved performance in solving inverse problems in imaging. Our analysis shows that aggressive CFG early in sampling conflict with DC guidance, while stochasticity brings the trajectory back to higher-probability regions. Based on these findings, we propose Triadic Dynamics Aware Posterior Sampling (TriPS), which reformulates posterior sampling as a time-varying control problem and optimizes schedules following a triadic trend of decreasing DC and stochasticity scales alongside increasing CFG scale. TriPS achieves this through two strategies: template-based search over functional priors for reliable baseline schedules, and Group Relative Policy Optimization (GRPO)-based reinforcement learning for more flexible temporal curves. Experiments demonstrate TriPS outperforms state-of-the-art baselines in data fidelity and perceptual realism.