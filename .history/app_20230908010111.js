const container =  document.querySelector('body');

const song  = document.querySelector('#audio');
// window.addEventListener('load', function (){
//     console.log(song);
//     song.muted = false;
//     song.play();
// })
container.addEventListener('mousemove',function (){
    console.log('haha');
    // song.muted = false;
    song.play();
})
const createSnow = () => {
    const snow = document.createElement('span')
    snow.className = 'snow'
  
    const minSize = 5;
    const maxSize = 10;
  
    let snowSize = Math.random() * (maxSize - minSize) + minSize;
  
    //Snow Width and Height
    snow.style.width = snowSize + 'px';
    snow.style.height = snowSize + 'px';
  
    snow.style.left = Math.random() * 100 + '%'
  
    container.appendChild(snow)
  
    setTimeout(() => {
      snow.remove()
    }, 10000)
  }
  
  setInterval(createSnow, 100);