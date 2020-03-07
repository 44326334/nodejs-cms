import App, {Container} from 'next/app'
import React from 'react'
const fetch = require('isomorphic-unfetch')
const API = require('../api/index')
const URL = 'http://localhost:3000/admin/api'

// function HomePage({stars}) {
// return <div>Welcome to Next.js!{stars}</div>
// }

// HomePage.getInitialProps = async () => {
//   const id = 'id'
//   const res = await API.queryid({id})
//   const data = JSON.stringify(res.body)
//   return { stars: data }
// }

export default class CyzyCmsApp extends App {
  static async getInitialProps({ compoment, router, ctx }) {
    const id = 'id'
    const res = await API.queryid({id})
    const data = JSON.stringify(res.body)
    return {data}
  }

  render () {
    const {data} = this.props
    return (
      <div>
        Welcome to Next.js!{data}
        <img src="/static/share_friends.png" alt="my image" />
      </div>
    )
  }
}