Create 06_build_fraud_knowledge_graph.ipynb using the schema
defined in 05_knowledge_graph_design.ipynb.

Load ../data/paysim.csv and build the Fraud Knowledge Graph using
NetworkX.

Requirements:

1. Create ACCOUNT nodes for nameOrig and nameDest.
2. Create TRANSACTION nodes with:
   step, type, amount, oldbalanceOrg, newbalanceOrig,
   oldbalanceDest, newbalanceDest, isFraud and isFlaggedFraud.
3. Create relationships:
   ACCOUNT --INITIATED--> TRANSACTION
   TRANSACTION --SENT_TO--> ACCOUNT
4. Add useful account-level graph features:
   outgoing_transaction_count,
   incoming_transaction_count,
   unique_outgoing_connections,
   unique_incoming_connections,
   total_unique_connections,
   fraud_transaction_count,
   fraud_involved.
5. Add validated balance-pattern indicators to transactions:
   amount_equals_oldbalanceOrg,
   newbalanceOrig_is_zero,
   complete_balance_depletion.
6. Preserve transaction type and amount because they are important
   attributes identified during pattern validation.
7. Do not convert observed patterns into automatic fraud rules.
8. Validate the graph by reporting:
   number of account nodes,
   number of transaction nodes,
   number of INITIATED relationships,
   number of SENT_TO relationships,
   number of fraud transactions,
   number of fraud-involved accounts.
9. Display a small sample of nodes and relationships.
10. Create a simple visualization of a small sampled subgraph.
11. Save/export the graph in a format that can later be imported
    into Neo4j, preferably GraphML or separate node/edge CSV files.

The full PaySim dataset is large, so avoid attempting to visualize
the entire graph. Use a small representative sample only for
visualization.

Do not train XGBoost yet.
Do not perform predictive modeling.
Do not claim that graph connectivity itself indicates fraud.
