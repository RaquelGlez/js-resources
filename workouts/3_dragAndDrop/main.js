/* const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener('dragstart', this.dragStart);
fill.addEventListener('dragend', this.dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", this.dragOver);
  empty.addEventListener("dragenter", this.dragEnter);
  empty.addEventListener("dragleave", this.dragLeave);
  empty.addEventListener("dragdrop", this.dragDrop);
}

const dragStart=()=> {
  this.className += "hold";
  setTimeout(() => (this.className = "invisible"), 0);
};

const dragEnd = () => {
    this.className='fill';
};

const dragOver =()=>{
    console.log('over');
}
const dragEnter =()=>{
    console.log('enter');
}
const dragLeave =()=>{
    console.log('leave');
}
const dragDrop =()=>{
    console.log('drop');
}
 */


const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}