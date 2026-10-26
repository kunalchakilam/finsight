Create an editable enterprise system architecture diagram titled “MRM-360 System Architecture (Target State)”.

Use a wide landscape canvas, white background, and exactly five vertical swimlanes in this order: USER, FRONTEND, BACKEND, AWS CLOUD (us-east-1), DATABASE.

Match a polished enterprise architecture style with blue frontend components, green backend components, orange AWS environment, and grey database lane. Use readable typography, rounded rectangles, official AWS architecture icons, technology logos, and orthogonal directional connectors.

Include:

- USER: Model Owners and MRM, Web Browser.
- FRONTEND (MRM360-ui): React 19 SPA, Vite 8 (development only, port 5173), Tailwind CSS 4, react-markdown, docx-preview, JavaScript ES Modules, and Dashboard, Risk Models, Model Details, MRM Review, Overview, Settings. Show production deployment as a container/web server over HTTPS, not the Vite development server.
- BACKEND (MRM360-api): Spring Boot 3.4.2 REST API, Java 17, port 8080; Spring Web, Spring Security, Swagger/OpenAPI, Apache POI, Lombok, Maven, JaCoCo; services S3StorageService, MddReviewService, MapReviewService, DocxToMarkdownConverter.
- Separate Python 3.11 MAP Review Worker with boto3, python-docx, and pydantic. Show the Spring Boot backend launching it as a subprocess in its execution environment; the worker generates the MAP Word document.
- AWS CLOUD: An Amazon EKS cluster boundary containing containerized frontend, backend, and Python worker workloads; HTTPS ingress/load balancer; IAM/IAM Identity Center with SSO and workload identity using EKS Pod Identity or IRSA, never static credentials; S3 bucket mrm360-s3-knowledgebase with prefix mrm/mdd-inputs and SSE-S3/SSE-KMS encryption; optional AWS KMS customer-managed key.
- Amazon Bedrock: MDD Review Agent using Amazon Nova Pro 1.0 and MDD Template Guide Knowledge Base; MAP Review Agent using Amazon Nova Pro 1.0 and MAP Review Knowledge Base; MAP Checklist Sections.
- DATABASE: A deployed, operational Amazon RDS for MySQL production relational database outside the EKS cluster, with private VPC connectivity; show MySQL and AWS RDS icons.

Connect components with solid target-state arrows: browser to frontend via HTTPS; frontend to backend via REST/JSON and multipart upload; backend to S3 via AWS SDK v2 PutObject/GetObject; backend to MDD Review Agent via streaming InvokeAgent; backend to Python worker via subprocess; worker to MAP Review Agent via boto3 InvokeAgent, one call per section; each agent to its corresponding Knowledge Base via Retrieve; backend to IAM/workload identity for credentials; backend to RDS via JPA/Hibernate and SQL over private VPC. Use a dashed arrow only for the optional S3-to-KMS encryption relationship.

Do not include any API endpoint paths anywhere in the diagram. Avoid overlapping connectors and labels; expand the canvas rather than shrinking text. Include a bottom-right legend for solid/dashed connections and solid/dashed component borders.

Footer: “Deployment: Amazon EKS | Database: Amazon RDS for MySQL | AWS Region: us-east-1”.
