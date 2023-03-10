import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart'
import BarChartIcon from '@mui/icons-material/BarChart'
interface INavigation {
  sidebar: Sidebar[]
}

interface Sidebar {
  name: string
  to: string
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
  subMenu?: SubMenu[]

}

interface SubMenu {
  name: string
  to: string
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
}

export const navigation: INavigation = {
  sidebar: [
    {
      name: 'Formularios',
      to: '/dynamic-form/',
      icon: CandlestickChartIcon

    },
    {
      name: 'Dashboard',
      to: '/dynamic-form/dashboard',
      icon: BarChartIcon

    }
  ]
}
