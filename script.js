
let select_game = document.getElementById('select_game');
let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let error_space = document.getElementById('error_space');

let value_view = document.getElementById('value_view');
let value1_view = document.getElementById('value1_view');
let value2_view = document.getElementById('value2_view');
let value3_view = document.getElementById('value3_view');

let game_outcome = document.getElementById('outcome');
let game_status = document.getElementById('status');
let game_status_icon = document.getElementById('status_icon');

// function game_view(){
//     if (value1.value != "" && value1.value < 10) {
//         value1_view.innerHTML = value1.value.padStart(2, "0");
//     } else {
//         value1_view.innerHTML = value1.value;
//     }

//     if (value2.value != "" && value2.value < 10) {
//         value2_view.innerHTML = value2.value.padStart(2, "0")
//     } else {
//         value2_view.innerHTML = value2.value;
//     }

//     if (value3.value != "" && value3.value < 10) {
//         value3_view.innerHTML = value3.value.padStart(2, "0")
//     } else {
//         value3_view.innerHTML = value3.value;
//     }
// }



function game_select(){
    if (select_game.value == ""){
        value1.disabled = true;
        value2.disabled = true;
        value3.disabled = true;

    } else if (select_game.value == "2 Sure"){
        value1.disabled = false;
        value2.disabled = false;
        value3.disabled = true;  value3.value = "";

    } else if (select_game.value == "3 Direct"){
        value1.disabled = false;
        value2.disabled = false;
        value3.disabled = false;
    }
}

function empty_input () {
    if (select_game.value == "2 Sure") {
        if (value1.value.trim() == "" || value2.value.trim() == "") {
            error_space.textContent = "All 2-Sure values must be filled...";
            return true;
        } else {
            error_space.textContent = "";
            return false
        }
    } else if (select_game.value == "3 Direct") {
        if (value1.value.trim() == "" || value2.value.trim() == "" || value3.value.trim() == "") {
            error_space.textContent = "All 3-Direct values must be filled...";
            return true;
        } else {
            error_space.textContent = "";
            return false
        }
    } 
}

function game_play () {
if (empty_input() == false) {
    let generated_num = []
    for (let i = 0; i < 6; i++) {
        let gen_num = Math.floor(Math.random() * 100);
        generated_num[i] = gen_num;
        // if (generated_num[i] < 10) {
        //     console.log(generated_num[i].toString().padStart(2, "0"));            
        // } else {
        //     console.log(generated_num[i].toString());
        // }
    }

    value_view.innerHTML = "";
    generated_num.forEach((num, i) => {
        if (num < 10) {
            value_view.innerHTML += '<span id="value'+i+'_view" class="mx-2 px-0">' + num.toString().padStart(2, "0") + ', </span>';
            console.log(num.toString().padStart(2, "0"));            
        } else {
            value_view.innerHTML += '<span id="value'+i+'_view" class="mx-2 px-0">' + num.toString() + ', </span>';
            console.log(num.toString());
        }
    })


    // console.log(generated_num);

    let  message = "";    
    let correct_num = [];
    if (select_game.value == "2 Sure") {
        let inputed_num = [value1.value, value2.value];
        let j = 0;
        for (let i = 0; i < inputed_num.length; i++) {
            number_found = generated_num.includes(Number(inputed_num[i]));
            if (number_found) {
                correct_num[j] = inputed_num[i];
                j++
            };            
        }

        console.log(inputed_num);
        console.log(correct_num);


        if (correct_num.length == 2) {
            // game_status.style.color = "green";
            game_status_icon.innerHTML = '<h5 style="color:green;"><i class="fa-solid fa-check"></i></h5>';
            // game_status_icon.style.color = "green";
            message = '<h5 style="color:green;">2 sure win</h5>';
            
        } else {
            // game_status.style.color = "red";
            game_status_icon.innerHTML = '<h5 style="color:red;"><i class="fa-solid fa-xmark"></i></h5>';
            // game_status_icon.style.color = "red";
            message = '<h5 style="color:red;">2 sure lose</h5>';
        }
            
    } else if (select_game.value == "3 Direct") {
        let inputed_num = [value1.value, value2.value, value3.value];
        let i = 0;
        let j = 0;
        for (i; i < inputed_num.length; i++) {
            number_found = generated_num.includes(Number(inputed_num[i]));
            if (number_found) {
                correct_num[j] = inputed_num[i];
                j++
            };            
        }
        if (correct_num.length == 3) {
            // game_status.style.color = "green";
            game_status_icon.innerHTML = '<h5 style="color:green;"><i class="fa-solid fa-check"></i></h5>';
            // game_status_icon.style.color = "green";
            message = '<h5 style="color:green;">3 direct win</h5>';

            
        } else {
            // game_status.style.color = "red";
            game_status_icon.innerHTML = '<h5 style="color:red;"><i class="fa-solid fa-xmark"></i></h5>';
            // game_status_icon.style.color = "red";
            message = '<h5 style="color:red;">3 direct lose</h5>';
        }
    } else {
        alert ("Select a game.")
    }
    
    if (correct_num.length == 1) {
        if (correct_num[0] < 10) {
            correct_num[0] = correct_num[0].padStart(2, "0")
        }
        game_outcome.innerHTML = correct_num[0];
    } else if (correct_num.length == 2) {
        if (correct_num[0] < 10) {
            correct_num[0] = correct_num[0].padStart(2, "0")
        }
        if (correct_num[1] < 10) {
            correct_num[1] = correct_num[1].padStart(2, "0")
        }
        game_outcome.innerHTML = correct_num[0] + " , " + correct_num[1];
    } else if (correct_num.length == 3) {
        if (correct_num[0] < 10) {
            correct_num[0] = correct_num[0].padStart(2, "0")
        }
        if (correct_num[1] < 10) {
            correct_num[1] = correct_num[1].padStart(2, "0")
        }
        if (correct_num[2] < 10) {
            correct_num[2] = correct_num[2].padStart(2, "0")
        }
        game_outcome.innerHTML = correct_num[0] + " , " + correct_num[1] + " , " + correct_num[2];
    }

    game_status.innerHTML = message;
}

}

// // function for my roundom number generation
// let gen_value = document.getElementById('gen_value');
// function gen_by_select (gen_value) {
//     gen_value = gen_value.value;
//     let auto_gen = Math.floor(Math.random() * (gen_value));
//     return auto_gen;
// }

