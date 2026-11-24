export type Evidence = {
  src: string
  alt: string
  caption: string
}

export type Project = {
  slug: string
  number: string
  title: string
  summary: string
  problem: string
  value: string
  github: string
  ciUrl: string
  stack: string[]
  capabilities: string[]
  strategy: string[]
  evidenceNotes: string[]
  limitations: string[]
  security: string[]
  setup: string[]
  cover: string
  thumb: string
  diagram: string
  diagramCaption: string
  shots: Evidence[]
}

export type Service = {
  slug: string
  title: string
  problem: string
  scope: string[]
  deliverables: string[]
  technology: string[]
  engagement: string
  exclusions: string[]
  prerequisites: string[]
  graphic: string
}

export const profile = {
  name: "Mo'men Ali",
  title: 'Senior QA Automation Engineer | AI Testing Engineer',
  location: 'New Cairo',
  github: 'https://github.com/Momen9696',
  githubLogin: 'Momen9696',
  intro:
    'I design test architecture that can be rerun: API suites, browser automation, LLM evaluation, test-case design tools, CI/CD control planes, and performance profiles. The six repositories on this site are working demonstration systems with local applications and measured results. They were not delivered to a paying client.',
}

export const skills = [
  'Enterprise QA automation',
  'API automation',
  'Robot Framework',
  'Playwright',
  'Pytest',
  'AI and LLM testing',
  'Test engineering architecture',
  'CI/CD',
  'Performance testing',
  'FastAPI',
  'React and TypeScript',
  'Docker',
  'GitHub Actions',
]

export const projects: Project[] = [
  {
    slug: 'api-automation',
    number: '01',
    title: 'Enterprise API Automation Framework',
    summary:
      'Robot Framework suites describe ledger scenarios. A Python core owns HTTP, tokens, schema checks, data, retries, and log masking. The system under test is a local FastAPI ledger, so a run does not need a third-party API.',
    problem:
      'API tests often hide URLs, tokens, and retries inside each case. Logs then store bearer tokens, a retried POST can repeat a money movement, and parallel runs share one balance.',
    value:
      'A new suite starts from keywords and shared data files. Unsafe methods are not retried unless the caller marks the call idempotent. CI publishes Pytest, Robot, and Allure outputs.',
    github: 'https://github.com/Momen9696/enterprise-api-automation-framework',
    ciUrl: 'https://github.com/Momen9696/enterprise-api-automation-framework/actions/runs/45436818415',
    stack: [
      'Python 3.13',
      'Robot Framework 7.5',
      'RequestsLibrary 0.9.7',
      'Pabot 4.3',
      'Pytest 9',
      'FastAPI',
      'JSON Schema',
      'openpyxl',
      'Allure',
      'GitHub Actions',
      'pip-audit',
    ],
    capabilities: [
      'GET, POST, PUT, PATCH, and DELETE keywords',
      'Role login with bearer reuse and passwords kept out of Robot arguments',
      'local and staging YAML profiles',
      'JSON field checks and JSON Schema validation',
      'Excel and JSON data-driven cases',
      'Retries only for GET, HEAD, or calls marked idempotent, on connection errors, 429, and 503',
      'Sensitive fields replaced with *** in framework and RequestsLibrary logs',
      'Parallel pabot execution',
    ],
    strategy: [
      'Pytest covers the core without a server and drives the demo API over HTTP.',
      'Robot suites cover positive, negative, data-driven, and transaction behavior.',
      'Pabot runs the same suites with two processes.',
    ],
    evidenceNotes: [
      'Local re-run of python scripts/run_suite.py on 24 November 2026: Pytest 23 passed, Robot Framework 18 passed, Pabot 18 passed.',
      'pip-audit -r requirements.txt reported no known vulnerabilities.',
      'GitHub Actions CI on main (517599c) completed with success.',
      'There is no Docker setup in this repository. Ruff is not part of its toolchain.',
    ],
    limitations: [
      'Balances, users, and tokens are synthetic. Nothing talks to a real bank.',
      'staging.yaml is a second profile, not a live host. The suite runner starts the local API.',
      'The JWT signing key is a fixed demo string.',
    ],
    security: [
      'Retries do not repeat a normal POST.',
      'Request and response logs mask sensitive fields before they are written.',
      'DEMO_ALLOW_RESET=false hides POST /test/reset.',
    ],
    setup: [
      'python3 -m venv .venv && source .venv/bin/activate',
      'pip install -r requirements.txt',
      'python scripts/run_suite.py',
    ],
    cover: 'brand/cover-api.jpg',
    thumb: 'brand/thumb-api.jpg',
    diagram: 'diagrams/api.svg',
    diagramCaption:
      'Suites and Pytest call the Python core. The core calls RequestsLibrary. The demo API does not import the framework.',
    shots: [
      {
        src: 'evidence/api-docs.png',
        alt: 'Swagger UI for the Demo Ledger API showing health, auth, users, and accounts.',
        caption:
          'OpenAPI docs from the local demo process on 24 November 2026. The app factory is create_app(); this is the synthetic ledger, not a production bank API.',
      },
      {
        src: 'evidence/robot-report.png',
        alt: 'Robot Framework report showing 18 tests passed and 0 failed.',
        caption:
          'Robot HTML report written by scripts/run_suite.py at 19:38 local time. Statistics: 18 passed, 0 failed.',
      },
    ],
  },
  {
    slug: 'playwright-ui',
    number: '02',
    title: 'Enterprise Playwright UI Automation',
    summary:
      'Pytest drives Playwright through page objects against HarborDesk, a local work-tracking application. The same run can arrange data through a small JSON API.',
    problem:
      'Browser suites become brittle when selectors, waits, and account setup are copied into every test, and when a failure leaves no screenshot or trace.',
    value:
      'Page objects, profile-based timeouts, and failure artifacts give a suite that can run headless in CI and headed on a laptop, against an application that ships with the tests.',
    github: 'https://github.com/Momen9696/enterprise-playwright-ui-automation',
    ciUrl: 'https://github.com/Momen9696/enterprise-playwright-ui-automation/actions/runs/45442018432',
    stack: [
      'Python 3.13',
      'Playwright for Python 1.65',
      'Pytest 9',
      'pytest-xdist',
      'pytest-html',
      'Allure',
      'FastAPI',
      'httpx',
      'Faker',
      'Ruff',
      'GitHub Actions',
    ],
    capabilities: [
      'Page objects for login, registration, dashboard, items, profile, and admin',
      'Chromium, Firefox, and WebKit',
      'Screenshot, video, and trace retained on failure',
      'JSON data-driven UI cases',
      'API client for register, login, create, update, and delete',
      'Markers for smoke, regression, auth, crud, negative, api, unit, and ui',
    ],
    strategy: [
      'Unit tests stay in process. API tests talk to HarborDesk over HTTP. UI tests use Playwright.',
      'An evidence test is marked separately and was deselected for the main local count.',
    ],
    evidenceNotes: [
      'Local re-run on 24 November 2026, outside the sandbox, Chromium, marker not evidence: 96 passed, 1 deselected, in 12.51s.',
      'The same command inside a restricted sandbox produced browser launch errors. That failure was environmental. Ruff then passed.',
      'GitHub Actions UI regression on main (2b4a72a) completed with success.',
      'A committed failure screenshot shows the artifact path. This repository has no Docker Compose file.',
    ],
    limitations: [
      'Accounts and work items are synthetic fixtures.',
      'staging.yaml is not a live environment.',
      'Firefox and WebKit were not re-executed in this portfolio pass. CI is the cross-browser record.',
    ],
    security: [
      'Secret field values are written as ***.',
      'The demo states that nothing in it is a real account.',
    ],
    setup: [
      'python3 -m venv .venv && source .venv/bin/activate',
      'python -m pip install -r requirements.txt',
      'python -m playwright install chromium',
      'python -m pytest --browser chromium',
    ],
    cover: 'brand/cover-ui.jpg',
    thumb: 'brand/thumb-ui.jpg',
    diagram: 'diagrams/ui.svg',
    diagramCaption:
      'Tests call page objects and the API client. The framework does not import HarborDesk route handlers.',
    shots: [
      {
        src: 'evidence/harbor-login.png',
        alt: 'HarborDesk sign-in page stating that the data is synthetic.',
        caption: 'HarborDesk login page captured from a local uvicorn process on 24 November 2026.',
      },
      {
        src: 'evidence/harbor-dashboard.png',
        alt: 'HarborDesk dashboard for admin@demo.local with open, in progress, and done counts.',
        caption:
          'Dashboard after signing in with the documented demo admin. Counts come from the seeded local database.',
      },
      {
        src: 'evidence/playwright-failure.png',
        alt: 'Full-page screenshot saved by the framework when a UI test fails.',
        caption:
          'Failure artifact already stored in the repository at docs/evidence/failure-screenshot.png. It is a real Playwright capture, not a mockup.',
      },
    ],
  },
  {
    slug: 'llm-testing',
    number: '03',
    title: 'Enterprise LLM Testing Framework',
    summary:
      'A local evaluation runner scores scripted or live model responses for correctness, grounding, safety, structured output, latency, and token usage. The default provider is a deterministic mock.',
    problem:
      'Model demos often publish a single accuracy number without saying which rule produced it, which cases were supposed to fail, or which errors were infrastructure rather than quality.',
    value:
      'Every metric is labeled deterministic or heuristic, and the report keeps the limitation next to the score. CI does not call a paid model API.',
    github: 'https://github.com/Momen9696/enterprise-llm-testing-framework',
    ciUrl: 'https://github.com/Momen9696/enterprise-llm-testing-framework/actions/runs/45446250343',
    stack: [
      'Python 3.11+',
      'Pytest',
      'FastAPI',
      'Streamlit (optional extra)',
      'JSON Schema',
      'Ruff',
      'Bandit',
      'pip-audit',
      'GitHub Actions',
    ],
    capabilities: [
      'Thirteen metrics, each with a definition, inputs, method, and known limits',
      'Mock provider plus an optional OpenAI-compatible adapter that reads a key from the environment',
      'JSON, HTML, and CSV reports',
      'Regression comparison between two runs',
      'FastAPI history endpoints and an optional Streamlit dashboard',
    ],
    strategy: [
      'The published dataset mixes grounded answers with scripted failures: invented numbers, injection, leakage, malformed JSON, timeout, and provider errors.',
      'Infrastructure errors are excluded from the quality pass rate.',
      'A mutation test changes the scripted capital answer and expects exact_match and semantic_similarity to regress.',
    ],
    evidenceNotes: [
      'Local re-run on 24 November 2026: ruff check passed and 29 pytest tests passed.',
      'pip-audit found no known vulnerabilities. The local package name is not on PyPI and was skipped.',
      'Committed sample from generate_sample_reports.py: 35 cases, 19 passed, 12 failed quality checks, 4 infrastructure errors, quality pass rate 0.6129, mean score 0.6339.',
      'Provider-reported tokens were 694 prompt and 306 completion. Mean measured latency was 0.064 ms around the in-process mock, not a hosted model.',
      'GitHub Actions on main (1cdff67) completed with success.',
    ],
    limitations: [
      'Scores are indicators. They do not certify correctness, faithfulness, or safety.',
      'semantic_similarity is TF-IDF cosine, not an embedding model.',
      'Safety, injection, jailbreak, and leakage checks look for configured strings.',
      'There is no Docker Compose file in this repository.',
    ],
    security: [
      'The optional live adapter is not used by the default dataset or by CI.',
      'A secret scan script is part of CI.',
      'Leakage checks look for configured canaries such as the synthetic CANARY-SECRET-8841.',
    ],
    setup: [
      'python -m venv .venv && source .venv/bin/activate',
      'pip install -e ".[dev]"',
      'pytest',
      'python scripts/generate_sample_reports.py',
    ],
    cover: 'brand/cover-llm.jpg',
    thumb: 'brand/thumb-llm.jpg',
    diagram: 'diagrams/llm.svg',
    diagramCaption:
      'The runner renders a template, calls one provider, and applies the metrics named on the case. Metrics do not read reference_outcome.',
    shots: [
      {
        src: 'evidence/llm-report.png',
        alt: 'HTML evaluation report for enterprise-eval-sample with 35 cases and a 0.6129 pass rate.',
        caption:
          'Opening of reports/samples/enterprise-eval-sample.html. The disclaimer states that heuristic checks can miss unsupported claims and can flag paraphrases.',
      },
    ],
  },
  {
    slug: 'test-case-generator',
    number: '04',
    title: 'AI-Powered Test Case Generator',
    summary:
      'A local web application turns a user story or requirements text into reviewable test cases. The default provider is a deterministic rules engine. The interface does not present that output as a language-model score.',
    problem:
      'Teams want a first draft of functional, negative, boundary, and security cases without pasting requirements into a paid chat tool or trusting an unlabeled score.',
    value:
      'The same text produces the same cases. Extracted statements stay separate from inferred gaps, and exports say when a row came from the mock provider.',
    github: 'https://github.com/Momen9696/ai-powered-test-case-generator',
    ciUrl: 'https://github.com/Momen9696/ai-powered-test-case-generator/actions/runs/45447535793',
    stack: [
      'Python',
      'FastAPI',
      'Pydantic v2',
      'SQLAlchemy',
      'SQLite',
      'React',
      'TypeScript',
      'Vite',
      'Material UI',
      'Pytest',
      'Vitest',
      'Playwright',
      'Docker Compose',
    ],
    capabilities: [
      'Paste text or upload .txt, .md, or .csv',
      'Functional, positive, negative, boundary, edge, error-handling, security, API, and UI scenarios',
      'Traceability to acceptance-criteria ids',
      'Near-duplicate titles flagged with token Jaccard similarity',
      'Excel, CSV, and JSON export',
      'Optional OpenAI and Anthropic adapters when a key is set and the provider is selected',
    ],
    strategy: [
      'Backend tests cover analysis, generation, duplicates, mapping, HTTP, exports, upload rejection, and redaction.',
      'Frontend unit tests use Vitest and Testing Library.',
      'Playwright covers creating a project, opening the table, and downloading JSON.',
    ],
    evidenceNotes: [
      'Local re-run on 24 November 2026: backend pytest 32 passed; Vitest 6 files, 11 tests passed; tsc and Vite production build succeeded.',
      'Playwright e2e was not re-run in this pass. The repository execution report records 2 passed e2e tests on the same date, and GitHub Actions on 7221fca succeeded, including that job.',
      'Screenshots in the repository were saved by that Playwright run. Docker CLI is not installed on this machine, so compose was not started here. CI runs docker compose config.',
    ],
    limitations: [
      'The analyzer is an English heuristic, not a general parser.',
      'Duplicate detection compares titles. It does not use embeddings.',
      'Coverage means a case references an acceptance-criterion id. It is not execution coverage.',
      'There is no login. It is a single-operator local tool.',
    ],
    security: [
      'Keys stay in the server environment and are not returned by /api/settings.',
      'Uploads are read as UTF-8 text into SQLite. The process does not execute requirement text.',
      'npm audit after the documented Vitest 4.1.12 install reported 0 vulnerabilities. pip-audit on the backend requirements reported none.',
    ],
    setup: [
      'Backend: pip install -r backend/requirements.txt && uvicorn app.main:app --reload',
      'Frontend: npm install && npm run dev',
      'Open http://127.0.0.1:5173',
      'Docker, when the CLI is available: docker compose up --build',
    ],
    cover: 'brand/cover-cases.jpg',
    thumb: 'brand/thumb-cases.jpg',
    diagram: 'diagrams/cases.svg',
    diagramCaption:
      'The UI calls FastAPI. The default path is the rules engine. Remote adapters run only when configured.',
    shots: [
      {
        src: 'evidence/cases-dashboard.png',
        alt: 'Test case generator dashboard for a seeded demo project.',
        caption:
          'Dashboard screenshot stored by the project Playwright run. The header states that the default mode is a local mock.',
      },
      {
        src: 'evidence/cases-table.png',
        alt: 'Generated test case table TC-0001 through TC-0017 with duplicate warning.',
        caption:
          'Generated table from the same run, including a Jaccard duplicate warning. Rows are labeled extracted or inferred.',
      },
    ],
  },
  {
    slug: 'cicd-platform',
    number: '05',
    title: 'Enterprise CI/CD Test Automation Platform',
    summary:
      'A local control plane registers projects and pipelines, runs an approved catalog of Pytest, Robot Framework, and Playwright suites, and stores the results. GitHub Actions and Azure DevOps YAML are templates, not a required paid CI product.',
    problem:
      'A dashboard that accepts an arbitrary shell command is not a test platform. Teams also need to tell seeded demo history apart from a run that actually executed.',
    value:
      'The public API has no command, script, or filesystem field. A run starts only for a suite in the catalog. Demo rows are labeled and can be hidden.',
    github: 'https://github.com/Momen9696/enterprise-cicd-test-automation-platform',
    ciUrl: 'https://github.com/Momen9696/enterprise-cicd-test-automation-platform/actions/runs/45448358111',
    stack: [
      'Python',
      'FastAPI',
      'SQLite',
      'React',
      'TypeScript',
      'Vite',
      'Pytest',
      'Vitest',
      'Ruff',
      'Bandit',
      'Docker Compose',
      'GitHub Actions',
      'Azure DevOps YAML',
    ],
    capabilities: [
      'Projects, environments, and pipeline configuration',
      'Queued, running, passed, failed, error, and cancelled executions',
      'Pass rate, duration, and repeated-failure aggregates',
      'Signed GitHub and Azure-style webhooks and JUnit ingest',
      'JSON, CSV, HTML, and Markdown exports',
      'Seven GitHub Actions workflows and seven Azure DevOps pipelines as a template library',
    ],
    strategy: [
      'Backend tests cover the API, catalog boundary, and reporting.',
      'Frontend tests cover the dashboard behavior that is implemented in React.',
      'Template and Docker files are validated by scripts. Image builds need a Docker CLI.',
    ],
    evidenceNotes: [
      'Local re-run on 24 November 2026: ruff passed; pytest 16 passed; Vitest 5 passed; tsc lint passed; Vite build succeeded (CSS 4.29 kB, JS 205.17 kB).',
      'The repository evidence file records an earlier API snapshot the same day: 37 stored runs, 36 labeled demo seed, and one live Pytest smoke (execution 37) with 2 passed tests.',
      'pip-audit on backend requirements found no known vulnerabilities. npm audit still reports 6 issues inside Vite 5.4.21, Vitest 2.1.9, esbuild, and tinypool. A Vitest 5 / Vite 8 upgrade failed dependency resolution on npm 10.9.2.',
      'Docker CLI is not installed here, so images were not built. validate_docker.py checks structure. GitHub Actions on 84c6ab0 succeeded.',
    ],
    limitations: [
      'Demo history is seeded and must not be quoted as production CI volume.',
      'Playwright browser binaries are optional and are not in the default image.',
      'The operator and viewer keys in .env.example are development placeholders.',
    ],
    security: [
      'The runner builds a fixed argument list. shell is false.',
      'The child environment drops API keys, webhook secrets, and provider tokens.',
      'Webhook signatures are checked before ingest.',
    ],
    setup: [
      'python -m pip install -r backend/requirements.txt -r backend/requirements-dev.txt',
      'uvicorn app.main:app --app-dir backend --host 127.0.0.1 --port 8000',
      'cd frontend && npm install && npm run dev',
      'Open http://127.0.0.1:5173. Development keys are local-operator-key and local-viewer-key.',
    ],
    cover: 'brand/cover-cicd.jpg',
    thumb: 'brand/thumb-cicd.jpg',
    diagram: 'diagrams/cicd.svg',
    diagramCaption:
      'The dashboard never supplies a shell command. Adapters execute only catalogued suites.',
    shots: [
      {
        src: 'evidence/cicd-overview.png',
        alt: 'CI/CD dashboard showing 37 total runs and a notice that 36 are demo seed.',
        caption:
          'Overview captured against the live local API. The banner states that 36 runs are synthetic demo seed.',
      },
      {
        src: 'evidence/cicd-live.png',
        alt: 'Executions view filtered to hide demo seed, leaving the live run.',
        caption:
          'Same session with Include demo seed cleared. The repository evidence file identifies the remaining row as execution 37, a real Pytest smoke.',
      },
    ],
  },
  {
    slug: 'performance',
    number: '06',
    title: 'Enterprise API Performance Testing Framework',
    summary:
      'PerfKit runs a YAML profile through Locust against an allowlisted host, stores every sample, and reports throughput, percentiles, and a pass or fail verdict. The default target is a FastAPI demo in the same repository.',
    problem:
      'Load-test numbers are easy to invent and easy to point at the wrong host. A framework has to show the profile, the threshold, and the sample that produced the verdict.',
    value:
      'Each profile carries its own thresholds. Public hosts are rejected. A fault-injection profile is expected to fail its error budget, which shows that a green dashboard is not hardcoded.',
    github: 'https://github.com/Momen9696/enterprise-api-performance-testing-framework',
    ciUrl: 'https://github.com/Momen9696/enterprise-api-performance-testing-framework/actions/runs/45448411248',
    stack: [
      'Python 3.11+',
      'Locust',
      'FastAPI',
      'Pydantic',
      'SQLite',
      'Pytest',
      'Ruff',
      'Bandit',
      'Docker Compose',
      'GitHub Actions',
    ],
    capabilities: [
      'Load, stress, spike, soak, baseline, concurrent, and single-endpoint shapes',
      'Linear percentiles and per-profile thresholds',
      'Dashboard for stored runs, error rate, and trend once two runs exist',
      'HTML report per execution',
      'Target allowlist: loopback, or a name in PERF_ALLOWED_HOSTS that resolves to loopback or a private address',
    ],
    strategy: [
      'Pytest covers percentiles, thresholds, the allowlist, the demo API, the control plane, and one bounded Locust smoke.',
      'Bundled profiles were executed earlier on 24 November 2026 against 127.0.0.1 with 0 ms injected latency. Those HTML reports are committed.',
    ],
    evidenceNotes: [
      'Local re-run on 24 November 2026: ruff passed, Bandit completed with no findings, pytest 49 passed in 12.77s, pip-audit reported no known vulnerabilities.',
      'Committed load report: 384 requests, 38.24 rps, P95 7.74 ms, 0 percent errors, verdict PASS. Run id 27a35feff80c4770916df75bcd0b2ca5.',
      'Committed threshold-fail-demo: 142 requests, 98.59 percent errors, verdict FAIL, because the profile calls a 500 fault while expecting HTTP 200.',
      'The full profile table is in the repository README. Those profiles were not all repeated during this portfolio pass. Docker images were not built here because the Docker CLI is absent. GitHub Actions on d6ac1b9 succeeded and includes a bounded smoke.',
    ],
    limitations: [
      'The bundled soak is 15 seconds so it can run locally. It is not a multi-hour endurance test.',
      'Sub-10 ms figures are measurements of a local demo with no injected latency. They are not a production SLO.',
      'The demo API password is a local fixture documented in that repository. Reports redact passwords and authorization headers.',
    ],
    security: [
      'Locust starts from an argument vector. Profile text is not passed to a shell.',
      'Public hosts are rejected.',
      'Reports redact credentials.',
    ],
    setup: [
      'pip install -r requirements-dev.txt',
      'export PYTHONPATH=src and set the demo username and password from the repository README',
      'python -m perfkit run --profile profiles/load.yaml --start-demo',
      'python -m perfkit serve and open http://127.0.0.1:8080',
    ],
    cover: 'brand/cover-perf.jpg',
    thumb: 'brand/thumb-perf.jpg',
    diagram: 'diagrams/perf.svg',
    diagramCaption:
      'The control plane checks the allowlist before it starts Locust. Samples are stored, then scored against that profile.',
    shots: [
      {
        src: 'evidence/perf-load.png',
        alt: 'PerfKit load report with a PASS verdict, 384 requests, and P95 of 7.74 ms.',
        caption:
          'HTML report copied from the Locust load execution. The page states that the numbers come from that run.',
      },
      {
        src: 'evidence/perf-fail.png',
        alt: 'PerfKit threshold-fail report with a FAIL verdict driven by HTTP 500 responses.',
        caption:
          'Fault-injection report. P95 can pass while the error-rate limit fails. The verdict is FAIL.',
      },
    ],
  },
]

export const services: Service[] = [
  {
    slug: 'api-automation',
    title: 'API test architecture and Robot Framework automation',
    problem:
      'API regression is slow to extend because each test builds its own client, token handling, and logging.',
    scope: [
      'Review the API contract and choose a suite layout.',
      'Build a Python client layer with explicit retry and masking rules.',
      'Add Robot Framework or Pytest suites, data files, and schema checks.',
      'Wire the suite into GitHub Actions with JUnit and HTML artifacts.',
    ],
    deliverables: [
      'Framework repository',
      'Environment profiles without production secrets',
      'Positive, negative, and data-driven suites',
      'CI workflow and a short execution guide',
    ],
    technology: ['Python', 'Robot Framework', 'Pytest', 'Requests', 'JSON Schema', 'GitHub Actions'],
    engagement: 'A focused framework engagement, usually one to three weeks for a first service, then a follow-on for more endpoints.',
    exclusions: [
      'Testing a production payment network from this demo ledger',
      'Load testing at production volume',
      'Storing real customer tokens in the repository',
    ],
    prerequisites: [
      'An OpenAPI file or a stable staging environment',
      'A non-production account and a way to reset data',
      'Permission to add a CI workflow',
    ],
    graphic: 'brand/service-api.jpg',
  },
  {
    slug: 'ui-automation',
    title: 'Playwright UI automation for web applications',
    problem:
      'UI regression fails for reasons nobody can replay: missing waits, shared accounts, and no trace.',
    scope: [
      'Map the critical journeys and the roles that use them.',
      'Introduce page objects, fixtures, and test data that does not collide.',
      'Capture screenshots and traces on failure.',
      'Run Chromium in CI, and Firefox or WebKit when the application requires them.',
    ],
    deliverables: [
      'Playwright suite in Python or TypeScript',
      'Page objects for the agreed journeys',
      'CI job and an artifact retention note',
      'A list of flows that stay manual',
    ],
    technology: ['Playwright', 'Pytest or TypeScript', 'GitHub Actions'],
    engagement: 'A pilot of the highest-value journeys, then expansion by flow rather than by page count.',
    exclusions: [
      'Bypassing login or security controls on a site the client does not own',
      'Pixel-perfect visual testing of every screen unless that is scoped',
      'Mobile native automation',
    ],
    prerequisites: [
      'A test environment the suite is allowed to use',
      'Stable selectors or permission to add test ids',
      'Accounts that are not real customer accounts',
    ],
    graphic: 'brand/service-ui.jpg',
  },
  {
    slug: 'llm-evaluation',
    title: 'LLM application evaluation and regression',
    problem:
      'A model change ships because nobody has a repeatable set of questions, refusals, and structured-output checks.',
    scope: [
      'Define the behaviors that matter: grounding, refusal, schema, latency, and cost signals.',
      'Build a dataset with expected failures as well as expected answers.',
      'Score with explicit rules and label heuristics as heuristics.',
      'Compare two runs and fail CI when an agreed metric regresses.',
    ],
    deliverables: [
      'Evaluation runner',
      'Versioned dataset',
      'HTML and machine-readable reports',
      'A written limit for every metric',
    ],
    technology: ['Python', 'Pytest', 'JSON Schema', 'Optional OpenAI-compatible HTTP'],
    engagement: 'A first dataset and runner in one to two weeks. Live-model runs are a separate, budgeted step.',
    exclusions: [
      'A claim that the suite proves a model is safe or truthful',
      'Hidden calls to a paid API inside the default CI job',
      'Training or fine-tuning a model',
    ],
    prerequisites: [
      'Sample prompts and the answers the product is supposed to give or refuse',
      'If a live model is in scope, an API key supplied at runtime, not committed',
    ],
    graphic: 'brand/service-llm.jpg',
  },
  {
    slug: 'test-design',
    title: 'Requirements-to-test-case design workflow',
    problem:
      'Test design starts late, and generated cases are hard to review because they are not traced to acceptance criteria.',
    scope: [
      'Turn user stories into a reviewable case list.',
      'Separate extracted statements from inferred gaps.',
      'Export Excel, CSV, or JSON for the tool the team already uses.',
      'Keep a deterministic local mode so drafts do not require a model key.',
    ],
    deliverables: [
      'Working local application or a scripted generator',
      'Example stories and the cases they produce',
      'Export files and a reviewer checklist',
    ],
    technology: ['FastAPI', 'React', 'TypeScript', 'SQLite', 'Optional model APIs'],
    engagement: 'A workshop plus a small tool, or a tool-only build if the team already has the story format.',
    exclusions: [
      'Guaranteeing complete coverage from a heuristic parser',
      'Executing the generated cases unless automation is a separate service',
      'Publishing the tool on the internet without an authentication layer',
    ],
    prerequisites: [
      'Real, non-confidential sample stories, or synthetic stories that match the domain',
      'Agreement on case fields: priority, type, and requirement id',
    ],
    graphic: 'brand/service-cases.jpg',
  },
  {
    slug: 'cicd-testing',
    title: 'CI/CD test pipeline and execution reporting',
    problem:
      'Pipelines exist, but results are scattered, and a dashboard that can run any shell command is a security problem.',
    scope: [
      'Define an allowlist of suites and the arguments they accept.',
      'Publish JUnit from GitHub Actions or Azure DevOps into one report.',
      'Separate demo or seeded data from live runs.',
      'Add lint, test, secret scan, and dependency audit to the pipeline.',
    ],
    deliverables: [
      'Workflow or pipeline YAML',
      'A reporting view or export',
      'A short security note on what the runner is allowed to execute',
    ],
    technology: ['GitHub Actions', 'Azure DevOps', 'Pytest', 'Robot Framework', 'Playwright', 'FastAPI'],
    engagement: 'One pipeline family first. Extra products and environments are change requests.',
    exclusions: [
      'Admin access to the client production cloud account',
      'A general-purpose remote code execution service',
      'Fixing every flaky test in the existing suite unless that is listed',
    ],
    prerequisites: [
      'Repository access and permission to add workflows',
      'A non-production target for any test that needs a service',
    ],
    graphic: 'brand/service-cicd.jpg',
  },
  {
    slug: 'performance-testing',
    title: 'API performance profiles and threshold reporting',
    problem:
      'A single load number, without the profile or the error budget, cannot support a release decision.',
    scope: [
      'Choose endpoints, data, and a load shape that matches the question.',
      'Run Locust with caps so a test cannot be aimed at an unapproved host.',
      'Report throughput, percentiles, and a pass or fail per threshold.',
      'Include one run that is expected to fail, so the gate is shown to work.',
    ],
    deliverables: [
      'YAML profiles',
      'HTML and machine-readable reports',
      'A note on what the numbers do not prove',
    ],
    technology: ['Python', 'Locust', 'FastAPI', 'Docker when the client environment has it'],
    engagement: 'A baseline and one realistic scenario first. Soak tests longer than a few minutes need an isolated environment and a written window.',
    exclusions: [
      'Denial-of-service traffic against a host the client does not own',
      'Using a laptop result as a production capacity number',
      'Testing third-party APIs beyond their published rate limits',
    ],
    prerequisites: [
      'A staging target approved for load',
      'Rate limits, test data, and a rollback contact',
      'Agreement on the thresholds before the run',
    ],
    graphic: 'brand/service-perf.jpg',
  },
]

export function projectBySlug(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
