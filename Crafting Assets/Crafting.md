#global 
**Note: Numbers and Complexity Rating’s are subject to change dramatically.**
**Note: The navigation links unfortunately do not work, but external links do.**


In this version of crafting, the different components have been split up into separate documents in order to allow for easier iteration and more readability. The following paragraph contains a summarization of crafting as a whole, descriptions of each of the documents, and internal navigation links to each one. 

# [[Reagents]]
# [[Smithing]]
# [[Enchanting]]
# [[Alchemy]]


# Crafting Summarized
In crafting, you use reagents that you find in the world to combine together to create powerful weapons. Smithing lets you create weapons and armor to augment your abilities, Enchanting allows you to put powerful magics into tools and weapons, and Alchemy allows you to create powerful potions that have limited uses, but are more efficient with reagents. 

Crafting is based on your chosen crafting skill. There are three primary crafting skills, one corresponding to each type of crafting. These skills work differently from a basic 5e skill, as a character must practice in order to level up the skill. There are several ways to augment your crafting skill, either by choice of reagents or using better tools. This will be expanded upon later.

**Enchanting** - the process of enchanting a weapon or piece of armor with a magic spell.
**Alchemy** - the process of creating and designing potions.
**Smithing** - the process of creating a weapon or piece of armor.

Players may also pay a professional to craft an item for them if the total CR of the item is less than 20. The item is guaranteed to craft successfully, but there is no chance of additional effects or gaining experience. 

<br> </br>
The crafting success chance can be described by the equation below.  

$$ y=CEILING\left[\left({\frac{\left(\ \left(\arctan\left(\frac{x}{7.5}\right)\right)\ \ +\ \frac{\pi}{2}\right)}{\pi}\ * 100}\right) - {(TEP + JR)}\right]$$

Where 
- *x* is represented by the (difference between the player skill level and the challenge rating of the craft)
- TEP: Tool Equipment Reduction, or the reduction to the challenge rating based on the tools used
- JR: Jewelry Reduction (Enchanting Specific), the reduction to the challenge rating based on the jewelry being enchanted. 
- *y* is the percentage chance of success.  

A player will then roll a d100, and if they get below the percentage number, the item is successfully crafted. If they get above the number, the craft is failed. Consult the Effects Table's at the bottom of this page to see if the craft qualifies for a minor effect. 

`If I have a 20% chance to succeed and I roll a 15 on the d100, I have succeed by a margin of 5.`

<br> </br>

After completing an item craft (successful or not) the character has a chance to gain experience in their crafting skill. On a failure, the chance to gain an experience point from a successful craft is the CR of the item. On a success, the chance to gain experience is (50 * (the CR of the item divided by the crafting skill of the character)). The players will roll a d100, and if they get below the chance threshold, then the character gains an experience point. The chance to gain XP is based on the Unmodified Challenge Rating, which is calculated without the modifiers from tools reducing the challenge rating. 

See [this table](https://docs.google.com/spreadsheets/d/1e3lb0_p_gW4WteLhKRyy2Nk4t_RoQoudM8y_AqlcgOo/edit?usp=sharing) for a small tool to simplify the numbers calculation.

## Assisting with Crafting
Two people may work together to forge a piece of equipment. When doing so, take the combined skill of each player's appropriate craft skill and use that as the new skill level. Use that value in the above equation (or in the tool) to figure out the thresholds for success and failure and proceed as normal. On a success, both players roll with the same chance to gain XP in their craft skill, however they roll individually. The time it takes to create items in this way is not reduced however, simply the complexity. 

## Tools

Tools are typically items or equipment that can be used to reduce the Complexity Rating of crafts. They are divided into 3 tiers, each one reducing the complexity rating of the appropriate craft by a different amount. Below the different costs, complexity reduction, and craft association is listed.

|Craft Skill|Tier 1 (3 CR reduction)|Tier 2 (8 CR reduction)|Tier 3 (16 CR reduction)|
|---|---|---|---|
|Alchemy|Bunsen Burner and Mortar and Pestle (50g)|Distillery and Alchemical Fire (750g)|Pristine Purification Apparatus (7500g)|
|Smithing|Hammer and Iron Block (75g)|Anvil and Furnace (1250g)|Druidic Flame Forge (10000g)|
|Enchanting|Runic Notebook (100g)|Runic Circle (1750g)|Anechoic Stabilization Chamber (15000g)|

Tier 1 tools are capable of being moved around inside of a players backpack. They must be placed down and not moved for the duration of a craft, but can be picked up again once the craft is completed. Tier 2 tools must be placed in a room, and cannot be moved without significant effort (time to move or cost to pay movers). Tier 3 reagents require an entire, good sized room in order to be used, and cannot be moved once placed without tremendous effort and cost (less than the original cost but still expensive).

Finally, you can also pay for training in your selected skill. It is an equivalent value of 1 week of training for 1 level, at a price of 300 gold per level. You can only use this until crafting level 20, at which point additional training will have no effect.

### Challenge Rating Table
| | Tier 1 | TIer 2 | Tier 3 | Tier 4 | Tier 5 | Tier 6 |
|---|---|---|---|---|---|---|
| CR Value | 1 | 3 | 6 | 9 | 16 | 24 | 

### External Tools
[Complexity Rating Calculator](https://docs.google.com/spreadsheets/d/1e3lb0_p_gW4WteLhKRyy2Nk4t_RoQoudM8y_AqlcgOo/edit?usp=sharing)


## Effects Tables
A effect occurs when you roll within a certain range of the target. In this case, the item is still "created" and counts as a successful creation for the purposes of XP. However, there are additional effects that are added onto the item. Minor effects are +/- 5 of the original goal, Major Effects are +/- 10 of the original goal. 

For example, if my chance for success on an item is a 20, and I roll a 15, I have Minorly succeeded. I roll a positive effect from the Minor Effect Table. If I am crafting another item with the same chance for success, and I roll a 30, I would roll a negative effect from the Major Effects Table

### Minor Effects Table
*+/- 5 of the target*

|Roll (d6)|Positive Effect| Negative Effect|
|---|---|---|
|1| Randomly choose an aspect of this item to amplify by 1 step. ASK DM FOR APPROVAL AND GUIDANCE. | Using this deals 1d4+character level damage to the user. |
|2| No Positive Effect | No Negative Effect |
|3| | |
|4| | |
|5| | |
|6| | |

### Major Effects Table
*+/- 10 of the target*

|Roll (d6)|Positive Effect | Negative Effect|
|---|---|---|
|1| Choose an aspect of this item, and amplify it by 1 step (Dice severity, duration, crit chance, damage, etc) ASK DM FOR APPROVAL | Using this item deals 3d4 damage to the target, but also deals 3d4 + character level to the user. |
|2| Roll Minor Positive Effect | Roll Minor Negative Effect |
|3| Empathic Craft** | Empathic Craft** |
|4| Blessed* | Cursed* |
|5| Blessed* | Cursed* |

\*Blessed and Cursed Magic Items are items that, through the course of crafting, are somehow infused with sentience. Whether this is, elation from the creator at their success, dismay at their failure, some inherent magical influence form the world is up to the player who is creating it, but either way the item then gains a randomly generated personality from the DM, who plays as this item. The item is aware of it's surroundings and inherits some of it's creators traits such as alignment, ideals, or attitude. Blessed Items will inherently try and help the user, while Cursed Items will attempt to stymy the user. When/where this happens is up to the DM's discretion, but can be requested by the player for thematical moments, with the reward sometimes being Inspiration. 

\*\* Empathic Crafts are items that are granted emotional sentience, and will slightly attempt to influence the user. For a weapon this might be a penalty to hit if it's a negative emotion, or a bonus to hit if it's a positive emotion. For an enchantment, maybe it provides an additional effect such as Baby Bless when used, or maybe it provides the opposite when used. Either way the effect is consistent each time it is proc'd. 