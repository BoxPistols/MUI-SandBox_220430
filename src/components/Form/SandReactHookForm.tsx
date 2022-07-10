import React, { useState } from 'react'
import { CustomTextField2 } from 'components/Form/CustomTextField2'

export const SandReactHookForm = () => {
  const [name, setName] = useState('useState Value')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  console.log(name)

  return (
    <>
      <h2>SandReactHookForm</h2>
      <CustomTextField2
        id="テスト"
        labelTitle="ラベルテスト"
        onChangeValue={handleChange}
        value={name}
        helperText="案内をサポートしますよ"
        // placeholder="入力してください"
        TooltipTitleIconComponent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam?"
        // size="small"
      />
    </>
  )
}
