---
title: "Skrr: Skip and Re-use Text Encoder Layers for Memory Efficient Text-to-Image Generation"
collection: publications
category: technical_report
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about training models to tackle affordance grounding with weakly supervised learning.'
date: 2025-02-12
venue: 'arXiv'
paperurl: 'https://arxiv.org/pdf/2502.08690'
citation: '<b>Hoigi Seo*</b>, Wongi Jeong*, and Se Young Chun. (* co-first author)'
---

Large-scale text encoders in text-to-image (T2I) diffusion models have demonstrated exceptional performance in generating high-quality images from textual prompts. Unlike denoising modules that rely on multiple iterative steps, text encoders require only a single forward pass to produce text embeddings. However, despite their minimal contribution to total inference time and floating-point operations (FLOPs), text encoders demand significantly higher memory usage, up to eight times more than denoising modules. To address this inefficiency, we propose Skip and Re-use layers (Skrr), a simple yet effective pruning strategy specifically designed for text encoders in T2I diffusion models. Skrr exploits the inherent redundancy in transformer blocks by selectively skipping or reusing certain layers in a manner tailored for T2I tasks, thereby reducing memory consumption without compromising performance. Extensive experiments demonstrate that Skrr maintains image quality comparable to the original model even under high sparsity levels, outperforming existing blockwise pruning methods. Furthermore, Skrr achieves state-of-the-art memory efficiency while preserving performance across multiple evaluation metrics, including the FID, CLIP, DreamSim, and GenEval scores.