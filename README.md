# Playwright on GitHub Actions

Example project that runs Playwright tests on GitHub Actions.

## Usage

Specify `jobs.job_id.container` as shown below. This container image contains system dependencies to run Chromium, Firefox and WebKit. See [Dockerfile](Dockerfile) to review.

```yml
jobs:
  e2e_test_job:
    runs-on: ubuntu-latest

    container:
      image: arjun27/playwright-bionic:0.1.0

    name: Try playwright
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
    - run: npm install && npm test
```

## Contributing

Let us know if this example works for your requirements. File an issue!

### Potential improvements

Currently, this action is built as a `job.job_id.container`, which works for cases where UI tests are a separate job. It would be worth exploring to make it work as an action inside a job (`job.job_id.uses`).

## Known issue

**Firefox not launching**: Due to how Docker containers + GH Actions work together, the browser is launched as `root`, which leads to the following error on launching Firefox.

```
Running Nightly as root in a regular user's session is not supported
```