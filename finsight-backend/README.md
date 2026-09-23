I want you to build the ENTIRE project in one go as a single Jupyter Notebook project.

PROJECT TITLE:
"Mini E-Commerce Knowledge Graph: Customer-Product Relationships with NetworkX"

PURPOSE:
This is a small learning/prototype project before I build a larger Knowledge Graph project in the fraud domain.

I want to demonstrate that I understand:
1. Creating structured data
2. Discovering behavioral patterns
3. Identifying relationships between entities
4. Modeling those relationships as a Knowledge Graph
5. Exploring the graph using NetworkX
6. Using graph relationships to derive a very simple recommendation insight

IMPORTANT:
- Build everything in ONE GO.
- Use Python + Jupyter Notebook.
- Use pandas, numpy, matplotlib and networkx only.
- Do NOT use Neo4j.
- Do NOT use machine learning.
- Do NOT use external datasets.
- Generate the synthetic shopping data ourselves.
- Dataset must contain at least 200–500 interaction rows; target around 400–500 rows.
- Use a fixed random seed so results are reproducible.
- Make the synthetic data realistic and intentionally contain meaningful patterns.
- Every notebook cell must run successfully from top to bottom.
- Keep code beginner-readable because I need to explain it to my mentor.
- Do not over-engineer or hide important logic in complex functions.

DOMAIN:
Small e-commerce/shopping application.

ENTITIES:
- Customers: around 30–40
- Products: around 30–40
- Categories: around 8–10
- Interaction rows: around 400–500

PRODUCT CATEGORIES:
Use realistic categories such as:
Electronics, Fashion, Home, Beauty, Sports, Books, Grocery, Accessories.

PRODUCTS:
Create realistic product names and assign each product to a category.

CUSTOMER BEHAVIOR:
Generate interaction data containing:
- VIEWED
- PURCHASED
- RATED

The main interaction dataset should contain approximately 400–500 rows.

Use columns such as:
interaction_id
customer_id
product_id
interaction_type
timestamp
rating

For VIEWED/PURCHASED interactions, rating can be empty/null.
For RATED interactions, use ratings from 1–5.

IMPORTANT DATA DESIGN:
Do NOT generate completely random independent data.

Intentionally create behavioral patterns, for example:
- Some products are much more popular than others.
- Certain products are frequently purchased together.
- Some customers have similar shopping behavior.
- Certain categories are more popular.
- Some products receive many views but relatively few purchases.
- Some products have high purchase rates after being viewed.
- Some customers repeatedly interact with products from a particular category.

Make these patterns discoverable from the data.

PROJECT STRUCTURE:

mini-ecommerce-knowledge-graph/
│
├── data/
│   ├── customers.csv
│   ├── products.csv
│   └── interactions.csv
│
└── mini_ecommerce_knowledge_graph.ipynb

NOTEBOOK SECTIONS:

==================================================
1. PROJECT INTRODUCTION
==================================================

Use Markdown to explain:

- What this project is.
- What pattern recognition means in this context.
- What a Knowledge Graph is.
- Why relationships between customers and products can provide additional insight compared with a normal table.
- Explain that this is a small synthetic prototype.

Show the intended flow:

Shopping Data
      ↓
Pattern Discovery
      ↓
Relationship Discovery
      ↓
Knowledge Graph
      ↓
Graph Exploration
      ↓
Simple Recommendation Insight


==================================================
2. IMPORT LIBRARIES
==================================================

Use only:

pandas
numpy
matplotlib
networkx

Set a fixed random seed.


==================================================
3. CREATE SYNTHETIC DATASET
==================================================

Generate:

customers.csv
products.csv
interactions.csv

Create approximately:
- 30–40 customers
- 30–40 products
- 8–10 categories
- 400–500 interactions

Display the first 10 rows of each dataset.

Print:
- Number of customers
- Number of products
- Number of categories
- Number of interactions


==================================================
4. DATA EXPLORATION
==================================================

Analyze:

- Interaction type distribution
- Product popularity
- Category popularity
- Customer activity
- Purchase distribution
- Rating distribution

Create 3–4 simple visualizations:

1. Interactions by type
2. Top products by number of interactions
3. Purchases by category
4. Rating distribution

Keep visualizations clean and readable.


==================================================
5. PATTERN DISCOVERY
==================================================

Discover and display tables for:

PATTERN 1:
Most interacted-with products.

PATTERN 2:
Most purchased products.

PATTERN 3:
Most popular product categories.

PATTERN 4:
Customers with the highest number of interactions.

PATTERN 5:
Products with many views but relatively fewer purchases.

PATTERN 6:
Products frequently purchased together.

PATTERN 7:
Customers with similar product/category behavior.

For every pattern:
- Show the underlying counts.
- Clearly label it as an "Observed Pattern".
- Do not make unsupported claims.


==================================================
6. SIMPLE PURCHASE-CONVERSION ANALYSIS
==================================================

For every product calculate:

views
purchases
purchase_rate

where:

purchase_rate = purchases / views

Handle zero-view products safely.

Show:
- Products with high views
- Products with high purchase rates
- Products with many views but lower purchase rates

Explain that this is descriptive analysis of the synthetic data, not a predictive model.


==================================================
7. PRODUCT CO-PURCHASE PATTERNS
==================================================

Identify products that are frequently purchased by the same customers.

For each customer:
- collect purchased products
- generate product pairs

Calculate pair frequency.

Create a table:

Product A | Product B | Customers Purchasing Both

Show the most frequent pairs.

Explain that these are observed co-purchase relationships.


==================================================
8. CUSTOMER SIMILARITY
==================================================

Create a very simple customer similarity analysis.

Use purchased products as the basis.

For each pair of customers, calculate a simple similarity measure such as Jaccard similarity:

intersection of purchased products /
union of purchased products

Show a small table containing:

Customer A
Customer B
Shared Products
Similarity

Only show meaningful pairs with similarity > 0.

Do NOT use machine learning.


==================================================
9. KNOWLEDGE GRAPH DESIGN
==================================================

Before building the graph, explain the graph model.

Use these entities:

Customer
Product
Category

Relationships:

Customer ──VIEWED──> Product

Customer ──PURCHASED──> Product

Customer ──RATED──> Product

Product ──BELONGS_TO──> Category

Product ──SIMILAR_TO──> Product

Only create SIMILAR_TO relationships from the observed product relationships/co-purchase analysis, not randomly.

Explain why the graph represents relationships that are difficult to see directly in a flat table.


==================================================
10. BUILD NETWORKX KNOWLEDGE GRAPH
==================================================

Create a directed NetworkX graph.

Add:

Customer nodes
Product nodes
Category nodes

Add edges:

VIEWED
PURCHASED
RATED
BELONGS_TO
SIMILAR_TO

Store useful properties such as:

Customer:
customer_id

Product:
product_id
product_name
category

Category:
category_name

Interaction edges:
interaction_type
timestamp
rating where applicable

Print:

- Total nodes
- Total edges
- Customer node count
- Product node count
- Category node count
- Number of VIEWED edges
- Number of PURCHASED edges
- Number of RATED edges
- Number of SIMILAR_TO edges


==================================================
11. GRAPH EXPLORATION
==================================================

Use NetworkX to answer:

1. Which products have the most customer connections?

2. Which products have the most PURCHASED relationships?

3. Which categories are connected to the most products?

4. Which customers have the most product relationships?

5. Which products have the highest number of SIMILAR_TO relationships?

6. Which customers are connected to products that are frequently purchased together?


==================================================
12. SIMPLE GRAPH-BASED RECOMMENDATION
==================================================

Create ONE simple recommendation demonstration.

For a selected customer:

Customer
   ↓
PURCHASED
   ↓
Product A
   ↓
Other customers
   ↓
PURCHASED
   ↓
Product B

Use graph relationships to find products purchased by other customers who also purchased products of the selected customer.

Recommend products based purely on observed graph relationships.

IMPORTANT:
Call these:

"Potential related products"

NOT:

"Guaranteed recommendations"

Show the reasoning path, for example:

Customer C01
→ PURCHASED → Laptop
→ Other customers also purchased → Mouse

Therefore:

Potential related product: Mouse


==================================================
13. GRAPH VISUALIZATION
==================================================

Create a clean NetworkX visualization.

Use visually different node styles for:

Customer
Product
Category

Use different edge styles/colors for:

VIEWED
PURCHASED
RATED
BELONGS_TO
SIMILAR_TO

Add a legend.

Because the complete graph may be crowded, ALSO create a focused subgraph around one selected customer and their connected products/categories.

The focused graph should be easy to understand and suitable for showing a mentor.


==================================================
14. FINAL PATTERN SUMMARY
==================================================

Create a dataframe:

Pattern | Evidence | Knowledge Graph Interpretation

Include approximately 5–7 observed patterns.

Examples:

Popular product
Frequent co-purchase
Highly active customer
Popular category
High-view/low-purchase product
Similar customers
Product relationship

Do not rank the patterns.


==================================================
15. WHAT I LEARNED
==================================================

Create a Markdown section explaining:

- How patterns can be discovered from structured shopping data.
- How customers, products and categories become graph entities.
- How interactions become relationships.
- How NetworkX can represent the knowledge graph.
- How graph traversal reveals relationships that are less obvious in a flat table.
- How simple graph relationships can support recommendation-style insights.
- Why a graph database such as Neo4j could later be useful for scaling this concept.


==================================================
16. CONNECTION TO MY MAIN PROJECT
==================================================

Add a short Markdown section explaining:

"This project is a small domain-independent prototype for understanding Knowledge Graph concepts."

Explain that the same workflow can later be applied to a completely different domain:

Synthetic Shopping Data
→ Pattern Recognition
→ Relationship Modeling
→ NetworkX Knowledge Graph

and later:

Real Financial Data
→ Fraud Pattern Recognition
→ Account/Transaction Relationships
→ Neo4j Knowledge Graph

Do NOT implement the fraud project here.


==================================================
17. FINAL MENTOR EXPLANATION
==================================================

At the end provide a concise 2–3 minute explanation I can give to my mentor.

It should explain:

- Why I built this project
- How I generated the data
- What patterns I discovered
- How I converted the relationships into a graph
- What NetworkX helped me understand
- How the simple recommendation example works
- How this prepares me for a larger Knowledge Graph implementation

FINAL REQUIREMENT:

Generate the complete project in ONE GO.

Do not stop after creating the dataset.
Do not ask me what section to build next.
Do not leave TODOs or placeholders.
Provide all Python code and Markdown content required for the notebook.
Make sure the notebook executes from top to bottom successfully.
