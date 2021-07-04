window.onload = function () {
   var stage = document.getElementById('stage');
   let letra = document.querySelector('#jogango')
   var ctx = stage.getContext('2d')
   const rect = stage.getBoundingClientRect();
   let arrowBotons = document.querySelectorAll('.arrow span')

   document.addEventListener('keydown', keyPush)


   setInterval(game, 80);

   const vel = 1;
   var vx = vy = 0;
   var px = 10;
   var py = 15;
   var tp = 20;
   var qp = 30;
   var ax = ay = 15;
   var trail = [];
   tail = 5;


   if (rect.width === 300) {
      var tp = 15;
      var qp = 20;
      const width = "300px";
      const height = "300px";
      stage.getAttribute('width');
      stage.getAttribute('height');
      stage.setAttribute('width', width)
      stage.setAttribute('height', height)
   }
   function game() {
      px += vx;
      py += vy;
      if (px < 0) {
         px = qp - 1;
      }
      if (px > qp - 1) {
         px = 0
      }
      if (py < 0) {
         py = qp - 1;
      }
      if (py > qp - 1) {
         py = 0;
      }




      ctx.fillStyle = "#1B4633";
      ctx.fillRect(0, 0, stage.clientWidth, stage.height)

      ctx.fillStyle = "#ff5100";
      ctx.fillRect(ax * tp, ay * tp, tp, tp);

      ctx.fillStyle = "#5DE620";
      for (var i = 0; i < trail.length; i++) {
         ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);
         if (trail[i].x == px && trail[i].y == py) {
            vx = vy = 0;
            tail = 5;
         }
      }
      trail.push({ x: px, y: py })
      while (trail.length > tail) {
         trail.shift();
      }
      if (ax == px && ay == py) {
         tail++;
         ax = Math.floor(Math.random() * qp)
         ay = Math.floor(Math.random() * qp)
      }



   }

   function keyPush(event) {
      switch (event.keyCode) {
         case 37://left
            vx = -vel;
            vy = 0;

            letra.innerText = "Jogando"

            break
         case 38://up
            vx = 0;
            vy = -vel;
            letra.innerText = "Jogando"
            break
         case 39://lrighn
            vx = vel;
            vy = 0;
            letra.innerText = "Jogando"
            break
         case 40://down
            vx = 0;
            vy = vel;
            letra.innerText = "Jogando"
            break
      }
   }
   arrowBotons.forEach((item) => {
      function callback() {
         if (item.classList.contains('left')) {
            vx = -vel;
            vy = 0;
         } else if (item.classList.contains('up')) {
            vx = 0;
            vy = -vel;
         } else if (item.classList.contains('rigth')) {
            vx = vel;
            vy = 0;
         } else if (item.classList.contains('down')) {
            vx = 0;
            vy = vel;
         }
      }
      item.addEventListener('click', callback)
   })

}



