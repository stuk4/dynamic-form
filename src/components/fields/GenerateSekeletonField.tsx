import { Skeleton } from '@mui/material'
import React from 'react'

export const GenerateSekeletonFields: React.FC<{ rows: number }> = ({ rows }: { rows: number }): JSX.Element => {
  return (
    <>
    {
      [...Array(rows)].map((_, i) => (
        <Skeleton key={i} variant="rectangular" height={35} />
      ))
    }
    </>

  )
}
