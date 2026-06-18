# DSC-TTS: Dual-Space Constrained Face-Based Zero-Shot Text-to-Speech Synthesis

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-sa/4.0/)

Project page for the Interspeech 2026 paper *"Dual-Space Constrained Face-Based Zero-Shot Text-to-Speech Synthesis"*.

> **DSC-TTS** synthesizes speaker-consistent speech from a single face image. Our modular framework enforces identity consistency in both the speaker embedding space and a shared face-voice identity space, mitigating training-inference mismatch.

🔗 **Project Page:** [https://zsj23.github.io/dsc-tts](https://zsj23.github.io/dsc-tts)

## Authors

- **Jianrong Wang**<sup>1</sup>, **Shengjie Zhou**<sup>1</sup>, **Ju Zhang**<sup>2,*</sup>, **Dengcheng Hu**<sup>1</sup>, **Qi Li**<sup>3</sup>

<sup>1</sup> College of Intelligence and Computing, Tianjin University<br>
<sup>2</sup> Technical College for the Deaf, Tianjin University of Technology<br>
<sup>3</sup> School of Electrical and Information Engineering, Tianjin University<br>
<sup>*</sup> Corresponding author

## Abstract

A human face conveys rich cues about speaker identity, enabling face-based zero-shot text-to-speech (TTS) for unseen speakers. However, in modular face-based TTS systems, the acoustic model is typically trained on speech-derived embeddings, while face-derived representations are introduced only at inference time, often resulting in identity drift. We propose Dual-Space Constrained TTS (DSC-TTS), a modular framework that enforces identity consistency during acoustic model training in both the speaker embedding space and a shared identity space learned through face-voice alignment. By constraining representations across these complementary spaces, the proposed framework improves speaker identity stability while preserving speech quality. Experiments demonstrate higher speaker similarity and stronger identity consistency than existing face-based TTS methods.

## Audio Samples

Audio samples comparing DSC-TTS with baselines (FaceTTS, Face2Speech, SYNTHE-SEES, Face-StyleSpeech) on VoxCeleb2 and LRS2 datasets are available on the [project page](https://zsj23.github.io/dsc-tts).

## Acknowledgments

This project page was built using the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which was adopted from the [Nerfies](https://nerfies.github.io/) project page.

## License

This website is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
