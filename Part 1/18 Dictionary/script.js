const inputEl = document.getElementById('input')
const infoTextEl = document.getElementById('info-text')
const outputEl = document.getElementById('output')
const wordEl = document.getElementById('word')
const meaningEl = document.getElementById('meaning')
const audioEl = document.getElementById('audio')

async function fetchAPI(word) {
    try {
        infoTextEl.style.display = 'block'
        outputEl.style.display = 'none'
        infoTextEl.innerText = `Searching for ${word}`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json())
        if (result.title) {
            outputEl.style.display = 'block'
            infoTextEl.style.display = 'none'
            wordEl.innerText = word
            meaningEl.innerText = 'N/A'
            audioEl.style.display = 'none'
        } else {
            infoTextEl.style.display = 'none'
            outputEl.style.display = 'block'
            audioEl.style.display = 'inline-flex'
            wordEl.innerText = result[0].word
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition
            audioEl.src = result[0].phonetics[0].audio           
        }
    } catch (error) {
        console.log(error)
        infoTextEl.innerText = `ERROR`
    }
}

inputEl.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === 'Enter') {
        fetchAPI(e.target.value)
    }
})

// https://dictionaryapi.dev/

// https://api.dictionaryapi.dev/api/v2/entries/en/<word>