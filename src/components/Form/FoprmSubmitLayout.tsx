import React from 'react'

export const FormSubmitKayout = () => {
  return (
    <>
      <section>
        <h2>FormSubmitKayout</h2>
        <p>paragraph</p>
      </section>
    </>
  )
}

/**
 // Cancel
  cancel: boolean
  ButtonCancelTitle: string

  {cancel && <FormSubmitCancel ButtonCancelTitle={ButtonCancelTitle} />}

   <Stack>
      <Box
        sx={{
          mt: 3,
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(180px, 320px), 180px))',
          justifyContent: 'flex-end',
          gap: 3,
        }}
      >
        {cancel && <FormSubmitCancel ButtonCancelTitle={ButtonCancelTitle} />}
        <Button
          color={color ? color : 'primary'}
          variant="contained"
          type="submit"
          size={size}
          // onClick={onClick}
          {...props}
        >
          {ButtonTitle ? ButtonTitle : '保存'}
        </Button>
      </Box>
    </Stack>

*/
