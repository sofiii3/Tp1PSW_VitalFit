document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('switch-precio');
    const precios = document.querySelectorAll('.precio');
  
    toggle.addEventListener('change', () => {
      precios.forEach(p => {
        const precio = toggle.checked ? p.dataset.anual : p.dataset.mensual;
        p.textContent = precio;
      });
    });
  });
  