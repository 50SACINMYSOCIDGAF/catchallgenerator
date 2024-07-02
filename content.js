function generateEmail(domain) {
  const randomChars = Math.random().toString(36).substring(7);
  const email = `${domain}${randomChars}@noah.jp.net`;
  return email;
}

function fillEmail(domain) {
  const inputFields = document.querySelectorAll('input[type="email"]');
  inputFields.forEach((field) => {
    if (!field.value) {
      const email = generateEmail(domain);
      field.value = email;
    }
  });
}

function getDomain() {
  const currentUrl = window.location.hostname;
  const domain = currentUrl.replace(/^www\./, '').split('.')[0];
  return domain;
}

const domain = getDomain();
fillEmail(domain);