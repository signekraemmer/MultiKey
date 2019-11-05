var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('items');
    // prev = document.getElementById('prev'),
    // next = document.getElementById('next');

slide(slider, sliderItems);

function slide(wrapper, items) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 200,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      // Gets the width of the object
      slideSize = items.getElementsByClassName('slide')[0].offsetHeight,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      // Creates a clone of the object
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;

  // Adds an element to the end of "items"
  items.appendChild(cloneFirst);
  // Inserts the item before the list object - cloneLast insterted before firstSlide
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');

  // Mouse and Touch events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);

  // // Click events
  // prev.addEventListener('click', function () { shiftSlide(-1) });
  // next.addEventListener('click', function () { shiftSlide(1) });

  // Transition events
  items.addEventListener('transitionend', checkIndex);

  // e holds the properties for the event
  function dragStart (e) {
    // window.event = something is called when an event happens - Click or keypress etc.
    e = e || window.event;
    // Cancels event if possible
    e.preventDefault();
    // Read-only - Returns the offsetTop of the top left corner of the object
    posInitial = items.offsetTop;

    // .type checks what type it is?
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientY;
    } else {
      posX1 = e.clientY;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction (e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientY;
      posX1 = e.touches[0].clientY;
    } else {
      posX2 = posX1 - e.clientY;
      posX1 = e.clientY;
    }
    items.style.top = (items.offsetTop - posX2) + "px";
  }

  function dragEnd (e) {
    posFinal = items.offsetTop;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.top = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add('shifting');

    if (allowShift) {
      if (!action) { posInitial = items.offsetTop; }

      if (dir == 1) {
        items.style.top = (posInitial - slideSize) + "px";
        index++;
      } else if (dir == -1) {
        items.style.top = (posInitial + slideSize) + "px";
        index--;
      }
    };

    allowShift = false;
  }

  function checkIndex (){
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.top = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.top = -(1 * slideSize) + "px";
      index = 0;
    }

    allowShift = true;
  }
}
