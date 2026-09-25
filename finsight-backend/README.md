Credit Limit Increase — POC Roadmap
1. Problem Definition & Data Design

Define the CLI problem, expected decision, target variable, required customer features, and design the overall dataset structure.

Outcome: Clear problem statement + data schema.

2. Data Collection & Preparation

Collect the available dataset, create/augment missing POC data if required, clean it, and integrate customer, account, billing, payment, usage, and dispute information.

Outcome: Clean master dataset ready for analysis.

3. EDA & Pattern Recognition

Analyze customer behavior across age, account age, limits, utilization, billing cycles, payments, spending, delays, and disputes to identify meaningful patterns.

Outcome: Important behavioral patterns and initial candidate features.

4. Pattern Validation & Feature Engineering

Validate the discovered patterns statistically/descriptively and convert useful behaviors into well-defined features.

Outcome: Final traditional feature set with evidence supporting the selected features.

5. Knowledge Graph Design & Construction

Design and build the graph connecting Customer, Account, Billing Cycle, Payment, Usage, Dispute, Credit Limit, etc.

Outcome: Working Knowledge Graph representing customer financial behavior.

6. Graph Pattern Analysis & Feature Extraction

Explore the graph for relationship-based patterns and convert useful graph relationships into ML-ready numerical features.

Outcome: Graph-derived feature dataset.

7. Baseline ML Model

Train ML models using only traditional customer/billing/payment/usage features.

Outcome: Baseline CLI prediction model + evaluation metrics.

8. Graph-Enhanced ML Model

Combine traditional features with graph-derived features and train/evaluate the enhanced model against the baseline.

Outcome: Comparison showing whether Knowledge Graph features improve the model.

9. CLI Score & Decision Explanation

Convert the model output into a 0–100 score, define decision bands, and generate a short explanation of the major factors behind each decision.

Outcome: Example:

Score: 86/100
Decision: Eligible

Why:
✓ Consistent payment history
✓ Healthy utilization
✓ Stable spending
✓ Low recent delinquency
10. Final Evaluation & POC Demo

Test the complete pipeline on different customer scenarios, evaluate errors/risk, and demonstrate the end-to-end process.

Outcome: Complete CLI POC:

Customer Data
     ↓
Pattern Recognition
     ↓
Knowledge Graph
     ↓
Graph Features
     ↓
ML Model
     ↓
0–100 Score
     ↓
Decision + Explanation
