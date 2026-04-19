[08:45, 02/03/2026] Dibyo: Senior Software Engineer – Product Approvals Team
Team & Problem Space
The Product Approvals team’s mission is to help customers who administer HubSpot enable their teams to safely perform high‑risk actions while maintaining oversight and control.
We build the shared approvals platform that powers:
Approvals for further tool access – e.g., a marketer can create and edit emails, but must request approval to send, or to gain publishing access at all.Approvals for asset access – e.g., regionally partitioned assets (such as EMEA emails) where users must request access to specific partitions or campaigns.Approvals for high‑risk actions and workflows – e.g., a social post that must be manager‑approved before publishing, or deal changes in a pipeline that require review and sign‑off.We sit at the intersection of governance, safety, observability, and product velocity. Our work is critical for:
Customers with complex permission models and compliance requirementsLarge organizations delegating work across hundreds or thousands of usersProduct areas that need to ship rapidly while still remaining safe and auditable
Role Summary
As a Senior Software Engineer on the Product Approvals team, you will:
Own and evolve the approvals platform that powers gated access, approvals, and auditability across many HubSpot products.
Design and build high‑throughput, low‑latency services that make approvals feel invisible when everything is safe, and highly visible when something needs intervention.
Shape the approval and governance primitives that product teams across HubSpot integrate with—so your design decisions will echo across the CRM, Marketing Hub, Sales Hub, CMS, and more.
Make it easy for admins to see who did what, when, and why, by integrating with HubSpot’s audit log and eventing infrastructure.You’ll partner closely with product managers, designers, and other platform teams to craft approval experiences that balance speed, safety, and control for customers operating at significant scale.

What You’ll Work On
1. Approvals as a Core Platform Primitive
You’ll help evolve approvals from isolated features into a core, reusable platform that other teams can adopt with minimal friction. This includes:
* Designing approval models that work across many object types (emails, social posts, deals, pages, etc.) and actions (publish, send, update, delete).
* Defining APIs and domain models that other product teams can use to:
Request an approval
Assign approvers and escalation paths
Enforce blocking behavior until approval is granted
Surface status and history to end‑users
* Ensuring the platform gracefully handles multi‑step workflows and conditional rules, such as:
“Deals over a certain amount must be approved by finance”
“EMEA campaign emails must be approved by the regional marketing lead”
2. Volume, Scale, and Reliability
Product Approvals is a high‑leverage, high‑traffic platform that is designed to operate at significant HubSpot‑wide scale. Concretely, we expect the platform to support:
Tens of thousands of customer portals using approvals‑powered features.
On the order of 100k–500k approval requests per day across all products (e.g., email sends, social posts, deal updates, page publishes), with peak days seeing 1M+ requests.Tens of millions of approval‑related events per month flowing through our eventing and audit infrastructure.Approvals sit in the critical path of publishing, sending, and updating key business artifacts, so the platform must:
Maintain P95 latency under ~250 ms for most approval checks, even during peak traffic, so users don’t feel blocked.
Meet or exceed a 99.9%+ availability target for core approval checks and configuration reads.
Handle traffic spikes of 5–10× baseline (e.g., large campaigns going live at the top of the hour, end‑of‑quarter deal approvals) with predictable latency.Our services must degrade gracefully under load, preferring:
Fast, clear failures over silent drops.Failsafes that protect customer data, governance rules, and compliance obligations.You’ll:
Design and build fault‑tolerant services with clear SLIs/SLOs around latency, availability, durability, and error budgets, and help the team iterate toward those targets using real traffic data.
Use patterns like idempotent operations, outbox/inbox patterns, bulkhead isolation, and eventual consistency where appropriate to handle high volume safely.
Ensure we can scale horizontally—adding capacity and regions as more HubSpot surfaces adopt the approvals platform and traffic grows by multiples over time.3. Observability, Auditing, and Compliance
Customers rely on our systems to answer “who changed what, when, and how do we know?”
You’ll work on:
* Integrating approvals with HubSpot’s unified event infrastructure to create structured events for:
Enabling/disabling approval configurations
Updating skip‑approval rules and whitelists
Recording approval decisions, rejections, and overrides
* Designing audit log schemas and queries that allow customers to:
Filter by user, time window, and action type
Drill into the configuration changes behind an approval decision
Understand the lifecycle of approvals for a given object or configuration
* Ensuring we provide the right level of detail in metadata panels and logs so admins can quickly understand:
What changed
Who changed it
Previous and new state
4. Complex Governance & Permission Models
Approvals often intersect with:
Object‑level permissions (who can see or edit a campaign, deal, or page)Partitioning & regional access (e.g., only certain teams can access EMEA assets)Role‑based or custom permission sets for approvers and reviewersYou’ll help design systems that:
Respect existing permission boundaries while enabling temporary or conditional access as part of an approved workflow.
Allow admins to configure flexible rules (e.g., by team, pipeline, region, object property) without creating brittle or opaque logic.
Make approval state and permission side effects predictable, explainable, and reversible.5. Developer Experience for Integrating Teams
Because approvals is a platform, our immediate customers are often other HubSpot engineering teams.
You’ll:
Design and evolve clear, well‑documented APIs and contracts that integrating teams can rely on.
Provide SDKs, client libraries, or reference implementations to make adoption straightforward.
Collaborate on API versioning, migration strategies, and compatibility guarantees so teams can adopt new capabilities without breaking existing flows.
Hold a high bar on documentation, diagrams, and RFCs that help other engineers reason about the approvals platform and its trade‑offs.
[08:45, 02/03/2026] Dibyo: Responsibilities
In this role, you will:
* Design, build, and operate services and components of the Product Approvals platform, from configuration management to approval execution and auditing.
* Work on end‑to‑end flows: UI, backend, storage, and eventing, in collaboration with front‑end and platform counterparts.
* Lead technical design for new capabilities, including writing clear design docs that articulate:
Problem statements and constraints
Alternative approaches and trade‑offs
Data models, APIs, and event schemas
Operational and observability considerations
* Own systems in production, including:
Defining SLIs/SLOs
On‑call participation
Incident response, post‑mortems, and continuous improvement
* Collaborate with PMs and designers to ensure we solve the right customer problems and provide experiences that are:
Intuitive for requesters and approvers
Efficient for admins managing many approval rules
Transparent and auditable for legal, security, and leadership stakeholders
* Mentor and support other engineers on the team through:
Design and code reviews
Pairing and architecture discussions
Knowledge‑sharing sessions and documentation
* Contribute to the broader governance and safety strategy at HubSpot, partnering with teams working on permissions, data residency, security, and compliance.

What We’re Looking For
You may be a fit if:
* You have strong experience building and operating backend services in a modern language and framework (e.g., Java, Kotlin, Go, or similar).
* You’ve worked on distributed systems at meaningful scale, where:
Latency and throughput matter
Failure modes are complex and must be anticipated
Backwards compatibility and safe deployments are critical
* You’ve built or contributed to platforms or shared services used by multiple product teams, and you understand:
How to design stable contracts
How to evolve APIs and schemas safely
How to support and partner with integrating teams over time
* You care deeply about data modeling and domain design, especially in domains involving:
Permissions, entitlements, or access control
Approval workflows, task routing, or state machines
Audit logs, event streams, or compliance‑related systems
* You’re comfortable taking ambiguous, cross‑cutting problem spaces and:
Bringing structure to them
Driving alignment across multiple stakeholders
Iterating based on learning from customers and production data
* You hold a high bar for code quality, testability, and observability, and you balance this with pragmatism and delivery.

Nice‑to‑Have Experience
Not required, but particularly relevant:
* Experience with governance, risk, and compliance features in SaaS products (e.g., approvals, audit logs, permissioning, data retention).
* Building workflow engines, rule engines, or state machines that model multi‑step processes.
* Working with event‑driven architectures, including designing event schemas, guarantees, and downstream consumers.
* Familiarity with multi‑tenant SaaS concerns such as:
Tenant isolation and noisy‑neighbor considerations
Configuration and feature toggles at scale
Backfills and migrations in live environments
* Experience collaborating with security, legal, and compliance stakeholders.

How We Work
On the Product Approvals team, we:
* Start from the customer’s governance and safety needs, then design systems and experiences to meet them.
* Use design docs, diagrams, and structured discussions to reason about complex systems and trade‑offs before writing large amounts of code.
* Invest early in observability and auditability so we can:
Debug incidents quickly
Provide clear, inspectable histories of approvals and configuration changes to customers
* Iterate in small, safe slices, behind feature flags, with strong automated tests and gradual rollouts.
* Share knowledge through docs, reviews, and pairing, so the whole team can operate confidently across the stack.
* Collaborate actively in Slack channels such as #governance-approvals to support internal partners and surface new product opportunities.

Impact You’ll Have in 6–12 Months
Within your first year, a successful Senior Engineer on this team will have:
Led one or more substantial platform initiatives (e.g., new approval surfaces, new audit log capabilities, or new configuration models) from problem definition through rollout and iteration.
Improved key reliability and performance metrics for the approvals platform, helping ensure that approvals do not become a bottleneck for customers’ day‑to‑day work.
Helped multiple product teams integrate with approvals, advising on design and guiding them toward safe, scalable usage patterns.
Elevated the team’s engineering practices, whether through better observability, test strategies, documentation, or incident response patterns.
Contributed meaningfully to how HubSpot thinks about product governance and safety, beyond just approvals.
Why This Role Is Unique
This is a chance to work on:
* A high‑leverage platform whose correctness and usability directly influence how safely thousands of customers run their businesses.
* A deeply complex domain where technical design, UX, and policy must fit together thoughtfully:
Approvals can’t be so strict that they block work
Nor so lax that they fail to provide real protection
* Systems that sit at the core of trust and safety for HubSpot:
When something goes wrong, customers look to approvals and audit logs for answers
When everything goes right, our work feels nearly invisible—but absolutely essential
If you enjoy working on hard systems problems that are tightly linked to real customer risk and value, and you like turning ambiguous, cross‑product spaces into clean, reusable platforms, this role is for you.