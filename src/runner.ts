import axios from 'axios';
import chalk from 'chalk';

const testCases = [
  {
    name: 'GET /health',
    method: 'get',
    url: 'http://localhost:3000/health',
    expectedStatus: 200,
  },
  {
    name: 'POST /login',
    method: 'post',
    url: 'http://localhost:3000/login',
    data: { username: 'test', password: 'test' },
    expectedStatus: 200,
  },
];

export const runTests = async () => {
  let passed = 0;

  for (const test of testCases) {
    try {
      const res = await axios({
        method: test.method,
        url: test.url,
        data: test.data,
      });

      if (res.status === test.expectedStatus) {
        console.log(chalk.green(`✅ ${test.name} passed.`));
        passed++;
      } else {
        console.log(
          chalk.red(`❌ ${test.name} failed. Expected ${test.expectedStatus}, got ${res.status}`)
        );
      }
    } catch (err) {
      console.log(chalk.red(`❌ ${test.name} failed with error: ${err.message}`));
    }
  }

  console.log(`\nSummary: ${passed}/${testCases.length} tests passed.`);
};
