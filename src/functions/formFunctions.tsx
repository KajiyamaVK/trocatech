function formDataToJSON<T>() {
  const form = document.querySelector("form");

  if (!form) {
    throw new Error("No form element found on the page.");
  }

  const formData = new FormData(form);
  const json: Record<string, any> = {};

  formData.forEach((value, key) => {
    json[key] = value;
  });

  return json as T;
}

export function validateForm<T>() {
  let formData;

  formData = formDataToJSON();
  return formData as T;
}
