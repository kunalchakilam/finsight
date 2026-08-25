Analyze my current Spring Boot project and list the important Spring Boot/Java backend concepts, annotations, frameworks, libraries, and design patterns actually used in the code.
For each concept, give 2–3 simple, PPT-friendly lines explaining what it is and how we used it in the project. Mention why we used it only where relevant (e.g., Spring Data JPA for database operations, Spring Security for authentication/authorization, DTOs for transferring data between layers).
Include concepts such as Spring Boot, REST APIs, Controllers, Services, Repositories, Dependency Injection, Spring Data JPA, Entity classes, DTOs, CRUD operations, HTTP methods, request/response handling, exception handling, validation, annotations, database connectivity, authentication/authorization, Spring Security, JWT, configuration/application.properties, Lombok, Maven/Gradle, relationships (@OneToMany, @ManyToOne, etc.), streams/lambdas, and layered architecture, only if they are actually present in the project.
Do not assume or add concepts that are not actually used in the code.
Keep it concise, simple, and focused only on the Spring Boot/Java backend side. Don't create slides or a PPT—just give me the content/information.
Format each concept like:
1. Spring Data JPA
Used to interact with the database through Java objects and repositories.
We used it for performing database operations such as saving, fetching, updating, and deleting records.
2. Dependency Injection
Allows Spring to provide required objects/dependencies automatically.
We used constructor/@Autowired injection to connect controllers, services, and repositories.
