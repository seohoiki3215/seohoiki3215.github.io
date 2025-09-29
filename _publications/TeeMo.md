---
title: "On Geometrical Properties of Text Token Embeddings for Strong Semantic Binding in Text-to-Image Generation"
collection: publications
category: technical_report
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about analyzing its geometrical properties in cross-attention and leverage its properties for strong semantic binding.'
date: 2025-03-29
venue: 'arXiv'
paperurl: 'https://arxiv.org/pdf/2503.23011'
citation: '<b>Hoigi Seo*</b>, Junseo Bang*, Haechang Lee*, Joohoon Lee, Byung Hyun Lee, and Se Young Chun. (* co-first author)'
---

Text-to-Image (T2I) models often suffer from text-image misalignment in complex scenes involving multiple objects and attributes. Semantic binding aims to mitigate this issue by accurately associating the generated attributes and objects with their corresponding noun phrases (NPs). Existing methods rely on text or latent optimizations, yet the factors influencing semantic binding remain underexplored. Here we investigate the geometrical properties of text token embeddings and their cross-attention (CA) maps. We empirically and theoretically analyze that the geometrical properties of token embeddings, specifically both angular distances and norms, play a crucial role in CA map differentiation. Then, we propose TeeMo, a training-free text embedding-aware T2I framework with strong semantic binding. TeeMo consists of Causality-Aware Projection-Out (CAPO) for distinct inter-NP CA maps and Adaptive Token Mixing (ATM) with our loss to enhance inter-NP separation while maintaining intra-NP cohesion in CA maps. Extensive experiments confirm TeeMo consistently outperforms prior arts across diverse baselines and datasets.