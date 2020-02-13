# Playwright on GitHub Actions

Example project that runs Playwright tests on GitHub Actions.

## Usage

Specify `jobs.job_id.container` as shown below. This container image contains system dependencies to run Chromium, Firefox and WebKit. See [Dockerfile](Dockerfile) to review.

```yml
jobs:
  e2e_test_job:
    runs-on: ubuntu-latest

    container:
      image: arjun27/playwright-bionic:0.1.1

    name: Try playwright
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
    - run: npm install && npm test
```

### Browsers

The container installs system dependencies for the 3 browsers and relies on Playwright to install browsers during npm install.

To use the browsers in your tests, please use the following configuration:

* Chromium: Use the `--no-sandbox` arg while launching it
* WebKit and Firefox: No additional config

## Contributing

Let us know if this example works for your requirements. File an issue!

### Potential improvements

Currently, this action is built as a `job.job_id.container`, which works for cases where UI tests are a separate job. It would be worth exploring to make it work as an action inside a job (`job.job_id.uses`).
