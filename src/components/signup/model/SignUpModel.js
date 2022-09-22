export const submitForm = (user) => {
    return fetch('https://demo-api.now.sh/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }).then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        }).catch((error) => {
            console.log("error", error);
        }); 
};