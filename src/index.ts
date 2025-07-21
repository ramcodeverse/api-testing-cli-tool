import { runTests } from './runner';

const main = async () => {
  console.log('🔍 Starting API Test CLI Tool...');
  await runTests();
};

main();
