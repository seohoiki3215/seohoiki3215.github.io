---
title: "On Epistemic Uncertainty of Visual Tokens for Object Hallucinations in Large Vision-Language Models"
collection: publications
category: conference_full
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about mitigating hallucinations of Large Cision-Language Models via training-free method.'
date: 2025-09-25
venue: 'Neural Information Processing Systems (NeurIPS)'
paperurl: 'https://arxiv.org/abs/2510.09008'
citation: '<b>Hoigi Seo*</b>, Dong Un Kang*, Hyunjin Cho, Joohoon Lee, and Se Young Chun. (* co-first author)'
---

Large vision-language models (LVLMs), which integrate a vision encoder (VE) with a large language model, have achieved remarkable success across various tasks. However, there are still crucial challenges in LVLMs such as object hallucination, generating descriptions of objects that are not in the input image. Here, we argue that uncertain visual tokens within the VE is a key factor that contributes to object hallucination. Our statistical analysis found that there are positive correlations between visual tokens with high epistemic uncertainty and the occurrence of hallucinations. Furthermore, we show theoretically and empirically that visual tokens in early VE layers that exhibit large representation deviations under small adversarial perturbations indicate high epistemic uncertainty. Based on these findings, we propose a simple yet effective strategy to mitigate object hallucination by modifying the VE only. Our method comprises a proxy method with adversarial perturbations for identifying uncertain visual tokens efficiently and a method to mask these uncertain visual tokens during the self-attention process in the middle layers of the VE, suppressing their influence on visual encoding and thus alleviating hallucinations. Extensive experiments show that our method significantly reduces object hallucinations in LVLMs and can synergistically work with other prior arts.