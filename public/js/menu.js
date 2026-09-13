/* Comodidades del menu de telefono.
   El <details> del header ya abre y cierra solo, sin JavaScript: esto agrega
   nada mas cerrar al elegir una seccion, al tocar el fondo y con Escape. Si
   este archivo no carga, el menu sigue funcionando.

   Vive en public/ y se carga con src, no en linea: la CSP del sitio declara
   `script-src 'self'` sin 'unsafe-inline', asi que un <script> en linea queda
   bloqueado por el navegador. */
(function () {
  var menu = document.querySelector('.movil');
  if (!menu) return;

  function cerrar() {
    menu.open = false;
  }

  // Al elegir una seccion el panel tiene que irse: si no, tapa justo lo que
  // el visitante acaba de pedir.
  var enlaces = menu.querySelectorAll('a');
  for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', cerrar);
  }

  // Tocar el fondo oscuro, que es un ::before del propio <details>: el click
  // llega al <details> y no a ninguno de sus hijos.
  menu.addEventListener('click', function (e) {
    if (e.target === menu) cerrar();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.open) {
      cerrar();
      // Devolver el foco al boton, si no queda huerfano en un panel cerrado.
      menu.querySelector('summary').focus();
    }
  });

  // Mientras el panel esta abierto, el tabulador no se tiene que escapar a la
  // pagina de atras: esta tapada por el fondo oscuro, asi que el visitante veria
  // el foco desaparecer. Se lo hace dar la vuelta entre el boton y los enlaces
  // del panel.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !menu.open) return;

    var foco = menu.querySelectorAll('summary, a');
    if (!foco.length) return;

    var primero = foco[0];
    var ultimo = foco[foco.length - 1];

    if (e.shiftKey && document.activeElement === primero) {
      e.preventDefault();
      ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault();
      primero.focus();
    }
  });

  // Bloquear el scroll del fondo mientras el panel esta abierto.
  menu.addEventListener('toggle', function () {
    document.body.classList.toggle('menu-abierto', menu.open);
  });
})();
