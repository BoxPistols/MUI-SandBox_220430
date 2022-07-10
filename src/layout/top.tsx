import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Form from 'components/Form/Form'
// import CustomForm from 'components/Form/CustomForm'
// import InputForm from 'components/Form/InputForm'
// import SandBox from 'components/SandBox'
// import SandBox2 from 'components/SandBox2'
import ResponsiveDrawer from 'layout/global-drawer'
/**
 * Router: https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation
 */
const Top: React.FC = (): JSX.Element => {
  return (
    <>
      {/* <Routes>
        {
          <>
            <Route path="form" element={<Form />} />
            <Route path="custom-form" element={<CustomForm />} />
            <Route path="input-form" element={<InputForm />} />
            <Route path="sand-box" element={<SandBox />} />
            <Route path="sand-box2" element={<SandBox2 />} />
          </>
        }
      </Routes>
      <section>
        <nav>
          <Link to="form">Typo</Link> /<Link to="custom-form">custom-form</Link>{' '}
          /<Link to="input-form">input-form</Link> /
          <Link to="sand-box">sand-box</Link> /
          <Link to="sand-box2">sand-box2</Link>
        </nav>
      </section> */}
      <ResponsiveDrawer />
    </>
  )
}
export default Top
