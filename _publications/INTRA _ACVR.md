---
title: "INTRA: Interaction Relationship-aware Weakly Supervised Affordance Grounding"
collection: publications
category: conference_short
permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about training models to tackle affordance grounding with weakly supervised learning.'
date: 2024-09-10
venue: 'Twelfth International Workshop on Assistive Computer Vision and Robotics (ACVR24) <b>(oral)</b>'
paperurl: 'https://arxiv.org/pdf/2409.06210'
citation: 'Ji Ha Jang*, <b>Hoigi Seo*</b>, and Se Young Chun. (* co-first author)'
---

Affordance denotes the potential interactions inherent in objects. The perception of affordance can enable intelligent agents to navigate and interact with new environments efficiently. Weakly supervised affordance grounding teaches agents the concept of affordance without costly pixel-level annotations, but with exocentric images. Although recent advances in weakly supervised affordance grounding yielded promising results, there remain challenges including the requirement for paired exocentric and egocentric image dataset, and the complexity in grounding diverse affordances for a single object. To address them, we propose INTeraction Relationship-aware weakly supervised Affordance grounding (INTRA). Unlike prior arts, INTRA recasts this problem as representation learning to identify unique features of interactions through contrastive learning with exocentric images only, eliminating the need for paired datasets. Moreover, we leverage vision-language model embeddings for performing affordance grounding flexibly with any text, designing text-conditioned affordance map generation to reflect interaction relationship for contrastive learning and enhancing robustness with our text synonym augmentation. Our method outperformed prior arts on diverse datasets such as AGD20K, IIT-AFF, CAD and UMD. Additionally, experimental results demonstrate that our method has remarkable domain scalability for synthesized images / illustrations and is capable of performing affordance grounding for novel interactions and objects.