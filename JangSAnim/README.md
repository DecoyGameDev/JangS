# Responsive Animation for JangS

To use the responsive JangS Animation module, start by
create a css object. Then refrence JangSANIM. Also make sure you used npm install.

# Create a simple animation

Create a div and name it what ever animation you want (in html of course):

```
<div class="mycoolanimation"></div>

```

Then, make the object in CSS, it can be whatever object you want.

Next, make a javascript script tag. And use keyframing like so:

```
JangANIM({
  targets: '.mycoolanimation .el',
  keyframes: [
    {JtranslateY: -40},
    {JtranslateX: 250},
    {JtranslateY: 40},
    {JtranslateX: 0},
    {JtranslateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});

```

All animations use this keyframing type animation, kind of like what you see in CSS but smoother and more repsonsive.