for (const e of document.querySelectorAll('input[type="text"]')) {
    e.style.width = `${448 - e.getBoundingClientRect().x}px`;
}

for (const e of document.querySelectorAll('[id*="list"]')) e.className = 'hidden';
