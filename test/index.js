import subtitleMerge from 'subtitle-merge';

const mainSrt = 'chs.srt';
const secondarySrt = 'chs.srt';
const outputSrt = 'chs-eng.srt';
subtitleMerge(mainSrt, secondarySrt, outputSrt);
