const grid=document.querySelector('.grid');
const userInt = document.getElementById('quantity');
const reset = document.querySelector('.reset');

createGrid= () => {
    for(let i=0;i<256;i++){
        const div=document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
};

upgradeGrid= () => {
    grid.innerHTML="";
    grid.style.setProperty('grid-template-columns', `repeat(${userInt.value}, 2fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(${userInt.value}, 2fr)`);
    for(let i=0;i<userInt.value*userInt.value;i++){
        const div=document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
    console.log(userInt.value);
}

const square = document.querySelector('div');
square.addEventListener('mouseover', function(event) {
    event.target.classList.replace('square', 'color');
});

userInt.addEventListener('change', upgradeGrid);

reset.addEventListener('click', function() {
    grid.innerHTML="";
    userInt.value="";
    grid.style.setProperty('grid-template-columns', `repeat(16, 2fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(16, 2fr)`);
    createGrid();
});

createGrid();