# Task

## Overall Story so far

You and some friends are planning to steal a huge diamond from a very expensive jewelry shop.

### Planning Phase

The next stage of the heist is to replace the jewellery shop integrated alarm system with a system that has a vulnerability built in.  You can then use this to disable the alarm system.

## The OWASP Challenge

The existing alarm system has a single endpoint:

/jewelleryshop/alarm

Create a system that replaces the jewellery shop alarm system.  Your replacement system doesn't need to look like the original, but it should have at least one OWASP top 10 vulnerability.  To complete the task, create an exploit for the vulnerability that switches the alarm off. 


# Suggestions

1. Persist the alarm system to a DB, and send a direct SQL call through, allowing for SQL Injection.

2. Implement an authorisation policy that allows for vertical privilege escalation.

3. A site that allows execution of unsanitised input, such that XSS attacks are possible.
