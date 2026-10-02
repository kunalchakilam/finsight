You are helping me build a Knowledge Graph project for customer behavior analysis in the credit-card domain.

IMPORTANT:
This chat will be used to understand the project, plan the architecture, and generate implementation prompts. Do not jump directly into ML or predictive modeling. Our CURRENT goal is only to analyze one customer's data and build a rich Knowledge Graph in Neo4j.

==================================================
NEW PROJECT DIRECTION
==================================================

We have access to customer-level credit-card data containing information such as:

- Customer information
- Different credit cards owned by the customer
- Credit limits
- Card utilization
- Billing cycles
- Statements/bills
- Payments
- Payment behavior
- Transactions/spending
- Categories/merchant information where available
- Delinquency/payment status
- Disputes
- Other available customer/card attributes

We want to understand how a Knowledge Graph can represent the customer's complete financial behavior and relationships.

The long-term objective is to build a Customer 360 Knowledge Graph that can support multiple future use cases.

One example use case is Credit Limit Increase:

Suppose a customer has consistently paid their credit-card bills on time from January to October. November and December are festive seasons, and the customer may have increased spending needs.

Instead of waiting several days for a traditional process, we want to eventually use the customer's historical behavior and relationships to identify customers who may be suitable for proactive offers such as:

"We've noticed that you've been a loyal customer with consistent payment behavior. For the upcoming festive season, would you like to increase your credit limit?"

This is ONLY an example use case.

The same Knowledge Graph should eventually support multiple customer-behavior use cases.

==================================================
CURRENT GOAL
==================================================

For NOW:

NO ML.
NO XGBoost.
NO prediction.
NO credit-limit decision model.

Our only objective is:

ONE CUSTOMER DATA
        ↓
Data Analysis
        ↓
Identify Entities
        ↓
Identify Relationships
        ↓
Design Rich Knowledge Graph
        ↓
Build Graph in Neo4j
        ↓
Explore Customer Behavior Through Graph

We will first prove the concept with ONE CUSTOMER.

Once the graph structure is correct, we will scale it to many customers.

==================================================
GRAPH OBJECTIVE
==================================================

We want the graph to capture as much meaningful information as possible.

Do NOT simply create:

Customer → Card

Instead, identify the maximum number of meaningful entities that actually exist in the data.

Potential entities may include:

Customer
Card
Account
CreditLimit
BillingCycle
Statement
Payment
Transaction
Merchant
MerchantCategory
SpendingCategory
PaymentStatus
Dispute
DisputeType
Date
Month
Year
Location
Channel
Reward
etc.

ONLY create entities when the actual dataset supports them.

Do not invent data just to increase the number of nodes.

==================================================
POTENTIAL RELATIONSHIPS
==================================================

Examples:

Customer → OWNS → Card

Customer → HAS_ACCOUNT → Account

Card → HAS_CREDIT_LIMIT → CreditLimit

Card → HAS_BILLING_CYCLE → BillingCycle

BillingCycle → HAS_STATEMENT → Statement

Statement → HAS_AMOUNT → BillAmount

Customer → MADE_PAYMENT → Payment

Payment → APPLIED_TO → Statement

Customer → MADE_TRANSACTION → Transaction

Transaction → MADE_ON_CARD → Card

Transaction → AT_MERCHANT → Merchant

Merchant → BELONGS_TO → MerchantCategory

Transaction → BELONGS_TO → SpendingCategory

Customer → RAISED → Dispute

Dispute → RELATED_TO → Transaction

BillingCycle → OCCURRED_IN → Month

Payment → HAS_STATUS → PaymentStatus

These are examples only.

The actual graph schema must be derived from the available dataset.

==================================================
CUSTOMER BEHAVIOR
==================================================

The graph should allow us to understand things such as:

- How many cards the customer owns
- Which cards are used most
- Credit limit for each card
- Utilization of each card
- Monthly spending behavior
- Billing history
- Payment history
- Whether payments are on time
- Payment consistency
- Spending trends
- Changes in utilization
- High/low spending periods
- Disputes
- Relationships between spending and payments
- Relationships between cards and spending categories
- Historical customer behavior

The goal is to move from:

"Customer has many columns"

to:

"Customer has a network of financial entities and behavioral relationships."

==================================================
IMPORTANT PRINCIPLE
==================================================

We want HIGH GRANULARITY, but NOT meaningless complexity.

Prefer:

Customer
  ↓
Card
  ↓
Billing Cycle
  ↓
Statement
  ↓
Payment

and:

Customer
  ↓
Card
  ↓
Transaction
  ↓
Merchant
  ↓
Category

when the data supports these relationships.

Every node and relationship should have a clear business meaning.

==================================================
TECHNOLOGY
==================================================

Python
Pandas
Jupyter Notebook
Neo4j
Neo4j Python Driver

Neo4j is already installed and configured.

The graph will ultimately be stored in Neo4j.

==================================================
PROJECT PHASES
==================================================

Phase 1:
Analyze the single customer's dataset and understand every available field.

Phase 2:
Identify entities, attributes and relationships.

Phase 3:
Design the Customer 360 Knowledge Graph schema.

Phase 4:
Transform the customer data into graph-compatible entities and relationships.

Phase 5:
Load the graph into Neo4j.

Phase 6:
Explore the graph using Cypher and identify customer behavior patterns.

Phase 7:
Validate whether the graph correctly represents the customer's financial history.

Phase 8:
Scale the same graph model to multiple customers.

Phase 9:
Only AFTER the graph is established, introduce ML and use cases such as CLI decisioning, proactive offers, customer behavior analysis, etc.

==================================================
CURRENT TASK
==================================================

We currently have data for ONE CUSTOMER.

Before creating any Neo4j nodes, analyze the dataset carefully.

We need to understand:

- What files/data are available
- Every column
- Data types
- Number of records
- Date/time information
- Customer identifiers
- Card identifiers
- Account identifiers
- Billing information
- Payment information
- Transaction information
- Merchant/category information
- Dispute information
- Any other useful fields

Then propose the maximum meaningful set of entities and relationships that can actually be derived from the data.

Do NOT invent missing information.

Do NOT start ML.

Do NOT create a simplistic graph.

The first implementation task should focus ONLY on understanding and profiling the single customer's data and preparing the proposed graph schema.

After that, we will implement the graph step-by-step in Neo4j.
