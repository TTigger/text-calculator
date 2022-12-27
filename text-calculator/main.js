window.onload = () => {
    const input = document.getElementById('text-input');
    const showAll = document.getElementById('show-all');
    const showPart = document.getElementById('show-part');

    input.addEventListener('input',(e) =>{
        e.preventDefault()
        let punctuationReplace = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
        let spaceReplace = /\s+/g;

        origin = input.value
        after = input.value.replace(punctuationReplace,'').replace(spaceReplace,'')
        // console.log(origin)
        // console.log(origin.length)
        // console.log(after.toString())
        // console.log(after.toString().length)
        showAll.innerHTML = origin.length
        showPart.innerHTML = after.length
    })
}


