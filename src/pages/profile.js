import React from 'react'
const Member = ({ data }) => {
  console.log(data)
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Member

export const pageQuery = graphql`
  query MemberQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        members {
          image
          name
          role
        }
      }
    }
  }
`
