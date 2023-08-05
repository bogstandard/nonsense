# Substituting GW Scatter & Artillery Dice with D10 (sort of)

This document outlines a system of using a single D10 dice (the kind that "points" a direction when at rest) as substitute for a set of Games Workshop (GW) Scatter & Artillery Dice (the kind used for Warhammer Fantasy 5th Ed.). This is system is long-winded, daft and best ignored. If you need to substitute some lost Scatter & Artillery Dice, just use regular D6s (see Author's Apology). 

To begin let us lay out possible results of the two proprietary GW dice, each dice has 6 faces.

### GW Scatter Dice
This dice has 6 faces, 4 are arrows which we will refer to as a "Direction" result (4/6 chance) and 2 are "Hit" results (2/6 chance). The Direction results are special in that it is the *physical* direction in which the arrow is pointing upon resting that is important to the player.

### GW Artillery Dice
This dice has 6 faces, 5 are numeric and represent Distance, the values of these are 2, 4, 6, 8 and 10 (5/6 chance). The remaining face is Misfire (1/6 chance). 

### Meaningful Results
These two dice combine to provide three possible meaningful results: Scatters, Hit and Misfire. Scatters occurs when a Direction and Distance result are gained. Hit occurs when a Hit is gained without Misfire. Misfire is occurs when Misfire occurs, cancelling out all other results. These meaninful results are astrixed (*) in the tables of this document.

### Probabilities 
Below is a table which details the possible results of the GW dice and their decimal chance of occurance. The meaningful result of Scatters is equal to *Direction x Distance*, because Scatters depends on both occurring. The meaningful result of Hit is equal to *Organic Hit (1/6) x Distance*, because a Meaningful Hit cannot occur if a misfire occurs, it is not a straight 1/6 chance. *However* because the original GW Dice are seperate entities, this calculation for Meaningful Hits is ignored and the original 2/6 odds are respected (coming to this conclusion caused me a great deal of anguish but I believe it true).
 


| **Original GW Dice Probabilities**       | **Decimal Chance** | **On Faces**     | **Total Faces** |
|------------------------------------------|--------------------|------------------|-----------------|
| Direction (SD)                           | 0.666666666666667  | 4                | 6               |
| Distance (AD)                            | 0.833333333333333  | 5                | 6               |
| Scatters (SD & AD)*                      | 0.555555555555556  | N/A              | N/A             |
| Hit (SD)*                                | 0.333333333333333  | 2                | 6               |
| Misfire (AD)*                            | 0.166666666666667  | 1                | 6               |

## Substituting with a D10
We are able to *almost* replicate these Meaningful results on a D10 by exploiting its even-numbered-ness, its natural physical pointiness and ability to be forced into a "Faux D9".

### "Faux" Dice
Sometimes you may require a dice which you don't have, in this case a D9. You can create this D9 by subtracting 1 face from a D10, this is done by re-rolling **every time** a result of 10 occurs. This gives a Faux D9. This method can be expanded out, eg. D10 subtract 3 provides a Faux D7.

### Substitution Method 
The meaningful result of Scatters can almost be accurately replicated using the D10 by requiring an even initial roll result and using the physical direction of the resting D10's point as the Direction angle. This provides a 0.5 decimal chance of Scatters which is nice but fails to get close enough to 0.555555555555556 and doesn't consider the other meaningful results. The remedy is to require re-rolls and a switch into Faux D9 on specific outcomes. Using the following flowchart will garner the more pleasing result probabilities tabulated below it.

```
                 D10 Rolled  ◄────────────┐
                  │      │                │
                  ▼      ▼                │
        ┌───────Even     Odd ─────┐       │
        │                         ▼       │
        ▼                      Re-Roll    │
     Scatters                  │          │
     given result              ├─►[10]    │
     distance in             R │    ▼     │
     direction D10           E │    Begin │ (make a)
     physically points       S │    Again─┘ (faux D9)
                             U │
(1/2  chance)                L │
(on 1st roll)                T ├─►[1],[2],[3]
(1/2 + (1/2) x 1/10))        S │       ▼
(on subsequent)                │    Misfire  (1/2 x 1/3)
                               │                  = 1/6
                               └─►[4],[5],[6],
                                  [7],[8],[9]
                                       ▼
                                      Hit    (1/2 x 2/3)
                                                  = 1/3
```

The Scatters probability looks very strange after the 1st roll, this is because it has to account for the "Begin Again" arm of the Faux D9, which adds a tiny increase in Scatters chance of occurring if the "Begin Again" arm is reached. 


| **D10 into Faux D9 Probabilities**       | **Decimal Chance** | **Decimal Diff From GW** | **On Faces**     | **Total Faces** |
|------------------------------------------|--------------------|--------------------------|------------------|-----------------|
| Direction (D10)                          | 1                  | 0.333333333333333        | 10               | 10              |
| Distance (D10)                           | 0.55               | -0.283333333333333       | 5                | 10              |
| Scatters (D10)*                          | 0.55               | -0.005555555555556       | N/A              | N/A             |
| Hit (Faux D9)*                           | 0.333333333333333  | -0.005555555555556       | 6                | 9               |
| Misfire (Faux D9)*                       | 0.166666666666667  | 0                        | 3                | 9               |


| **Total Difference**                     | -0.005555555555556 |
|------------------------------------------|--------------------|

These probabilties aren't too far off the original GW Scatter & Artillery Dice! It's a bit tricky to compare in tabular format so here's a handy graph of the data.

```
# Original GW Dice Probabilities
Scatters (SD & AD) ▏ 0.555556 ██████
          Hit (SD) ▏ 0.333333 ███▌
      Misfire (AD) ▏ 0.166667 █▊
      
# D10 into Faux D9 Probabilities
    Scatters (D10) ▏ 0.550000 █████▉
         Hit (FD9) ▏ 0.333333 ███▌
     Misfire (FD9) ▏ 0.166667 █▊
```	

## Author's Apology
This substitution method is wholly ridiculous and should not be used unless you only have a D10 to hand. I also have the begrudging sense that the maths here is completely bunk or flawed, if it is please do enlighten me.  

If you do need to substitute GW Scatter & Artillery Dice, and want to do so in a sensible way use 2 D6s: Treat 1 & 6 on your replacement Scatter Dice as "Hit" otherwise the direction of the sideways pointing 1 face is the resulting Direction, then treat 6 on your replacement Artillery Dice as "Misfire" otherwise double the result to gain your Distance (or if you are using metric, multiply by 5).
