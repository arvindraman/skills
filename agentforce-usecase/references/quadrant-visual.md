# Agentforce Prioritization Matrix — Visual Reference

```
                        HIGH VALUE
                            |
          🟩 VERY           |        🟧 POTENTIALLY
          SUITABLE          |        SUITABLE
                            |
    (Low Complexity /       |    (High Complexity /
      High Value)           |      High Value)
                            |
  ——————————————————————————+——————————————————————————
   LOW                      |                     HIGH
   COMPLEXITY               |                COMPLEXITY
  ——————————————————————————+——————————————————————————
                            |
          🟨 MAYBE          |        🟥 NOT
          SUITABLE          |        SUITABLE
                            |
    (Low Complexity /       |    (High Complexity /
      Low Value)            |      Low Value)
                            |
                        LOW VALUE
```

## Quick Decision Guide

Ask two questions:

1. **Is the value HIGH?**
   - Yes → Top half of matrix
   - No → Bottom half

2. **Is the complexity LOW?**
   - Yes → Left side of matrix
   - No → Right side

The intersection gives you the quadrant.

## MVP Priority Order

1. 🟩 Very Suitable — Build first. Fast wins, clear ROI.
2. 🟧 Potentially Suitable — Plan carefully. High payoff but needs more prep.
3. 🟨 Maybe Suitable — Optional. Only if it enables something bigger.
4. 🟥 Not Suitable — Avoid. Come back later when context changes.
