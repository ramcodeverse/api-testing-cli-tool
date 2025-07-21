# ⚡ API Testing CLI Tool (TS)

> 🚀 Instantly test your APIs from the command line using a simple JSON/YAML config file — No browser, no fluff. Just code and clarity.

---

## 📖 Overview

**API Testing CLI Tool** is a lightweight, developer-first tool built in **TypeScript** to perform automated HTTP API testing directly from the terminal. It's perfect for:

- 🧪 Backend developers testing endpoints
- 🔁 CI/CD pipelines that need quick sanity checks
- 🛠 Testers writing simple test cases without Postman

---

## 🔥 Key Features

- 🔍 **GET/POST/PUT/DELETE** support
- 📄 Test definitions in **JSON** (YAML support soon)
- ✅ Assertions for status, body, and headers
- 🧾 Pretty and readable CLI output
- ⚙️ Plug-and-play with **GitHub Actions** and other CI tools
- 🔄 Extensible test logic (headers, auth, delays, etc.)

---

## 🏁 Quick Start

### 🧱 1. Clone the repo

```bash
git clone https://github.com/ramcodeverse/api-testing-cli-tool.git
cd api-testing-cli-tool
````

### 📦 2. Install dependencies

```bash
npm install
```

### 🚀 3. Run your first test

```bash
npm run start -- tests/sample.json
```

---

## 🧪 Sample Test File

Here's a basic `sample.json`:

```json
[
  {
    "name": "GET Users List",
    "request": {
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/users"
    },
    "assert": {
      "status": 200
    }
  },
  {
    "name": "POST Create User",
    "request": {
      "method": "POST",
      "url": "https://jsonplaceholder.typicode.com/users",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "name": "John",
        "email": "john@example.com"
      }
    },
    "assert": {
      "status": 201
    }
  }
]
```

---

## 🧭 How It Works

1. 📂 You provide a JSON file with test cases
2. 🔁 Tool iterates through all test definitions
3. 🔎 Executes API call and checks against expected results
4. ✅ Prints status (pass/fail) in the terminal

---

## 🗂️ Project Structure

```
api-testing-cli-tool/
├── src/
│   ├── index.ts        # CLI entry point
│   ├── runner.ts       # Executes test cases
│   ├── types.ts        # TypeScript interfaces for request/assertions
│   └── utils.ts        # Helper functions
├── tests/
│   └── sample.json     # Example test cases
├── .github/workflows/  # CI/CD automation (optional)
├── package.json
└── README.md
```

---

## 📸 Sample Output

```bash
✔ GET Users List -> Passed (200 OK)
✔ POST Create User -> Passed (201 Created)
---------------------------------------
✅ All tests passed (2/2)
```

In case of failure:

```bash
✖ GET Single User -> Failed (Expected 200 but got 404)
```

---

## ⚙️ CLI Options (Coming Soon)

| Option          | Description                     |
| --------------- | ------------------------------- |
| `--file`        | Path to your test file          |
| `--report=json` | Output results as JSON          |
| `--delay=500`   | Delay (ms) between test cases   |
| `--verbose`     | Show full request/response logs |

---

## 🧩 Extending This Tool

Want to add new features? Go ahead! Some great ideas:

* 📁 YAML support
* 🧪 Regex/assertion chaining
* 📤 Environment-based configs
* 📦 HTML/Markdown reports

Feel free to fork and build your own extensions!

---

## 🤖 CI/CD Integration

You can use this in **GitHub Actions**, **GitLab CI**, or **Jenkins** for automated test validation on push.

Here’s a sample `.github/workflows/test.yml`:

```yaml
name: Run API Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm run start -- tests/sample.json
```

---

## 🤝 Contributing

All contributions are welcome!

* 🐛 Report bugs
* 🌟 Suggest features
* 💻 Submit pull requests

Please make sure you run tests and format your code with Prettier/ESLint before submitting.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Created with 💙 by [@ramcodeverse](https://github.com/ramcodeverse)

If you like this project, drop a ⭐ on the repo!

```

---

### ✅ BONUS: What You Might Want Next

Let me know if you'd like me to:
- Add a logo/banner
- Generate `test-report.json` file from results
- Provide `Dockerfile` for containerized testing
- Add badge for build, license, or Node version

