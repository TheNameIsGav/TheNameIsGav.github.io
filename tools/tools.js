//Difficulty

difficulty = 0
crafting_arr = [0,0,0,0,0,0,0,0,0,0]
function handleCraftInput(text, tier) {
    var num = parseInt(text.value);
    if (isNaN(num)){
        crafting_arr[tier] = 0;
    } else {
        if(tier != -1) crafting_arr[tier] = num;
    }
    updateDifficulty()
}

function updateDifficulty() {

    unmodified_cr = crafting_arr[1] +
    (crafting_arr[2] * 3) + 
    (crafting_arr[3] * 6) + 
    (crafting_arr[4] * 9) + 
    (crafting_arr[5] * 16) + 
    (crafting_arr[6] * 24) + 1;

    time_to_craft = (unmodified_cr-1)*2

    tool_reduction = crafting_arr[7]
    jewl_reduction = crafting_arr[8]
    affinity_reduction = crafting_arr[9]
    crafting_skill = crafting_arr[0]

    modified_cr = unmodified_cr - tool_reduction - jewl_reduction - affinity_reduction;

    success = (
        Math.atan((crafting_skill-modified_cr)/7.5) + (Math.PI/2)
    )/Math.PI

    success = Math.round(success * 100)
    success_xp = median([0, 
                        (50*(unmodified_cr/crafting_skill)) / 100, 
                        1]) * 100
    fail_xp = unmodified_cr > 100 ? 99 : unmodified_cr 

    document.getElementById("difficulty").innerText = success + "%"
    document.getElementById("success_xp").innerText = parseInt(success_xp) + "%"
    document.getElementById("fail_xp").innerText = fail_xp + "%"
    document.getElementById("time_to_craft").innerText = time_to_craft + " hours"
}

function median(values) {
    if (values.length === 0) {
        throw new Error('Input array is empty');
    }

    // Sorting values, preventing original array
    // from being mutated.
    values = [...values].sort((a, b) => a - b);

    const half = Math.floor(values.length / 2);

    return (values.length % 2
        ? values[half]
        : (values[half - 1] + values[half]) / 2
    );
}
// Harvesting

var dist1 = [60, 30, 10, 6]
var dist2 = [75, 35, 15, 5]
var dist3 = [80, 55, 15, 5]
var dist4 = [90, 65, 40, 10]
var dist5 = [90, 75, 55, 20]


function harvest(){
    user_skill = document.getElementById("raw_skill").value;
    user_skill = parseInt(user_skill)
    if(isNaN(user_skill)) return;

    var roll = Math.floor(Math.random() * 20 + 1);
    var total = user_skill + roll;

    //Distribution

    var distribution = 0;
    if(total <= 10) {
        distribution = 1
    } else if(total >= 11 & total <= 19){
        distribution = 2
    } else if(total >= 20 & total <= 25) {
        distribution = 3
    } else if(total >= 26 & total <= 29) {
        distribution = 4
    } else {
        distribution = 5
    }

    if(distribution != 5 && roll == 20){
        distribution += 1
    }

    var finalDist = []
    switch(distribution){
        case 1:
          finalDist = dist1
          break;
        case 2:
          finalDist = dist2
          break;
        case 3:
          finalDist = dist3
          break;
        case 4:
          finalDist = dist4
          break;
        case 5:
          finalDist = dist5
          break;
    }


    //Reagent Tier
    var randomRoll = Math.floor(Math.random() * 100 + 1)
    var reagentTier = 0

    if(randomRoll > finalDist[0]){
        //Tier 1
        reagentTier = 1
    } else if(randomRoll > finalDist[1] & randomRoll <= finalDist[0]){
        //Tier 2
        reagentTier = 2
    } else if(randomRoll > finalDist[2] & randomRoll <= finalDist[1]){
        //Tier 3
        reagentTier = 3
    } else if(randomRoll > finalDist[3] & randomRoll <= finalDist[2]){
        //Tier 4
        reagentTier = 4
    } else {
        //Tier 5
        reagentTier = 5
    }

    //Affinity
    var affinity = "None"
    var affinityRoll = Math.floor(Math.random()*10 + 1)
  
    if(affinityRoll >= 8){
        var schoolRoll = Math.floor(Math.random() * 8)
        switch(schoolRoll){
        case 0:
            affinity = "Abjuration"; break;
        case 1:
            affinity = "Conjuration"; break;
        case 2:
            affinity = "Evocation"; break;
        case 3:
            affinity = "Enchantment"; break;
        case 4:
            affinity = "Illusion"; break;
        case 5:
            affinity = "Transmutation"; break;
        case 6:
            affinity = "Necromancy"; break;
        case 7: 
            affinity = "Divination"; break;
        }
    }

    //Output
    if(reagentTier == 1){
        document.getElementById("tier1_table").innerText = "1 unit of Tier 1";
        document.getElementById("tier2_table").innerText = ""
        document.getElementById("tier3_table").innerText = ""
        document.getElementById("tier4_table").innerText = ""
        document.getElementById("tier5_table").innerText = ""
    }

    if(reagentTier == 2){
        document.getElementById("tier1_table").innerText = "2 unit of Tier 1"
        document.getElementById("tier2_table").innerText = ".75 unit of Tier 2"
        document.getElementById("tier3_table").innerText = ""
        document.getElementById("tier4_table").innerText = ""
        document.getElementById("tier5_table").innerText = ""
    }

    if(reagentTier == 3){
        document.getElementById("tier1_table").innerText = "2 unit of Tier 1"
        document.getElementById("tier2_table").innerText = "1.5 unit of Tier 2"
        document.getElementById("tier3_table").innerText = ".5 unit of Tier 3"
        document.getElementById("tier4_table").innerText = ""
        document.getElementById("tier5_table").innerText = ""
    }

    if(reagentTier == 4){
        document.getElementById("tier1_table").innerText = "2 unit of Tier 1"
        document.getElementById("tier2_table").innerText = "1.5 unit of Tier 2"
        document.getElementById("tier3_table").innerText = "1 unit of Tier 3"
        document.getElementById("tier4_table").innerText = ".25 unit of Tier 4"
        document.getElementById("tier5_table").innerText = ""
    }
    if(reagentTier == 5){
        document.getElementById("tier1_table").innerText = "2 unit of Tier 1"
        document.getElementById("tier2_table").innerText = "1.5 unit of Tier 2"
        document.getElementById("tier3_table").innerText = "1 unit of Tier 3"
        document.getElementById("tier4_table").innerText = ".5 unit of Tier 4"
        document.getElementById("tier5_table").innerText = ".25 unit of Tier 5"
    }
    
    document.getElementById("affinity").innerText = affinity
    document.getElementById("roll").innerText = roll
    document.getElementById("total").innerText = total
    document.getElementById("distribution").innerText = distribution
    document.getElementById("randomroll").innerText = randomRoll
    document.getElementById("affinityroll").innerText = affinityRoll
}

function clearForms(){
    document.getElementById("difficulty_form").reset()
    document.getElementById("difficulty").innerText = ""
    document.getElementById("success_xp").innerText = ""
    document.getElementById("fail_xp").innerText = ""
    document.getElementById("time_to_craft").innerText = ""
}