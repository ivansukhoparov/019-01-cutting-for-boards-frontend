const formNewProject = document.querySelector("#new_project");
const submitButton = formNewProject.querySelector("#calculate")
const submitsButton = formNewProject.querySelector("#text-qualifier")
console.log(submitsButton)
const FORM_TAGS = ["INPUT", "TEXTAREA"];
const idToKey = function (id) {
    return id.split("-")
        .map((el, i) => el && i !== 0 ? el.toString().charAt(0).toUpperCase() + el.slice(1) : el.toString())
        .join("");
}

const collectDataFromForm = function (input) {
    const output = {};
    for (let i = 0; i < input.length; i++) {
        const el = input[i];
        if (FORM_TAGS.find(tag => tag === el.tagName)) {
            if (el.type === "checkbox" || el.type ==="radio") {
                output[idToKey(el.id)] = el.checked;
            }  else {
                output[idToKey(el.id)] = el.value;
            }
        }else if (el.tagName === "SELECT") {
            output[idToKey(el.id)] = el.options[el.selectedIndex].value;
        }
    }
    return output
}


submitButton.addEventListener("click", (evt) => {
    evt.preventDefault()
    formData = collectDataFromForm(formNewProject)
    console.log(formData)

})


