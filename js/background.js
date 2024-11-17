const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.position = 'fixed'; 
bgImage.style.top = '0';
bgImage.style.left = '0';
bgImage.style.color = 'white';
bgImage.style.width = '100%';
bgImage.style.height = '100%';
bgImage.style.objectFit = 'cover'; 
bgImage.style.zIndex = '-1'; 

document.body.appendChild(bgImage);


const container = document.createElement('div');
container.style.display = 'flex'; 
container.style.flexWrap = 'wrap'; 
container.style.justifyContent = 'space-around'; 
container.style.width = '100%'; 
container.style.margin = '0 auto'; 

container.appendChild(memoSection);
container.appendChild(todoSection);
container.appendChild(timerSection);


document.body.insertBefore(container, document.body.firstChild);


function adjustLayout() {
    const width = window.innerWidth;
    if (width < 600) { 
        container.style.flexDirection = 'column'; 
    } else {
        container.style.flexDirection = 'row'; 
    }
}

memoSection.style.flex = '1 1 300px'; 
todoSection.style.flex = '1 1 300px';
timerSection.style.flex = '1 1 300px';


window.addEventListener('resize', adjustLayout);


adjustLayout();


