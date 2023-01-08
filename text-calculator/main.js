window.onload = () => {
    const input = document.getElementById('text-input');
    const showPunctuation = document.getElementById('show-punctuation');
    const showWithoutPunctuation = document.getElementById('show-without-punctuation');

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
        showPunctuation.innerHTML = origin.length
        showWithoutPunctuation.innerHTML = after.length
    })
}


