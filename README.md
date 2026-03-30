# Claude Skills 
(Making Agents Matter)

## Skills

| Skill | Command | When to use |
|-------|---------|-------------|
| **agentforce-prioritization** | `/agentforce-prioritization` | Use this skill whenever a user wants to evaluate, score, or prioritize Agentforce use cases for an initial implementation |
| **agentforce-worksheet** | `/agentforce-worksheet` | Use this skill whenever a user wants to fill out an Agentforce Use Case Worksheet |
| **agentforce-careplan** | `/agentforce-careplan` | Use this skill whenever a user wants to fill out an Agentforce Care Plan or Health Check |



## Installation


### Method 1: Claude.ai upload

Download skills as Zip File to upload and use in Claude.ai web or chat interface

**Agentforce Prioritization** 
```bash
https://github.com/arvindraman/skillsdownload/raw/refs/heads/main/agentforce-prioritization.zip
```

**Agentforce Worksheet** 
```bash
https://github.com/arvindraman/skillsdownload/raw/refs/heads/main/agentforce-worksheet.zip
```

**Agentforce Careplan** 
```bash
https://github.com/arvindraman/skillsdownload/raw/refs/heads/main/agentforce-careplan.zip
```

In Claude.ai:
   - Go to **Customize**
   - Click on **Skills**
   - Click on + Sign and **Upload a Skill**
   - Select the ZIP file
   - Enable the skill


### Method 2: Claude Code

**Step 1: Add the Marketplace**
```bash
plugin marketplace add https://github.com/arvindraman/skills.git
```

**Step 2: Install the plugin**
```
plugin install agentforce-skills@skills
```
