import { execSync } from 'child_process';

const tests = [
    {
        cmd: 'node ./bin/cli.js ./data/chs.srt ./data/eng.srt ./data/chs-eng.srt',
        shouldPass: true,
        description: '三个参数测试（应成功）'
    },
    {
        cmd: 'node ./bin/cli.js ./data/chs.srt ./data/eng.srt',
        shouldPass: true,
        description: '两个参数测试（应成功）'
    },
    {
        cmd: 'node ./bin/cli.js ./data/chs.srt',
        shouldPass: false,
        description: '一个参数测试（应失败）'
    }
];

console.log('Running all tests...\n');

let allPassed = true;

for (const [index, test] of tests.entries()) {
    console.log(`=== Test ${index + 1}: ${test.description} ===`);
    console.log(`Command: ${test.cmd}`);

    try {
        execSync(test.cmd, { stdio: 'inherit' });
        // 如果命令执行成功
        if (test.shouldPass) {
            console.log(`✓ Test ${index + 1} passed (符合预期)`);
        } else {
            console.log(`✗ Test ${index + 1} failed (预期失败但成功了)`);
            allPassed = false;
        }
    } catch (error) {
        // 如果命令执行失败
        if (!test.shouldPass) {
            console.log(`✓ Test ${index + 1} passed (符合预期失败)`);
        } else {
            console.log(`✗ Test ${index + 1} failed (预期成功但失败了)`);
            console.log(`Error: ${error.message}`);
            allPassed = false;
        }
    }
    console.log(''); // 空行分隔
}

if (allPassed) {
    console.log('🎉 All tests passed!');
    process.exit(0);
} else {
    console.log('❌ Some tests failed');
    process.exit(1);
}
