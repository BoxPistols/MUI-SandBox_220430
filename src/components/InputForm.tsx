import React from 'react'

type Props = {
  formStyle: string
}

export default function InputForm(props: Props) {
  return <div>{props.formStyle}</div>
}

// Example @see: https://zenn.dev/ogakuzuko/articles/react-typescript-for-beginner

// ③ props に直接型注釈を指定するパターン
const SampleComponent3 = (props: Props) => {
  return <div>Hello {props.formStyle}!</div>
}

// ④ React.VFC<P>のジェネリック型<P>として型を指定するパターン
const SampleComponent4: React.VFC<Props> = (props) => {
  return <div>Hello {props.formStyle}!</div>
}

/* ---------- 呼び出す側 ---------- */
export const Parent: React.VFC = () => {
  return (
    <div>
      {/* ③も④も結果は同じ。propsが不足していたり型が違うものを渡すなどするとエラーになる */}
      <SampleComponent3 formStyle="TypeScript3" />
      <SampleComponent4 formStyle="TypeScript4" />
    </div>
  )
}
