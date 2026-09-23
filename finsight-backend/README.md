Create 05_knowledge_graph_design.ipynb based on the findings from
02_pattern_discovery.ipynb, 03_pattern_validation.ipynb and
04_relationship_patterns.ipynb.

The goal is to DESIGN the Fraud Knowledge Graph before implementing it.

Define the proposed:
1. Node types and their properties.
2. Relationship types and their properties.
3. Transaction-level attributes to retain.
4. Account-level graph features discovered in notebook 04.
5. Validated fraud-related patterns from notebook 03 that can become
   graph attributes or derived features.
6. Which patterns should NOT be encoded as fraud rules because they
   showed weak evidence or high false-positive risk.

Create a clear schema/table showing:
entity, property, source column, meaning.

Create a relationship schema showing:
source node, relationship, target node, useful properties.

Include a final proposed graph schema diagram using a simple
NetworkX visualization or Mermaid-style representation.

Clearly distinguish:
- raw dataset attributes
- observed patterns
- derived graph features
- future model features

Do not build Neo4j yet.
Do not train XGBoost yet.
Do not claim that any graph feature is inherently a fraud indicator.
