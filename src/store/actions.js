const base_url = 'https://www.saoroque.mrxempresas.com.br/'

const actions = {
  request(context, payload) {
     
    fetch(base_url+payload.url, {method: 'POST'})
    .then(resp => resp.json())
    .then(data => {
      // console.log(payload.url)
      // console.log(payload.state)
      // console.log(data)
      context.commit("request", {
        state: payload.state,
        data: data
      });
    })
    // .catch(error => {
    //   console.log(error)
    // })
  }
}

export default actions