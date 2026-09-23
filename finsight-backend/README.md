Create 04_relationship_patterns.ipynb to discover relationship-based
patterns in the PaySim dataset.

Load ../data/paysim.csv.

Treat nameOrig as the origin account and nameDest as the destination
account.

Analyze:

1. Number of unique destination accounts per origin account.
2. Number of unique origin accounts per destination account.
3. Total transaction count per origin account.
4. Total transaction count per destination account.
5. Repeated origin-destination relationships.
6. Compare account connectivity and transaction frequency between
   accounts involved in fraudulent transactions and other accounts.
7. Identify accounts connected to multiple fraudulent transactions.
8. Identify highly connected accounts and show their fraud involvement.
9. Calculate graph-like features such as:
   - outgoing transaction count
   - incoming transaction count
   - unique outgoing connections
   - unique incoming connections
   - total unique connections
   - fraud transaction count associated with the account

Use minimum sample-size thresholds where appropriate and avoid
overinterpreting accounts with very few transactions.

Create clear tables and a few useful visualizations.

Do not use Neo4j yet.
Do not train XGBoost yet.
The goal is to discover relationship patterns that could later
be represented in a Knowledge Graph.
