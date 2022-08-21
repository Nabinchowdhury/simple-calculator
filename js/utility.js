function setNumberById(id, value) {

    const targetId = document.getElementById(id);
    targetId.value = value;
}

function getNumberById(id) {
    const targetId = document.getElementById(id).value;

    return targetId;
}
