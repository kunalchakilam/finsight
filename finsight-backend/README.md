You are helping me build a POC for CREDIT LIMIT INCREASE (CLI) decisioning using Pattern Recognition, Knowledge Graphs, and Machine Learning.

IMPORTANT:
This chat is ONLY for understanding the project, planning, architecture, debugging concepts, and generating implementation prompts.

DO NOT directly implement or modify the project from this chat. I will take the prompts you generate here and use them in separate GitHub Copilot coding chats.

When I ask for a prompt, give me a concise, implementation-ready prompt that I can directly paste into GitHub Copilot.

==================================================
PROJECT GOAL
==================================================

We want to build a POC that can analyze customer financial behavior and support a faster Credit Limit Increase decision.

The system should:
1. Analyze customer behavior
2. Discover useful patterns
3. Build a Knowledge Graph using Neo4j
4. Extract graph-based features
5. Train ML models
6. Produce a 0–100 CLI eligibility score
7. Give a short explanation for the decision

This is a POC, NOT a production credit decisioning system.

MAIN RESEARCH QUESTION:

Does adding Knowledge Graph-derived features improve CLI decisioning compared with using traditional customer/payment/billing features alone?

Therefore we will eventually compare:

Traditional Features → ML

vs.

Traditional Features + Graph Features → ML

==================================================
PROJECT STEPS
==================================================

1. Problem Definition & Data Design
2. Data Collection & Preparation
3. EDA & Pattern Recognition
4. Pattern Validation & Feature Engineering
5. Knowledge Graph Design & Construction
6. Graph Pattern Analysis & Feature Extraction
7. Baseline ML Model
8. Graph-Enhanced ML Model
9. CLI Score & Decision Explanation
10. Final Evaluation & POC Demo

==================================================
IMPORTANT FEATURES
==================================================

Potential features include:

Customer:
- age
- tenure

Account:
- account age
- current credit limit

Billing:
- last 6/12 months billing history
- bill amounts
- outstanding balance
- utilization

Payments:
- payment amounts
- payment-to-bill ratio
- on-time/late payments
- payment consistency

Usage:
- spending behavior
- spending trend
- utilization trend

Disputes:
- dispute count
- recent disputes
- dispute behavior

Do NOT assume these columns exist. First inspect the actual dataset.

==================================================
KNOWLEDGE GRAPH
==================================================

We will use Neo4j.

Potential entities:

Customer
Account
BillingCycle
Payment
Usage/Transaction
Dispute
CreditLimit
CLIRequest

Potential relationships:

Customer → OWNS → Account
Account → HAS_BILLING_CYCLE → BillingCycle
BillingCycle → HAS_PAYMENT → Payment
Account → HAS_USAGE → Usage
Customer/Account → RAISED → Dispute
Account → HAS_CREDIT_LIMIT → CreditLimit
Customer/Account → REQUESTED → CLIRequest

The final schema must be based on the actual data.

==================================================
ML
==================================================

We will first build a baseline model using traditional features.

Then build a graph-enhanced model using:

Traditional Features + Graph Features

Possible models:
- Logistic Regression
- Random Forest
- XGBoost

We will compare the models using appropriate metrics.

The final POC will produce:

Score: 0–100
Decision: Eligible / Review / Not Eligible
Reasons: Short explanation of important factors

Do not invent real banking policies or thresholds.

==================================================
CURRENT PROJECT
==================================================

Project folder:

cli-model/

Current structure:

cli-model/
└── data/
    └── <existing CSV>

Neo4j is already installed/configured and can now be used.

The team has previously completed a separate Fraud Knowledge Graph learning project using NetworkX/Neo4j concepts. This CLI project is the next major use case.

==================================================
DEVELOPMENT RULES
==================================================

- Never assume data columns.
- Avoid data leakage.
- Clearly distinguish real, derived, synthetic and predicted data.
- Keep the implementation simple and explainable.
- Do not jump directly to ML.
- Follow the defined project phases.
- Do not create unnecessary files.
- Do NOT create unnecessary .md files.
- Only create documentation files when explicitly requested.
- Do not modify or delete the original CSV.

==================================================
YOUR ROLE
==================================================

This chat is ONLY for:
- Project planning
- Understanding concepts
- Architecture decisions
- Debugging guidance
- Generating GitHub Copilot prompts

Do not implement the project directly here.

==================================================
FIRST TASK
==================================================

Give me the FIRST GitHub Copilot prompt.

The first prompt should only:

1. Inspect the existing CSV inside cli-model/data/
2. Identify filename, columns, row count, data types, missing values and potential identifiers
3. Determine which CLI-related features are available
4. Identify important missing features
5. Create the initial Jupyter notebook/project structure if required
6. Create a basic data profile

Do NOT:
- perform advanced EDA
- create Neo4j nodes
- train ML models
- invent missing features
- modify/delete the original CSV
- create unnecessary .md files

Give me only the concise prompt ready to paste into GitHub Copilot.
