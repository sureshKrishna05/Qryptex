# Qryptex Engineering & Contribution Guidelines

## 1. Proprietary Access Policy

This repository is strictly private, proprietary, and not open for public contribution. Access and contribution rights are limited exclusively to authorized Qryptex personnel. 

> **Notice:** Any external, unsolicited, or unauthorized pull requests (PRs) will be automatically closed without review.

---

## 2. Core Engineering Principles

Qryptex operates on a strict, **security-first** engineering philosophy. All contributions must uphold the integrity of our systems and meet the following architectural standards:

* **Security by Design:** Security is foundational and cannot be compromised for speed or convenience.
* **Production-Ready Quality:** All committed code must be fully scalable, robust, and deployment-ready.
* **Architectural Integrity:** We do not accept shortcuts, "hacky" workarounds, or the intentional introduction of technical debt.
* **Clarity and Simplicity:** Code should be modular, readable, and highly maintainable.

*Contributions that introduce operational risk, system instability, or unnecessary technical debt will be rejected during the review cycle.*

---

## 3. Access Control & Audit

* Repository access is granted strictly based on the principle of least privilege.
* Sharing access credentials or tokens is a severe security violation.
* All repository interactions, commits, and access logs are continuously monitored and audited.

---

## 4. Development Workflow

### Branching Strategy
We maintain a disciplined branching model to protect the integrity of our production environment. **Direct commits to the `main` branch are strictly prohibited.**

* `main` — Immutable production-ready code. Updates occur exclusively via approved PRs.
* `dev` — The primary integration branch for active development.
* `feature/<ticket-or-name>` — Used for developing new features.
* `fix/<ticket-or-name>` — Used for bug fixes and patches.

### Commit Nomenclature
We utilize Conventional Commits to maintain a readable and automated project history. All commits must follow this structure:

`type(scope): concise description of changes`

**Approved Types:** `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `sec`.

* **Acceptable:** `feat(auth): implement JWT signature validation`
* **Acceptable:** `fix(api): handle null pointer in user payload`
* **Unacceptable:** `updated code`, `fixed stuff`, `wip`

---

## 5. Pull Request (PR) Requirements

To ensure streamlined reviews, all pull requests must pass the following requirements before being assigned to a reviewer:

* **Code Hygiene:** Remove all debug logs (`console.log`, `print`, etc.), commented-out legacy code, and unused variables.
* **Testing:** Code must be fully tested, ensuring no regressions in existing functionality.
* **Documentation:** Update relevant documentation and inline comments for complex logic.
* **Dependencies:** Justify any new third-party dependencies; avoid introducing unnecessary external bloat.

**Every PR Description Must Include:**
1.  A clear summary of the changes and their intended business/technical purpose.
2.  Links to relevant internal tracking tickets or documentation.
3.  Explicit security considerations or potential impact analyses.

---

## 6. Security Standards

Secure coding practices are non-negotiable. Reviewers will specifically audit for the following:

* **Input Handling:** All user and external inputs must be strictly validated, sanitized, and typed.
* **Secret Management:** **Never** hardcode credentials, API keys, or sensitive environment variables.
* **Dependency Security:** Utilize only vetted, actively maintained libraries. 
* **Data Protection:** Ensure data is handled according to our internal encryption and privacy standards.

*Any code that weakens our cryptographic posture or overall system security will be immediately rejected.*

---

## 7. Quality Assurance & Testing

* **Test Coverage:** Comprehensive unit and integration tests must accompany new features.
* **Edge Cases:** Anticipate and write tests for edge cases and failure states.
* **Stability:** Untested, unstable, or "works on my machine" code is not accepted. 

---

## 8. Code Review & Rejection Criteria

Code reviews are rigorous by design. A pull request will be denied and returned to the author if it:

* Fails to pass automated CI/CD pipelines or security scans.
* Introduces known vulnerabilities or violates secure coding guidelines.
* Breaks existing tests or system functionality.
* Fails to adhere to project formatting, naming, and architectural conventions.
* Lacks sufficient context, testing, or requires heavy refactoring to be readable.

---

## 9. Internal Communication

Alignment is critical to our engineering velocity. 
* All project discussions, architectural decisions, and requirement clarifications must be documented in official internal channels or project trackers.
* Do not make assumptions regarding business logic or security requirements. If a requirement is ambiguous, escalate and clarify before beginning implementation.

---

### Commitment to Excellence
Qryptex builds systems designed for absolute digital sovereignty. Every commit, review, and deployment must reflect our commitment to disciplined engineering, post-quantum security awareness, and long-term architectural resilience.