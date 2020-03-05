const fetch = require('isomorphic-unfetch')
const API = require('../api/index')
const URL = 'http://localhost:3000/admin/api'

function HomePage({stars}) {
return <div>Welcome to Next.js!{stars}</div>
}

const query = `
query{
  allUsers{
    id
  }
}
`

HomePage.getInitialProps = async () => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query })
  })
  // console.log(res)
  const body = await res.json()
  console.log(body.data)
  const d = body.data
  const data = JSON.stringify({ d })
  return { stars: data }
}

export default HomePage