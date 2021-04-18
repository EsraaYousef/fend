const formdata = new FormData();
formdata.append("key", "69942adf61e35335158000bc9ba38b1e");
formdata.append("txt", "Nice webpack sessions");
formdata.append("lang", "en");

function handleSubmit(event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");

  // fetch("http://localhost:8081/test")
  //   .then((res) => res.json())
  //   .then(function (res) {
  //     document.getElementById("results").innerHTML = res.message;
  //   });

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error here", error));
}
export { handleSubmit };
