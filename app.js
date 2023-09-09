const select = document.querySelector('select');
const allLang = ['en', 'ru', 'fr', 'de']
select.addEventListener('change', changeURLLanguage);
function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}
