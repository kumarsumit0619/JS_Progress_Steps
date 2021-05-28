//elements from DOM or HTML
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');//circles is a node list /like an array

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if(currentActive > circles.length){
    currentActive = circles.length;
  }
  //console.log(currentActive);
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if(currentActive < 1)
  currentActive = 1;
  //console.log(currentActive);
  update();
});

function update(){
  circles.forEach((circle, idx) => {
    if(idx < currentActive){
      circle.classList.add('active');
    }
    else {
      circle.classList.remove('active');
    }
//console.log("idx="+idx);
//console.log('currentActive='+currentActive);
  })
  //For next btn
  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length-1) / (circles.length-1)) * 100 + '%';
  console.log(((actives.length-1) / (circles.length-1))*100+"%");

  //For Prev btn
  if(currentActive === 1){
    prev.disabled = true;
  }
  else if(currentActive === circles.length){
    next.disabled = true;
  }
  else {
    prev.disabled = false;
    next.disabled = false;
  }

}