document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // evita el reload

    const turnstileResponse = document.querySelector('#contact-form [name="cf-turnstile-response"]');
    const turnstileToken = turnstileResponse ? turnstileResponse.value : '';
    const turnstileError = document.getElementById('turnstile-error');
    
    if (!turnstileToken) {
      if (turnstileError) {
        turnstileError.style.display = 'block';
      }
      return;
    }
    if (turnstileError) {
      turnstileError.style.display = 'none';
    }
  
    const headers = new Headers();
    headers.append('content-type', 'multipart/form-data');

    const form = e.target;
    const data = new FormData();
    const body = form.full_name.value + "<br>" + form.Email.value + "<br>" + form.website.value + "<br>" + form.message.value;
    
    data.append('Asunto', "Contacto WEB LS CLOUD");
    data.append('bodyWhitutHtml', body);
    data.append('Body', body);
    data.append('cf-turnstile-response', turnstileToken);

  
    fetch('https://api.dev.liberasoft.cloud/mail/SEND_contact', {
      method: 'POST',
      body: data,   
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en el envío');
      }
      return response.json();
    })
    .then(result => {
      form.style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
      form.reset();
      // Reset Turnstile widget
      if (typeof turnstile !== 'undefined') turnstile.reset();
    })
    .catch(error => {
      document.getElementById('respuesta').textContent = 'Hubo un error al enviar el mensaje ❌';
      console.error(error);
    });
  });

  document.getElementById('contratarForm').addEventListener('submit', function (e) {
    e.preventDefault(); // evita el reload

    const turnstileResponse = document.querySelector('#contratarForm [name="cf-turnstile-response"]');
    const turnstileToken = turnstileResponse ? turnstileResponse.value : '';
    const turnstileError = document.getElementById('turnstile-error-demo');
    
    if (!turnstileToken) {
      if (turnstileError) {
        turnstileError.style.display = 'block';
      }
      return;
    }
    if (turnstileError) {
      turnstileError.style.display = 'none';
    }
  
    const headers = new Headers();
    headers.append('content-type', 'multipart/form-data');

    const form = e.target;
    const data = new FormData();
    const body = form.nombre.value + "<br>" 
                  + form.empresa.value + "<br>" 
                  + form.email.value + "<br>" 
                  + form.telefono.value + "<br>" 
                  + form.cuit.value + "<br>" 
                  + form.rubro.value + "<br>"
                  + form.empleados.value + "<br>" 
                  + form.planInput.value + "<br>";
    
    data.append('Asunto', "DEMO WEB LS CLOUD");
    data.append('bodyWhitutHtml', body);
    data.append('Body', body);
    data.append('cf-turnstile-response', turnstileToken);

  
    fetch('https://api.dev.liberasoft.cloud/mail/SEND_contact', {
      method: 'POST',
      body: data,   
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en el envío');
      }
      return response.json();
    })
    .then(result => {
      form.style.display = 'none';
      document.getElementById('success-message-demo').style.display = 'block';
      form.reset();
      if (typeof turnstile !== 'undefined') turnstile.reset(document.querySelector('#turnstile-demo'));
    })
    .catch(error => {
      alert('Hubo un error al enviar el mensaje ❌');
     // document.getElementById('respuesta').textContent = 'Hubo un error al enviar el mensaje ❌';
      console.error(error);
    });
  });