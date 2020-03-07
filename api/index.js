const queryDocs = require('./constructors')
const GRAPHQL_URL = 'http://localhost:3000/admin/api'

const queryCall = async (queryDoc, accessToken) => {
  const payload = JSON.stringify({
    query: queryDoc
  });
  let response; 
  try {
    response = await fetch(
      GRAPHQL_URL,
      {
        method: 'POST',
        headers: {
          // Authorization: `token ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: payload,
      }
    );
  } catch(e) {
    return {
      status: response.status,
      message: e.message,
      ok: false,
      body: {}
    }
  }
  let body
  try {
    body = await response.json();
  } catch(e) {
    return {
      status: response.status,
      message: e.message,
      ok: response.ok,
      body: {}
    }
  }
  if(!response.ok) {
    return {
      status: response.status,
      message: 0,
      ok: response.ok,
      body: {}
    }
  }
  return body.data
  ?{
    status: response.status,
    message: 0,
    ok: response.ok,
    body: body.data
  }
  :{
    status: response.status,
    message: 0,
    ok: false,
    body: {}
  }
}

export const queryid = ({id}, accessToken) => {
  return queryCall(queryDocs.queryAllUsers({id}, accessToken))
}