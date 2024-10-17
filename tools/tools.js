

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
    fail_xp = unmodified_cr

    document.getElementById("difficulty").innerText = success + "%"
    document.getElementById("success_xp").innerText = success_xp + "%"
    document.getElementById("fail_xp").innerText = fail_xp + "%"
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