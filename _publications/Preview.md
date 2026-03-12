---
title: "Perceptually Consistent Low-Resolution Previews with High-Resolution Image for Efficient Workflows of Diffusion Models"
collection: publications
category: conference_full
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about generating perceptually consistent low-resolution image for workflow efficiency.'
date: 2026-03-12
venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)'
# paperurl: 'https://arxiv.org/pdf/2507.08422'
citation: '<b>Hoigi Seo*</b>, Wongi Jeong* and Se Young Chun. (* co-first author)'
---

Image generative models have become indispensable tools to yield exquisite high-resolution (HR) images for everyone, ranging from general users to professional designers. However, a desired outcome often requires generating a large number of HR images with different prompts and seeds, resulting in high computational cost for both users and service providers. Generating low-resolution (LR) images first could alleviate computational burden, but it is not straightforward how to generate LR images that are perceptually consistent with their HR counterparts. Here, we consider the task of generating high-fidelity LR images, called Previews, that preserve perceptual similarity of their HR counterparts for an efficient workflow, allowing users to identify promising candidates before generating the final HR image. We propose the commutator-zero condition to ensure the LR-HR perceptual consistency for flow matching models, leading to the proposed training-free solution with downsampling matrix selection and commutator-zero guidance. Extensive experiments show that our method can generate LR images with up to 33% computation reduction while maintaining HR perceptual consistency. When combined with existing acceleration techniques, our method achieves up to 3$\times$ speedup. Moreover, our formulation can be extended to image manipulations, such as warping and translation, demonstrating its generalizability.