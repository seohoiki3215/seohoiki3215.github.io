# Publication thumbnails

These PNGs are direct crops rendered from the original papers, not generated illustrations.

| Thumbnail | Source PDF | Page | Figure |
| --- | --- | --- | --- |
| `etc.png` | https://arxiv.org/pdf/2604.16481v1 | 3 | Figure 1: Concept distribution modeling and mapping |
| `preview.png` | https://arxiv.org/pdf/2604.09227v1 | 2 | Figure 1: Motivation of Preview Generation |
| `trips.png` | https://arxiv.org/pdf/2605.26470v1 | 5 | Figure 3: Overview of the triadic schedule optimization framework |

Source PDFs and intermediate page renders are kept outside this repository. Only the cropped thumbnail PNGs belong in the site assets.

Reproduce with Poppler's `pdftoppm`, using `-scale-to 3000 -singlefile -png` and the corresponding page and crop below. Crop coordinates are pixels at that rendering scale:

- ETC: `-f 3 -l 3 -x 222 -y 276 -W 902 -H 740`
- Previews: `-f 2 -l 2 -x 216 -y 274 -W 1884 -H 956`
- TriPS: `-f 5 -l 5 -x 328 -y 250 -W 1610 -H 922`
