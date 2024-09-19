---
title: "DITTO-NeRF: Diffusion-based Iterative Text To Omni-directional 3D Model"
collection: publications
category: technical_report
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about fixing template issue #693.'
date: 2023-04-06
venue: 'arXiv'
paperurl: 'https://arxiv.org/pdf/2304.02827'
citation: '<b>Hoigi Seo*</b>, Hayeon Kim, Gwanghyun Kim and Se Young Chun. (* co-first author)'
---

The increasing demand for high-quality 3D content creation has motivated the development of automated methods for creating 3D object models from a single image and/or from a text prompt. However, the reconstructed 3D objects using state-of-the-art image-to-3D methods still exhibit low correspondence to the given image and low multi-view consistency. Recent state-of-the-art text-to-3D methods are also limited, yielding 3D samples with low diversity per prompt with long synthesis time. To address these challenges, we propose DITTO-NeRF, a novel pipeline to generate a high-quality 3D NeRF model from a text prompt or a single image. Our DITTO-NeRF consists of constructing high-quality partial 3D object for limited in-boundary (IB) angles using the given or text-generated 2D image from the frontal view and then iteratively reconstructing the remaining 3D NeRF using inpainting latent diffusion model. We propose progressive 3D object reconstruction schemes in terms of scales (low to high resolution), angles (IB angles initially to outer-boundary (OB) later), and masks (object to background boundary) in our DITTO-NeRF so that high-quality information on IB can be propagated into OB. Our DITTO-NeRF outperforms state-of-the-art methods in terms of fidelity and diversity qualitatively and quantitatively with much faster training times than prior arts on image/text-to-3D such as DreamFusion, and NeuralLift-360.
