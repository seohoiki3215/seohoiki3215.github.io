---
title: "Efficient Personalization of Quantized Diffusion Model without Backpropagation"
collection: publications
category: conference_full
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about training models to tackle affordance grounding with weakly supervised learning.'
date: 2025-02-12
venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), The 2nd Workshop on Efficient and On-Device Generation (EDGE)'
paperurl: 'https://arxiv.org/pdf/2503.14868'
citation: '<b>Hoigi Seo*</b>, Wongi Jeong*, Kyungryeol Lee, and Se Young Chun. (* co-first author)'
---

Diffusion models have shown remarkable performance in image synthesis, but they demand extensive computational and memory resources for training, fine-tuning and inference. Although advanced quantization techniques have successfully minimized memory usage for inference, training and fine-tuning these quantized models still require large memory possibly due to dequantization for accurate computation of gradients and/or backpropagation for gradient-based algorithms. However, memory-efficient fine-tuning is particularly desirable for applications such as personalization that often must be run on edge devices like mobile phones with private data. In this work, we address this challenge by quantizing a diffusion model with personalization via Textual Inversion and by leveraging a zeroth-order optimization on personalization tokens without dequantization so that it does not require gradient and activation storage for backpropagation that consumes considerable memory. Since a gradient estimation using zeroth-order optimization is quite noisy for a single or a few images in personalization, we propose to denoise the estimated gradient by projecting it onto a subspace that is constructed with the past history of the tokens, dubbed Subspace Gradient. In addition, we investigated the influence of text embedding in image generation, leading to our proposed time steps sampling, dubbed Partial Uniform Timestep Sampling for sampling with effective diffusion timesteps. Our method achieves comparable performance to prior methods in image and text alignment scores for personalizing Stable Diffusion with only forward passes while reducing training memory demand up to $8.2\times$.