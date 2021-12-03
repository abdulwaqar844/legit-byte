import React from "react"
import { graphql } from "gatsby"

const post = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    wpPost(slug: { eq: "test-post" }) {
      title
      content
      date
      author {
        node {
          name
        }
      }
    }
  }
`

export default post
