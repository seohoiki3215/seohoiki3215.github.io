---
title: "BeyondScene: Higher-Resolution Human-Centric Scene Generation With Pretrained Diffusion"
collection: publications
category: conference_full
permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about generating human-centric ultra-high resolution image with pre-trained diffusion model.'
date: 2024-04-06
venue: 'European Conference on Computer Vision (ECCV)'
paperurl: 'http://https://arxiv.org/pdf/2404.04544'
citation: 'Gwanghyun Kim*, Hayeon Kim*, <b>Hoigi Seo*</b>, Dong Un Kang*, and Se Young Chun. (* co-first author)'
---

Generating higher-resolution human-centric scenes with details and controls remains a challenge for existing text-to-image diffusion models. This challenge stems from limited training image size, text encoder capacity (limited tokens), and the inherent difficulty of generating complex scenes involving multiple humans. While current methods attempted to address training size limit only, they often yielded humancentric scenes with severe artifacts. We propose BeyondScene, a novel framework that overcomes prior limitations, generating exquisite higherresolution (over 8K) human-centric scenes with exceptional text-image correspondence and naturalness using existing pretrained diffusion models. BeyondScene employs a staged and hierarchical approach to initially generate a detailed base image focusing on crucial elements in instance creation for multiple humans and detailed descriptions beyond token limit of diffusion model, and then to seamlessly convert the base image to a higher-resolution output, exceeding training image size and incorporating details aware of text and instances via our novel instance-aware hierarchical enlargement process that consists of our proposed high-frequency injected forward diffusion and adaptive joint diffusion. BeyondScene surpasses existing methods in terms of correspondence with detailed text descriptions and naturalness, paving the way for advanced applications in higher-resolution human-centric scene creation beyond the capacity of pretrained diffusion models without costly re-training.