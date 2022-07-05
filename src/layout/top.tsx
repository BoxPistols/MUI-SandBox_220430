import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Form from 'components/Form/Form'
import CustomForm from 'components/Form/CustomForm'
import InputForm from 'components/Form/InputForm'
// import CustomTypo from 'components/Form/CustomTypo'
// import Demo from 'components/Form/Typography'
import SandBox from 'components/SandBox'
import ResponsiveDrawer from 'layout/global-drawer'
/**
 * Router: https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation
 */
const Top: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        {
          <>
            <Route path="form" element={<Form />} />
            <Route path="custom-form" element={<CustomForm />} />
            <Route path="input-form" element={<InputForm />} />
            <Route path="sand-box" element={<SandBox />} />
          </>
        }
      </Routes>
      <section>
        <h2>Top</h2>
        <p>paragraph</p>
        <ResponsiveDrawer />
        <nav>
          <Link to="form">Typo</Link> /
          <Link to="custom-form">custom-form</Link> /
          <Link to="input-form">input-form</Link> /
          <Link to="sand-box">sand-box</Link>
        </nav>
        {/* </ResponsiveDrawer> */}
      </section>
    </>
  )
}
export default Top
