import { createBottomTabNavigator, BottomTabNavigationProp }
  from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { MaterialIcons, AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Dashboard } from '../pages/Dashboard'
import { ListQuotation } from '../pages/ListQuotation'
import { SearchQuotation } from '../pages/SearchQuotation'

type AppRoutes = {
  dashboard: undefined;
  listExpenses: undefined;
  searchExpenses: undefined;
}

export type AppNavigatorRoutesProps =
  BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarLabelPosition: 'below-icon',
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarStyle: {
        height: 88
      }
    }}>
      <Screen
        name='dashboard'
        component={Dashboard}
        options={{
          tabBarLabel: 'Adicionar Cotação',
          tabBarIcon: (({ size, color }) =>
            <AntDesign
              name='pluscircleo'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name='listExpenses'
        component={ListQuotation}
        options={{
          tabBarLabel: 'Listar Cotações',
          tabBarIcon: (({ size, color }) =>
            <FontAwesome
              name='list-ul'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name='searchExpenses'
        component={SearchQuotation}
        options={{
          tabBarLabel: 'Pesquisa Cotação',
          tabBarIcon: (({ size, color }) =>
            <FontAwesome5
              name='search-dollar'
              size={size}
              color={color}
            />
          )
        }}
      />

    </Navigator>
  )
}