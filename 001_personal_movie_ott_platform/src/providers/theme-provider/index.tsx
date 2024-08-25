import { ConfigProvider } from 'antd'
import React from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000',
          borderRadius: 5,
        },
        components: {
          Button: {
            controlHeight: 42,
            controlOutline: 'none',
            colorPrimaryBorder: '#000',
            colorBorder: '#000',
          },
          Input: {
            controlHeight: 42,
            controlOutline: 'none',
          },
          Select: {
            controlHeight: 42,
            controlOutline: 'none',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeProvider
