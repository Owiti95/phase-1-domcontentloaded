document.addEventListener('DOMContentLoaded', function() {
    const ptag = (document.getElementById('text'));
    if (ptag) {
       ptag.textContent = '';

       ptag.appendChild(document.createTextNode('This is really cool!'));
    } else {
        console.error('error!');
    }
});
