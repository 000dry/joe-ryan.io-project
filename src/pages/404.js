import * as React from "react"
import Layout from '../components/layout/layout'

const NotFoundPage = () => {
  return (
      <Layout>
        <p>
          Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
          we couldn’t find what you were looking for.
        <br />
      </p>
      </Layout>
    )
}

export default NotFoundPage
