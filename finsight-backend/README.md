I want to build a very small beginner-friendly project as a precursor to my main project "Fraud Knowledge Graph".

The purpose is NOT to build a production fraud detector or ML model. I want to demonstrate that I understand the basic concepts of:
1. Creating structured transaction data
2. Recognizing patterns in the data
3. Validating those patterns
4. Modeling entities and relationships as a knowledge graph
5. Exploring the graph using NetworkX

IMPORTANT:
- Build the ENTIRE project in one go.
- Use Python + Jupyter Notebook.
- Do NOT use Neo4j.
- Use NetworkX for the knowledge graph.
- Do NOT use XGBoost, deep learning, or complex ML.
- Keep everything simple enough that I can explain every line to my mentor.
- Create the dataset ourselves; do not download an external dataset.
- The final notebook should run from top to bottom without requiring manual intervention.

PROJECT TITLE:
"Mini Fraud Knowledge Graph: Pattern Recognition with NetworkX"

PROJECT GOAL:
Create a small synthetic banking transaction dataset containing around 30–50 transactions and deliberately include a few understandable patterns such as:
- Normal accounts making occasional transactions
- One account sending money to multiple accounts
- One destination receiving money from multiple accounts
- A suspicious account performing multiple high-value transfers
- A simple balance-depletion pattern
- A small number of transactions labeled as fraudulent for validation

The patterns should be realistic but intentionally simple enough to understand.

NOTEBOOK STRUCTURE:

1. PROJECT INTRODUCTION
- Markdown explaining the objective
- Explain the difference between:
  Pattern Recognition → finding interesting behavior in data
  Knowledge Graph → representing entities and relationships
- Explain that this is a small learning prototype before a larger fraud knowledge graph project.

2. IMPORT LIBRARIES
Use only simple libraries:
- pandas
- numpy
- matplotlib
- networkx

3. CREATE SYNTHETIC DATASET
Create the dataset directly in Python and save it as:
data/mini_transactions.csv

Columns:
- transaction_id
- step
- type
- amount
- nameOrig
- oldbalanceOrg
- newbalanceOrig
- nameDest
- oldbalanceDest
- newbalanceDest
- isFraud

Use around 30–50 transactions.

Make sure the synthetic data contains deliberately designed patterns that we can later discover.

4. DATA EXPLORATION
Show:
- Dataset shape
- First 10 rows
- Transaction type counts
- Fraud vs non-fraud counts
- Basic amount statistics
- Fraud count by transaction type

Create 2–3 simple visualizations.

5. PATTERN DISCOVERY
Analyze the dataset and identify simple patterns such as:

A. High-value transactions
B. Fraud concentration by transaction type
C. Accounts involved in multiple transactions
D. Accounts sending money to multiple destinations
E. Destinations receiving money from multiple origins
F. Balance depletion:
   amount == oldbalanceOrg AND newbalanceOrig == 0

For each pattern, print a small result table.

IMPORTANT:
Do not claim that a pattern automatically means fraud.
Use wording such as:
"Observed pattern"
"Potentially suspicious behavior"
"Pattern associated with the synthetic fraud labels"

6. PATTERN VALIDATION
For the discovered patterns, calculate simple metrics where appropriate:
- Number of transactions matching the pattern
- Number of fraudulent transactions among them
- Fraud coverage
- False-positive count

Keep the calculations very simple and explain what they mean.

7. KNOWLEDGE GRAPH DESIGN
Before creating the graph, explain the graph model in Markdown.

Use this model:

Account
   |
   | INITIATED
   v
Transaction
   |
   | SENT_TO
   v
Account

Nodes:
- Account
- Transaction

Relationships:
- Account -> Transaction : INITIATED
- Transaction -> Account : SENT_TO

Transaction node properties:
- transaction_id
- amount
- type
- step
- isFraud

Account node properties can include:
- account_id
- account_type if useful

8. BUILD NETWORKX KNOWLEDGE GRAPH
Create a NetworkX directed graph.

Add:
- Account nodes
- Transaction nodes
- INITIATED edges
- SENT_TO edges

Print:
- Number of nodes
- Number of edges
- Number of account nodes
- Number of transaction nodes

9. GRAPH EXPLORATION
Use NetworkX to identify simple graph patterns:

- Accounts with the highest number of outgoing transactions
- Accounts connected to multiple destinations
- Destinations receiving transactions from multiple origins
- Accounts connected to fraudulent transactions
- Highly connected accounts

Keep this simple.

10. GRAPH VISUALIZATION
Create a clean NetworkX visualization.

Use different visual treatment for:
- Account nodes
- Transaction nodes
- Fraudulent transaction nodes

Add a legend.

Because the graph is small, make the visualization readable and suitable for showing a mentor.

Also create one focused subgraph containing the suspicious/fraud-related accounts and transactions so the important pattern is easy to see.

11. FINAL PATTERN SUMMARY
Create a final dataframe like:

Pattern | Observation | Why it matters

Examples:
- High-value transfers
- Multiple destinations from one account
- Multiple origins to one destination
- Balance depletion
- Fraud-connected accounts

Do NOT rank the patterns.

12. FINAL CONCLUSION
Add a concise Markdown section explaining:

"What I learned"

Include:
- How structured transaction data can reveal behavioral patterns
- How relationships between accounts can be represented as a graph
- How NetworkX can be used to construct and explore a simple knowledge graph
- Why graph relationships can provide additional context beyond individual transaction rows
- How this prototype can later be extended to a larger fraud knowledge graph using a real dataset and Neo4j

13. PROJECT OUTPUTS
At the end, make sure the project contains:

mini-fraud-knowledge-graph/
│
├── data/
│   └── mini_transactions.csv
│
└── mini_fraud_knowledge_graph.ipynb

Do not create unnecessary files.

IMPORTANT IMPLEMENTATION RULES:
- Use clean, beginner-readable Python.
- Add Markdown explanations before every major section.
- Do not hide important logic inside complicated functions.
- Avoid excessive abstraction.
- Avoid unnecessary libraries.
- Do not use external datasets.
- Do not use Neo4j.
- Do not use machine learning.
- Do not make the dataset unrealistically large.
- Make the synthetic dataset intentionally contain a few patterns so the analysis has meaningful results.
- Ensure every cell executes successfully from top to bottom.
- At the end, provide a short explanation of how I can explain this project to my mentor in 2–3 minutes.

Generate the complete notebook code and all required project structure in one go.
