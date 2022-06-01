import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Form from 'components/Form/Form'
import CustomForm from 'components/Form/CustomForm'
// import Demo from 'components/Form/Typography'
// import CustomTypo from 'components/Form/CustomTypo'
// import SandBox from 'components/Form/SandBox'

/**
 * Router: https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation
 */
const Top: React.FC = () => {
  return (
    <>
      <Routes>
        {
          <>
            <Route path="form" element={<Form />} />
            <Route path="custom-form" element={<CustomForm />} />
          </>
        }
      </Routes>
      <section>
        <h2>Top</h2>
        <p>paragraph</p>
        <nav>
          <Link to="form">Typo</Link>
          <Link to="custom-form">custom-form</Link>
        </nav>
      </section>
    </>
  )
}
export default Top
