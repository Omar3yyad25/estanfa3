export async function get({ endpoint = "", id = "" }) {
  try {
    const response = await fetch(`http://estanfa3.com:8443/${endpoint}/${id}`, {
      mode: "cors",
      credentials: "include"
    });
    console.log(response);
    const data = await response.json()
    console.log(endpoint)
    console.log(`response data: ${data}`)
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function post({ endpoint = "", data = {} }) {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify(data);

    const response = await fetch(`http://estanfa3.com:8443/${endpoint}`, {
      method: "POST",
      headers,
      body,
      mode: "no-cors",
      credentials: "include"
    });

    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}
