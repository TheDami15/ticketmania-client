const formNavigation = () => {
    const nextButton = document.querySelector('.btn-next');
    const prevButton = document.querySelector('.btn-prev');
    const steps = document.querySelectorAll('.step');
    const form_steps = document.querySelectorAll('.form-step');
    let active = 1;
  
    nextButton.addEventListener('click', () => {
      if (active === 2) {
        window.location.href = "/creditcard"; // Redirigir a otra página
        return;
      }
      active++;
      if (active > steps.length) {
        active = steps.length;
      }
      updateProgress();
    });
  
    prevButton.addEventListener('click', () => {
      active--;
      if (active < 1) {
        active = 1;
      }
      updateProgress();
    });
  
    const updateProgress = () => {
      steps.forEach((step, i) => {
        if (i === (active - 1)) {
          step.classList.add('active');
          form_steps[i].classList.add('active');
        } else {
          step.classList.remove('active');
          form_steps[i].classList.remove('active');
        }
      });
  
      if (active === 1) {
        prevButton.disabled = true;
      } else if (active === steps.length) {
        nextButton.disabled = true;
      } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
      }
    };
  
    // Inicializa el estado de los botones
    updateProgress();
  };
  
  export default formNavigation;