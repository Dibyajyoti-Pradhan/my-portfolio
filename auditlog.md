Overview
Audit logs at HubSpot are no longer a “checkbox” compliance feature. They’re evolving into a platform primitive: a centralized way to understand who or what changed something, when it happened, and under which context — across users, apps, and AI tools.
The Audit Logs team owns this horizontal capability end‑to‑end. We ingest and normalize events from across the product, surface them in a single UI and API, and make that data trustworthy and explorable for security, compliance, and debugging use cases. This brief outlines what we do, the scale we operate at, and why this is an interesting place to work as an engineer.

What the Audit Logs platform is
From a customer’s point of view, the project appears as:
* A centralized Audit Logs UI under Settings → Account Management → Audit Logs where super admins can view, filter, and export account activity history.
* Coverage for key categories:
Logins & security activity (SSO/2FA changes, failed/successful logins, admin permission changes, deactivations, exports, permanent deletes, sandbox creation, payment account changes, etc.).
CRM object activity (create/update/delete across contacts, companies, deals, tickets, custom objects, meetings, tasks, lists, workflows, marketing assets, etc.).
Content & configuration (domains, website pages, landing pages, templates, content settings, approvals, customer portal settings, sensitive property changes, etc.).
* Approximately 365 days of selected activity for user, app, and AI actions, with sub‑systems (like domain audit logs or employee access exports) using their own retention windows and limits.
Under the hood, the platform is built on Unified Events and a set of backend services (notably app‑user‑audits) that handle ingestion, indexing, querying, and reporting, plus the settings-ui-audits frontend for the in‑product experience.
We provide a self‑serve integration model: product teams define Unified Events, wire them into app settings (userEventMetadata, action_types), and gain centralized auditing and analytics “for free.”

Scale and volume
Although we don’t publish exact metrics externally, we have a good sense of the order of magnitude from our unified‑events infrastructure, Grafana dashboards, and throughput anomaly alerts.
* Event volume
* Audit‑relevant events are emitted as Unified Events and ingested by our services.
* Based on observed throughput and portal behavior, we operate at tens of millions of audit‑log events per day globally.
* A reasonable order‑of‑magnitude estimate is:
10–100M audit‑log events/day worldwide, with our best current guess in the ~20–50M/day range, depending on seasonality and product adoption.
* Portal footprint
The centralized Audit Logs UI is available to portals with Starter+ tiers across major Hubs (Marketing, Sales, Service, Data, Content).
Counting paying portals plus internal, trial, and test hubs capable of emitting audit events, hundreds of thousands of portals are within the system’s blast radius.
Realistically, this likely extends into the low millions when you include every portal that can generate at least some unified audit events over time.
This scale shapes our engineering constraints:
We must optimize for high‑volume event ingestion, query performance across large, multi‑tenant datasets, and retention policies that balance cost and compliance.Throughput anomaly alerts (“Unified Events for Centralised Audits had a significant change in throughput”) are critical to detect flat‑lines and spikes at this scale.Engineers on this team routinely work on problems where a small schema change or indexing decision has ecosystem‑wide impact.

Why this matters for customers
Security and incident response
Security and IT teams use audit logs as the first line of defense when something looks wrong: unexpected exports, removed admin permissions, suspicious login locations, or bulk deletes of records.
We provide:
Precise attribution: acting user (or app/AI actor), timestamp, object, IP/location, and deep‑links back into the product where the change occurred.Tracking for sensitive actions: admin permission changes, impersonation, permanent deletes, user/record exports, SSO/2FA configuration changes, payment account creation, sandbox lifecycle changes, etc.Alerts on risky patterns: the Audit Log alerts work adds “multiple exports in a day” and “removed admin permission” notifications, so super admins can subscribe to email alerts for high‑risk behaviors instead of manually monitoring logs.This is foundational for SOC2, GDPR, and customers in regulated industries (including banks) who need defensible answers to “who did what, when, from where?”
Compliance and data access audits
Regulatory and internal audits increasingly require auditable trails for identity, permission, and data access changes. We support this via:
Identity and access history: login history, admin permissions, team membership, domain‑based invite usage, and HubSpot employee access history (with department info) are traceable and exportable.Sensitive data events: dedicated events for viewing/editing highly sensitive properties, especially click‑to‑decrypt flows, so customers can understand exposure in breach scenarios.Domain and configuration logs: domain additions, removals, and setting changes export into a domain audit log CSV with timestamps, user identity, and object identifiers.We also support one‑off legal and regulatory exports (e.g., DOJ requests) where we need to produce about a year of audit history, with clear boundaries on what is and isn’t included.
Troubleshooting and operational visibility
Support, Customer Success, and admins rely heavily on audit logs to answer “what changed?” questions:
“Who deleted this list/workflow?”“Why did this contact’s lifecycle stage change?”“Who turned this setting on/off?”We surface:
CRM object lifecycle events with side‑panel metadata for old vs new values where appropriate.Feature toggles and configuration changes, such as Approvals feature activation/deactivation and skip‑approval configuration, customer portal settings, and more, using dedicated Unified Events and clear display names in the UI.Analyze tab dashboards that show daily logins, deletions, exports, and activity breakdowns by category/action/object, with deep‑links back into filtered audit views.This significantly reduces time‑to‑resolution for ambiguity‑driven tickets and empowers customers to self‑serve many investigations.

Ecosystem impact: apps, integrations, and AI
Apps & integrations
As HubSpot’s ecosystem grows, external and internal apps have powerful capabilities. Audit logs provide the contract for visibility and accountability:
Integrations like Salesforce and Zapier now surface their actions in centralized audits instead of opaque side logs.
App teams integrate by emitting Unified Events with appropriate action_types and metadata, and we take on normalization, indexing, and UI rendering.
We maintain throughput and indexing health across all event types, with dedicated alerts and runbooks so that onboarding new high‑volume events doesn’t silently break the experience at scale.This enables increasingly rich integrations while still giving customers a single pane of glass for “what my apps did.”
AI governance & transparency
AI is where audit logs become absolutely critical. We treat the centralized audit log as the system of record for AI‑powered changes:
* Principle: if we log an action for a human, we should log the equivalent AI action, with explicit attribution and clear filters.
* The roadmap includes:
A dedicated AI view in the audit log.
New “modified by” categories for AI actors.
Filters for Copilot actions, local/remote MCP connectors, and native agents.
* AI connectors (ChatGPT, Claude, Gemini, Microsoft Copilot, general MCP apps) will surface their write actions as human‑attributed but AI‑assisted events, tagged and filterable by connector name (“Assisted by HubSpot connector for Claude”, etc.).
This is central to building customer trust in semi‑autonomous behavior and to meeting emerging AI transparency expectations.

What the team owns
As a team, we own:
* Core audit ingestion & query services
app‑user‑audits ingestion, indexing, filtering, and reporting paths.
CHIRP migrations for our REST APIs (events, filters, reporting) and dependent services.
* Audit Logs UI & analytics
settings-ui-audits: table views, metadata side‑panels, AI Copilot summary surfaces, filter UX, Analyze tab, and notification configuration experiences.
* Integration framework
Unified Event schema design review for audit‑relevant events.
App settings (userEventMetadata, action_types, action_sub_types) conventions and governance for new audit categories.
* Security & alerts
Audit Log alerts definition (multiple exports, removed admin permissions, etc.) and alerting backend for per‑portal notification definitions.
Collaboration with Security/Privacy and Legal on extended retention, GDPR delete behavior, and legal exports.
We also partner closely with platform teams (Unified Events, Observability, Automation), HubSettings, Account Insights, and AI Platform.

What you’ll work on
As an engineer on this team, you can expect to work on:
* High‑scale data and query problems
Designing and evolving schemas and indices that support tens of millions of daily events with predictable query SLAs.
Retention and TTL strategies that blend compliance, cost, and usability across many event families.
* Cross‑cutting integrations
Onboarding new audit event families for features like Approvals, Customer Portal settings, AI agents, and more — from Unified Event design through UI representation.
* AI transparency
Building the AI‑specific audit experiences (new AI views, filters, and tags) that let customers see exactly what AI is doing in their portal.
* Security & governance
Evolving our taxonomy (categories/subcategories/actions) into a clean, three‑pillar model for data activity, identity activity, and system/config changes, with clear governance for new events.
* Reliability & observability
Maintaining and iterating on Grafana dashboards, alerts, and acceptance tests that keep the system reliable as throughput and coverage grow.
You’ll often find yourself owning changes end‑to‑end: design → backend → UI → ATs → rollout → documentation and KT.

What we’re looking for
We’re looking for engineers who:
Are comfortable working on backend‑heavy, data‑intensive systems that sit on the critical path for security, compliance, and trust.
Can think in terms of contracts and platforms, not just features — designing APIs and schemas that other teams can integrate with safely.
Enjoy working with cross‑functional partners (Security, Privacy/Legal, product teams, AI teams) and navigating ambiguous requirements where correctness and nuance matter.
Care about operational excellence: observability, alerts, runbooks, and graceful degradation when things go wrong.
Are excited about the intersection of AI and governance, and want to help define how AI activity is surfaced to customers in a transparent, trustworthy way.
Why this team
If you join this team, you’ll help define how HubSpot proves what happened inside a customer’s account — to admins, security teams, auditors, and regulators. You’ll work on systems that quietly power a huge fraction of the platform, at a scale where design decisions ripple across millions of events and hundreds of thousands of portals.
If you care about building trustworthy infrastructure, enjoy hard data and API problems, and want a front‑row seat to how AI, security, and compliance intersect, this is a uniquely impactful place to do that work.