Create 03_pattern_validation.ipynb for validating the candidate fraud
patterns discovered in 02_pattern_discovery.ipynb.

Load ../data/paysim.csv.

Validate these patterns:

1. Transaction type:
   Calculate fraud rate by type with transaction counts and flag
   groups with very small sample sizes.

2. Amount:
   Compare fraud vs non-fraud amount distributions using median,
   quartiles and suitable visualizations. Avoid relying only on mean.

3. Balance depletion:
   Analyze amount == oldbalanceOrg, newbalanceOrig == 0, and
   amount == oldbalanceOrg AND newbalanceOrig == 0.
   Show confusion-matrix-style counts and percentages.

4. For each balance pattern, calculate:
   precision, recall, false-positive count and false-positive rate
   when the pattern is treated as a simple fraud rule.

5. Analyze whether the strong balance patterns are concentrated
   specifically in TRANSFER and CASH_OUT transactions.

6. Analyze transaction frequency by step only for steps having
   at least 100 transactions. Do not interpret tiny groups.

7. Analyze origin-account transaction frequency, but distinguish
   between accounts and transactions.

8. Create a summary table with:
   pattern_name, fraud_coverage, false_positive_rate,
   sample_size, and interpretation.

Do not train XGBoost yet and do not create a Knowledge Graph.
Clearly distinguish observed association from a general fraud rule.
