---
sidebar_position: 1
---

# Training with Custom Data

- If there might arise a situation where you might need to train your own dataset with your own voice and information, our
implementation allows you to do just that with ease. First and foremost you need to create a dataset.

1. The audio dataset needs to placed in a folder called **dataset_lesan** and in that folder add all your audio recording in wav format under **/wavs**.
2. Create a metadata file in **/dataset_lesan** called **metadata.csv**. The metadata file should have the following columns:
    ```audiofilename | amharic text in utf-8 | speaker-number```
3. Then lastly before training your model, you need to pay a pre-processing fee which goes at a rate of **$1 per minute** of audio sample. You should remember the more dataset you have, the more expensive it is to train and preprocess your data, but the more accurate and more lively your model will become.
4. Finally you can train your model by adjusting the hyper parameters in the **/dataset_lesan/config.json** file. You can also adjust the hyper parameters in the **/dataset_lesan/config.json** file.

- Note: if you want consultation on how to create your own dataset,and fix the hyper-parameters you can contact us at admin@lesan.studio and get expert advice at a rate of **$100 per hour**.

#### Sneak peak at implementation code of abstract dataset

```python abstract data class modification

import numpy as np
import soundfile as sf
import yaml

import tensorflow as tf

from tensorflow_tts.inference import TFAutoModel
from tensorflow_tts.inference import AutoProcessor

# initialize fastspeech2 model.
fastspeech2 = TFAutoModel.from_pretrained("tensorspeech/tts-fastspeech2-ljspeech-en")


# initialize mb_melgan model
mb_melgan = TFAutoModel.from_pretrained("tensorspeech/tts-mb_melgan-ljspeech-en")


# inference
processor = AutoProcessor.from_pretrained("tensorspeech/tts-fastspeech2-ljspeech-en")

input_ids = processor.text_to_sequence("Recent research at Harvard has shown meditating for as little as 8 weeks, can actually increase the grey matter in the parts of the brain responsible for emotional regulation, and learning.")
# fastspeech inference

mel_before, mel_after, duration_outputs, _, _ = fastspeech2.inference(
    input_ids=tf.expand_dims(tf.convert_to_tensor(input_ids, dtype=tf.int32), 0),
    speaker_ids=tf.convert_to_tensor([0], dtype=tf.int32),
    speed_ratios=tf.convert_to_tensor([1.0], dtype=tf.float32),
    f0_ratios =tf.convert_to_tensor([1.0], dtype=tf.float32),
    energy_ratios =tf.convert_to_tensor([1.0], dtype=tf.float32),
)

# melgan inference
audio_before = mb_melgan.inference(mel_before)[0, :, 0]
audio_after = mb_melgan.inference(mel_after)[0, :, 0]

# save to file
sf.write('./audio_before.wav', audio_before, 22050, "PCM_16")
sf.write('./audio_after.wav', audio_after, 22050, "PCM_16")

```
