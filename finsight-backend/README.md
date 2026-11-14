Project: Credit Card Servicing System – Spring Boot Microservices

1. Your Role

Act as a Senior Java Backend Engineer, Spring Boot Microservices Architect and Technical Mentor.

I am a Java and Spring Boot learner currently working in a credit-card servicing application environment. I want to learn microservices architecture practically by designing and implementing a realistic enterprise-level backend application.

Do not simply generate code. Teach me the concepts, explain architectural decisions, help me understand the code and guide me through the implementation as a mentor would.

I want to understand both:

1. The theoretical concepts behind microservices and distributed systems.
2. How to implement those concepts using Java, Spring Boot and related technologies.

2. Project Objective

Build a Credit Card Servicing System using Microservices Architecture.

The application represents a backend system used by customer service agents to handle credit-card customer complaints and servicing requests.

For example:

- A customer made a credit card payment, but it is not reflected in their account.
- A payment was incorrectly applied to another credit card account.
- A customer was charged twice for the same payment.
- A payment amount was incorrectly recorded.
- A customer wants to raise a payment-related dispute and track its status.

The system should allow customer information, credit card accounts, payments, disputes and notifications to be managed through independent microservices.

This is strictly a BACKEND-ONLY project.

Explicit restrictions

- No frontend development.
- No React or Angular.
- No cloud deployment.
- No Docker or Kubernetes initially.
- No external payment gateway integration.
- No actual email or SMS provider integration.
- No shared database across microservices.
- All applications must run locally from IntelliJ IDEA.
- Use local MySQL databases.

Use Postman or curl for API testing.

3. Technology Stack

Use the following technologies:

- Java 21
- Spring Boot 3.x, using a stable release compatible with Java 21
- Maven
- Spring Web
- Spring Data JPA
- Hibernate
- MySQL
- Spring Boot Validation
- Spring Cloud
- Spring Cloud Netflix Eureka
- Spring Cloud OpenFeign
- Spring Cloud Gateway
- Spring Cloud LoadBalancer
- Lombok
- Spring Boot Actuator
- JUnit 5
- Mockito
- Spring Boot Test

Use compatible Spring Boot and Spring Cloud versions.

Import the appropriate Spring Cloud BOM in each relevant Maven project. Do not manually mix incompatible dependency versions.

For service-to-service communication, primarily use OpenFeign. Explain how it differs from RestClient and WebClient.

4. Project Architecture

I have already created a parent directory named:

CreditCardServicing

Inside it, I have created seven independent Maven Spring Boot projects:

1. customer-service
2. account-service
3. payment-service
4. dispute-service
5. notification-service
6. service-registry
7. api-gateway

Each must remain an independent Maven project with its own pom.xml, application class, application.properties, source code and configuration.

Do not convert them into one single Spring Boot application or one shared Maven module.

Use these application ports:

Application| Port
API Gateway| 8080
Customer Service| 8081
Account Service| 8082
Payment Service| 8083
Dispute Service| 8084
Notification Service| 8085
Eureka Service Registry| 8761

Each business microservice must have its own database:

- customer_db
- account_db
- payment_db
- dispute_db
- notification_db

All databases will run on my locally installed MySQL server.

Use separate database configurations for each application.

5. Microservice Responsibilities

A. Customer Service

Responsibilities:

- Register customers.
- Retrieve customer details.
- Update customer information.
- Search customers by ID or email.
- Verify whether a customer exists.

Suggested fields:

- customerId
- firstName
- lastName
- email
- phoneNumber
- createdAt
- updatedAt

APIs:

- POST /api/customers
- GET /api/customers/{customerId}
- GET /api/customers
- PUT /api/customers/{customerId}
- GET /internal/customers/{customerId}/exists

This service owns customer_db.

B. Account Service

Responsibilities:

- Create credit card accounts.
- Retrieve account information.
- Retrieve all accounts belonging to a customer.
- Update account status.
- Maintain credit limit and outstanding balance.
- Verify whether an account belongs to a particular customer.

Suggested fields:

- accountId
- customerId
- maskedCardNumber
- cardType
- creditLimit
- outstandingBalance
- availableCredit
- accountStatus
- createdAt

Possible account statuses:

- ACTIVE
- BLOCKED
- CLOSED

APIs:

- POST /api/accounts
- GET /api/accounts/{accountId}
- GET /api/accounts/customer/{customerId}
- PATCH /api/accounts/{accountId}/status
- GET /internal/accounts/{accountId}/customer/{customerId}/validate

Account Service must communicate with Customer Service to validate customers before creating accounts.

This service owns account_db.

C. Payment Service

Responsibilities:

- Record credit card payments.
- Retrieve payment details.
- Retrieve payments by customer or account.
- Maintain payment transaction history.
- Track payment status.
- Simulate successful and failed payments.
- Support investigation of missing, duplicate and incorrectly applied payments.

Suggested fields:

- paymentId
- customerId
- intendedAccountId
- appliedAccountId
- paymentReference
- paymentAmount
- paymentDate
- paymentMethod
- paymentStatus
- createdAt

Payment statuses:

- INITIATED
- PROCESSING
- SUCCESSFUL
- FAILED
- REVERSED

Important business requirement:

Support intentionally incorrect sample payment records so that dispute scenarios can be demonstrated.

For example:

- Intended account: 1001
- Applied account: 1002

This represents a misapplied payment.

Allow multiple payment records to have the same external payment reference so that duplicate payment scenarios can be investigated. Each record must still have its own unique payment ID.

APIs:

- POST /api/payments
- GET /api/payments/{paymentId}
- GET /api/payments/reference/{reference}
- GET /api/payments/account/{accountId}
- GET /api/payments/customer/{customerId}

Payment Service must communicate with Account Service to validate the account before recording a payment.

This service owns payment_db.

D. Dispute Service – Main Business Microservice

This is the most important microservice in this project.

It manages credit-card payment disputes raised by customers or customer service agents.

Supported dispute categories:

1. MISSING_PAYMENT
2. MISAPPLIED_PAYMENT
3. DUPLICATE_PAYMENT
4. INCORRECT_PAYMENT_AMOUNT
5. PAYMENT_NOT_REFLECTED

Responsibilities:

- Create dispute cases.
- Generate unique dispute reference numbers.
- Validate customer information.
- Validate account ownership.
- Retrieve relevant payment information.
- Investigate payment-related complaints.
- Assign disputes to servicing agents.
- Update dispute status.
- Maintain dispute status history.
- Retrieve disputes by customer, account, category or status.
- Resolve or reject disputes with appropriate remarks.

Suggested dispute fields:

- disputeId
- disputeReference
- customerId
- accountId
- paymentId (nullable when payment is missing)
- paymentReference
- disputeType
- disputedAmount
- description
- assignedAgent
- disputeStatus
- resolutionRemarks
- createdAt
- updatedAt

Dispute statuses:

OPEN
UNDER_REVIEW
PENDING_INFORMATION
RESOLVED
REJECTED
CLOSED

Dispute workflow:

OPEN → UNDER_REVIEW → RESOLVED

OPEN → UNDER_REVIEW → PENDING_INFORMATION → UNDER_REVIEW → RESOLVED

OPEN → UNDER_REVIEW → REJECTED

Dispute creation requirements:

When a dispute is created:

1. Validate whether the customer exists by calling Customer Service.
2. Validate whether the account exists and belongs to that customer by calling Account Service.
3. Retrieve payment information from Payment Service wherever applicable.
4. Apply category-specific validation rules.
5. Save the dispute in dispute_db.
6. Notify Notification Service about the newly created dispute.

Important category-specific rules:

MISSING_PAYMENT:

- Customer and account must exist.
- Payment reference must be supplied.
- If no matching payment exists, allow the dispute to be registered.
- Payment ID can be null.
- Store the claimed amount and payment date.

MISAPPLIED_PAYMENT:

- A matching payment must exist.
- Compare intendedAccountId and appliedAccountId.
- Flag a mismatch as a misapplied payment.

DUPLICATE_PAYMENT:

- Identify multiple payment records with matching reference, amount or relevant transaction details.
- Allow the agent to investigate and link the duplicate payment records to the dispute.

INCORRECT_PAYMENT_AMOUNT:

- Compare the expected payment amount with the recorded amount.
- Store both amounts for investigation.

PAYMENT_NOT_REFLECTED:

- Retrieve payment status and account information.
- Allow the dispute to be registered when the payment is successful but the servicing account does not reflect the expected credit.

Do not assume every discrepancy can be automatically resolved. The dispute service should support investigation by an agent.

APIs:

- POST /api/disputes
- GET /api/disputes/{disputeId}
- GET /api/disputes/reference/{reference}
- GET /api/disputes/customer/{customerId}
- GET /api/disputes/account/{accountId}
- GET /api/disputes/status/{status}
- PATCH /api/disputes/{disputeId}/assign
- PATCH /api/disputes/{disputeId}/status
- GET /api/disputes/{disputeId}/history

Create a separate dispute status history entity/table to maintain an audit trail of status changes, timestamps and remarks.

This service owns dispute_db.

E. Notification Service

Responsibilities:

- Record notifications when disputes are created.
- Record notifications when dispute statuses change.
- Maintain notification history.
- Simulate email and SMS notifications.
- Track notification delivery status.

Suggested fields:

- notificationId
- customerId
- disputeId
- notificationType
- recipient
- message
- deliveryStatus
- createdAt

Notification types:

- DISPUTE_CREATED
- DISPUTE_STATUS_UPDATED
- DISPUTE_RESOLVED

Delivery statuses:

- PENDING
- SENT
- FAILED

For this learning project, simulate notification delivery and store the results in MySQL. Do not integrate external email or SMS services.

APIs:

- POST /api/notifications
- GET /api/notifications/{notificationId}
- GET /api/notifications/customer/{customerId}
- GET /api/notifications/dispute/{disputeId}

This service owns notification_db.

6. Microservice Communication

Implement real service-to-service communication.

Do not simulate communication by calling another service's Java service class directly.

Every inter-service call must happen through HTTP APIs.

Use Spring Cloud OpenFeign as the primary communication mechanism.

Required communication:

Account Service → Customer Service

Payment Service → Account Service

Dispute Service → Customer Service

Dispute Service → Account Service

Dispute Service → Payment Service

Dispute Service → Notification Service

Use separate Feign client interfaces and DTOs for communication.

Do not share entity classes across microservices.

Each service must own its own entities, repositories, service classes and database.

Explain:

- How HTTP requests are constructed.
- How Feign clients work.
- How JSON responses are deserialized into Java objects.
- How request and response DTOs are designed.
- How service-to-service exceptions are handled.
- Why one service should never directly access another service's database.

Initially, implement basic synchronous communication.

Later, introduce asynchronous communication using Kafka.

7. Eureka Service Discovery

Implement Eureka Server in service-registry.

Use:

- @EnableEurekaServer
- Eureka Server dependency
- Port 8761

All five business microservices must register themselves as Eureka clients.

API Gateway must also register as a Eureka client.

Configure appropriate application names:

CUSTOMER-SERVICE
ACCOUNT-SERVICE
PAYMENT-SERVICE
DISPUTE-SERVICE
NOTIFICATION-SERVICE

Important:

Do not hardcode localhost URLs in Feign clients once service discovery is implemented.

Use service names for Feign client resolution.

For example:

@FeignClient(name = "CUSTOMER-SERVICE")

Explain:

- What service discovery is.
- Why hardcoded URLs are problematic.
- How Eureka registration works.
- How a service finds another service.
- What happens if a service has multiple instances.
- How Spring Cloud LoadBalancer selects instances.
- How to view registered services on the Eureka dashboard.

8. API Gateway

Implement Spring Cloud Gateway.

Port: 8080.

Configure routes for all five business microservices.

Example:

/api/customers/** → CUSTOMER-SERVICE

/api/accounts/** → ACCOUNT-SERVICE

/api/payments/** → PAYMENT-SERVICE

/api/disputes/** → DISPUTE-SERVICE

/api/notifications/** → NOTIFICATION-SERVICE

Use Eureka service discovery and lb:// service routing.

The Gateway should:

- Route incoming requests.
- Handle basic request logging.
- Return appropriate error responses when services are unavailable.
- Expose routes without requiring the frontend to know individual service ports.

Explain how the API Gateway differs from Eureka Service Discovery.

Do not introduce authentication or JWT in the initial implementation. We can add security in a later learning phase.

9. MySQL Database Configuration

All databases will run locally.

Create these schemas:

CREATE DATABASE customer_db;
CREATE DATABASE account_db;
CREATE DATABASE payment_db;
CREATE DATABASE dispute_db;
CREATE DATABASE notification_db;

Use Spring Data JPA and MySQL Connector/J.

Each microservice must have its own application.properties.

Use:

- spring.datasource.url
- spring.datasource.username
- spring.datasource.password
- spring.jpa.hibernate.ddl-auto=update
- spring.jpa.show-sql=true

Use appropriate entity relationships within each service's database.

Do not create cross-database JPA relationships.

Use IDs to reference entities owned by other microservices.

Keep the database password configurable and do not hardcode credentials into source code.

Use sample data for testing. Avoid storing actual card numbers or sensitive payment credentials. Use masked card numbers only.

10. Code Architecture and Package Structure

Maintain a clean layered architecture in every business microservice.

Use this structure:

src/main/java/com/servicing/{service}/

- controller/
- service/
- repository/
- entity/
- dto/
- exception/
- config/
- client/ (where Feign clients are required)
- mapper/ (where mapping logic is useful)

Use:

- @RestController for REST endpoints.
- @Service for business logic.
- @Repository for database access.
- @Entity for persistence models.
- DTOs for incoming requests and outgoing responses.
- Constructor-based dependency injection.
- @Valid and Jakarta Bean Validation.
- @ControllerAdvice for global exception handling.
- Appropriate HTTP status codes.
- ResponseEntity where useful.

Do not put business logic inside controllers.

Do not expose JPA entities directly through APIs.

Keep code readable, maintainable and appropriately separated.

Avoid unnecessary abstractions and overengineering.

11. Development Roadmap – Follow These Phases

IMPORTANT: Implement the project phase by phase.

Do not generate the entire project in one response or modify every project simultaneously without explaining what is being done.

Phase 0 – Architecture and Project Setup

- Inspect the seven existing Maven projects.
- Check Java and Maven versions.
- Review the pom.xml files.
- Establish compatible Spring Boot and Spring Cloud versions.
- Identify required dependencies for each project.
- Verify MySQL connectivity.
- Explain the architecture and project structure.

Do not overwrite existing configurations without inspecting them first.

Phase 1 – Individual Microservice Implementation

Build all five business microservices independently.

Implement:

- Entities
- DTOs
- Repositories
- Services
- Controllers
- Database configurations
- CRUD APIs
- Validation
- Exception handling

At this stage, each service should work independently.

Use Postman to test individual APIs.

Phase 2 – Service-to-Service Communication

Implement communication using OpenFeign.

Start with:

Account Service → Customer Service.

Then:

Payment Service → Account Service.

Finally:

Dispute Service → Customer, Account, Payment and Notification Services.

Test the entire request flow.

Explain each Feign client, DTO and HTTP interaction.

Also demonstrate the equivalent communication using RestClient and compare the approaches.

Phase 3 – Eureka Service Discovery

Implement Eureka Server.

Register all five business microservices.

Configure Feign clients to resolve services through Eureka.

Test service communication without hardcoded localhost URLs.

Explain registration, discovery and load balancing.

Phase 4 – API Gateway

Implement Gateway routing.

Expose all five business microservices through port 8080.

Test every route through Postman.

Explain how Gateway routing and Eureka discovery work together.

Phase 5 – Complete Dispute Workflow

Implement the complete payment dispute lifecycle.

Test these scenarios:

1. Missing payment.
2. Misapplied payment.
3. Duplicate payment.
4. Incorrect payment amount.
5. Payment not reflected.

Implement:

- Case creation.
- Reference generation.
- Validation through other services.
- Agent assignment.
- Status changes.
- Dispute history.
- Notification generation.

Demonstrate how one incoming API request triggers multiple service-to-service calls.

Phase 6 – Error Handling and Resilience

Implement:

- Global exception handling.
- Feign error handling.
- Connection timeouts.
- Request timeouts.
- Retry mechanisms.
- Appropriate fallback behavior.
- Meaningful error responses.

Explain partial failures and why they are important in distributed systems.

Phase 7 – Resilience4j

Implement:

- Circuit Breaker.
- Retry.
- TimeLimiter where appropriate.
- Bulkhead.

Demonstrate what happens when Payment Service or Account Service becomes unavailable.

Phase 8 – Kafka and Asynchronous Communication

Introduce Apache Kafka.

Implement event-driven communication for notifications.

For example:

Dispute Service publishes a DisputeCreatedEvent.

Notification Service consumes that event and creates a notification record.

Demonstrate:

- Producer.
- Consumer.
- Topic.
- Event payload.
- Consumer group.
- Message handling failures.

Compare synchronous REST communication with asynchronous event-driven communication.

Phase 9 – Testing and Observability

Implement:

- JUnit 5.
- Mockito.
- Spring Boot integration tests.
- Feign client tests.
- Service-level tests.
- API testing.

Use Spring Boot Actuator.

Introduce distributed tracing and centralized correlation IDs.

Explain how to debug requests flowing through multiple microservices.

12. Teaching and Explanation Requirements

I am learning microservices, so your teaching approach is extremely important.

For every phase:

1. First explain the concept theoretically.
2. Explain why the concept is needed.
3. Show the architecture or request flow.
4. Explain what we are about to implement.
5. Provide the complete code with exact file paths.
6. Explain important code blocks and annotations.
7. Explain how the services communicate.
8. Give exact IntelliJ steps to run and test the applications.
9. Provide Postman requests and expected JSON responses.
10. Explain common errors and troubleshooting.

My preferred learning style:

- Short explanations for individual concepts.
- Detailed explanations for practical examples.
- Step-by-step implementation.
- Practical enterprise-related examples.
- Ask me conceptual questions occasionally to check my understanding.

Do not skip theoretical explanations in favour of code generation.

13. Engineering Best Practices

Follow these principles:

Independent deployment-ready application boundaries, even though we are running everything locally.
Database per microservice.
Loose coupling.
High cohesion.
API contracts between services.
Constructor injection.
DTO-based communication.
Proper validation.
Consistent exception handling.
Meaningful logging.
Appropriate transaction boundaries.
No direct cross-service database access.
No circular service dependencies.
No shared JPA entities.
No unnecessary code duplication.
Use sensible sample data and realistic business scenarios.
Do not implement actual financial transactions or real money movement. This is a servicing and dispute-management learning application.

14. Important Instructions for GitHub Copilot
Before writing code:
Inspect the existing parent folder and all seven Maven projects.
Identify their existing package names and configurations.
Check whether dependencies are missing.
Provide the final proposed architecture.
Identify any configuration changes required.
Explain the execution order.
When modifying files:
Provide complete, compilable code.
Mention exact file paths.
Do not omit imports.
Do not leave TODO placeholders for core functionality.
Do not invent dependencies or use incompatible versions.
Do not overwrite working code unnecessarily.
Do not introduce unnecessary frameworks.
Ensure every service compiles before proceeding.
After completing each phase:
Provide a summary of what was implemented.
List the files created or modified.
Explain how to run each application.
Give Postman test cases.
Explain expected results.
Provide a short conceptual assessment.
Do not automatically proceed to the next phase.
Wait for my confirmation before starting the next phase.
15. Initial Task
Start with Phase 0 only.
Inspect my existing seven Maven projects and help me verify the setup.
Give me:
The final architecture.
Dependency requirements for each application.
Compatible Maven configuration.
MySQL database configuration.
Recommended package structures.
Application startup order.
A clear explanation of how the seven applications will work together.
Do not generate all the business logic immediately.
Our goal is not just to finish an application. Our goal is to understand how real-world Spring Boot microservices are designed, implemented, connected, tested and maintained.
