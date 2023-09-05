# TokenTax Integration Status Page

## Usage

The main status bar logic is as follows: < 70% Components `operational` = "Some systems are experiencing issues", more than 0 Components `major outage` = "Some systems are experiencing a major outage". Otherwise, "All Systems Operational"

A `Component` displays a current status. These are pulled from the Issues outlined in the integration-status GitHub repo (https://github.com/TokenTax/integration-status). To create a Component, add the tags `issue status` and `component`, and a tag for the current status: `operational`, `performance issues`, `partial outage` or `major outage` (if an issue only has `issue status` and `component` it will be listed as `Unknown`) to a GitHub Issue.
