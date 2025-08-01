# 把两条字幕合并成双语字幕

效果类似于这个网站（ https://subtitletools.com/merge-subtitles-online ）的简化版本。
配置如下：
* Mode：Nearest cue
* Cue combining threshold in milliseconds：1000ms
* Remove line breaks from the base subtitle
* Remove line breaks from the merge subtitle

## 使用

```shell
npm i subtitle-merge
```

```
import subtitle-merge from 'subtitle-merge';

const mainSrt = 'chs.srt';
const secondarySrt = 'chs.srt';
const outputSrt = 'chs-eng.srt';
subtitle-merge(mainSrt, secondarySrt, outputSrt);
```

或直接运行:
```shell
npx subtitle-merge chs.srt eng.srt chs-eng.srt
```
