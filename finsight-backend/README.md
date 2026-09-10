Audit and clean up the existing ISQuest backend structure before adding Redis.

Inspect every controller, service, repository, entity, model/DTO and utility currently created.
Identify duplicate or overlapping files/classes, especially the separate Public Quiz implementation.
Do not create another architecture or duplicate domain entities.
Reuse existing Quiz, Question, Topic, User and Participant/session entities wherever functionality represents the same domain object.
Merge duplicate controllers/services/repositories when their responsibilities overlap.
Keep public quiz endpoints separate only where the API access/use case genuinely differs, while reusing the same underlying services and entities.
Remove obsolete classes, unused DTOs, duplicate configurations and dead code only after confirming they are no longer referenced.
Keep the existing API contracts and frontend functionality working.
Preserve security, quiz management, question bank, scheduling and participant functionality.
Keep the package structure simple: controller, service, repository, entity, model, config, exception, util.
Do not add Redis, new features or reports in this step.
